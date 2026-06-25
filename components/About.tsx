import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { about, business } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image — PLACEHOLDER, see public/images/README.md */}
          <Reveal className="order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal">
              <Image
                src="/images/crew-site.jpg"
                alt="Construction crew on a job site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionLabel>{about.label}</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
              {about.heading}
            </h2>
            {about.body.map((para) => (
              <p key={para} className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
            <p className="mt-6 text-sm font-medium text-ink">
              Owner-operated by {business.owner} · Incorporated in Alberta since{" "}
              {business.incorporatedYear}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
