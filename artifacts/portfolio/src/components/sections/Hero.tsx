import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      
      <img 
        src={`${import.meta.env.BASE_URL}images/abstract-bg-1.png`} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-screen"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-2 rounded-full glass-card text-primary font-medium text-sm mb-6 border-primary/20 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
              🚀 Available for Freelance Work
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-tight mb-4 text-white">
              Hello, I'm <br />
              <span className="text-gradient">Mr. Ali</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-[40px]">
              <span className="mr-2">I am a</span>
              <span className="text-white font-display">
                <Typewriter
                  words={['Full Stack Web Developer', 'React.js Specialist', 'UI/UX Enthusiast', 'Problem Solver']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              I build modern, responsive & professional websites. From stunning frontend interfaces to robust backend systems, I turn your ideas into digital reality.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-blue-500 text-primary-foreground shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Hire Me <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/923063159899?text=Hi%20Ali,%20I%20want%20to%20order%20a%20project!%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold bg-white/5 text-white border border-white/10 hover:bg-green-500/10 hover:border-green-500/40 hover:text-green-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L0 24l6.345-1.499A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.667-.518-5.188-1.418l-.371-.22-3.767.89.944-3.663-.242-.378A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Order Now
              </a>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Follow Me</span>
              <div className="h-px w-12 bg-white/20"></div>
              <div className="flex gap-4">
                <a href="https://github.com/AliDevTech-code" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 p-2">
                  <Github size={22} />
                </a>
                <a href="www.linkedin.com/in/muhammad-ali-190204313" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 p-2">
                  <Linkedin size={22} />
                </a>
                <a href="https://wa.me/923063159899" className="text-muted-foreground hover:text-green-500 hover:-translate-y-1 transition-all duration-300 p-2">
                  <MessageCircle size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative elements around image */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-[spin_25s_linear_infinite_reverse]"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-xl"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-[0_0_40px_rgba(0,212,255,0.2)] glass-card z-10 flex items-center justify-center bg-[#b6e3f4]">
                <img 
                  src={`${import.meta.env.BASE_URL}images/mr-ali-hero.png`} 
                  alt="Mr. Ali - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 -right-6 glass-card py-2 px-4 rounded-xl z-20 animate-bounce" style={{animationDuration: '3s'}}>
                <span className="text-xl">✨</span>
              </div>
              <div className="absolute bottom-12 -left-8 glass-card py-2 px-4 rounded-xl z-20 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                <span className="font-bold text-white text-sm">3+ Yrs Exp</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
