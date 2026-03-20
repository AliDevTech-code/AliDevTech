import { motion } from "framer-motion";
import { CheckCircle2, Code2, Users, Briefcase } from "lucide-react";

export function About() {
  const stats = [
    { icon: Briefcase, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Code2, value: "3+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden glass-card p-2 relative z-10 group">
              {/* about profile working on laptop */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                alt="Developer working" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Decorative block behind image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-white">I'm a passionate web developer building modern digital experiences.</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              With over 3 years of experience in the web development industry, I specialize in creating stunning, user-friendly, and highly functional websites and applications. I work primarily with React, Node.js, and modern frontend technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Whether you need a simple landing page to showcase your business or a complex full-stack web application, I have the skills and dedication to help you succeed online. I don't just write code; I solve problems.
            </p>

            <ul className="space-y-3 mb-10">
              {['Clean, maintainable, and scalable code', 'Responsive design for all devices', 'SEO optimized architecture', 'Fast loading and performance focused'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl text-center hover:-translate-y-1 transition-transform duration-300 border-primary/20 bg-primary/5">
                  <div className="w-12 h-12 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                    <stat.icon size={24} />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
