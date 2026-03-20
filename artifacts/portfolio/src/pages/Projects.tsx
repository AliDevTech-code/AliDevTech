import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";

const projects = [
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
    id: 2,
    title: "Shopizo Mall",
    description: "Full-featured e-commerce platform with cart, payments & admin dashboard — built for scale.",
    tags: ["React", "Firebase", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    liveLink: "https://shopizo-mall.web.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20Shopizo%20Mall"
  },
  {
    id: 3,
    title: "ToolsHub",
    description: "13+ free online calculator & converter tools, fully SEO optimized for maximum organic traffic.",
    tags: ["React", "Vite", "SEO", "Tools"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    liveLink: "https://calculator-seven-pi-12.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20ToolsHub"
  },
  {
    id: 4,
    title: "CalcMaster",
    description: "High-performance calculator web app with unlimited history tracking and clean UI.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80",
    liveLink: "https://calcmastercom.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20CalcMaster"
  },
  {
    id: 5,
    title: "EarnTube",
    description: "Social media platform with video sharing & user profiles — YouTube-style experience.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    liveLink: "https://alidevtech-code.github.io/EarnTube",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20EarnTube"
  },
  {
    id: 6,
    title: "AutoMine",
    description: "Automated PKR mining platform with real-time rewards system & full admin panel.",
    tags: ["React", "Firebase", "Real-time"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    liveLink: "https://auto-mining-bbceb.web.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20AutoMine"
  },
  {
    id: 7,
    title: "Qoinly Game",
    description: "Interactive play & earn web game platform — engaging, rewarding, and fully gamified.",
    tags: ["React", "Firebase", "Gaming"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    liveLink: "https://qoinly.web.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20Qoinly"
  },
  {
    id: 8,
    title: "FoodFly",
    description: "Online food delivery platform with real-time order tracking and restaurant listings.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    liveLink: "https://alidevtech-code.github.io/FoodFly",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project%20like%20FoodFly"
  },
  {
    id: 9,
    title: "Al Chishti Dawakhana",
    description: "Herbal medicine platform with online consultation booking system for a traditional clinic.",
    tags: ["React", "Vercel", "Booking"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    liveLink: "https://al-chishti-dawakhana.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20similar%20medical%20website"
  },
  {
    id: 10,
    title: "PromptMaster AI",
    description: "AI prompt generator with multiple creative styles & one-click clipboard support.",
    tags: ["React", "AI", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    liveLink: "https://promptmaster-ai-generator-pro.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20an%20AI%20tool%20website"
  },
  {
    id: 11,
    title: "URL Security Scanner",
    description: "Real-time URL threat detection & phishing analyzer — keep your browsing safe.",
    tags: ["React", "Security", "API"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    liveLink: "https://url-security-scanner-dusky.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20security%20tool%20website"
  },
  {
    id: 12,
    title: "PakMobile Store",
    description: "Modern mobile phone store with WhatsApp cart, brand filters & real-time search.",
    tags: ["React", "Tailwind", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    liveLink: "https://pak-mobile-store-two.vercel.app",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20mobile%20store%20website"
  },
  {
    id: 13,
    title: "CryptoKombat Bot",
    description: "Hamster Kombat style Telegram airdrop bot with TON wallet, auto play & referral system.",
    tags: ["Telegram Bot", "TON", "Crypto"],
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&q=80",
    liveLink: "https://t.me/CryptoKombatairdrop_bot",
    orderLink: "https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20Telegram%20bot"
  }
];

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L0 24l6.345-1.499A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.667-.518-5.188-1.418l-.371-.22-3.767.89.944-3.663-.242-.378A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function Projects() {
  return (
    <div className="min-h-screen pt-8 pb-20 relative"
      style={{ background: "linear-gradient(180deg, #000a14 0%, #000507 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex items-center gap-4 mb-12 pt-6">
          <a href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
            All <span className="text-primary">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {projects.length} real live projects — all built and deployed by Mr. Ali.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl overflow-hidden flex flex-col h-full group transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,212,255,0.12)]"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 group-hover:opacity-0 transition-opacity duration-500"
                  style={{ background: "rgba(0,212,255,0.12)", mixBlendMode: "overlay" }}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.price && (
                  <div className="absolute top-3 right-3 z-30">
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                      style={{
                        background: "linear-gradient(135deg, #00d4ff, #0070f3)",
                        boxShadow: "0 2px 12px rgba(0,212,255,0.5)"
                      }}
                    >
                      {project.price}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap z-20">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <a
                    href={project.orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium text-sm transition-colors"
                    style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "#00d4ff";
                      (e.currentTarget as HTMLElement).style.color = "#000";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                      (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                    }}
                  >
                    <WaIcon /> Order Now
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-white hover:bg-white/15 border border-white/10 font-medium text-sm transition-colors"
                  >
                    <ExternalLink size={15} /> Visit
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/10 hover:bg-white/5 transition-all">
            <ArrowLeft size={18} /> Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
