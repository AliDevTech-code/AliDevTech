import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-black/40 border-y border-white/5">
      <img 
        src={`${import.meta.env.BASE_URL}images/abstract-bg-2.png`} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none mix-blend-screen"
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            These are my actual live projects — all built and deployed by me. Click "Visit" to see them live.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
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
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {(project as any).price && (
                  <div className="absolute top-3 right-3 z-30">
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                      style={{
                        background: "linear-gradient(135deg, #00d4ff, #0070f3)",
                        boxShadow: "0 2px 12px rgba(0,212,255,0.5)"
                      }}
                    >
                      {(project as any).price}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap z-20">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <a 
                    href={project.orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-medium text-sm transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L0 24l6.345-1.499A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.667-.518-5.188-1.418l-.371-.22-3.767.89.944-3.663-.242-.378A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                    Order Now
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
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]"
            style={{ background: "linear-gradient(135deg, #00d4ff, #0070f3)", color: "#fff" }}
          >
            View All {16} Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
