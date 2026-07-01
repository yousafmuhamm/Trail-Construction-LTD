"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Icon } from "./Icon";
import { projects, business, type Project } from "@/lib/content";

/**
 * Full-screen project detail dialog. A split panel: dark info side (title,
 * story, scope, contact + CTA) and a light gallery side (large photo, thumbnail
 * strip, prev/next). Closes on backdrop click / Esc / close button; arrow keys
 * move through the gallery. Focus moves into the dialog and is restored on close.
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const gallery = project.gallery.length ? project.gallery : [project.image];

  // Lock body scroll while open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Move focus into the dialog on open.
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  // Keyboard: Esc closes, arrows navigate the gallery.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + gallery.length) % gallery.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery.length, onClose]);

  const titleId = "project-modal-title";

  // Render through a portal to document.body so the fixed overlay escapes any
  // ancestor that establishes a containing block (e.g. the Reveal wrapper's
  // will-change/transform), and truly covers the viewport.
  const content = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Scrim */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-charcoal/85 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-10 flex h-[90svh] w-[92vw] max-w-[1480px] flex-col overflow-y-auto rounded-2xl shadow-2xl outline-none lg:h-[81svh] lg:w-[82vw] lg:flex-row lg:overflow-hidden"
      >
        {/* ── Info side (dark) — below the gallery on mobile, left on desktop ── */}
        <div className="relative order-2 flex shrink-0 flex-col bg-forest p-7 text-cream sm:p-10 lg:order-1 lg:w-[42%] lg:overflow-y-auto">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brass-soft">
            <span aria-hidden className="h-px w-8 bg-brass-soft/60" />
            {project.category}
          </p>

          <h2
            id={titleId}
            className="mt-6 font-heading text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-[2.6rem]"
          >
            {project.title}
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cream">
              <Icon name="pin" className="h-3.5 w-3.5 text-brass-soft" />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cream">
              <Icon name="calendar" className="h-3.5 w-3.5 text-brass-soft" />
              {project.year}
            </span>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-cream-soft sm:text-[0.95rem]">
            {project.description}
          </p>

          <div className="mt-7">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brass-soft">
              Scope of work
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.scope.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-white/15 px-3 py-1.5 text-sm font-medium text-cream"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA pinned to the bottom on desktop */}
          <div className="mt-8 border-t border-white/12 pt-6 lg:mt-auto">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2.5 text-sm text-cream-soft transition-colors hover:text-cream"
            >
              <Icon name="phone" className="h-4 w-4 text-brass-soft" />
              {business.phone}
            </a>
            <a
              href={projects.detailCta.href}
              onClick={onClose}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {projects.detailCta.label}
              <Icon name="arrowRight" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* ── Gallery side (light) — on top on mobile, right on desktop ── */}
        <div className="relative order-1 flex min-h-[50svh] flex-1 flex-col bg-paper lg:order-2">
          {/* Close — sits at the top-right of the images on every screen size. */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-paper-dim"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          {/* Active photo */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              key={gallery[active].src}
              src={gallery[active].src}
              alt={gallery[active].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setActive((i) => (i - 1 + gallery.length) % gallery.length)}
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 rotate-180 place-items-center rounded-full bg-charcoal/55 text-white backdrop-blur transition-colors hover:bg-charcoal"
                >
                  <Icon name="arrowRight" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActive((i) => (i + 1) % gallery.length)}
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-charcoal/55 text-white backdrop-blur transition-colors hover:bg-charcoal"
                >
                  <Icon name="arrowRight" className="h-5 w-5" />
                </button>

                {/* Photo counter */}
                <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/65 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {active + 1} / {gallery.length}
                </span>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex gap-2.5 p-3 sm:p-4">
              {gallery.map((shot, i) => (
                <button
                  type="button"
                  key={shot.src}
                  onClick={() => setActive(i)}
                  aria-label={`View photo ${i + 1}`}
                  aria-current={i === active}
                  className={`relative h-16 flex-1 overflow-hidden rounded-md ring-2 transition sm:h-20 ${
                    i === active ? "ring-brass" : "ring-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={shot.src} alt="" fill sizes="160px" className="object-cover" />
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
