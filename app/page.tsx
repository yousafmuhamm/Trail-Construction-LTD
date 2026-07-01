import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/content";

// LocalBusiness structured data — helps Google show the contractor in local results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: business.name,
  founder: business.owner,
  foundingDate: String(business.foundedYear),
  telephone: business.phone,
  email: business.email,
  areaServed: ["Calgary", "Olds", "Central Alberta"],
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: "AB",
    addressCountry: "CA",
  },
  description:
    "Structural carpentry contractor specializing in beam installations, load-bearing wall removal, custom framing, additions and excavation.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Reviews />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
