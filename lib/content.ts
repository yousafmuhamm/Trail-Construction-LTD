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
  // Real Trail Construction job photos, sourced from the company's own work archive.
  items: [
    {
      title: "Custom Home Framing",
      location: "Central Alberta",
      year: "2021",
      scope: ["Custom Framing", "New Build", "Roof Systems"],
      description:
        "Full structural framing for custom homes, from the main floor up to complex roofs. This build included round turrets and a barrel-vault roof, all framed to the plans and left square and true for the trades that followed. We frame new builds, additions, and everything in between.",
      image: {
        src: "/images/work/framing-custom.jpg",
        alt: "Large custom home being framed, with round turrets and a barrel-vault roof",
      },
      gallery: [
        { src: "/images/work/framing-custom.jpg", alt: "Custom home framing with turrets against a blue sky" },
        { src: "/images/work/framing-arch.jpg", alt: "Curved glulam roof framing inside a custom build" },
        { src: "/images/work/framing-mezzanine.jpg", alt: "Framed mezzanine with a finished wood railing" },
      ],
      size: "large",
    },
    {
      title: "Beam Installation & Wall Removal",
      location: "Calgary, AB",
      year: "2022",
      scope: ["Beam Installation", "Load-Bearing Wall Removal", "Steel & LVL"],
      description:
        "We pulled the wall between the kitchen and living room and carried the load on a new beam, so the main floor reads as one open room. On other jobs we set flush steel and LVL beams right up into the joists, which keeps the ceiling line clean with no posts in the way. Every beam is sized for the load it carries.",
      image: {
        src: "/images/work/beam-open.jpg",
        alt: "Open main floor with a dropped beam after a load-bearing wall removal",
      },
      gallery: [
        { src: "/images/work/beam-open.jpg", alt: "Open-concept main floor with a dropped beam and brick fireplace" },
        { src: "/images/work/beam-steel.jpg", alt: "Flush black steel beam set up into the floor joists" },
        { src: "/images/work/beam-joist.jpg", alt: "Steel beam on a support post carrying the ceiling joists" },
      ],
      size: "small",
    },
    {
      title: "Structural Renovation & Support Posts",
      location: "Calgary, AB",
      year: "2023",
      scope: ["Structural Renovation", "Support Posts", "Footing Pads"],
      description:
        "When a floor sags or an owner wants a more open layout, we go back to the structure. That means new steel support posts, fresh concrete footing pads poured under them, and reframed openings to carry the new loads. We get the support solid first, then the rest of the renovation can happen.",
      image: {
        src: "/images/work/reno-home.jpg",
        alt: "Mid-century home exterior during a structural renovation",
      },
      gallery: [
        { src: "/images/work/reno-home.jpg", alt: "Mid-century Calgary home during structural renovation" },
        { src: "/images/work/reno-posts.jpg", alt: "New steel support posts carrying a beam in a basement" },
        { src: "/images/work/reno-footing.jpg", alt: "Rebar in a new concrete footing pad before the pour" },
      ],
      size: "small",
    },
    {
      title: "Custom Decks & Railings",
      location: "Olds, AB",
      year: "2019",
      scope: ["Decks", "Railings", "Stairs"],
      description:
        "Cedar decks built to last, with clean railings and a layout that suits how the family actually uses the yard. We handle the framing, the decking, and the rail work, including the metal spindles, so the finished deck is solid underfoot and easy to look at.",
      image: {
        src: "/images/work/deck-cedar.jpg",
        alt: "Cedar deck with metal-spindle railing overlooking open Alberta land",
      },
      gallery: [
        { src: "/images/work/deck-cedar.jpg", alt: "Cedar deck with a metal-spindle railing and rural view" },
        { src: "/images/work/deck-lounge.jpg", alt: "Finished cedar deck with patio furniture and a treeline view" },
      ],
      size: "small",
    },
    {
      title: "Excavation & Site Prep",
      location: "Central Alberta",
      year: "2021",
      scope: ["Excavation", "Site Prep", "Skid Steer"],
      description:
        "We run our own skid steer and excavator for the dirt work that comes before the build. Post holes, footings, grading, and general site prep, done on our own schedule so the framing crew is not waiting on anyone. Handy on acreages and tight city lots alike.",
      image: {
        src: "/images/work/excavation-auger.jpg",
        alt: "Skid steer with an auger attachment drilling holes on an acreage",
      },
      gallery: [
        { src: "/images/work/excavation-auger.jpg", alt: "Case skid steer drilling post holes with an auger" },
        { src: "/images/work/excavation-trailer.jpg", alt: "Truck and skid steer loaded on a trailer at a job site" },
        { src: "/images/work/site-acreage.jpg", alt: "Alberta acreage site ready for prep work" },
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
