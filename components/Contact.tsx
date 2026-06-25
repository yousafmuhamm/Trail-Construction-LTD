import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ContactForm } from "./ContactForm";
import { contact, business } from "@/lib/content";

const rows: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Phone", value: business.phone, href: business.phoneHref },
  { icon: "mail", label: "Email", value: business.email, href: business.emailHref },
  { icon: "pin", label: "Service Area", value: business.serviceArea },
];

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <Reveal>
            <SectionLabel>{contact.label}</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {contact.heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              {contact.intro}
            </p>

            <ul className="mt-10 space-y-5">
              {rows.map((row) => (
                <li key={row.label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon name={row.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink-soft">{row.label}</p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="font-heading text-lg font-semibold text-ink transition-colors hover:text-brand"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="font-heading text-lg font-semibold text-ink">{row.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
