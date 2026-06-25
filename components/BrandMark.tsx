import type { SVGProps } from "react";

/**
 * Trail Construction Ltd. brand mark — an outlined twin-peak / "trail" glyph.
 * Monoline, uses currentColor so it inherits text color (white on dark nav,
 * cream in footer). Pair with the TRAIL / CONSTRUCTION LTD. wordmark.
 */
export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      {/* Outer peak */}
      <path d="M24 4 L45 37 H3 Z" />
      {/* Inner nested peak — gives the layered "range" look */}
      <path d="M24 18 L35 37 H13 Z" />
    </svg>
  );
}
