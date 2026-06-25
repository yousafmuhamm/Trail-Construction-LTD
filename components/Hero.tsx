import Image from "next/image";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background photo — PLACEHOLDER, see public/images/README.md */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Lightened overlays: just enough scrim on the left for headline legibility
          and along the bottom for the stats — the photo stays bright on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/15"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-20 sm:px-8 sm:pt-28 sm:pb-24">
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="font-heading text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.01em] text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream-soft sm:text-lg">
              {hero.subhead}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-brand-hover"
              >
                {hero.primaryCta.label}
                <Icon name="arrowRight" className="h-5 w-5" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/60 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Trust stats — icon + two lines, separated by hairline dividers */}
        <Reveal delay={300}>
          <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-y-0">
            {hero.stats.map((stat, i) => (
              <div
                key={stat.top}
                className={`flex items-center gap-3.5 sm:px-7 ${
                  i > 0 ? "sm:border-l sm:border-white/15" : "sm:pl-0"
                }`}
              >
                <span className="shrink-0 text-brass-soft">
                  <Icon name={stat.icon as IconName} className="h-8 w-8" strokeWidth={1.75} />
                </span>
                <div className="leading-tight">
                  {"emphasize" in stat && stat.emphasize ? (
                    <>
                      <dd className="font-heading text-2xl font-bold text-white">
                        {stat.top}
                      </dd>
                      <dd className="text-sm text-cream-soft">{stat.bottom}</dd>
                    </>
                  ) : (
                    <>
                      <dd className="text-base font-semibold text-white">{stat.top}</dd>
                      <dd className="text-base font-semibold text-white">{stat.bottom}</dd>
                    </>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
