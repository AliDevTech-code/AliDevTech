import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  A11y,
  EffectFade,
  FreeMode,
  Keyboard,
  Thumbs,
} from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import {
  featuredProjects,
  projectCategories,
  type ProjectCategory,
} from "@/data/showcase";

export function FeaturedProjects() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperInstance | null>(null);

  const visible = useMemo(
    () => active === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.categories.includes(active)),
    [active],
  );
  const current = visible[activeIndex] ?? visible[0];

  const selectCategory = (category: ProjectCategory) => {
    if (category === active) return;
    setMainSwiper(null);
    setThumbsSwiper(null);
    setActiveIndex(0);
    setActive(category);
  };

  return (
    <section id="portfolio" className="relative overflow-hidden border-y border-white/[0.07] bg-[#070b12] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col items-center text-center md:mb-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <Sparkles size={14} /> Selected work
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Projects that <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">make an impact.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of websites and digital products built with care — from online stores to custom web applications.
          </p>
          <div className="mt-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            <span className="h-px w-9 bg-cyan-400/50" />
            {featuredProjects.length} projects
            <span className="h-px w-9 bg-cyan-400/50" />
          </div>
        </motion.div>

        <div className="mb-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max min-w-full items-center justify-center gap-2">
            {projectCategories.map((category) => {
              const selected = active === category;
              const count = category === "All"
                ? featuredProjects.length
                : featuredProjects.filter((project) => project.categories.includes(category)).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  aria-pressed={selected}
                  className={[
                    "whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm",
                    selected
                      ? "border-cyan-300/50 bg-cyan-300 text-[#06111d] shadow-[0_5px_24px_rgba(34,211,238,0.2)]"
                      : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-300/30 hover:bg-cyan-300/[0.07] hover:text-white",
                  ].join(" ")}
                >
                  {category}
                  <span className={["ml-2 text-[10px]", selected ? "text-slate-700" : "text-slate-500"].join(" ")}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {current && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-6xl"
          >
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0b1421] shadow-[0_30px_100px_rgba(0,0,0,0.48)] sm:rounded-[32px]">
              <Swiper
                key={active}
                modules={[Thumbs, EffectFade, Keyboard, A11y]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                speed={650}
                loop={visible.length > 1}
                keyboard={{ enabled: true }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                onSwiper={setMainSwiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="featured-project-main"
              >
                {visible.map((project, index) => (
                  <SwiperSlide key={project.id}>
                    <article className="relative min-h-[470px] overflow-hidden sm:min-h-[540px] lg:min-h-[590px]">
                      <img
                        src={project.image}
                        alt={project.title + " website preview"}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#050a12]/95 via-[#07111d]/75 to-[#07111d]/10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/95 via-transparent to-[#050a12]/10" />

                      <div className="absolute left-5 right-5 top-5 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8">
                        <div className="flex flex-wrap gap-2">
                          {project.categories.slice(0, 2).map((category) => (
                            <span key={category} className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
                              {category}
                            </span>
                          ))}
                        </div>
                        <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-xs text-white/75 backdrop-blur-md">
                          {String(index + 1).padStart(2, "0")} <span className="text-white/35">/</span> {String(visible.length).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6 sm:p-10 lg:p-12">
                        <div className="max-w-2xl">
                          <div className="mb-4 flex flex-wrap gap-2">
                            {project.tech.slice(0, 4).map((tech) => (
                              <span key={tech} className="rounded-md border border-cyan-200/20 bg-cyan-200/[0.08] px-2.5 py-1 text-[10px] font-semibold text-cyan-100 sm:text-xs">{tech}</span>
                            ))}
                          </div>
                          <h3 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{project.title}</h3>
                          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
                          {project.label && <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">{project.label}</p>}
                          <div className="mt-7 flex flex-wrap gap-3">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-[#06111d] shadow-[0_8px_28px_rgba(34,211,238,0.2)] transition hover:-translate-y-0.5 hover:bg-cyan-200">
                              View Live Website <ExternalLink size={16} />
                            </a>
                            {!project.ownProject && project.orderLink && (
                              <a href={project.orderLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10">
                                Build Similar
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute bottom-6 right-5 z-20 hidden gap-2 sm:flex lg:bottom-9 lg:right-10">
                <button type="button" onClick={() => mainSwiper?.slidePrev()} aria-label="Previous project" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-lg transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#06111d]">
                  <ArrowLeft size={19} />
                </button>
                <button type="button" onClick={() => mainSwiper?.slideNext()} aria-label="Next project" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-lg transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#06111d]">
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Explore projects</p>
                <p className="mt-1 text-[11px] text-slate-600">Tap a preview to jump to that project</p>
              </div>
              <div className="flex gap-2 sm:hidden">
                <button type="button" onClick={() => mainSwiper?.slidePrev()} aria-label="Previous project" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white">
                  <ArrowLeft size={17} />
                </button>
                <button type="button" onClick={() => mainSwiper?.slideNext()} aria-label="Next project" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white">
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <Swiper
              key={"thumbs-" + active}
              modules={[Thumbs, FreeMode, A11y]}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress
              freeMode
              spaceBetween={12}
              slidesPerView="auto"
              breakpoints={{ 640: { spaceBetween: 14 } }}
              className="featured-project-thumbs mt-4 !overflow-visible"
            >
              {visible.map((project, index) => (
                <SwiperSlide key={project.id} className="!h-auto !w-[142px] sm:!w-[184px]">
                  <button
                    type="button"
                    onClick={() => mainSwiper?.slideToLoop(index)}
                    aria-label={"Show " + project.title}
                    className="group w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d1725] text-left transition hover:-translate-y-1 hover:border-cyan-300/40"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                      <img src={project.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/15 transition group-hover:bg-transparent" />
                    </div>
                    <div className="flex min-h-[48px] items-center justify-between gap-2 px-3 py-2.5">
                      <span className="truncate text-[11px] font-semibold text-slate-300 group-hover:text-white sm:text-xs">{project.title}</span>
                      <span className="shrink-0 font-mono text-[10px] text-slate-600">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <a href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.07] px-6 py-3.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.13]">
            Browse complete portfolio <ArrowRight size={17} />
          </a>
        </div>
      </div>
      <style>{".featured-project-thumbs .swiper-slide-thumb-active button{border-color:rgba(103,232,249,.9);box-shadow:0 0 0 1px rgba(103,232,249,.35),0 8px 28px rgba(34,211,238,.12)} .featured-project-thumbs .swiper-slide-thumb-active button span{color:#a5f3fc}"}</style>
    </section>
  );
}
