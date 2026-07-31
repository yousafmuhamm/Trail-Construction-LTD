/**
 * Trail Construction Ltd. - site content
 * --------------------------------------
 * Single, typed source of truth for site copy and image references.
 * Job photos live under /images/work.
 */

import type { IconName } from "@/components/Icon";

export const business = {
  name: "Trail Construction Ltd.",
  owner: "Ken Lepp",
  foundedYear: 1988,
  incorporatedYear: 2000,
  yearsExperience: "35+",
  city: "Calgary",
  serviceArea: "Calgary & Olds",
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
  cta: { label: "Request a Consultation", href: "/#contact" },
} as const;

export const hero = {
  headline: ["Steel Beam Installations", "and Structural Carpentry."],
  subhead:
    "Trail Construction Ltd. has been building in south central Alberta since 1988. In the last number of years our work has been mostly load-bearing wall removals and beam installations, alongside custom house framing, renovations, and deck building.",
  primaryCta: { label: "Request a Consultation", href: "/#contact" },
  secondaryCta: { label: "See Our Work", href: "/#services" },
  image: {
    src: "/images/hero-workshop-blueprints.png",
    alt: "Three builders reviewing blueprints in a timber-framed workshop",
  },
  stats: [
    { icon: "award", top: "35+", bottom: "Years in Business", emphasize: true },
    { icon: "calendar", top: "Calgary and South Central", bottom: "Alberta Since 1988" },
    {
      icon: "building",
      top: "Beam Installations",
      bottom: "Structural Renovations & Custom House Framing",
    },
  ],
} as const;

export const about = {
  label: "About Trail Construction",
  heading: "In Business Since 1988.",
  body: [
    "Trail Construction Ltd. has been in business in south central Alberta since 1988. We started out in the Sundre area, and have worked mostly in Calgary and Olds and the surrounding areas ever since. We've been in business without interruption since starting, and incorporated with the Province of Alberta in 2000.",
    "Our work has been mostly in custom house framing, but in the last number of years much more in the area of bearing wall removals and beam installations. We've also been involved with major renovations, deck and stair building, mezzanines, and many other carpentry-related tasks as they're needed. A small excavator and skid steer have been very useful for these ancillary projects.",
    "We've worked for many builders of fine homes, commercial warehouse developers, and many individual home owners. We've worked alongside many other trades over the years, and not only formed some good friendships and contacts, but learned a lot about how to integrate structural work with those other trades. That coordination benefits the clients we work for with a better, well-thought-out outcome.",
    "We may not be able to help everyone - sometimes due to price, timing, or scope of work - but perhaps we can point you in a helpful direction.",
  ],
} as const;

export type ProjectPhoto = { src: string; alt: string };

export type ServiceShowcase = {
  slug: string;
  title: string;
  icon: IconName;
  tier: "flagship" | "main" | "secondary";
  /** Five-photo preview shown on the service card's PhotoStack. */
  photos: ProjectPhoto[];
  /** Every photo for this service — opened by "See the work". */
  gallery: ProjectPhoto[];
  detail: {
    body: string[];
    scope: string[];
  };
};

export const servicesContent = {
  label: "The Work We Do",
  heading: "What We Build.",
  link: { label: "Talk to Us About Your Project", href: "/#contact" },
} as const;

