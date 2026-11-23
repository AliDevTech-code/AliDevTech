import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPython,
  SiPhp,
  SiFlutter,
  SiDart,
} from "react-icons/si";

const skillsData = [
  { name: "HTML5", percentage: 95, icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", percentage: 95, icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", percentage: 90, icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", percentage: 92, icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", percentage: 95, icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", percentage: 85, icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", percentage: 88, icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", percentage: 85, icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", percentage: 75, icon: SiPython, color: "#3776AB" },
  { name: "PHP", percentage: 78, icon: SiPhp, color: "#777BB4" },
  { name: "Flutter", percentage: 72, icon: SiFlutter, color: "#02569B" },
  { name: "Dart", percentage: 72, icon: SiDart, color: "#0175C2" },
  { name: "MongoDB", percentage: 80, icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", percentage: 82, icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", percentage: 90, icon: SiGit, color: "#F05032" },
  { name: "GitHub", percentage: 90, icon: SiGithub, color: "#FFFFFF" },
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
            Technologies and tools I use to build modern, responsive websites and applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {skillsData.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                      <SkillIcon className="text-2xl" style={{ color: skill.color }} aria-hidden="true" />
                    </span>
                    <h4 className="text-lg font-medium text-gray-200 group-hover:text-primary transition-colors">{skill.name}</h4>
                  </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
