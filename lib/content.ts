import manifest from "./image-manifest.json";

export type ImageMeta = {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  alt: string;
};

function img(file: keyof typeof manifest, alt: string): ImageMeta {
  const meta = manifest[file];
  return { src: `/images/${file}`, width: meta.width, height: meta.height, blurDataURL: "blurDataURL" in meta ? meta.blurDataURL : undefined, alt };
}

// NOTE: placeholder contact details — swap in the real phone/WhatsApp number,
// street address, and map coordinates before launch.
export const site = {
  name: "Walako Pub",
  tagline: "Accra's Home for Late Nights",
  phone: "+233 20 000 0000",
  whatsapp: "233200000000",
  address: "Tafo Amon Street, Bubiashie, Accra, Ghana",
  mapsQuery: "Tafo Amon Street, Bubiashie, Accra, Ghana",
  instagram: "https://instagram.com/walakopub",
};

export const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#reserve", label: "Reserve" },
];

export const heroSlides = [
  {
    image: img("hero.jpg", "Crowd dancing under warm stage lights at Walako Pub"),
    focus: "object-[center_25%]",
  },
  {
    image: img("event-trappers-invasion.jpg", "Trappers Invasion event flyer for Walako Pub, July 18"),
    focus: "object-top",
  },
];

export const highlights = [
  {
    title: "Shisha Lounge",
    body: "Sink into low light and soft cushions. Premium hookah flavors, poured cocktails, and a playlist built for long conversations.",
    image: img("gallery-hookah-drinks.jpg", "Hookah pipe and cocktails on a table at Walako Pub"),
  },
  {
    title: "Live DJ Nights",
    body: "Friday and Saturday, the decks take over. Local DJs, a packed floor, and lighting rigs that turn the room electric.",
    image: img("gallery-dance-portrait.jpg", "Guest laughing on the dance floor at Walako Pub"),
  },
  {
    title: "Suya on the Grill",
    body: "Charcoal-grilled skewers, spiced and smoky, fired fresh through the night. The perfect chaser for a cold Beaufort.",
    image: img("menu-suya-skewers.jpg", "Suya skewers grilling over charcoal"),
  },
];

export const menuCategories = [
  {
    name: "Small Chops",
    items: [
      { name: "Suya Skewers", desc: "Charcoal-grilled beef, house spice blend", price: "GH₵45" },
      { name: "Grilled Tilapia", desc: "Whole fish, pepper sauce, plantain", price: "GH₵90" },
      { name: "Spring Rolls", desc: "Crisp vegetable rolls, chili dip", price: "GH₵35" },
    ],
  },
  {
    name: "Cold Beers",
    items: [
      { name: "Beaufort Stout", desc: "Bottled, ice cold", price: "GH₵25" },
      { name: "Guinness", desc: "Bottled, ice cold", price: "GH₵28" },
      { name: "Club Lager", desc: "Bottled, ice cold", price: "GH₵20" },
    ],
  },
  {
    name: "Signature Cocktails",
    items: [
      { name: "Walako Sunset", desc: "Spiced rum, passionfruit, ginger", price: "GH₵60" },
      { name: "Gold Coast Mule", desc: "Vodka, lime, ginger beer", price: "GH₵55" },
    ],
  },
  {
    name: "Shisha",
    items: [
      { name: "Double Apple", desc: "Classic house blend", price: "GH₵120" },
      { name: "Mint Mint", desc: "Cool, sharp, refreshing", price: "GH₵120" },
    ],
  },
];

export const upcomingEvents = [
  {
    title: "Trappers Invasion",
    dateRange: "July 18",
    detail: "Akwesi Amewuga & SOVT Music · Hypemen Stagga Bills, Mera GH, Jay Time · Doors 10PM",
    image: img("event-trappers-invasion.jpg", "Trappers Invasion event flyer for Walako Pub, July 18"),
  },
  {
    title: "Pre Homowo Bash",
    dateRange: "July 26 – 28",
    detail: "DJ Capo & DJ Guest · MC Stagga Bills · Doors 9PM",
    image: img("event-homowo-bash.jpg", "Pre Homowo Bash event flyer for Walako Pub, July 26 to 28"),
  },
];

export const recurringEvents = [
  { day: "Every Friday", name: "Live DJ Night", detail: "Resident DJs, open floor, no cover before 10PM." },
  { day: "Every Saturday", name: "Shisha & Grill", detail: "Suya on the coals, shisha specials till late." },
  { day: "Match Days", name: "Football Nights", detail: "Big screens, jersey nights, drink specials." },
];

export const galleryImages = [
  img("gallery-shisha-lounge.jpg", "Red-lit shisha lounge seating at Walako Pub"),
  img("gallery-live-crowd.jpg", "Crowd with phones raised at a live event"),
  img("gallery-bottle-service.jpg", "Bottle service table with balloons at Walako Pub"),
  img("gallery-cheers-shots.jpg", "Friends toasting shot glasses on a night out"),
  img("bar-counter-neon.jpg", "Green neon-lit bar counter at Walako Pub"),
  img("gallery-shot-celebration.jpg", "Group celebrating with a round of shots"),
  img("gallery-matchday-jersey.jpg", "Guest dancing in a football jersey on match night"),
  img("gallery-hookah-drinks.jpg", "Close-up of hookah and cocktails at Walako Pub"),
];
