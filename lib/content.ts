/**
 * Trail Construction Ltd. - site content
 * --------------------------------------
 * Single, typed source of truth for site copy and image references.
 * Photos under /images/work are placeholders until Ken supplies job photos.
 */

import type { IconName } from "@/components/Icon";

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
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ],
  cta: { label: "Request a Quote", href: "/#contact" },
} as const;

export const hero = {
  headline: ["Steel beam installations", "and structural carpentry."],
  subhead:
    "Trail Construction Ltd. has been building in south central Alberta since 1988. In the last number of years our work has been mostly load-bearing wall removals and beam installations, alongside the framing, renovations and decks we've always done.",
  primaryCta: { label: "Request a Quote", href: "/#contact" },
  secondaryCta: { label: "See Our Work", href: "/#services" },
  image: {
    src: "/images/hero-structural.jpg",
    alt: "Steel beam and support posts carrying the floor above on a structural job",
  },
  stats: [
    { icon: "award", top: "35+", bottom: "Years in Business", emphasize: true },
    { icon: "calendar", top: "South Central", bottom: "Alberta Since 1988" },
    { icon: "building", top: "Beams, Walls", bottom: "& Structural Work" },
  ],
} as const;

export const about = {
  label: "About Trail Construction",
  heading: "In business since 1988.",
  body: [
    "Trail Construction Ltd. has been in business in south central Alberta since 1988. We started out in the Sundre area, and have worked mostly in Calgary and Olds and the surrounding areas ever since. We've been in business without interruption since starting, and incorporated with the Province of Alberta in 2000.",
    "Our work has been mostly in custom house framing, but in the last number of years much more in the area of bearing wall removals and beam installations. We've also been involved with major renovations, deck and stair building, mezzanines, and many other carpentry-related tasks as they're needed. A small excavator and skid steer have been very useful for these ancillary projects.",
    "We've worked for many builders of fine homes, commercial warehouse developers, and many individual home owners. We've worked alongside many other trades over the years, and not only formed some good friendships and contacts, but learned a lot about how to integrate structural work with those other trades. That coordination benefits the clients we work for with a better, well-thought-out outcome.",
    "We may not be able to help everyone - sometimes due to price, timing, or scope of work - but perhaps we can point you in a helpful direction.",
  ],
} as const;

export type ServiceShowcase = {
  slug: string;
  title: string;
  tagline: string;
  icon: IconName;
  tier: "flagship" | "main" | "secondary";
  photos: { src: string; alt: string }[];
  detail: {
    body: string[];
    scope: string[];
  };
};

export const servicesContent = {
  label: "The Work We Do",
  heading: "Services, with the work to back them up.",
  intro:
    "Bearing-wall removal and beam installation are the heart of what we do now. We also take on structural renovations, framing and additions, with decks, stairs and site work where they fit.",
  link: { label: "Talk to Us About Your Project", href: "/#contact" },
} as const;

