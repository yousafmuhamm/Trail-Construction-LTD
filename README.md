# Trail Construction Ltd. — Website

Marketing site for Trail Construction Ltd., a structural carpentry contractor in
Calgary / Olds / Central Alberta (in business since 1988, owner Ken Lepp).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, deployable to
Vercel. Single home page for v1.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

| Path                       | What it is                                                        |
|----------------------------|-------------------------------------------------------------------|
| `lib/content.ts`           | **Single source of truth** for all copy + image refs (typed).     |
| `app/layout.tsx`           | Fonts (Inter + Manrope), metadata, no-JS reveal fallback.         |
| `app/page.tsx`             | Composes the sections + LocalBusiness JSON-LD.                    |
| `app/globals.css`          | Design tokens (`@theme`), base styles, scroll-reveal animation.   |
| `components/`              | `Nav`, `Hero`, `Services`, `Projects`, `About`, `Process`, `Contact`, `Footer`, plus `Icon`, `Reveal`, `SectionLabel`, `ContactForm`. |
| `public/images/`           | **Placeholder** photography — see `public/images/README.md`.      |

To update copy or swap a photo, edit `lib/content.ts` (or drop a same-named file
into `public/images/`). No component changes needed.

## Design system

- **Colors:** charcoal `#0f1611` + deep forest `#16291e` (dark anchors), off-white
  `#f4f4f2` (light sections), single accent green `#166534` for buttons/icons/labels.
- **Type:** Manrope (display headings) + Inter (body), via `next/font`.
- **Motion:** restrained scroll fade/slide-up (`components/Reveal.tsx`), disabled
  under `prefers-reduced-motion`, and visible without JS.

## Contact form

`components/ContactForm.tsx` POSTs to `app/api/contact/route.ts`, which mails the
lead out over SMTP with [Nodemailer](https://nodemailer.com). The route runs
server-side, so the mailbox password is never shipped to the browser.

Copy `.env.example` to `.env.local` and fill in:

```bash
SMTP_USER=leads@example.com          # the mailbox that sends
SMTP_PASS=xxxxxxxxxxxxxxxx           # Gmail App Password, not the account password
CONTACT_TO_EMAIL=57grass@gmail.com   # optional, defaults to business.email
```

`SMTP_HOST` / `SMTP_PORT` are optional and default to Gmail (`smtp.gmail.com`,
port 465). Port 587 works too — the route switches to STARTTLS on its own.

**Gmail App Password:** the sending account needs 2-Step Verification on, then
Google Account → Security → App passwords → generate one for "Mail". Paste the
16 characters as `SMTP_PASS`; spaces in it are fine.

The email is composed as plain text in the route handler — nothing to configure
in any dashboard. It sends *from* `SMTP_USER` with the lead's address as
Reply-To, so replying from the inbox goes straight back to them.

Deploying: add the same variables in the Vercel project's environment settings —
`.env.local` is gitignored and does not ship.

## Before launch — client to supply

- Real job-site / project photography (replace everything in `public/images/`).
- Final copy approval (all copy lives in `lib/content.ts`).
- Logo file (a placeholder wordmark + beam mark is used in nav/footer).
- Sending-mailbox credentials for the contact form (`SMTP_USER` / `SMTP_PASS`).
- Domain / DNS pointed at Vercel.
