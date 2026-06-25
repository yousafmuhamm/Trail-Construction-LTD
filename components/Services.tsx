import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <SectionLabel>{services.label}</SectionLabel>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {services.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              {services.intro}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={services.link.href}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              {services.link.label}
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        {/* Service grid */}
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 80}>
              <div className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-white">
                <span className="block text-brand">
                  <Icon name={service.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
