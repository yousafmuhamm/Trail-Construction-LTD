import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { testimonials } from "@/lib/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          stroke="none"
          fill={i < rating ? "currentColor" : "none"}
          className={`h-4 w-4 ${i < rating ? "text-brass" : "text-line"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{testimonials.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {testimonials.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            {testimonials.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
                <Stars rating={t.rating} />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-heading text-base font-bold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
