/**
 * Trail Construction Ltd. — site content
 * --------------------------------------
 * Single, typed source of truth for all copy and image references on the home
 * page. Hardcoded for v1 (no CMS). Swap copy / photos here and the page updates.
 *
 * All facts below are real business details. All photos referenced are temporary
 * placeholders (see public/images/README.md) until the client supplies real ones.
 */

export const business = {
  name: "Trail Construction Ltd.",
  owner: "Ken Lepp",
  foundedYear: 1988,
  incorporatedYear: 2000,
  yearsExperience: "35+",
  city: "Calgary",
  serviceArea: "Calgary, Olds & Central Alberta",
  phone: "403-660-6198",
  phoneHref: "tel:+14036606198",
  email: "57grass@gmail.com",
  emailHref: "mailto:57grass@gmail.com",
} as const;

export const nav = {
  links: [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Request a Quote", href: "#contact" },
} as const;

export const hero = {
  // Two short display lines.
  headline: ["Structural expertise,", "built to last."],
  subhead:
    "Trail Construction Ltd. specializes in structural renovations, load-bearing wall removals, beam installations, framing, decks, stairs, and excavation across Calgary and Central Alberta since 1988.",
  primaryCta: { label: "Request a Quote", href: "#contact" },
  secondaryCta: { label: "View Projects", href: "#projects" },
  // Hero photo — builder reviewing structural blueprints (swap for a real Trail
  // job-site photo when available).
  image: {
    src: "/images/hero-structural.jpg",
    alt: "Builder reviewing structural blueprints at a workbench",
  },
  stats: [
    { icon: "award", top: "35+", bottom: "Years Experience", emphasize: true },
    { icon: "calendar", top: "Serving Alberta", bottom: "Since 1988" },
    { icon: "building", top: "Residential &", bottom: "Light Commercial" },
  ],
} as const;

export const about = {
  label: "About Trail Construction",
  heading: "Decades of structural know-how.",
  body: [
    "Trail Construction has been framing and rebuilding Alberta homes since 1988. Ken Lepp runs the company out of Calgary, and we incorporated in 2000.",
    "We stick to the structural side of the job: the beams, walls, and framing that hold everything else up. We do the carpentry properly and get the engineering right, so the work holds up for decades.",
  ],
} as const;

export type Service = {
  title: string;
  description: string;
  /** Icon key — see components/Icons.tsx */
  icon: "beam" | "wall" | "renovation" | "framing" | "deck" | "excavation";
};

export const services = {
  label: "Our Services",
  heading: "Services built on experience.",
  intro:
    "Whether it's a single beam or a full custom frame, we handle the structural work that keeps a building standing. We do it for renovations, additions, and new builds across Central Alberta.",
  link: { label: "Learn More About Our Services", href: "#contact" },
  items: [
    {
      title: "Beam Installations",
      description:
        "Steel, LVL and C-channel beams sized and set to carry the load safely.",
      icon: "beam",
    },
    {
      title: "Load-Bearing Wall Removal",
      description:
        "Open up your floor plan with proper temporary support and permanent beams.",
      icon: "wall",
    },
    {
      title: "Structural Renovations",
      description:
        "New footing pads and support posts to fix sagging floors and add capacity.",
      icon: "renovation",
    },
    {
      title: "Custom Framing",
      description:
        "Full house framing and additions, squared and built to the plans.",
      icon: "framing",
    },
    {
      title: "Decks & Stairs",
      description:
        "Solid, code-compliant decks, stairs and mezzanines built to last.",
      icon: "deck",
    },
    {
      title: "Excavation",
      description:
        "Skid steer and ~9,000 lb excavator for footings, grading and site prep.",
      icon: "excavation",
    },
  ] satisfies Service[],
} as const;

export type Project = {
  title: string;
  location: string;
  /** Short year/timeframe shown as a chip. */
  year: string;
  /** Service tags shown in the detail view. */
  scope: string[];
  /** One-paragraph story for the detail modal. */
  description: string;
  image: { src: string; alt: string };
  /** Extra photos shown in the detail modal gallery (the cover image leads). */
  gallery: { src: string; alt: string }[];
  /** "large" renders the featured tile; the rest fill the 2×2 grid. */
  size: "large" | "small";
};

export const projects = {
  label: "Featured Projects",
  heading: "Recent work across Alberta.",
  intro:
    "Here's the kind of structural carpentry we do day to day: beams, framing, additions, and renovations built to spec.",
  link: { label: "View All Projects", href: "#contact" },
  detailCta: { label: "Request a Quote", href: "#contact" },
  // All images are placeholders — replace with real Trail project photos.
  items: [
    {
      title: "Open Concept Beam Installation",
      location: "Calgary, AB",
      year: "2024",
      scope: ["Beam Installation", "Load-Bearing Wall Removal", "Finishing"],
      description:
        "A cramped main floor became one open great room. We sized and set a flush LVL beam to carry the second storey, then took out the load-bearing wall underneath it and tied everything back into the existing structure. There are no posts in the way and no drop in the ceiling line, just a clean open span the family can actually use.",
      image: {
        src: "/images/project-beam-install.jpg",
        alt: "Open-concept interior with an exposed structural beam and loft",
      },
      gallery: [
        { src: "/images/project-beam-install.jpg", alt: "Open-concept interior with an exposed structural beam" },
        { src: "/images/interior-feature-wall.jpg", alt: "Finished open-plan living and kitchen with a timber feature wall" },
        { src: "/images/hero-structural.jpg", alt: "Reviewing the structural plans before the beam install" },
      ],
      size: "large",
    },
    {
      title: "Two-Storey Addition",
      location: "Olds, AB",
      year: "2023",
      scope: ["Framing", "Additions", "Excavation"],
      description:
        "A full two-storey addition on an acreage home, from the footings up to the roofline. We did the excavation and foundation prep, framed the new structure square and true, and tied it into the original house so the addition looks like it was always part of the place.",
      image: {
        src: "/images/project-addition.jpg",
        alt: "Modern timber-clad home addition at dusk",
      },
      gallery: [
        { src: "/images/project-addition.jpg", alt: "Modern timber-clad home addition" },
        { src: "/images/addition-exterior-dusk.jpg", alt: "Completed timber-clad addition lit up at dusk" },
        { src: "/images/interior-open-living.jpg", alt: "Open living space inside the finished addition" },
      ],
      size: "small",
    },
    {
      title: "Custom New-Build Framing",
      location: "Central Alberta",
      year: "2023",
      scope: ["Custom Framing", "New Build"],
      description:
        "Full structural framing for a custom country home. That meant engineered floor systems, tall wall framing, and a complicated roof, all built to the plans and ready for the trades that came after us. We kept the tolerances tight and the site clean the whole way through.",
      image: {
        src: "/images/project-framing.jpg",
        alt: "Crew framing the structure of a new build",
      },
      gallery: [
        { src: "/images/project-framing.jpg", alt: "Crew framing the structure of a new build" },
        { src: "/images/addition-exterior-dusk.jpg", alt: "The framed home after exterior cladding" },
        { src: "/images/hero-structural.jpg", alt: "Framing plans on the workbench" },
      ],
      size: "small",
    },
    {
      title: "Exterior Structural Renovation",
      location: "Calgary, AB",
      year: "2022",
      scope: ["Structural Renovation", "Stairs & Railings"],
      description:
        "A dated home reworked from the structure out. We reframed openings, built a new interior stair, and reinforced the supports so the floor plan could open up. The bones came first, and the finishes that make it feel new came after.",
      image: {
        src: "/images/project-renovation-exterior.jpg",
        alt: "Carpenters reworking the exterior structure of a home",
      },
      gallery: [
        { src: "/images/project-renovation-exterior.jpg", alt: "Reworking the structure of an existing home" },
        { src: "/images/interior-staircase.jpg", alt: "New open-rise staircase after the renovation" },
        { src: "/images/interior-open-living.jpg", alt: "Reconfigured open living area" },
      ],
      size: "small",
    },
    {
      title: "Main-Floor Structural Reno",
      location: "Calgary, AB",
      year: "2022",
      scope: ["Load-Bearing Wall Removal", "Beam Installation", "Kitchen"],
      description:
        "Two small rooms became one bright kitchen and dining space. We took out the wall between them, set a beam to carry the load, and reframed for the new kitchen layout. It's a straightforward structural reno that completely changes how the floor lives.",
      image: {
        src: "/images/project-renovation-kitchen.jpg",
        alt: "Finished main-floor renovation after structural work",
      },
      gallery: [
        { src: "/images/project-renovation-kitchen.jpg", alt: "Finished main-floor renovation" },
        { src: "/images/kitchen-detail.jpg", alt: "New kitchen detail after the structural work" },
        { src: "/images/interior-feature-wall.jpg", alt: "Open kitchen and living area after the reno" },
      ],
      size: "small",
    },
  ] satisfies Project[],
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: "consult" | "plan" | "build" | "deliver";
};

export const process = {
  label: "Our Process",
  heading: "A clear process. Strong results.",
  steps: [
    {
      number: "01",
      title: "Consultation",
      description: "We walk the site, talk through your goals and assess the structure.",
      icon: "consult",
    },
    {
      number: "02",
      title: "Plan",
      description: "Engineered specs, a clear scope and an honest, itemized quote.",
      icon: "plan",
    },
    {
      number: "03",
      title: "Build",
      description: "Careful demo, proper support and clean, code-compliant carpentry.",
      icon: "build",
    },
    {
      number: "04",
      title: "Deliver",
      description: "A solid, finished structure and a tidy site, handed back on time.",
      icon: "deliver",
    },
  ] satisfies Step[],
} as const;

export const contact = {
  label: "Get In Touch",
  heading: "Ready to talk about your project?",
  intro:
    "Tell us what you're planning and we'll get back to you with straight answers and a fair quote. We won't pressure you or give you the runaround.",
  projectTypes: [
    "Beam Installation",
    "Load-Bearing Wall Removal",
    "Structural Renovation",
    "Custom Framing / Addition",
    "Deck or Stairs",
    "Excavation",
    "Something Else",
  ],
} as const;
