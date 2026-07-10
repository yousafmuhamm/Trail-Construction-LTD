import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { AboutContent } from "@/components/AboutContent";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${business.owner} and learn how ${business.name} has served Calgary, Olds and south central Alberta since ${business.foundedYear}.`,
};

export default function AboutPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[110] focus-visible:rounded-md focus-visible:bg-brand focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <AboutContent />
        <Process />
      </main>
      <Footer />
    </>
  );
}
