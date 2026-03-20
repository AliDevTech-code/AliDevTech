import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React.js", percentage: 92 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "Next.js", percentage: 85 },
  { name: "TypeScript", percentage: 88 },
  { name: "Node.js", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "PostgreSQL", percentage: 82 },
  { name: "Git/GitHub", percentage: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-primary">Skills</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I work with on a daily basis to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-lg font-medium text-gray-200 group-hover:text-primary transition-colors">{skill.name}</h4>
                <span className="text-sm font-bold text-primary">{skill.percentage}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
