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

`components/ContactForm.tsx` POSTs to `app/api/contact/route.ts`, which sends the
lead through [EmailJS](https://www.emailjs.com). The route runs server-side, so
the EmailJS private key is never shipped to the browser.

Copy `.env.example` to `.env.local` and fill in:

```bash
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
EMAILJS_PRIVATE_KEY=xxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=57grass@gmail.com   # optional, defaults to business.email
```

The email body is composed as plain text in the route handler, so the EmailJS
dashboard template only needs `{{message}}` as its content (with `{{subject}}`
as the subject and `{{reply_to}}` as the reply-to). Set the template's **To
Email** to `{{to_email}}`.

Deploying: add the same four variables in the Vercel project's environment
settings — `.env.local` is gitignored and does not ship.

## Before launch — client to supply

- Real job-site / project photography (replace everything in `public/images/`).
- Final copy approval (all copy lives in `lib/content.ts`).
- Logo file (a placeholder wordmark + beam mark is used in nav/footer).
- EmailJS service + template IDs for the contact form.
- Domain / DNS pointed at Vercel.
