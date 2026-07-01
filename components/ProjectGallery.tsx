"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { ProjectModal } from "./ProjectModal";
import { type Project } from "@/lib/content";

function ProjectTile({
  project,
  featured,
  onOpen,
}: {
  project: Project;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View details for ${project.title}`}
      className={`group relative block aspect-[4/3] overflow-hidden rounded-xl bg-charcoal text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:aspect-auto ${
        featured
          ? "col-span-2 aspect-[16/10] lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          : ""
      }`}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 25vw" : "(max-width: 1024px) 100vw, 17vw"}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent transition-opacity group-hover:from-charcoal"
      />

      {/* "View" affordance on hover */}
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        View project
        <Icon name="arrowRight" className="h-3.5 w-3.5" />
      </span>

      <span className="absolute inset-x-0 bottom-0 block p-4">
        <span
          className={`block font-heading font-bold text-white ${
            featured ? "text-lg sm:text-xl" : "text-sm"
          }`}
        >
          {project.title}
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-xs text-cream-soft">
          <Icon name="pin" className="h-3.5 w-3.5 text-brass-soft" />
          {project.location}
        </span>
      </span>
    </button>
  );
}

export function ProjectGallery({ items }: { items: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const featured = items.find((p) => p.size === "large");
  const rest = items.filter((p) => p.size === "small");

  function open(project: Project) {
    lastFocused.current = document.activeElement as HTMLElement;
    setOpenIndex(items.indexOf(project));
  }

  function close() {
    setOpenIndex(null);
    // Restore focus to the tile that opened the modal.
    requestAnimationFrame(() => lastFocused.current?.focus());
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:auto-rows-[17rem]">
        {featured && (
          <ProjectTile project={featured} featured onOpen={() => open(featured)} />
        )}
        {rest.map((project) => (
          <ProjectTile key={project.title} project={project} onOpen={() => open(project)} />
        ))}
      </div>

      {openIndex !== null && (
        <ProjectModal project={items[openIndex]} onClose={close} />
      )}
    </>
  );
}
