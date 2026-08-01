import nodemailer from "nodemailer";
import { business } from "@/lib/content";

/**
 * Contact form -> SMTP (Nodemailer).
 *
 * Runs server-side so the mailbox password never reaches the browser. The email
 * body is composed here as plain text, so there is no dashboard template to keep
 * in sync anywhere — what you see in buildEmailBody() is what lands in the inbox.
 *
 * Required env (see .env.example):
 *   SMTP_USER, SMTP_PASS
 * Optional:
 *   SMTP_HOST, SMTP_PORT (default to Gmail), CONTACT_TO_EMAIL
 */

// Nodemailer opens a real TCP socket, so this route cannot run on the edge.
export const runtime = "nodejs";
// An SMTP handshake on a cold start is slower than an HTTP call; give it room.
export const maxDuration = 20;

/** Where leads land. Defaults to the address shown on the site. */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || business.email;

type LeadField = "name" | "phone" | "email" | "projectType" | "message";

/** Trim, collapse runs of whitespace, and cap length so one field can't bloat the email. */
function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  const collapsed = value.replace(/\s+/g, " ").trim();
  return collapsed.slice(0, maxLength);
}

/** Same as clean() but keeps line breaks — the message body is meant to be multi-line. */
function cleanMultiline(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength);
}

function buildEmailBody(lead: Record<LeadField, string>): string {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone || "—"],
    ["Email", lead.email],
    ["Project", lead.projectType],
  ];
  const width = Math.max(...rows.map(([label]) => label.length)) + 1;
  const details = rows
    .map(([label, value]) => `${(label + ":").padEnd(width + 1)} ${value}`)
    .join("\n");

  return [
    `New consultation request from the ${business.name} website.`,
    "",
    details,
    "",
    "Message",
    "-------",
    lead.message,
    "",
    "-------",
    `Reply straight to this email to reach ${lead.name}.`,
  ].join("\n");
}

/**
 * Built once per warm serverless instance and reused, so repeat submissions
 * skip the TLS + auth handshake. `pool` keeps the connection alive between them.
 */
let transporter: nodemailer.Transporter | null = null;

function getTransporter(user: string, pass: string): nodemailer.Transporter {
  if (transporter) return transporter;

  // Defaults target Gmail — implicit TLS on 465 — so a Gmail sender only needs
  // SMTP_USER and SMTP_PASS. Any other provider can override host/port.
  const port = Number(process.env.SMTP_PORT) || 465;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465, // 587 upgrades via STARTTLS instead
    auth: { user, pass },
    pool: true,
    maxConnections: 1,
  });
  return transporter;
}

export async function POST(request: Request) {
  // Direct property access rather than destructuring process.env: it is the form
  // Next.js can statically analyse, so it works under every runtime.
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("[contact] Missing SMTP env vars: SMTP_USER and/or SMTP_PASS");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const lead: Record<LeadField, string> = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 40),
    email: clean(body.email, 150),
    projectType: clean(body.projectType, 100),
    message: cleanMultiline(body.message, 5000),
  };

  const missing = (["name", "email", "projectType", "message"] as const).filter((f) => !lead[f]);
  if (missing.length > 0) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await getTransporter(SMTP_USER, SMTP_PASS).sendMail({
      // Gmail rewrites From to the authenticated mailbox anyway, so send as
      // ourselves and put the lead on Reply-To — hitting reply answers them.
      from: `"${business.name} Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: `"${lead.name}" <${lead.email}>`,
      subject: `New ${lead.projectType} enquiry - ${lead.name}`,
      text: buildEmailBody(lead),
    });
  } catch (error) {
    // Log the real reason, but never surface it - SMTP errors echo back the
    // host and account being used.
    console.error("[contact] SMTP send failed:", error);
    return Response.json({ error: "Could not send message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
