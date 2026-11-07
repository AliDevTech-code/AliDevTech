// New showcase data (additive). Existing src/data/projects.ts is left untouched.

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
  label?: string;
  ownProject?: boolean;
  forSale?: boolean;
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

const WHATSAPP = "https://wa.me/923063159899";

export const featuredProjects: ShowcaseProject[] = [
  {
    id: "pakstore",
    title: "PakStore",
    description:
      "Complete e-commerce store with product catalog, cart, order tracking and admin panel — built for Pakistani online sellers.",
    categories: ["E-commerce Websites", "SEO Projects"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    liveLink: "https://pakstore.gt.tc/",
    tech: ["PHP", "MySQL", "Admin Panel"],
    orderLink: `${WHATSAPP}?text=${encodeURIComponent(
      "Hi Ali, I want an e-commerce website like PakStore.",
    )}`,
  },
  {
    id: "shopizo",
    title: "Shopizo Mall",
    description:
      "Scalable multi-vendor e-commerce platform with secure checkout, product management and a modern shopping experience.",
    categories: ["E-commerce Websites", "Business Websites"],
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    liveLink: "https://shopizo-mall.web.app",
    tech: ["React", "Firebase", "E-Commerce"],
    orderLink: `${WHATSAPP}?text=${encodeURIComponent(
      "Hi Ali, I want an e-commerce platform like Shopizo Mall.",
    )}`,
  },
  {
    id: "al-chishti",
    title: "Al Chishti Dawakhana",
    description:
      "Professional healthcare website with online consultation booking, service pages and a clean, trustworthy design.",
    categories: ["Business Websites", "SEO Projects"],
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    liveLink: "https://al-chishti-dawakhana.vercel.app",
    tech: ["React", "Vercel", "Booking"],
    orderLink: `${WHATSAPP}?text=${encodeURIComponent(
      "Hi Ali, I want a business website like Al Chishti Dawakhana.",
    )}`,
  },
  {
    id: "promptmaster",
    title: "PromptMaster AI",
    description:
      "AI prompt generator with multiple creative styles, one-click copy and a fast, SEO-friendly interface.",
    categories: ["AI Tools"],
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    liveLink: "https://promptmaster-ai-generator-pro.vercel.app",
    tech: ["React", "AI", "Vercel"],
    orderLink: `${WHATSAPP}?text=${encodeURIComponent(
      "Hi Ali, I want an AI tool website like PromptMaster AI.",
    )}`,
  },
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
  {
    id: "toolshub",
    title: "ToolsHub",
    description:
      "13+ free online calculators and converters engineered for search visibility and organic traffic growth.",
    categories: ["SEO Projects", "Calculator Websites"],
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    liveLink: "https://calculator-seven-pi-12.vercel.app",
    tech: ["React", "Vite", "SEO"],
    orderLink: `${WHATSAPP}?text=${encodeURIComponent(
      "Hi Ali, I want an SEO-optimized tools website like ToolsHub.",
    )}`,
  },
];

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
