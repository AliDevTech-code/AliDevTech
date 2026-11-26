import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const getBuyLink = (title: string) => "https://wa.me/923063159899?text=" + encodeURIComponent("Hi, I'm interested in buying the " + title + " website/project. Could you please share the price and purchase details?");

export default function Projects() {

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-cyan-50/40 to-white pb-20 pt-8">
      <img src={`${import.meta.env.BASE_URL}images/abstract-bg-2.png`} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.03] mix-blend-screen" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <a href="/#portfolio" className="inline-flex items-center gap-2 rounded-lg border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm text-slate-600 transition hover:bg-white/10 hover:text-slate-900"><ArrowLeft size={17} /> Back to Home</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">All <span className="text-primary">Projects</span></h1>
          <div className="mx-auto mb-6 mt-5 h-1 w-24 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">Explore my websites, stores and digital products. Open any project to view it live.</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">{projects.length} projects</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (index % 10) * 0.04 }} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_14px_38px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img src={project.image} alt={project.title + " project preview"} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full border border-cyan-100 bg-slate-900/70 px-3 py-1 text-[10px] font-semibold text-cyan-100 backdrop-blur-md">{project.tags[0]}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-200">{project.title}</h2>
                <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-6 text-slate-400">{project.description}</p>
                {project.price && <p className="mt-3 text-sm font-bold text-emerald-700">{project.price}</p>}
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tags.slice(0, 3).map(tag => <span key={tag} className="rounded-md border border-white/10 bg-cyan-50 px-2 py-1 text-[10px] text-slate-300">{tag}</span>)}</div>
                <div className="mt-auto mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <a href={project.orderLink || getBuyLink(project.title)} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-300">Buy Now</a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-200">Live View <ExternalLink size={13} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        

        <div className="mt-16 text-center"><a href="/#contact" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#00d4ff,#0070f3)" }}>Let's Work Together →</a></div>
      </div>
    </div>
  );
}
