"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { business, type ServiceShowcase } from "@/lib/content";

type GalleryModalProps = {
  service: ServiceShowcase;
  initialPhoto?: number;
  onClose: () => void;
};

/** Minimum horizontal travel (px) before a touch counts as a swipe. */
const SWIPE_THRESHOLD = 45;

export function GalleryModal({ service, initialPhoto = 0, onClose }: GalleryModalProps) {
  const photos = service.gallery;
  const total = photos.length;

  const [active, setActive] = useState(initialPhoto);
  const dialogRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const titleId = `gallery-modal-${service.slug}`;

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

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
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, next, prev]);

  // Keep the active thumbnail in view as you page through a long gallery.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.querySelector<HTMLElement>(`[data-thumb="${active}"]`);
    if (!strip || !thumb) return;
    const offset = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  function onTouchStart(event: React.TouchEvent) {
    const t = event.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(event: React.TouchEvent) {
    const start = touchStart.current;
    if (!start) return;
    touchStart.current = null;
    const t = event.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Ignore mostly-vertical drags so page scrolling still works.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  }

  // Render only a 3-photo window (prev/active/next) so a 30+ photo gallery never
  // mounts every full-size image, while navigation still feels instant.
  const window3 = [(active - 1 + total) % total, active, (active + 1) % total];

  const content = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4"
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
        className="relative z-10 flex h-[100svh] w-full max-w-[1480px] flex-col overflow-y-auto bg-paper shadow-2xl outline-none sm:h-[94svh] sm:rounded-lg lg:h-[88svh] lg:w-[92vw] lg:flex-row lg:overflow-hidden"
      >
        {/* Service details */}
        <div className="relative order-2 flex shrink-0 flex-col bg-forest p-6 text-cream sm:p-9 lg:order-1 lg:w-[38%] lg:max-w-[30rem] lg:overflow-y-auto lg:p-10">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brass-soft">
            <Icon name={service.icon} className="h-5 w-5" />
            Service details
          </p>

          <h2
            id={titleId}
            className="mt-5 font-heading text-2xl font-semibold leading-[1.1] text-white sm:text-3xl lg:text-[2.25rem]"
          >
            {service.title}
          </h2>

          <div className="mt-6 space-y-4">
            {service.detail.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-cream-soft sm:text-[0.95rem]"
              >
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
              Request a Consultation
              <Icon name="arrowRight" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Photo stage */}
        {/* min-w-0 is load-bearing: without it the thumbnail strip's intrinsic
            width (one cell per photo) blows this flex item out to thousands of px. */}
        <div className="relative order-1 flex min-h-[56svh] w-full min-w-0 flex-1 flex-col bg-charcoal lg:order-2 lg:min-h-0">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-paper-dim sm:right-4 sm:top-4"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          <div
            className="relative min-h-[46svh] flex-1 overflow-hidden lg:min-h-0"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {window3.map((i) => (
              <Image
                key={photos[i].src}
                src={photos[i].src}
                alt={i === active ? photos[i].alt : ""}
                aria-hidden={i !== active ? true : undefined}
                fill
                priority={i === active}
                sizes="(max-width: 1024px) 100vw, 62vw"
                className={`object-contain transition-opacity duration-200 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 rotate-180 place-items-center rounded-full bg-charcoal/65 text-white backdrop-blur-sm transition-colors hover:bg-charcoal sm:left-4"
                >
                  <Icon name="arrowRight" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-charcoal/65 text-white backdrop-blur-sm transition-colors hover:bg-charcoal sm:right-4"
                >
                  <Icon name="arrowRight" className="h-5 w-5" />
                </button>
              </>
            )}

            <span className="absolute bottom-3 left-3 z-10 rounded-full bg-charcoal/70 px-3 py-1.5 text-xs font-semibold tabular-nums text-white backdrop-blur-sm sm:bottom-4 sm:left-4">
              {active + 1} / {total}
            </span>
          </div>

          {total > 1 && (
            <div
              ref={stripRef}
              className="flex w-full min-w-0 shrink-0 gap-2 overflow-x-auto overscroll-x-contain p-3 [scrollbar-width:none] sm:p-4 [&::-webkit-scrollbar]:hidden"
            >
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={photo.src}
                  data-thumb={index}
                  onClick={() => setActive(index)}
                  aria-label={`View photo ${index + 1} of ${total}`}
                  aria-current={index === active ? "true" : undefined}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md ring-2 transition sm:h-16 sm:w-24 ${
                    index === active
                      ? "ring-brass"
                      : "ring-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
