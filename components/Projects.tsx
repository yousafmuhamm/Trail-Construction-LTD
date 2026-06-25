import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ProjectGallery } from "./ProjectGallery";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">

          {/* Left: text */}
          <Reveal>
            <SectionLabel>{projects.label}</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {projects.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {projects.intro}
            </p>
            <p className="mt-3 text-sm font-medium text-ink-soft/80">
              Tap any project to see more photos and the full story.
            </p>
            <a
              href={projects.link.href}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              {projects.link.label}
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          {/* Right: clickable photo mosaic + detail modal */}
          <Reveal delay={80}>
            <ProjectGallery items={projects.items} />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
