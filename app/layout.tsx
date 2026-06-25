import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/content";

// Body copy — clean, highly legible workhorse sans.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display / headlines — Fraunces: an old-style serif revival. Heritage and
// premium, with heavy display weights that still feel sturdy and grounded.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
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