export const services = [
  {
    slug: "beam-wall",
    title: "Wall Removal & Steel Beam Installation",
    tagline:
      "We remove the bearing wall, install the beam and make sure the new load has somewhere solid to land.",
    icon: "beam",
    tier: "flagship",
    photos: [
      {
        src: "/images/work/beam-open.jpg",
        alt: "Open main floor after a load-bearing wall was removed and replaced with a beam",
      },
      {
        src: "/images/work/beam-steel.jpg",
        alt: "Black steel beam set into the floor joists",
      },
      {
        src: "/images/work/beam-joist.jpg",
        alt: "Steel beam and support post carrying floor joists",
      },
      {
        src: "/images/work/reno-posts.jpg",
        alt: "Steel support posts installed below a structural beam",
      },
      {
        src: "/images/work/reno-footing.jpg",
        alt: "Rebar prepared for a new concrete footing pad",
      },
    ],
    detail: {
      body: [
        "When a bearing wall comes out, the load that was supported all along that wall becomes concentrated at the ends of a new steel, LVL or C-channel beam. That means support posts below and, quite often, new concrete footing pads so the load has somewhere solid to go.",
        "We have all the jacks, winches and related equipment for the work, and install everything under the engineer's instruction. Wall removal is invasive and dusty, so when you're living in the house we work out the poly and dust walls with you beforehand.",
      ],
      scope: [
        "Bearing-wall removal",
        "Steel, LVL & C-channel beams",
        "Support posts",
        "Concrete footing pads",
        "Engineer-directed work",
      ],
    },
  },
  {
    slug: "structural-renovations",
    title: "Structural Renovations",
    tagline:
      "We handle the framing, beams and support underneath so the rest of the renovation starts on solid work.",
    icon: "renovation",
    tier: "main",
    photos: [
      { src: "/images/work/reno-home.jpg", alt: "Home during a structural renovation" },
      {
        src: "/images/work/reno-posts.jpg",
        alt: "New steel support posts installed during a renovation",
      },
      {
        src: "/images/work/reno-footing.jpg",
        alt: "New concrete footing pad prepared for a structural post",
      },
      {
        src: "/images/work/beam-open.jpg",
        alt: "Renovated open living space carried by a new beam",
      },
      {
        src: "/images/work/beam-joist.jpg",
        alt: "Beam and post supporting joists during structural work",
      },
    ],
    detail: {
      body: [
        "On a major renovation our part is usually the structural side: new openings, beams, posts, footing pads and the framing needed to carry the changed loads. We get that support right first so the other trades have solid, square work to follow.",
        "The work can be invasive and dusty. If you're living in the house, we plan the access, poly and dust walls with you before work starts and coordinate closely with the other trades on site.",
      ],
      scope: ["Structural framing", "Beams & posts", "Footing pads", "Trade coordination"],
    },
  },
  {
    slug: "framing-additions",
    title: "Custom Framing & Additions",
    tagline:
      "New framing stays square and true; additions are carefully tied into the home and the trades around them.",
    icon: "framing",
    tier: "main",
    photos: [
      {
        src: "/images/work/framing-custom.jpg",
        alt: "Large custom home being framed against a blue sky",
      },
      {
        src: "/images/work/framing-arch.jpg",
        alt: "Curved roof framing inside a custom addition",
      },
      {
        src: "/images/work/framing-mezzanine.jpg",
        alt: "Framed interior mezzanine with a wood railing",
      },
      {
        src: "/images/work/beam-open.jpg",
        alt: "Open floor plan below new structural framing",
      },
      {
        src: "/images/work/reno-home.jpg",
        alt: "Existing home where structural framing was coordinated",
      },
    ],
    detail: {
      body: [
        "We've framed houses in Calgary and area since 1990 in a wide variety of traditional and modern styles. The work is framed to the plans and left square and true for the trades that follow.",
        "With an addition, much of the problem-solving is in the connection to the existing home: matching rooflines and exterior materials, carrying the new loads, extending mechanical systems and coordinating the work so the addition belongs there.",
      ],
      scope: ["Custom framing", "Additions", "Roof systems", "Mezzanines", "Trade coordination"],
    },
  },
  {
    slug: "decks-stairs",
    title: "Decks & Stairs",
    tagline:
      "From the footings up, we build solid decks, railings and stairs around how the space will be used.",
    icon: "deck",
    tier: "secondary",
    photos: [
      {
        src: "/images/work/deck-cedar.jpg",
        alt: "Cedar deck with a metal-spindle railing and Alberta view",
      },
      {
        src: "/images/work/deck-lounge.jpg",
        alt: "Finished deck with outdoor seating and a treeline view",
      },
      {
        src: "/images/work/site-acreage.jpg",
        alt: "Acreage setting prepared for outdoor construction",
      },
      {
        src: "/images/work/framing-mezzanine.jpg",
        alt: "Wood railing and stair framing detail",
      },
      {
        src: "/images/work/excavation-auger.jpg",
        alt: "Skid steer auger used to prepare post holes",
      },
    ],
    detail: {
      body: [
        "A deck rebuild starts with the old deck coming out and the bearing underneath being sorted out, whether that means concrete footings, screw piles or another suitable approach.",
        "From there we handle the framing, decking, railings and stairs in the materials you choose, with the size, layout and stair landing worked out around how you use the yard.",
      ],
      scope: ["Deck framing", "Footings", "Decking", "Railings", "Stairs"],
    },
  },
  {
    slug: "excavation-site-prep",
    title: "Excavation & Site Prep",
    tagline:
      "Our compact skid steer and excavator handle tight-yard digging, trenching, grading and material moving.",
    icon: "excavation",
    tier: "secondary",
    photos: [
      {
        src: "/images/work/excavation-auger.jpg",
        alt: "Skid steer drilling post holes with an auger",
      },
      {
        src: "/images/work/excavation-trailer.jpg",
        alt: "Skid steer loaded on a trailer at a job site",
      },
      {
        src: "/images/work/site-acreage.jpg",
        alt: "Alberta acreage cleared and ready for site work",
      },
      {
        src: "/images/work/reno-footing.jpg",
        alt: "Excavated footing area prepared for structural concrete",
      },
      {
        src: "/images/work/framing-custom.jpg",
        alt: "New framing following excavation and site preparation",
      },
    ],
    detail: {
      body: [
        "We run a skid steer for excavating yards and driveways, moving gravel, loading trucks and drilling post holes, along with a 9,000 lb excavator for trenching and addition work.",
        "Both machines are compact enough for tight spaces and back yards. Having them available is especially useful when the site work supports a carpentry project and needs to stay on the same schedule.",
      ],
      scope: ["Post holes", "Trenching", "Grading", "Material moving", "Tight-access work"],
    },
  },
] satisfies ServiceShowcase[];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

