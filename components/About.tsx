import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { about, business } from "@/lib/content";

export function About() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{about.label}</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
            {about.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Trail Construction has worked without interruption across south central Alberta since {business.foundedYear}. Today, Ken&apos;s work is centred on bearing-wall removals, beam installations and structural carpentry.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            We have worked alongside builders, homeowners and other trades, which has given us a lot of experience and requires a lot of coordination.
          </p>
          <Link
            href="/about"
            className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-line px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand hover:text-brand-hover sm:w-auto"
          >
            More About Us
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
