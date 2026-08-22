import santorini from "@/assets/santorini.jpg";
import marrakech from "@/assets/marrakech.jpg";
import dubai from "@/assets/dubai.jpg";
import paris from "@/assets/paris.jpg";
import bali from "@/assets/bali.jpg";
import maldives from "@/assets/maldives.jpg";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  flag: string;
  image: string;
  price: number;
  coords: string;
  description: string;
};

export const destinations: Destination[] = [
  {
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    flag: "🇬🇷",
    image: santorini,
    price: 899,
    coords: "36.39°N · 25.46°E",
    description:
      "Whitewashed villages cling to volcanic cliffs above the endless Aegean, where indigo domes meet sun-bleached stone and every sunset feels rehearsed by the gods.",
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    flag: "🇲🇦",
    image: marrakech,
    price: 499,
    coords: "31.63°N · 7.98°W",
    description:
      "A sensory kaleidoscope of spice markets, riad courtyards and the call to prayer echoing over terracotta walls — then the silent gold of the Agafay desert.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    image: dubai,
    price: 1290,
    coords: "25.20°N · 55.27°E",
    description:
      "A futuristic mirage risen from the desert: record-breaking towers, Persian Gulf beaches, dunes by morning and Michelin dining by night.",
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    flag: "🇫🇷",
    image: paris,
    price: 749,
    coords: "48.85°N · 2.35°E",
    description:
      "The eternal city of light, where Haussmann boulevards unfurl beneath wrought-iron balconies and the Seine threads past centuries of inspiration.",
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    flag: "🇮🇩",
    image: bali,
    price: 1199,
    coords: "8.34°S · 115.09°E",
    description:
      "The Island of the Gods weaves emerald rice terraces, sacred temples and surf-gilded beaches into a single breathing landscape.",
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    flag: "🇲🇻",
    image: maldives,
    price: 1899,
    coords: "3.20°N · 73.22°E",
    description:
      "A constellation of 1,200 islands scattered across turquoise infinity, where overwater villas step straight into a glass-clear lagoon.",
  },
];

export type Pkg = {
  title: string;
  destination: string;
  nights: number;
  price: number;
  image: string;
  includes: string[];
  tag: string;
};

export const packages: Pkg[] = [
  {
    title: "Aegean Slow Escape",
    destination: "Santorini, Greece",
    nights: 5,
    price: 1490,
    image: santorini,
    tag: "Most loved",
    includes: ["Cliffside cave suite", "Private caldera sail", "Assyrtiko tasting", "Airport transfers"],
  },
  {
    title: "Desert & Medina",
    destination: "Marrakech, Morocco",
    nights: 4,
    price: 890,
    image: marrakech,
    tag: "Best value",
    includes: ["Riad with courtyard pool", "Agafay desert camp", "Souk food walk", "Hammam ritual"],
  },
  {
    title: "Lagoon Sanctuary",
    destination: "Maldives",
    nights: 7,
    price: 3450,
    image: maldives,
    tag: "Honeymoon",
    includes: ["Overwater villa", "Seaplane transfer", "Private sandbank dinner", "Daily spa hour"],
  },
  {
    title: "Island of the Gods",
    destination: "Bali, Indonesia",
    nights: 8,
    price: 1980,
    image: bali,
    tag: "Wellness",
    includes: ["Ubud jungle villa", "Sunrise volcano trek", "Temple & offering ritual", "Surf lesson"],
  },
  {
    title: "Skyline & Dunes",
    destination: "Dubai, UAE",
    nights: 4,
    price: 1650,
    image: dubai,
    tag: "City break",
    includes: ["Downtown suite", "Dune drive at dusk", "Fine-dining night", "Marina yacht hour"],
  },
  {
    title: "Paris in Two Acts",
    destination: "Paris, France",
    nights: 3,
    price: 1120,
    image: paris,
    tag: "Romance",
    includes: ["Left Bank boutique hotel", "Museum at dawn", "Seine dinner cruise", "Patisserie class"],
  },
];

export const experiences = [
  {
    title: "Private Caldera Sailing",
    place: "Santorini",
    duration: "6 hours",
    price: 240,
    image: santorini,
    text: "Catamaran along volcanic beaches, hot springs swim and dinner as the sun drops into the Aegean.",
  },
  {
    title: "Agafay Desert Night",
    place: "Marrakech",
    duration: "Overnight",
    price: 180,
    image: marrakech,
    text: "Camel ride into the stone desert, Berber dinner under lanterns and a tent beneath the Milky Way.",
  },
  {
    title: "Sandbank Dining",
    place: "Maldives",
    duration: "3 hours",
    price: 390,
    image: maldives,
    text: "A table for two on a private strip of sand, candlelight and a bioluminescent shoreline after dark.",
  },
  {
    title: "Sunrise at Batur",
    place: "Bali",
    duration: "8 hours",
    price: 95,
    image: bali,
    text: "Pre-dawn volcano trek, breakfast steamed over the crater, then hot springs and coffee terraces.",
  },
  {
    title: "Louvre Before Opening",
    place: "Paris",
    duration: "2 hours",
    price: 210,
    image: paris,
    text: "Walk empty galleries with an art historian before the doors open to everyone else.",
  },
  {
    title: "Dunes by Vintage Land Rover",
    place: "Dubai",
    duration: "5 hours",
    price: 260,
    image: dubai,
    text: "Golden-hour drive across the Al Marmoom reserve, falconry demonstration and desert supper.",
  },
];
