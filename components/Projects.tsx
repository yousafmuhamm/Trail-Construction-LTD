import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ProjectGallery } from "./ProjectGallery";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header: label, heading + intro, and the "view all" link */}
        <Reveal>
          <SectionLabel>{projects.label}</SectionLabel>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {projects.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {projects.intro}
              </p>
              <p className="mt-3 text-sm font-medium text-ink-soft/80">
                Tap any project to see more photos and the full story.
              </p>
            </div>
            <a
              href={projects.link.href}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              {projects.link.label}
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>

        {/* Full-width card grid + detail modal */}
        <Reveal delay={80} className="mt-12">
          <ProjectGallery items={projects.items} />
        </Reveal>
      </div>
    </section>
  );
}
