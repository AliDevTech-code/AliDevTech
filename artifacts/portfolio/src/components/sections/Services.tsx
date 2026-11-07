import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  Calculator,
  Layers,
  PenLine,
  Search,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "Blog Website Development",
    description:
      "Fast, SEO-friendly blog websites with clean publishing workflows, category structure and monetization-ready layouts.",
    icon: PenLine,
  },
  {
    title: "Business Website Development",
    description:
      "Professional business websites that build trust, generate leads and turn visitors into paying customers.",
    icon: Building2,
  },
  {
    title: "E-commerce Website Development",
    description:
      "Complete online stores with product management, cart, secure checkout, order tracking and admin controls.",
    icon: ShoppingCart,
  },
  {
    title: "AI Tools Development",
    description:
      "Custom AI-powered tools and generators with modern interfaces, API integrations and smooth user experiences.",
    icon: Bot,
  },
  {
    title: "Calculator Website Development",
    description:
      "Accurate, high-performance calculators and converters built for user engagement and organic search traffic.",
    icon: Calculator,
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored web apps with authentication, dashboards, databases and automation built around your business workflow.",
    icon: Layers,
  },
  {
    title: "SEO-Optimized Websites",
    description:
      "Technical SEO, fast load times, structured data and clean architecture designed to rank higher on Google.",
    icon: Search,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 relative bg-black/40 border-y border-white/5"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end web development for businesses in Pakistan, the USA and
            worldwide — from strategy and design to development and SEO.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,212,255,0.08)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #0070f3)",
              color: "#fff",
            }}
          >
            Hire Me / Get a Quote <ArrowRight size={18} />
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Free consultation · Clear timelines · Long-term support
          </p>
        </motion.div>
      </div>
    </section>
  );
}
