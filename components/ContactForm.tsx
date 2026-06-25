"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";
import { contact } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Lead form. If NEXT_PUBLIC_FORMSPREE_ENDPOINT is set it POSTs there
 * (https://formspree.io — create a form, paste the endpoint into .env.local).
 * If it's unset, the form falls back to a local "thanks" state so the demo works
 * end-to-end — wire up the endpoint before launch so leads actually send.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const fieldClass =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-soft/70 transition-colors focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No endpoint configured — simulate a send so the demo flows.
        await new Promise((r) => setTimeout(r, 700));
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-xl border border-line bg-white p-8 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
          <Icon name="deliver" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-bold text-ink">Thanks, message sent.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          We&apos;ve got your details and will get back to you shortly. Need an answer sooner?
          Call us at{" "}
          <a href="tel:+14036606198" className="font-semibold text-brand hover:underline">
            403-660-6198
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand hover:text-brand-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
              Name <span className="text-brand">*</span>
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
              Phone
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={fieldClass} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            inputMode="email"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-ink">
            Project Type <span className="text-brand">*</span>
          </label>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className={`${fieldClass} appearance-none pr-11`}
            >
              <option value="" disabled>
                Select a project type
              </option>
              {contact.projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <Icon
              name="chevronDown"
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            Message <span className="text-brand">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your project, what you're planning and roughly when."
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Request a Quote"}
          {status !== "submitting" && <Icon name="arrowRight" className="h-5 w-5" />}
        </button>

        <p aria-live="polite" className="min-h-[1.25rem] text-sm">
          {status === "error" && (
            <span role="alert" className="text-red-600">
              Something went wrong. Please try again, or call us at{" "}
              <a href="tel:+14036606198" className="font-semibold underline">
                403-660-6198
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
