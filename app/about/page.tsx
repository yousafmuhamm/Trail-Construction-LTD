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
      <Nav />
      <main id="main">
        <AboutContent />
        <Process />
      </main>
      <Footer />
    </>
  );
}
