import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
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
    "Structural contractor specializing in load-bearing wall removals with steel, LVL and C-channel beam installations, plus structural renovations, framing, decks and site work. In business in south central Alberta since 1988.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