const beamGallery: ProjectPhoto[] = [
  { src: "/images/work/beam-01.jpg", alt: "Main floor opened up with a steel beam carrying the load where the bearing wall was removed" },
  { src: "/images/work/beam-02.jpg", alt: "Steel I-beam bolted into the floor joists overhead" },
  { src: "/images/work/beam-03.jpg", alt: "Open main floor after the bearing wall came out, carried on a new beam" },
  { src: "/images/work/beam-04.jpg", alt: "Magnetic drill boring bolt holes through a steel beam on site" },
  { src: "/images/work/beam-05.jpg", alt: "Steel beam and temporary support post holding the floor during a kitchen renovation" },
  { src: "/images/work/beam-06.jpg", alt: "Exposed floor joists and beam during a bearing wall removal" },
  { src: "/images/work/beam-07.jpg", alt: "Gutted main floor with a new steel beam spanning the opening" },
  { src: "/images/work/beam-08.jpg", alt: "Steel beam installed across a stripped interior during renovation" },
  { src: "/images/work/beam-09.jpg", alt: "New opening cut through a bearing wall with a beam set above" },
  { src: "/images/work/beam-10.jpg", alt: "Exterior steel beam and bracket carrying an overhang" },
  { src: "/images/work/beam-11.jpg", alt: "Concrete block pier built in a crawlspace to pick up a new post load" },
  { src: "/images/work/beam-12.jpg", alt: "Engineered LVL beam strapped in place with support posts below" },
  { src: "/images/work/beam-13.jpg", alt: "Steel beam spanning the full width of a stripped main floor" },
  { src: "/images/work/beam-14.jpg", alt: "Temporary shoring posts holding the structure during footing work" },
  { src: "/images/work/beam-15.jpg", alt: "Steel beams staged on site ready for installation" },
  { src: "/images/work/beam-16.jpg", alt: "Steel beam laid out on the driveway before being carried inside" },
  { src: "/images/work/beam-17.jpg", alt: "Garage ceiling opened up to expose the joists before beam installation" },
  { src: "/images/work/beam-18.jpg", alt: "Ceiling opened along the bearing line with the joists exposed" },
  { src: "/images/work/beam-19.jpg", alt: "Temporary posts supporting the ceiling while the beam goes in" },
  { src: "/images/work/beam-20.jpg", alt: "Large exterior opening carried on an engineered LVL beam" },
  { src: "/images/work/beam-21.jpg", alt: "Engineered LVL beam installed above a garage opening" },
  { src: "/images/work/beam-22.jpg", alt: "Steel beam prepared with bolt sleeves before installation" },
  { src: "/images/work/beam-23.jpg", alt: "Steel beam delivered to site on a trailer" },
  { src: "/images/work/beam-24.jpg", alt: "Finished opening with the new beam boxed into the ceiling" },
  { src: "/images/work/beam-25.jpg", alt: "Bearing wall removed and the new opening framed out" },
  { src: "/images/work/beam-26.jpg", alt: "Floor joists and the new beam carrying them overhead" },
  { src: "/images/work/beam-27.jpg", alt: "Stripped interior during a structural renovation" },
  { src: "/images/work/beam-28.jpg", alt: "Steel beam and post installed through a gutted main floor" },
  { src: "/images/work/beam-29.jpg", alt: "Vaulted interior stripped back with an engineered beam overhead" },
  { src: "/images/work/beam-30.jpg", alt: "Steel beam spanning a gutted living space" },
  { src: "/images/work/beam-31.jpg", alt: "Steel beam picking up the floor joists above" },
  { src: "/images/work/beam-32.jpg", alt: "New header beam framed into a widened opening" },
];

const carpentryGallery: ProjectPhoto[] = [
  { src: "/images/work/carpentry-01.jpg", alt: "Large custom home under frame with turret and barrel-vault roof sections" },
  { src: "/images/work/carpentry-02.jpg", alt: "Carpenter assembling a curved barrel-vault roof frame on site" },
  { src: "/images/work/carpentry-03.jpg", alt: "Framing a pyramid turret roof with the Alberta foothills behind" },
  { src: "/images/work/carpentry-04.jpg", alt: "Finished great room with heavy timber trusses and a stone fireplace surround" },
  { src: "/images/work/carpentry-05.jpg", alt: "Crane lifting a prefabricated arched roof section into place" },
  { src: "/images/work/carpentry-06.jpg", alt: "Floor deck and wall framing going up with a painted steel beam" },
  { src: "/images/work/carpentry-07.jpg", alt: "Planed timber beam ready to be set" },
  { src: "/images/work/carpentry-08.jpg", alt: "Roof framing laid out across a custom home" },
  { src: "/images/work/carpentry-09.jpg", alt: "Dovetailed wooden boxes built in the shop" },
  { src: "/images/work/carpentry-10.jpg", alt: "Custom table with a hardwood top and steel base in the shop" },
  { src: "/images/work/carpentry-11.jpg", alt: "Custom office desk with a hardwood top" },
  { src: "/images/work/carpentry-12.jpg", alt: "Cedar cabinet built to order" },
  { src: "/images/work/carpentry-13.jpg", alt: "Cedar cabinet with a panelled door" },
  { src: "/images/work/carpentry-14.jpg", alt: "Fireplace surround framed below heavy timber trusses" },
  { src: "/images/work/carpentry-15.jpg", alt: "Stone fireplace and timber beam work complete" },
  { src: "/images/work/carpentry-16.jpg", alt: "Long glulam beam being worked in the shop" },
  { src: "/images/work/carpentry-17.jpg", alt: "Lumber and roof trusses delivered to a framing site" },
  { src: "/images/work/carpentry-18.jpg", alt: "Framed shop interior with exposed ceiling joists" },
  { src: "/images/work/carpentry-19.jpg", alt: "Modern infill home with garage and upper balcony" },
  { src: "/images/work/carpentry-20.jpg", alt: "Carpenter framing a roof with the Calgary skyline behind" },
  { src: "/images/work/carpentry-21.jpg", alt: "Floor framing and sheathing on a city infill build" },
  { src: "/images/work/carpentry-22.jpg", alt: "Multi-storey building framed and sheathed" },
  { src: "/images/work/carpentry-23.jpg", alt: "Framed garage interior during construction" },
  { src: "/images/work/carpentry-24.jpg", alt: "Window opening framed and taped on a new addition" },
  { src: "/images/work/carpentry-25.jpg", alt: "Carpenter framing a roof curb on a flat roof" },
  { src: "/images/work/carpentry-26.jpg", alt: "Attic framing with an engineered beam running through" },
  { src: "/images/work/carpentry-27.jpg", alt: "Cutting decorative timber brackets on site" },
  { src: "/images/work/carpentry-28.jpg", alt: "Interior partition walls framed out" },
  { src: "/images/work/carpentry-29.jpg", alt: "Vaulted interior stripped back to the framing" },
  { src: "/images/work/carpentry-30.jpg", alt: "Open vaulted space during a full interior renovation" },
  { src: "/images/work/carpentry-31.jpg", alt: "Crew working a long timber beam outside the house" },
  { src: "/images/work/carpentry-32.jpg", alt: "Curved barrel-vault ceiling framed inside a custom home" },
  { src: "/images/work/carpentry-33.jpg", alt: "Carpenter setting a curved plywood form for an arched ceiling" },
  { src: "/images/work/carpentry-34.jpg", alt: "Crane setting a tall framed wall section" },
];

