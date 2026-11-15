import { useState } from "react";
import { motion } from "framer-motion";
import { A11y, EffectCoverflow, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { featuredProjects, projectCategories, type ProjectCategory, type ShowcaseProject } from "@/data/showcase";

function ProjectCarousel({ title, projects }: { title: string; projects: ShowcaseProject[] }) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  if (!projects.length) return null;

  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-7 flex items-end justify-between gap-4 px-1">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">Explore collection</p>
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h3>
          <p className="mt-2 text-xs text-slate-500">{projects.length} {projects.length === 1 ? "project" : "projects"} · Swipe to explore</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => swiper?.slidePrev()} aria-label={"Previous " + title} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => swiper?.slideNext()} aria-label={"Next " + title} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"><ArrowRight size={17} /></button>
        </div>
      </div>

      <Swiper
        modules={[EffectCoverflow, Keyboard, A11y]}
        effect="coverflow"
        centeredSlides
        grabCursor
        loop={projects.length > 2}
        speed={650}
        keyboard={{ enabled: true }}
        slidesPerView={1.35}
        spaceBetween={-24}
        coverflowEffect={{ rotate: 24, stretch: 0, depth: 170, modifier: 1.15, slideShadows: false }}
        breakpoints={{
          480: { slidesPerView: 1.65, spaceBetween: -34 },
          768: { slidesPerView: 2.35, spaceBetween: -42 },
          1024: { slidesPerView: 2.8, spaceBetween: -54 },
        }}
        onSwiper={setSwiper}
        className="portfolio-coverflow !overflow-visible"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} className="!h-auto">
            <article className="group relative h-[330px] overflow-hidden rounded-2xl border border-white/15 bg-[#0c1726] shadow-[0_18px_55px_rgba(0,0,0,.38)] transition-all duration-500 sm:h-[390px] lg:h-[430px]">
              <img src={project.image} alt={project.title + " website project preview"} loading="lazy" className="portfolio-coverflow-image absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-[#06101c]/45 to-black/5" />
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-cyan-100 backdrop-blur-md">{project.categories[0]}</span>
                <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur-md">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap gap-1.5">{project.tech.slice(0, 3).map((tech) => <span key={tech} className="rounded-md border border-cyan-200/20 bg-cyan-200/10 px-2 py-1 text-[9px] font-semibold text-cyan-100 backdrop-blur-sm">{tech}</span>)}</div>
                <h4 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">{project.title}</h4>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-300 sm:text-sm">{project.description}</p>
                {project.label && <p className="mt-2 text-[9px] font-semibold uppercase tracking-wider text-cyan-300">{project.label}</p>}
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-3.5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-200">View Live <ExternalLink size={13} /></a>
                  {!project.ownProject && project.orderLink && <a href={project.orderLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">Build Similar</a>}
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .portfolio-coverflow .swiper-slide { transition: filter .45s ease, opacity .45s ease; }
        .portfolio-coverflow .swiper-slide:not(.swiper-slide-active) { opacity: .72; }
        .portfolio-coverflow .swiper-slide:not(.swiper-slide-active) .portfolio-coverflow-image { filter: blur(2.5px) brightness(.62); }
        .portfolio-coverflow .swiper-slide-active { opacity: 1; z-index: 2; }
        .portfolio-coverflow .swiper-slide-active article { border-color: rgba(103,232,249,.72); box-shadow: 0 0 0 1px rgba(103,232,249,.22), 0 24px 75px rgba(0,0,0,.5), 0 0 38px rgba(34,211,238,.12); }
        @media (prefers-reduced-motion: reduce) { .portfolio-coverflow .swiper-slide, .portfolio-coverflow-image { transition: none !important; } }
      `}</style>
    </div>
  );
}

export function FeaturedProjects() {
  const categories = projectCategories.filter((category) => category !== "All") as ProjectCategory[];
  return (
    <section id="portfolio" className="relative overflow-hidden border-y border-white/[0.07] bg-[#070b12] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40" />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="mb-14 flex flex-col items-center text-center md:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200"><Sparkles size={14} /> Selected work</div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Projects that <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">make an impact.</span></h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Explore my work in interactive 3D collections. Swipe through each category to discover websites and digital products built with care.</p>
          <div className="mt-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500"><span className="h-px w-9 bg-cyan-400/50" />{featuredProjects.length} projects · {categories.length} categories<span className="h-px w-9 bg-cyan-400/50" /></div>
        </motion.div>
        <ProjectCarousel title="All Projects" projects={featuredProjects} />
        {categories.map((category) => (
          <ProjectCarousel key={category} title={category} projects={featuredProjects.filter((project) => project.categories.includes(category))} />
        ))}
        <div className="mt-12 text-center"><a href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.07] px-6 py-3.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.13]">Browse complete portfolio <ArrowRight size={17} /></a></div>
      </div>
    </section>
  );
}
