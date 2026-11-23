import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 10);

  return (
    <div className="relative min-h-screen bg-[linear-gradient(180deg,#0a0a0a_0%,#111827_50%,#0a0a0a_100%)] pb-20 pt-8">
      <img src={`${import.meta.env.BASE_URL}images/abstract-bg-2.png`} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.03] mix-blend-screen" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <a href="/#portfolio" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"><ArrowLeft size={17} /> Back to Home</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">All <span className="text-primary">Projects</span></h1>
          <div className="mx-auto mb-6 mt-5 h-1 w-24 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400">Explore my websites, stores and digital products. Open any project to view it live.</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{projects.length} projects</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (index % 10) * 0.04 }} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101a29] shadow-[0_14px_38px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img src={project.image} alt={project.title + " project preview"} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-semibold text-cyan-100 backdrop-blur-md">{project.tags[0]}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-200">{project.title}</h2>
                <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tags.slice(0, 3).map(tag => <span key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-slate-300">{tag}</span>)}</div>
                <div className="mt-auto mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div><p className="text-[10px] uppercase tracking-wider text-slate-500">Price</p><p className="mt-1 text-sm font-semibold text-cyan-200">{project.price || "Price on request"}</p></div>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-200">Live View <ExternalLink size={13} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {projects.length > 10 && <div className="mt-12 text-center"><button type="button" onClick={() => setShowAll(value => !value)} className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/[0.08] px-7 py-3.5 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/15">{showAll ? "Show Less" : `Show All ${projects.length} Projects`} <ArrowRight size={16} /></button></div>}

        <div className="mt-16 text-center"><a href="/#contact" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#00d4ff,#0070f3)" }}>Let's Work Together →</a></div>
      </div>
    </div>
  );
}