const decksGallery: ProjectPhoto[] = [
  { src: "/images/work/decks-01.jpg", alt: "Timber pavilion with a metal roof in a landscaped yard" },
  { src: "/images/work/decks-02.jpg", alt: "Wood stair framing built into a commercial space" },
  { src: "/images/work/decks-03.jpg", alt: "Pergola canopy over the entry of a modern home" },
  { src: "/images/work/decks-04.jpg", alt: "Finished stairs and railing up to a framed mezzanine" },
  { src: "/images/work/decks-05.jpg", alt: "Interior stairs under construction" },
  { src: "/images/work/decks-06.jpg", alt: "Timber post-and-beam pavilion in a public courtyard" },
  { src: "/images/work/decks-07.jpg", alt: "Pergola and canopy structure on a modern home exterior" },
  { src: "/images/work/decks-08.jpg", alt: "Cedar fence and gate with a steel frame" },
];

const excavationGallery: ProjectPhoto[] = [
  { src: "/images/work/excavation-01.jpg", alt: "Skid steer drilling post holes with an auger attachment" },
  { src: "/images/work/excavation-02.jpg", alt: "Mini excavator digging a trench along a fence line" },
  { src: "/images/work/excavation-03.jpg", alt: "Graded and gravelled yard finished around a new build" },
  { src: "/images/work/excavation-04.jpg", alt: "New conduit laid in the bottom of a freshly dug trench" },
  { src: "/images/work/excavation-05.jpg", alt: "Case CX36B mini excavator on an acreage ready for site work" },
  { src: "/images/work/excavation-06.jpg", alt: "Mini excavator working alongside a house addition" },
  { src: "/images/work/excavation-07.jpg", alt: "Trench cut through frozen ground with new conduit run in" },
  { src: "/images/work/excavation-08.jpg", alt: "Skid steer clearing brush and roots into a waste bin" },
  { src: "/images/work/excavation-09.jpg", alt: "Skid steer moving cut logs off a property" },
  { src: "/images/work/excavation-10.jpg", alt: "Skid steer forks lifting an old brick barbecue out of a yard" },
  { src: "/images/work/excavation-11.jpg", alt: "Skid steer loaded on the trailer for transport to a job site" },
];

