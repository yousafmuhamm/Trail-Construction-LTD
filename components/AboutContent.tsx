import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { about, business } from "@/lib/content";

export function AboutContent() {
  return (
    <section id="top" className="bg-charcoal pb-20 pt-32 text-cream sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel tone="dark">{about.label}</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            Structural Experience Built Over Decades.
          </h1>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.75fr)] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="max-w-3xl space-y-5">
              {about.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-cream-soft sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold text-cream">
              Owner-operated by {business.owner} · Incorporated in Alberta since {business.incorporatedYear}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover sm:w-auto"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {business.phone}
              </a>
              <Link
                href="/#services"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                See our services
                <Icon name="arrowRight" className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-forest lg:aspect-[4/5]">
              <Image
                src="/images/crew-site.jpg"
                alt="Ken and the Trail Construction crew on a job site"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
