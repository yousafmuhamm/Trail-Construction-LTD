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
    default: `${business.name}: Structural Carpentry in Calgary & Central Alberta`,
    template: `%s | ${business.name}`,
  },
  description:
    "Structural carpentry contractor serving Calgary, Olds and Central Alberta since 1988. Beam installations, load-bearing wall removal, custom framing, additions, decks and excavation.",
  keywords: [
    "structural carpentry Calgary",
    "load-bearing wall removal",
    "beam installation",
    "LVL beam",
    "custom framing",
    "additions Olds Alberta",
  ],
  openGraph: {
    title: `${business.name}: Structural Carpentry in Calgary & Central Alberta`,
    description:
      "Beam installations, load-bearing wall removal, custom framing and additions. Serving Alberta since 1988.",
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
