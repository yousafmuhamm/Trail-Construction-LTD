"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { business, type ServiceShowcase } from "@/lib/content";

type GalleryModalProps = {
  service: ServiceShowcase;
  initialPhoto: number;
  onClose: () => void;
};

export function GalleryModal({ service, initialPhoto, onClose }: GalleryModalProps) {
  const [active, setActive] = useState(initialPhoto);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = `gallery-modal-${service.slug}`;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % service.photos.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + service.photos.length) % service.photos.length);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, service.photos.length]);

  const content = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-charcoal/90 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-10 flex h-[96svh] w-full max-w-[1480px] flex-col overflow-y-auto rounded-lg bg-paper shadow-2xl outline-none lg:h-[84svh] lg:w-[88vw] lg:flex-row lg:overflow-hidden"
      >
        <div className="relative order-2 flex shrink-0 flex-col bg-forest p-6 text-cream sm:p-9 lg:order-1 lg:w-[42%] lg:overflow-y-auto lg:p-10">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brass-soft">
            <Icon name={service.icon} className="h-5 w-5" />
            Service details
          </p>

          <h2
            id={titleId}
            className="mt-5 font-heading text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-[2.55rem]"
          >
            {service.title}
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-cream">
            {service.tagline}
          </p>

          <div className="mt-6 space-y-4">
            {service.detail.body.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-cream-soft sm:text-[0.95rem]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-soft">
              Scope of work
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {service.detail.scope.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-white/15 px-3 py-2 text-sm font-medium text-cream"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/12 pt-6 lg:mt-auto">
            <a
              href={business.phoneHref}
              className="inline-flex min-h-11 items-center gap-2.5 text-sm font-semibold text-cream-soft transition-colors hover:text-cream"
            >
              <Icon name="phone" className="h-4 w-4 text-brass-soft" />
              {business.phone}
            </a>
            <Link
              href="/#contact"
              onClick={onClose}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request a Quote
              <Icon name="arrowRight" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="relative order-1 flex min-h-[44svh] flex-1 flex-col bg-charcoal lg:order-2">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-paper-dim sm:right-4 sm:top-4"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          <div className="relative min-h-[36svh] flex-1 overflow-hidden lg:min-h-0">
            <Image
              src={service.photos[active].src}
              alt={service.photos[active].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            <button
              type="button"
              onClick={() =>
                setActive((index) => (index - 1 + service.photos.length) % service.photos.length)
              }
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 rotate-180 place-items-center rounded-full bg-charcoal/65 text-white backdrop-blur-sm transition-colors hover:bg-charcoal sm:left-4"
            >
              <Icon name="arrowRight" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setActive((index) => (index + 1) % service.photos.length)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-charcoal/65 text-white backdrop-blur-sm transition-colors hover:bg-charcoal sm:right-4"
            >
              <Icon name="arrowRight" className="h-5 w-5" />
            </button>

            <span className="absolute bottom-3 left-3 rounded-full bg-charcoal/70 px-3 py-1.5 text-xs font-semibold tabular-nums text-white backdrop-blur-sm sm:bottom-4 sm:left-4">
              {active + 1} / {service.photos.length}
            </span>
          </div>

          <div className="flex shrink-0 gap-2 overflow-x-auto p-3 [scrollbar-width:none] sm:p-4 [&::-webkit-scrollbar]:hidden">
            {service.photos.map((photo, index) => (
              <button
                type="button"
                key={photo.src}
                onClick={() => setActive(index)}
                aria-label={`View photo ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-md ring-2 transition sm:h-20 sm:w-28 ${
                  index === active ? "ring-brass" : "ring-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={photo.src} alt="" fill sizes="112px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
