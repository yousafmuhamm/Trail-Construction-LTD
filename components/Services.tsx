"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { PhotoStack } from "./PhotoStack";
import { GalleryModal } from "./GalleryModal";
import { services, servicesContent, type ServiceShowcase } from "@/lib/content";

function PhotoButton({
  onClick,
  count,
  inverse = false,
}: {
  onClick: () => void;
  count: number;
  inverse?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-colors sm:w-auto ${
        inverse
          ? "bg-white text-forest hover:bg-paper"
          : "bg-brand text-white hover:bg-brand-hover"
      }`}
    >
      See the Work
      <span className={inverse ? "text-forest/60" : "text-white/70"}>({count} photos)</span>
      <Icon name="arrowRight" className="h-4 w-4" />
    </button>
  );
}

function MainServiceCard({
  service,
  onOpen,
}: {
  service: ServiceShowcase;
  onOpen: () => void;
}) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-line bg-white shadow-sm lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className="order-2 flex flex-col justify-center px-6 pb-6 pt-2 sm:px-9 sm:pb-9 sm:pt-4 lg:order-1 lg:p-11">
        <span className="text-brand">
          <Icon name={service.icon} className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-ink sm:text-3xl">
          {service.title}
        </h3>
        <div className="mt-7">
          <PhotoButton onClick={onOpen} count={service.gallery.length} />
        </div>
      </div>
      <div className="order-1 bg-paper-dim lg:order-2">
        <PhotoStack photos={service.photos} title={service.title} size="standard" />
      </div>
    </article>
  );
}

function SecondaryServiceCard({
  service,
  onOpen,
}: {
  service: ServiceShowcase;
  onOpen: () => void;
}) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-line bg-paper sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <PhotoStack photos={service.photos} title={service.title} size="compact" />
      <div className="flex flex-col justify-center p-5 sm:p-6">
        <span className="text-brand">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h4 className="mt-3 font-heading text-xl font-bold leading-tight text-ink">
          {service.title}
        </h4>
        <button
          type="button"
          onClick={onOpen}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover sm:w-fit sm:justify-start"
        >
          See the Work
          <span className="text-ink-soft">({service.gallery.length} photos)</span>
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const flagship = services.find((service) => service.tier === "flagship");
  const main = services.filter((service) => service.tier === "main");
  const secondary = services.filter((service) => service.tier === "secondary");

  function open(serviceIndex: number) {
    lastFocused.current = document.activeElement as HTMLElement;
    setOpenIndex(serviceIndex);
  }

  function close() {
    setOpenIndex(null);
    requestAnimationFrame(() => lastFocused.current?.focus());
  }

  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-7">
          <Reveal>
            <SectionLabel>{servicesContent.label}</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {servicesContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={servicesContent.link.href}
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              {servicesContent.link.label}
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        {flagship && (
          <Reveal className="mt-8 sm:mt-12">
            <article className="grid overflow-hidden rounded-lg bg-forest shadow-lg lg:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.75fr)]">
              <PhotoStack
                photos={flagship.photos}
                title={flagship.title}
                size="flagship"
              />
              {/* Stacked below lg, so the photo's own padding already sits above
                  this column — trim the top until the side-by-side layout kicks in. */}
              <div className="flex flex-col justify-center px-7 pb-7 pt-2 text-cream sm:px-10 sm:pb-10 sm:pt-4 lg:p-12">
                <span className="text-brass-soft">
                  <Icon name={flagship.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-heading text-3xl font-bold leading-[1.08] text-white sm:text-4xl">
                  {flagship.title}
                </h3>
                <div className="mt-7">
                  <PhotoButton
                    onClick={() => open(services.indexOf(flagship))}
                    count={flagship.gallery.length}
                    inverse
                  />
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6">
          {main.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90}>
              <MainServiceCard
                service={service}
                onOpen={() => open(services.indexOf(service))}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 border-t border-line pt-8 sm:mt-14 sm:pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-heading text-2xl font-bold text-ink">We Also Do</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                We have the equipment and experience to handle these when they fit the job.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {secondary.map((service) => (
              <SecondaryServiceCard
                key={service.slug}
                service={service}
                onOpen={() => open(services.indexOf(service))}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {openIndex !== null && (
        <GalleryModal service={services[openIndex]} onClose={close} />
      )}
    </section>
  );
}
