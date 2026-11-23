import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { featuredProjects } from "@/data/showcase";

const getBuyLink = (title: string) => "https://wa.me/923063159899?text=" + encodeURIComponent("Hi, I'm interested in buying the " + title + " website/project. Could you please share the price and purchase details?");

function ProjectCard({ project, index }: { project: (typeof featuredProjects)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.035 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101a29] shadow-[0_14px_38px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_18px_45px_rgba(0,0,0,.38)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img src={project.image} alt={project.title + " project preview"} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/65 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-semibold text-cyan-100 backdrop-blur-md">{project.categories[0]}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-200">{project.title}</h3>
        <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tag) => <span key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-slate-300">{tag}</span>)}
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4 mt-5">
          <a href={getBuyLink(project.title)} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-300">Buy Now</a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-200">
            Live View <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? featuredProjects : featuredProjects.slice(0, 10);

  return (
    <section id="portfolio" className="relative overflow-hidden border-y border-white/[0.07] bg-[#070b12] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center md:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200"><Sparkles size={14} /> Selected work</div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Projects that <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">make an impact.</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Explore websites, online stores and digital tools I've built.</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{featuredProjects.length} projects · Product-style showcase</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>

        {featuredProjects.length > 10 && (
          <div className="mt-12 text-center">
            <button type="button" onClick={() => setShowAll((value) => !value)} className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/[0.08] px-7 py-3.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15">
              {showAll ? "Show Less" : `Show All ${featuredProjects.length} Projects`} <ArrowRight size={16} className={showAll ? "rotate-[-90deg]" : ""} />
            </button>
          </div>
        )}
        <div className="mt-8 text-center"><a href="/#contact" className="text-sm font-semibold text-slate-400 transition hover:text-cyan-200">Need a website? Let's work together →</a></div>
      </div>
    </section>
  );
}
