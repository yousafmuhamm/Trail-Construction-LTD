"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { ProjectModal } from "./ProjectModal";
import { type Project } from "@/lib/content";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View details for ${project.title}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      {/* Photo with category + year chips */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Category label — top-left */}
        <span className="absolute left-3 top-3 rounded-md bg-charcoal/85 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur">
          {project.category}
        </span>

        {/* Year chip — bottom-right */}
        <span className="absolute bottom-3 right-3 rounded-md bg-brass px-3 py-1.5 text-xs font-bold text-charcoal">
          {project.year}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-xl font-bold leading-snug text-ink">
          {project.title}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft">
          <Icon name="pin" className="h-4 w-4 shrink-0 text-brass" />
          {project.location}
          <span aria-hidden className="text-line">·</span>
          {project.scope[0]}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View project
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </button>
  );
}

export function ProjectGallery({ items }: { items: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const lastFocused = useRef<HTMLElement | null>(null);

  // Show the flagged flagship projects first; the rest reveal on "view more".
  // If nothing is flagged, fall back to showing everything.
  const primary = items.filter((p) => p.featured);
  const extra = primary.length ? items.filter((p) => !p.featured) : [];
  const shown = primary.length ? primary : items;
  const visible = expanded ? [...shown, ...extra] : shown;

  function open(project: Project) {
    lastFocused.current = document.activeElement as HTMLElement;
    setOpenIndex(items.indexOf(project));
  }

  function close() {
    setOpenIndex(null);
    // Restore focus to the card that opened the modal.
    requestAnimationFrame(() => lastFocused.current?.focus());
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={() => open(project)}
          />
        ))}
      </div>

      {extra.length > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {expanded ? "Show fewer projects" : `View ${extra.length} more projects`}
            <Icon
              name="chevronDown"
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}

      {openIndex !== null && (
        <ProjectModal project={items[openIndex]} onClose={close} />
      )}
    </>
  );
}