export const services = [
  {
    slug: "beam-wall",
    title: "Bearing Wall Removal & Steel Beam Installations",
    icon: "beam",
    tier: "flagship",
    photos: beamGallery.slice(0, 5),
    gallery: beamGallery,
    detail: {
      body: [
        "We have, especially in the last number of years, removed a lot of load-bearing walls, and installed many steel beams, LVL (engineered) beams, C-channel steel and timber.",
        "This usually means that a roof or second floor changes from a uniformly supported load, to a concentrated load.",
        "Therefore, the required installation of support posts, and quite often new concrete footing pads.",
        "We have all the jacks, winches and related equipment to do this work.",
        "This work is typically invasive and dusty. Dust goes everywhere, so poly sheets and walls need to be put up if customer is living in the house. This is usually done in collaboration with the customer.",
        "Our work on beam installations is usually limited to the structural side of things, but we will work to accommodate heating and plumbing that are in the walls.",
        "We do this work under the instruction of engineers.",
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
    slug: "carpentry-framing",
    title: "General Carpentry & Framing",
    icon: "framing",
    tier: "main",
    photos: carpentryGallery.slice(0, 5),
    gallery: carpentryGallery,
    detail: {
      body: [
        "Custom House Framing: in Calgary and area starting in 1990. We have framed houses in a very wide variety, traditional and modern styles.",
        "Additions: We can help with problem solving and the coordination of connecting an existing building to a new addition: exterior building materials, mechanical extensions etc.",
        "Renovations: Our part in a renovation is usually limited to the structural side of the work, framing, beams, etc.",
      ],
      scope: [
        "Custom framing",
        "Additions",
        "Structural renovations",
        "Roof systems",
        "Mezzanines",
        "Timber & finish carpentry",
        "Trade coordination",
      ],
    },
  },
  {
    slug: "decks-stairs",
    title: "Decks, Stairs & Outdoor Structures",
    icon: "deck",
    tier: "secondary",
    photos: decksGallery.slice(0, 5),
    gallery: decksGallery,
    detail: {
      body: [
        "1. A deck rebuild will require the removal of the old deck.",
        "2. Perhaps adding earth in that location if it has sunken down near the house, or placing gravel or landscape cloth to keep down the weeds.",
        "3. Sometimes removal of siding or stucco to attach new stringer to house.",
        "4. Determine deck size and layout.",
        "5. Installation of new concrete or screw piles or other bearing alternatives.",
        "6. Determine the kind of wood or materials to be used, and possible staining of wood.",
        "7. Decide on type of railings.",
        "8. Stairs and what stairs will bear on.",
      ],
      scope: [
        "Deck framing",
        "Footings",
        "Stairs & railings",
        "Pergolas & pavilions",
        "Fences & gates",
      ],
    },
  },
  {
    slug: "excavation-site-prep",
    title: "Excavation: Trenching Site Prep & Post Hole Drilling",
    icon: "excavation",
    tier: "secondary",
    photos: excavationGallery.slice(0, 5),
    gallery: excavationGallery,
    detail: {
      body: [
        "Skidsteer: (Bobcat) for excavation of yards and driveways, loading and spreading gravel, etc. Also drilling holes for posts for building fences and gates.",
        "Excavator: (9000 lb machine) for trenching, excavation of additions, and loading trucks. Machines are suitable for tight spaces in back yards.",
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
  heading: "Work That Earns Repeat Business.",
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
  heading: "From the First Call to a Clear Quotation.",
  steps: [
    {
      number: "01",
      title: "Get in Touch",
      description:
        "Call or text any time. If we can't pick up, we're usually back to you shortly. We'll talk through your project on the phone first.",
      icon: "consult",
    },
    {
      number: "02",
      title: "A Site Visit",
      description:
        "We come to your site or home to see it in person. Once we understand what you're after, we suggest some ideas and, if an engineer is required, tell you what you'll likely need to provide them.",
      icon: "plan",
    },
    {
      number: "03",
      title: "A Clear Quotation",
      description:
        "A well thought out quotation with clear pricing, payment terms, what's included and excluded, expectations both ways, and liability information.",
      icon: "build",
    },
    {
      number: "04",
      title: "Engineering Consultation",
      description:
        "We do the structural work under the engineer's specs and coordinate closely with your other trades. References can be provided for both the craftsmanship and the business side.",
      icon: "deliver",
    },
  ] satisfies Step[],
} as const;

export const contact = {
  label: "Get In Touch",
  heading: "Contact Us to Discuss Your Project",
  intro:
    "Tell us what you're planning by phone, text, or the form below, and we'll get back to you shortly. We may not be able to help everyone - sometimes it's price, timing or scope - but we can often point you in a helpful direction.",
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
