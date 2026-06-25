import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-forest py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel tone="dark">{process.label}</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {process.heading}
            </h2>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 90} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-brand-soft">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <span className="font-heading text-3xl font-bold leading-none text-white/30">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-soft">{step.description}</p>

              {/* Connector arrow between steps (desktop only) */}
              {i < process.steps.length - 1 && (
                <Icon
                  name="arrowRight"
                  aria-hidden="true"
                  className="absolute -right-5 top-3 hidden h-6 w-6 text-brand-soft/50 lg:block"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