/** Disabled until real, permissioned client testimonials are available. */
export const testimonials = {
  label: "Client Reviews",
  heading: "Work that earns repeat business.",
  intro:
    "References can be provided for both the craftsmanship side and the business side of our work.",
  items: [] as Testimonial[],
} as const;

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: "consult" | "plan" | "build" | "deliver";
};

export const process = {
  label: "How We Can Help You",
  heading: "From the first call to a clear quote.",
  steps: [
    {
      number: "01",
      title: "Get in touch",
      description:
        "Call or text any time. If we can't pick up, we're usually back to you shortly. We'll talk through your project on the phone first.",
      icon: "consult",
    },
    {
      number: "02",
      title: "A look in person",
      description:
        "We come to your site or home to see it in person. Once we understand what you're after, we suggest some ideas and, if an engineer is required, tell you what you'll likely need to provide them.",
      icon: "plan",
    },
    {
      number: "03",
      title: "A clear quotation",
      description:
        "A well-thought-out quote with clear pricing, payment terms, what's included and excluded, expectations both ways, and liability information.",
      icon: "build",
    },
    {
      number: "04",
      title: "The work, done right",
      description:
        "We do the structural work under the engineer's specs and coordinate closely with your other trades. References can be provided for both the craftsmanship and the business side.",
      icon: "deliver",
    },
  ] satisfies Step[],
} as const;

export const contact = {
  label: "Get In Touch",
  heading: "Ready to talk about your project?",
  intro:
    "Tell us what you're planning by phone, text or the form below, and we'll get back to you shortly. We may not be able to help everyone - sometimes it's price, timing or scope - but we can often point you in a helpful direction.",
  projectTypes: [
    "Steel Beam Installation",
    "Load-Bearing Wall Removal",
    "Structural Renovation",
    "Custom Framing / Addition",
    "Deck or Stairs",
    "Excavation",
    "Something Else",
  ],
} as const;
