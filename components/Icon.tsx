import type { SVGProps } from "react";

/**
 * One consistent line-icon system for the whole site.
 * All icons share a 24×24 viewBox, 2px round stroke and currentColor so they
 * inherit text color and stay visually cohesive (no emoji, no mixed icon sets).
 * Size them with Tailwind width/height utilities on the parent or via className.
 */

export type IconName =
  // services
  | "beam"
  | "wall"
  | "renovation"
  | "framing"
  | "deck"
  | "excavation"
  // process
  | "consult"
  | "plan"
  | "build"
  | "deliver"
  // stats
  | "award"
  | "calendar"
  | "home"
  | "building"
  // contact / ui
  | "phone"
  | "mail"
  | "pin"
  | "arrowRight"
  | "chevronDown"
  | "menu"
  | "close";

const paths: Record<IconName, React.ReactNode> = {
  // ── Services ─────────────────────────────────────────────
  // I-beam carried on two posts
  beam: (
    <>
      <path d="M3 6h18M3 10h18" />
      <path d="M8 6v4M16 6v4" />
      <path d="M7 10v8M17 10v8" />
    </>
  ),
  // Wall with an opening cut through it
  wall: (
    <>
      <path d="M3 4h18v16H3z" />
      <path d="M3 9h6M15 9h6M3 14h4M17 14h4" />
      <path d="M9 20V9h6v11" />
    </>
  ),
  // Support post / jack post under a beam
  renovation: (
    <>
      <path d="M4 5h16" />
      <path d="M12 5v14" />
      <path d="M8 19h8" />
      <path d="M9 9l3-3 3 3M9 15l3 3 3-3" />
    </>
  ),
  // Roof truss / house frame
  framing: (
    <>
      <path d="M12 3 3 10v0M12 3l9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M5 14h14" />
      <path d="M12 10v10" />
    </>
  ),
  // Stairs / deck steps
  deck: (
    <>
      <path d="M3 20h4v-4h4v-4h4V8h4V4" />
      <path d="M3 20v-4h4v-4h4V8h4V4h4" />
    </>
  ),
  // Excavator bucket on an arm
  excavation: (
    <>
      <path d="M3 5l7 4" />
      <path d="M10 9l4 2" />
      <path d="M6 19h13a0 0 0 0 0 0 0l-1-5-8-2-1 3 .5 4" />
      <path d="M3 19h2" />
    </>
  ),

  // ── Process ──────────────────────────────────────────────
  // Clipboard / consultation
  consult: (
    <>
      <path d="M9 4h6v3H9z" />
      <path d="M9 5H6v15h12V5h-3" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  // Blueprint / plan
  plan: (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M4 9h16" />
      <path d="M8 9v10M8 14h5" />
    </>
  ),
  // Hammer / build
  build: (
    <>
      <path d="M14 3l7 7-3 3-7-7z" />
      <path d="M11 6 4 13l3 3 7-7" />
      <path d="M6 15l-3 3 3 3 3-3" />
    </>
  ),
  // Check badge / deliver
  deliver: (
    <>
      <path d="M12 3l2.5 1.8 3-.4 1.1 2.8 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-1.1 2.8-3-.4L12 21l-2.5-1.8-3 .4-1.1-2.8L3 15l.9-2.9L3 9.2l2.4-1.8L6.5 4.6l3 .4z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),

  // ── Stats ────────────────────────────────────────────────
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 8 21l4-2 4 2-1-7.5" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 5h14v15H5z" />
      <path d="M5 9h14" />
      <path d="M9 3v4M15 3v4" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  // Two buildings — residential + light commercial
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V5l6-2v18" />
      <path d="M11 21V10l8 2.5V21" />
      <path d="M8 8h.01M8 11.5h.01M8 15h.01" />
      <path d="M15 14h.01M15 17h.01" />
    </>
  ),

  // ── Contact / UI ─────────────────────────────────────────
  phone: (
    <path d="M5 4h3l1.5 5-2 1.5a13 13 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <path d="M3 6h18v12H3z" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** Decorative by default; pass a title to expose it to assistive tech. */
  title?: string;
};

export function Icon({ name, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
