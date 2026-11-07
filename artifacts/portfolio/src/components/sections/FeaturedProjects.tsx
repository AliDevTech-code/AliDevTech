import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, FolderOpen } from "lucide-react";
import {
  featuredProjects,
  projectCategories,
  type ProjectCategory,
} from "@/data/showcase";

export function FeaturedProjects() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered =
    active === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.categories.includes(active));

  const visible = filtered;

  return (
    <section
      id="portfolio"
      className="py-24 relative bg-black/40 border-y border-white/5"
    >
      <img
        src={`${import.meta.env.BASE_URL}images/abstract-bg-2.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none mix-blend-screen"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6 border-primary/20">
            <Sparkles size={16} /> Complete portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every live project I have designed, built and launched — for
            businesses in Pakistan, the USA and worldwide.
          </p>
        </motion.div>

        <div className="mb-12 -mx-6 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-2 w-max mx-auto p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
            {projectCategories.map((category) => {
              const isActive = active === category;
              const count =
                category === "All"
                  ? featuredProjects.length
                  : featuredProjects.filter((project) =>
                      project.categories.includes(category),
                    ).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={isActive}
                  className={`relative shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-sm font-medium whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-xl border border-white/25 backdrop-blur-xl"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05))",
                        boxShadow:
                          "0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18), 0 0 18px rgba(0,212,255,0.10)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {category}
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md border ${
                        isActive
                          ? "bg-white/15 text-white border-white/20"
                          : "bg-white/5 text-white/50 border-white/10"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,212,255,0.1)] flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {project.price && (
                    <div className="absolute top-3 right-3 z-30">
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                        style={{
                          background: "linear-gradient(135deg, #00d4ff, #0070f3)",
                          boxShadow: "0 2px 12px rgba(0,212,255,0.5)",
                        }}
                      >
                        {project.price}
                      </span>
                    </div>
                  )}
                  {project.label && (
                    <div className="absolute top-3 left-3 right-3 z-30">
                      <span className="inline-block text-[11px] font-bold px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-primary/40 text-primary">
                        {project.label}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap z-20">
                    {project.tech.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary/80 mb-2">
                    {project.categories.join(" · ")}
                  </p>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-medium text-sm transition-colors"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                    {!project.ownProject && project.orderLink && (
                      <a
                        href={project.orderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-white hover:bg-white/15 border border-white/10 font-medium text-sm transition-colors"
                      >
                        Order Similar
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-10 md:p-14 text-center max-w-2xl mx-auto">
            <FolderOpen className="mx-auto text-primary mb-4" size={34} />
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Blog website projects coming soon
            </h3>
            <p className="text-muted-foreground mb-6">
              I am currently preparing new blog and content website samples. In
              the meantime, I can build a custom blog for you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-blue-400 transition-colors"
            >
              Get a Quote <ArrowRight size={17} />
            </a>
          </div>
        )}

        <div className="mt-14 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #0070f3)",
              color: "#fff",
            }}
          >
            View All Projects <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
