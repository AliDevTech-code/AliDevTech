import { motion } from "framer-motion";
import { Check, ExternalLink, ShoppingBag, Tag } from "lucide-react";
import { readyToBuyProjects } from "@/data/showcase";

export function ReadyToBuy() {
  return (
    <section id="ready-to-buy" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6 border-primary/20">
            <ShoppingBag size={16} /> Launch-ready websites
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready-to-Buy <span className="text-primary">Websites</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professionally built websites that are ready to launch today — ideal
            for businesses in Pakistan, the USA and worldwide.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {readyToBuyProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative min-h-[240px] lg:min-h-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/15 mix-blend-overlay z-10"></div>
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white bg-emerald-500/90 backdrop-blur-md border border-emerald-300/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-7 md:p-9 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary/80 mb-1">
                      Ready-to-Buy Website
                    </p>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <Tag className="text-primary shrink-0" size={22} />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5">
                  <span className="text-3xl font-display font-bold text-primary">
                    {project.priceUsd}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({project.pricePkr})
                  </span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <Check size={15} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto pt-5 border-t border-white/10">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 text-white hover:bg-white/15 border border-white/10 font-medium text-sm transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #0070f3)",
                      boxShadow: "0 0 20px rgba(0,212,255,0.25)",
                    }}
                  >
                    <ShoppingBag size={16} /> Contact to Buy
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

          <p className="text-center text-sm text-muted-foreground">
            More ready-to-buy websites are coming soon. Need a custom build?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Request a quote
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
