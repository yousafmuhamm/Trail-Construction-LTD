"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import type { ServiceShowcase } from "@/lib/content";

type Size = "flagship" | "standard" | "compact";
type Phase = "idle" | "launch" | "rise";

const RISE_MS = 560;

const FRAME: Record<Size, { wrap: string; inner: string }> = {
  flagship: {
    wrap: "min-h-[17rem] px-5 py-5 sm:min-h-[21rem] sm:px-6 sm:py-7",
    inner: "max-w-[30rem] aspect-[16/11]",
  },
  standard: {
    wrap: "min-h-[15rem] px-4 py-6",
    inner: "max-w-[25rem] aspect-[16/10]",
  },
  compact: {
    wrap: "min-h-[12rem] px-3 py-5",
    inner: "max-w-[17rem] aspect-[4/3]",
  },
};

// Resting deck stays tidy — a thin, clean edge. The launch position (deep in the
// deck) is only used for the moment of the deal, so the rest state never sticks out.
const REST = "translate3d(0, 2.5%, 0) scale(0.96) rotate(1deg)";
const LAUNCH = "translate3d(5%, 32%, 0) scale(0.76) rotate(4deg)";
const RISEN = "translate3d(0, 0, 0) scale(1) rotate(0deg)";

const CARD = "absolute inset-0 overflow-hidden rounded-lg bg-charcoal ring-1 ring-black/10";

function Photo({ photo }: { photo: { src: string; alt: string } }) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes="(max-width: 768px) 100vw, 40vw"
      className="object-cover"
    />
  );
}

/**
 * A tidy little deck of job photos. At rest it's a clean stack with a thin edge.
 * Tapping pulls the next photo down into the deck and deals it up onto the top
 * with a slight overshoot. Browsing only — the "See the Work" button opens the modal.
 */
export function PhotoStack({
  photos,
  title,
  size = "standard",
}: {
  photos: ServiceShowcase["photos"];
  title: string;
  size?: Size;
}) {
  const total = photos.length;
  const single = total < 2;

  const [top, setTop] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [hintSeen, setHintSeen] = useState(false);
  const busy = useRef(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const next = (top + 1) % total;
  const behind = (top + 2) % total;

  function advance() {
    if (busy.current || single) return;
    busy.current = true;
    setHintSeen(true);
    // Drop into the deck, then (after paint) deal up.
    setPhase("launch");
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setPhase("rise")),
    );
    timer.current = window.setTimeout(() => {
      setTop(next);
      setPhase("idle");
      busy.current = false;
    }, RISE_MS + 80);
  }

  const moving = phase !== "idle";
  const incomingTransform =
    phase === "rise" ? RISEN : phase === "launch" ? LAUNCH : REST;

  const frame = FRAME[size];

  return (
    <div
      className={`relative flex h-full items-center justify-center overflow-hidden ${frame.wrap}`}
    >
      <button
        type="button"
        onClick={advance}
        disabled={single}
        aria-label={
          single
            ? `${title} photo`
            : `${title} — photo ${top + 1} of ${total}. Activate to bring up the next photo.`
        }
        className={`relative block w-full ${frame.inner} ${
          single ? "cursor-default" : "cursor-pointer"
        }`}
      >
        {/* Deck thickness — a couple of cards behind, offset just enough to read. */}
        {total > 3 && (
          <span
            aria-hidden
            className={`${CARD} z-0 translate-x-[3%] translate-y-[5.5%] rotate-[3deg] scale-[0.92] shadow-sm`}
          >
            <Photo photo={photos[(top + 3) % total]} />
            <span className="absolute inset-0 bg-charcoal/45" />
          </span>
        )}
        {total > 2 && (
          <span
            aria-hidden
            className={`${CARD} z-[1] translate-x-[1.5%] translate-y-[3%] rotate-[1.5deg] scale-[0.96] shadow-md`}
          >
            <Photo photo={photos[behind]} />
            <span className="absolute inset-0 bg-charcoal/25" />
          </span>
        )}

        {/* Current top photo — the one that gets covered. */}
        <span className={`${CARD} z-20 shadow-xl`}>
          <Photo photo={photos[top]} />
        </span>

        {/* Incoming photo — tidy behind the deck at rest; dealt up on tap. */}
        {!single && (
          <span
            key={top}
            className={`${CARD} shadow-2xl ${moving ? "z-30" : "z-10"}`}
            style={{
              transform: incomingTransform,
              transition:
                phase === "rise"
                  ? `transform ${RISE_MS}ms cubic-bezier(0.16, 1.7, 0.3, 1)`
                  : "none",
            }}
          >
            <Photo photo={photos[next]} />
          </span>
        )}

        {/* Counter */}
        {!single && (
          <span className="pointer-events-none absolute right-2.5 top-2.5 z-40 rounded-full bg-charcoal/75 px-2.5 py-1 text-[0.7rem] font-semibold tabular-nums text-white backdrop-blur-sm">
            {top + 1} / {total}
          </span>
        )}

        {/* Tap hint — fades out after the first tap. */}
        {!single && (
          <span
            className={`pointer-events-none absolute inset-x-0 bottom-2.5 z-40 flex justify-center transition-opacity duration-300 ${
              hintSeen ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-md">
              <Icon name="chevronDown" className="h-3.5 w-3.5 rotate-180" />
              Tap to flip through photos
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
