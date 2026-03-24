// Projects Data - Add your new projects here!
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  orderLink: string;
  price?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wish Me",
    description: "Beautiful birthday & anniversary wish website with animations, music player & elegant designs — built in PHP.",
    tags: ["PHP", "MySQL", "Birthday Wishes", "Animated"],
    image: "https://images.unsplash.com/photo-1697012700991-d686ce12188e?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "https://wishme.gt.tc/",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20wish%20website%20like%20WishMe"
  },
  {
    id: 2,
    title: "PakStore",
    description: "Full-featured E-commerce store with PHP, MySQL, admin panel, cart system, order tracking & payment integration.",
    tags: ["PHP", "MySQL", "E-Commerce", "Admin Panel"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    liveLink: "https://pakstore.gt.tc/",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20PakStore%20(PKR%2030%2C000)",
    price: "PKR 30,000"
  },
  {
    id: 3,
    title: "Shopizo Mall",
    description: "Full-featured e-commerce platform with cart, payments & admin dashboard — built for scale.",
    tags: ["React", "Firebase", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    liveLink: "https://shopizo-mall.web.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20Shopizo%20Mall"
  },
  {
    id: 4,
    title: "ToolsHub",
    description: "13+ free online calculator & converter tools, fully SEO optimized for maximum organic traffic.",
    tags: ["React", "Vite", "SEO", "Tools"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    liveLink: "https://calculator-seven-pi-12.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20ToolsHub"
  },
  {
    id: 5,
    title: "CalcMaster",
    description: "High-performance calculator web app with unlimited history tracking and clean UI.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80",
    liveLink: "https://calcmastercom.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20CalcMaster"
  },
  {
    id: 6,
    title: "EarnTube",
    description: "Social media platform with video sharing & user profiles — YouTube-style experience.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    liveLink: "https://alidevtech-code.github.io/EarnTube",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20EarnTube"
  },
  {
    id: 7,
    title: "AutoMine",
    description: "Automated PKR mining platform with real-time rewards system & full admin panel.",
    tags: ["React", "Firebase", "Real-time"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    liveLink: "https://auto-mining-bbceb.web.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20AutoMine"
  },
  {
    id: 8,
    title: "Qoinly Game",
    description: "Interactive play & earn web game platform — engaging, rewarding, and fully gamified.",
    tags: ["React", "Firebase", "Gaming"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    liveLink: "https://qoinly.web.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20Qoinly"
  },
  {
    id: 9,
    title: "FoodFly",
    description: "Online food delivery platform with real-time order tracking and restaurant listings.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    liveLink: "https://alidevtech-code.github.io/FoodFly",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20FoodFly"
  },
  {
    id: 10,
    title: "Al Chishti Dawakhana",
    description: "Herbal medicine platform with online consultation booking system for a traditional clinic.",
    tags: ["React", "Vercel", "Booking"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    liveLink: "https://al-chishti-dawakhana.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20similar%20medical%20website"
  },
  {
    id: 11,
    title: "PromptMaster AI",
    description: "AI prompt generator with multiple creative styles & one-click clipboard support.",
    tags: ["React", "AI", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    liveLink: "https://promptmaster-ai-generator-pro.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20an%20AI%20tool%20website"
  },
  {
    id: 12,
    title: "URL Security Scanner",
    description: "Real-time URL threat detection & phishing analyzer — keep your browsing safe.",
    tags: ["React", "Security", "API"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    liveLink: "https://url-security-scanner-dusky.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20security%20tool%20website"
  },
  {
    id: 13,
    title: "PakMobile Store",
    description: "Modern mobile phone store with WhatsApp cart, brand filters & real-time search.",
    tags: ["React", "Tailwind", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    liveLink: "https://pak-mobile-store-two.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20mobile%20store%20website"
  },
  {
    id: 14,
    title: "CryptoKombat Bot",
    description: "Hamster Kombat style Telegram airdrop bot with TON wallet, auto play & referral system.",
    tags: ["Telegram Bot", "TON", "Crypto"],
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&q=80",
    liveLink: "https://t.me/CryptoKombatairdrop_bot",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20Telegram%20bot"
  },
  {
    id: 15,
    title: "AuraPK Perfume Store",
    description: "Premium luxury fragrance store with white-glass UI and direct WhatsApp ordering system.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    liveLink: "https://aurapk.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20the%20AuraPK%20perfume%20store%20website"
  },
  {
    id: 16,
    title: "Fun Tools International",
    description: "A 5-in-1 entertainment suite featuring a Love Calculator, Roast Generator, and WhatsApp Tone Analyzer with a modern responsive UI.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    liveLink: "https://fun-tools.vercel.app/",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20fun%20tools%20website%20like%20Fun%20Tools%20International"
  }
];
