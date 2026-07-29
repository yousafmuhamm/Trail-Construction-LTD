import Image from "next/image";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-charcoal sm:flex sm:min-h-[100svh] sm:items-center"
    >
      {/* Background photo — PLACEHOLDER, see public/images/README.md */}
      {/* The photo is 16:9. Inside a screen-tall mobile box object-cover would
          throw away ~80% of its width, so on mobile it gets its own wide band at
          the top and the copy sits below it. From sm up this reverts to the
          original full-bleed background behind the text. */}
      <div className="relative aspect-[16/10] w-full sm:absolute sm:inset-0 sm:aspect-auto">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Desktop scrims (unchanged): side gradient for headline legibility,
            bottom gradient for the stats — photo stays bright on the right. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent sm:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/15 sm:block"
        />
        {/* Mobile only: keep the nav legible over the photo and melt the bottom
            edge into the section background. The middle stays fully clear. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/85 to-transparent sm:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal to-transparent sm:hidden"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-10 pb-20 sm:px-8 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">
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
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream-soft sm:text-lg">
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
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-navy-hover"
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
