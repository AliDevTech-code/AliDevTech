import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import {
  featuredProjects,
  projectCategories,
  type ProjectCategory,
} from "@/data/showcase";

export function FeaturedProjects() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const visible =
    active === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.categories.includes(active));

  const current = visible[activeIndex] ?? visible[0];

  useEffect(() => {
    setActiveIndex(0);
  }, [active]);

  const goTo = (index: number) => {
    if (!visible.length) return;
    setActiveIndex((index + visible.length) % visible.length);
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 relative bg-black/40 border-y border-white/5">
      <img
        src={`${import.meta.env.BASE_URL}images/abstract-bg-2.png`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none mix-blend-screen"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-9 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-5 border-primary/20">
            <Sparkles size={16} /> Complete portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Explore my real-world websites and web applications — select any preview below to view its details.
          </p>
        </motion.div>

        <div className="mb-8 -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-2 w-max mx-auto p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            {projectCategories.map((category) => {
              const selected = active === category;
              const count = category === "All"
                ? featuredProjects.length
                : featuredProjects.filter((project) => project.categories.includes(category)).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={selected}
                  className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${selected ? "bg-cyan-400/15 text-cyan-300 border border-cyan-300/30" : "text-muted-foreground hover:text-white border border-transparent"}`}
                >
                  {category} <span className="ml-1 text-[10px] opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {current && (
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0c1420] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="grid lg:grid-cols-[1.35fr_0.85fr] min-h-[300px] md:min-h-[390px]">
                <div className="relative min-h-[230px] md:min-h-[340px] bg-black/30 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.id}
                      src={current.image}
                      alt={`${current.title} project preview`}
                      loading="lazy"
                      initial={{ opacity: 0, scale: 1.025 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/65 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {current.tech.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold bg-black/65 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-9 flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300 mb-3">
                    Project {activeIndex + 1} of {visible.length}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">{current.categories.join(" · ")}</p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{current.title}</h3>
                  <p className="text-sm md:text-base leading-7 text-slate-300/80 mb-7">{current.description}</p>
                  {current.label && <p className="text-xs text-cyan-300 mb-4">{current.label}</p>}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a href={current.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    {!current.ownProject && current.orderLink && (
                      <a href={current.orderLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition">
                        Order Similar
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute top-3 right-3 md:top-4 md:right-4 flex gap-2">
                <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous project" className="w-10 h-10 rounded-full bg-black/65 border border-white/20 text-white backdrop-blur-md flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition">
                  <ArrowLeft size={18} />
                </button>
                <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next project" className="w-10 h-10 rounded-full bg-black/65 border border-white/20 text-white backdrop-blur-md flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-5 flex gap-3 overflow-x-auto pb-3 [scrollbar-width:thin]">
              {visible.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Show ${project.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`group relative shrink-0 w-28 sm:w-36 rounded-xl overflow-hidden border-2 text-left transition-all ${index === activeIndex ? "border-cyan-400 shadow-[0_0_18px_rgba(0,212,255,0.2)] opacity-100" : "border-white/10 opacity-55 hover:opacity-100 hover:border-white/30"}`}
                >
                  <img src={project.image} alt="" loading="lazy" className="w-full h-16 sm:h-20 object-cover" />
                  <span className="block px-2 py-2 text-[10px] sm:text-xs font-semibold text-white truncate bg-[#0b111b]">{project.title}</span>
                  {index === activeIndex && <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(0,212,255,0.8)]" />}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-9 text-center">
          <a href="/projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]" style={{ background: "linear-gradient(135deg, #00d4ff, #0070f3)", color: "#fff" }}>
            View All Projects <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
