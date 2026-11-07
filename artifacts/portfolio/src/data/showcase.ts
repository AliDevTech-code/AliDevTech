// Showcase data. The existing project list in src/data/projects.ts is the
// single source of truth for real projects; this file only tags them with
// showcase categories and adds the personal Tesla sample.

import { projects } from "@/data/projects";

export const projectCategories = [
  "All",
  "E-commerce Websites",
  "Business Websites",
  "Blog Websites",
  "AI Tools",
  "Calculator Websites",
  "SEO Projects",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  image: string;
  liveLink: string;
  tech: string[];
  price?: string;
  label?: string;
  ownProject?: boolean;
  orderLink?: string;
}

export interface ReadyToBuyProject {
  id: string;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  priceUsd: string;
  pricePkr: string;
  status: string;
  features: string[];
  orderLink: string;
}

// Every real project is tagged with one or more showcase categories.
const categoriesByProjectId: Record<number, ProjectCategory[]> = {
  1: ["Business Websites"], // Wish Me
  2: ["E-commerce Websites", "SEO Projects"], // PakStore
  3: ["E-commerce Websites"], // Shopizo Mall
  4: ["Calculator Websites", "SEO Projects"], // ToolsHub
  5: ["Calculator Websites"], // CalcMaster
  6: ["Business Websites"], // EarnTube
  7: ["Business Websites"], // AutoMine
  8: ["Business Websites"], // Qoinly Game
  9: ["Business Websites"], // FoodFly
  10: ["Business Websites", "SEO Projects"], // Al Chishti Dawakhana
  11: ["AI Tools"], // PromptMaster AI
  12: ["AI Tools"], // URL Security Scanner
  13: ["E-commerce Websites"], // PakMobile Store
  14: ["AI Tools"], // CryptoKombat Bot
  15: ["E-commerce Websites"], // AuraPK Perfume Store
  16: ["Calculator Websites", "AI Tools"], // Fun Tools International
};

export const featuredProjects: ShowcaseProject[] = [
  ...projects.map((project) => ({
    id: String(project.id),
    title: project.title,
    description: project.description,
    categories: categoriesByProjectId[project.id] ?? ["Business Websites"],
    image: project.image,
    liveLink: project.liveLink,
    tech: project.tags,
    price: project.price,
    orderLink: project.orderLink,
  })),
  {
    id: "tesla-price-calculator",
    title: "Tesla Price Calculator US",
    description:
      "Interactive Tesla pricing calculator for the US market with live trim selection, incentives and monthly payment estimates.",
    categories: ["Calculator Websites"],
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    liveLink: "https://tesla-price-calculator-us.vercel.app/",
    tech: ["React", "TypeScript", "Calculator"],
    label: "My Own Project / Portfolio Sample",
    ownProject: true,
  },
];

const WHATSAPP = "https://wa.me/923063159899";

export const readyToBuyProjects: ReadyToBuyProject[] = [
  {
    id: "mediwell",
    title: "MediWell",
    description:
      "A polished healthcare website ready to launch for clinics, doctors and medical businesses. Fully responsive, fast and search-engine friendly.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    liveLink: "https://mediwell-sigma.vercel.app/",
    priceUsd: "$14.36 USD",
    pricePkr: "approximately PKR 4,000",
    status: "Available for Sale",
    features: [
      "Responsive on every device",
      "Healthcare-focused modern design",
      "SEO-ready page structure",
      "Fast loading performance",
      "Easy to customize",
    ],
    orderLink: `${WHATSAPP}?text=${encodeURIComponent(
      "Hi Ali, I am interested in buying the MediWell website ($14.36 / ~PKR 4,000). Please share the details.",
    )}`,
  },
];
