import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/content";

// Body copy — DM Sans: a clean, geometric-humanist workhorse. Modern and
// legible with a hint of warmth that keeps the tone approachable.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

// Display / headlines — Space Grotesk: a modern geometric grotesque. Its
// architectural, engineered letterforms echo the angular mountain logo and
// give the headings a confident, structural presence.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trailconstructionltd.com"),
  title: {
    default: `${business.name}: Steel Beam Installations & Structural Carpentry in Calgary`,
    template: `%s | ${business.name}`,
  },
  description:
    "Steel beam installations and load-bearing wall removals in Calgary, Olds and south central Alberta since 1988. Plus framing, structural renovations, decks and excavation.",
  keywords: [
    "steel beam installation Calgary",
    "load-bearing wall removal",
    "LVL beam",
    "structural renovation Calgary",
    "support posts footing pads",
    "structural carpentry Olds Alberta",
  ],
  openGraph: {
    title: `${business.name}: Steel Beam Installations & Structural Carpentry`,
    description:
      "Steel beam installations, load-bearing wall removals and structural carpentry. Serving south central Alberta since 1988.",
    type: "website",
    locale: "en_CA",
  },
};

// Mobile browser chrome matches the dark nav/hero at the top of the page.
export const viewport: Viewport = {
  themeColor: "#0f1611",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* No-JS / non-JS-crawler fallback: scroll-reveal elements stay visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
