export type DietaryTag = "V" | "VG" | "GF";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: DietaryTag[];
  image?: string;
  category: "vorspeisen" | "hauptgaenge" | "desserts" | "getraenke";
};

export const menuItems: MenuItem[] = [
  // Vorspeisen
  {
    id: "v1",
    name: "Saison-Ceviche",
    description: "Eingelegtes Gemüse der Saison, fermentierte Sahne, Kräuteröl, knuspriges Buchweizen",
    price: "14,–",
    tags: ["VG", "GF"],
    image: "photo-1476124369491-e7addf5db371",
    category: "vorspeisen",
  },
  {
    id: "v2",
    name: "Rote-Bete-Tatar",
    description: "Nordische Rote Bete, Crème fraîche, Wachtelei, Meerrettich, geröstetes Roggenbrот",
    price: "12,–",
    tags: ["V", "GF"],
    image: "photo-1546069901-ba9599a7e63c",
    category: "vorspeisen",
  },
  {
    id: "v3",
    name: "Stralsunder Hummersuppe",
    description: "Hummer aus der Ostseeregion, Fenchel, Safranschaum, Briochecrouton",
    price: "16,–",
    tags: [],
    image: "photo-1547592166-23ac45744acd",
    category: "vorspeisen",
  },
  // Hauptgaenge
  {
    id: "h1",
    name: "Happy Peas",
    description: "Grüne Erbsen drei Arten, Cashew-Ricotta, geröstete Zwiebeln, Erbsensprossen, Minzöl",
    price: "22,–",
    tags: ["VG", "GF"],
    image: "photo-1540189549336-e6e99c3679fe",
    category: "hauptgaenge",
  },
  {
    id: "h2",
    name: "Kalbsfilet",
    description: "Kalbsfilet vom Mecklenburger Weidekalb, Petersilienwurzelpüree, Morcheln, Jus",
    price: "36,–",
    tags: ["GF"],
    image: "photo-1504674900247-0877df9cc836",
    category: "hauptgaenge",
  },
  {
    id: "h3",
    name: "Waldpilz-Risotto",
    description: "Handverlesene Pilze, Parmesan, Schwarztrüffelöl, frischer Thymian",
    price: "24,–",
    tags: ["V", "GF"],
    image: "photo-1476124369491-e7addf5db371",
    category: "hauptgaenge",
  },
  // Desserts
  {
    id: "d1",
    name: "Fusion de Crème",
    description: "Vanillecreme mit Miso-Karamell, Sake-Gelee, gefriergetrocknete Himbeere",
    price: "11,–",
    tags: ["V", "GF"],
    image: "photo-1565958011703-44f9829ba187",
    category: "desserts",
  },
  {
    id: "d2",
    name: "Schokolade & Rosmarin",
    description: "Dunkle Schokoladenmousse, Rosmarin-Infusion, Meersalzkaramell, knuspriges Amaranth",
    price: "10,–",
    tags: ["VG"],
    image: "photo-1560624052-449f5ddf0c31",
    category: "desserts",
  },
  // Getraenke
  {
    id: "g1",
    name: "Weinbegleitung",
    description: "3 Gläser, sorgfältig ausgewählt zum Menü des Abends",
    price: "28,–",
    tags: ["VG", "GF"],
    category: "getraenke",
  },
  {
    id: "g2",
    name: "Naturweinkarte",
    description: "Unsere Auswahl kleiner, biodynamischer Winzer – auf Anfrage",
    price: "auf Anfrage",
    tags: ["VG", "GF"],
    category: "getraenke",
  },
  {
    id: "g3",
    name: "Hausgemachte Limonaden",
    description: "Rhabarber-Ingwer · Holunder-Limette · Gurke-Minze",
    price: "5,50",
    tags: ["VG", "GF"],
    category: "getraenke",
  },
  {
    id: "g4",
    name: "Filterkaffee & Tee",
    description: "Speciality Coffee, Handbrühe | Biologische Teemischungen",
    price: "4,–",
    tags: ["VG", "GF"],
    category: "getraenke",
  },
];

export const featuredDishes = menuItems.filter((item) =>
  ["h1", "h2", "v1", "d1"].includes(item.id)
);

export const menuValidFrom = "14.04.";
export const menuValidTo = "28.04.2025";
