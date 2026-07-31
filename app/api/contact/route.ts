import { business } from "@/lib/content";

/**
 * Contact form -> EmailJS.
 *
 * This runs on the server so the EmailJS *private* key is never shipped to the
 * browser. The email body is built here as plain text, which means the EmailJS
 * dashboard template can stay dumb: its content only needs to be `{{message}}`.
 *
 * Required env (see .env.example):
 *   EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY
 */

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

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

export async function POST(request: Request) {
  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } =
    process.env;

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    console.error("[contact] EmailJS env vars are not fully configured.");
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

  const res = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      accessToken: EMAILJS_PRIVATE_KEY,
      template_params: {
        to_email: TO_EMAIL,
        subject: `New ${lead.projectType} enquiry - ${lead.name}`,
        from_name: lead.name,
        reply_to: lead.email,
        phone: lead.phone,
        project_type: lead.projectType,
        message: buildEmailBody(lead),
      },
    }),
  });

  if (!res.ok) {
    // EmailJS returns the reason as plain text. Log it, but never surface it -
    // the response can echo back configuration details.
    const detail = await res.text().catch(() => "");
    console.error(`[contact] EmailJS responded ${res.status}: ${detail}`);
    return Response.json({ error: "Could not send message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
