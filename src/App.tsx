/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Database, 
  Server, 
  Laptop, 
  Send, 
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Music,
  Gamepad,
  Lightbulb,
  Rocket,
  Globe,
  Smartphone
} from 'lucide-react';

const projects = [
  {
    title: "Shopizo Mall - E-commerce Platform",
    description: "Full-featured e-commerce platform with payment integration, cart management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "Firebase", "Stripe"],
    live: "https://shopizo-mall.web.app/",
    orderText: "Hi Muhammad Ali, I want to order E-Commerce Platform project"
  },
  {
    title: "CalcMaster - Unlimited Calculator",
    description: "A high-performance, precision calculator web app designed for complex mathematical computations with unlimited history.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://calcmastercom.vercel.app/",
    orderText: "Hi Muhammad Ali, I want to order CalcMaster project"
  },
  {
    title: "EarnTube - Social Media Platform",
    description: "Modern social media platform with video sharing, user profiles, and interactive features.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    live: "https://alidevtech-code.github.io/EarnTube/",
    orderText: "Hi Muhammad Ali, I want to order EarnTube project"
  },
  {
    title: "AutoMine - PKR Mining Platform",
    description: "Automated mining platform with real-time rewards, integrated payment processing, and admin panel.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    live: "https://auto-mining-bbceb.web.app/",
    orderText: "Hi Muhammad Ali, I want to order AutoMine project"
  },
  {
    title: "Qoinly Game - Play & Earn",
    description: "An engaging web-based game platform where users can play and experience interactive gameplay. Replaced TaskMate Treasure as requested.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    tags: ["Game Dev", "JavaScript", "Interactive", "Web App"],
    live: "https://qoinly.web.app/",
    orderText: "Hi Muhammad Ali, I want to inquire about the Qoinly Game project"
  },
  {
    title: "FoodFly - Online Food Delivery",
    description: "Complete food delivery platform with restaurant listings, menu management, and real-time order tracking.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    live: "https://alidevtech-code.github.io/FoodFly/",
    orderText: "Hi Muhammad Ali, I want to order FoodFly project"
  },
  {
    title: "Al Chishti Dawakhana - Herbal Medicine",
    description: "Online platform for traditional herbal medicine practice featuring consultation booking and product showcases.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    live: "https://al-chishti-dawakhana.vercel.app/",
    orderText: "Hi Muhammad Ali, I want to order Al Chishti project"
  },
  {
    title: "PromptMaster AI - Generator",
    description: "AI prompt generator platform with multiple artistic styles and instant copy-to-clipboard functionality.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    live: "https://promptmaster-ai-generator-pro.vercel.app/",
    orderText: "Hi Muhammad Ali, I want to order PromptMaster AI project"
  },
  {
    title: "URL Security Scanner",
    description: "Web application that analyzes URLs in real-time to detect security threats and phishing attempts.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Security"],
    live: "https://url-security-scanner-dusky.vercel.app",
    orderText: "Hi Muhammad Ali, I want to order URL Scanner project"
  }
];

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 75 }
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Vercel/Netlify", level: 85 },
    { name: "Postman", level: 80 },
    { name: "NPM", level: 80 }
  ]
};

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'MERN Stack Developer'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1));
        if (typingText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
        if (typingText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, textIndex]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent selection:text-bg-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${scrolled ? 'py-4 bg-bg-primary/95 backdrop-blur-md shadow-xl' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 rounded-full border-2 border-accent overflow-hidden bg-bg-secondary flex items-center justify-center">
              <img 
                src="/ali-logo.png" 
                alt="Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/ali/100";
                }}
              />
            </div>
            <span className="font-mono text-xl font-bold text-accent tracking-tighter">{"{ MUHAMMAD ALI }"}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'projects', 'order-website', 'skills', 'contact'].map((item, idx) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className="group flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
              >
                <span className="font-mono text-accent text-xs">0{idx + 1}.</span>
                <span className="capitalize">{item.replace('-', ' ')}</span>
              </button>
            ))}
          </div>

          <button className="md:hidden text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-bg-primary/80 backdrop-blur-sm md:hidden"
            />
            
            {/* Menu Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm z-50 bg-bg-secondary flex flex-col items-center justify-center gap-8 md:hidden shadow-2xl border-l border-bg-tertiary"
            >
              <button 
                className="absolute top-8 right-8 text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={32} />
              </button>

              <div className="flex flex-col items-center gap-8">
                {['home', 'about', 'projects', 'order-website', 'skills', 'contact'].map((item, idx) => (
                  <motion.button 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    onClick={() => scrollTo(item)}
                    className="flex flex-col items-center gap-2 text-2xl font-bold hover:text-accent transition-colors group"
                  >
                    <span className="font-mono text-accent text-sm group-hover:scale-110 transition-transform">0{idx + 1}.</span>
                    <span className="capitalize">{item.replace('-', ' ')}</span>
                  </motion.button>
                ))}
              </div>

              <div className="absolute bottom-12 flex gap-6">
                <a href="https://github.com/AliDevTech-code" target="_blank" className="text-text-secondary hover:text-accent transition-all"><Github size={24} /></a>
                <a href="https://wa.me/923063159899" target="_blank" className="text-text-secondary hover:text-accent transition-all"><WhatsAppIcon size={24} /></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-accent mb-4 flex items-center gap-2">
            <span className="wave text-2xl">👋</span> Hi, my name is
          </p>
          <h1 className="text-5xl md:text-8xl font-extrabold text-accent mb-4 tracking-tight">
            Muhammad Ali
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-text-secondary mb-8">
            I'm a <span className="text-accent border-r-4 border-accent pr-2 animate-pulse">{typingText}</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mb-12 leading-relaxed">
            I'm a passionate developer specializing in building exceptional digital experiences. 
            Currently focused on creating responsive full-stack web applications with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 border-2 border-accent text-accent font-bold rounded hover:bg-accent/10 transition-all flex items-center gap-2"
            >
              <Code2 size={20} /> View My Work
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 border-2 border-text-secondary text-text-primary font-bold rounded hover:border-accent hover:text-accent transition-all flex items-center gap-2"
            >
              <Send size={20} /> Get In Touch
            </button>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/AliDevTech-code" target="_blank" className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all"><Github size={24} /></a>
            <a href="#" className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all"><Linkedin size={24} /></a>
            <a href="https://wa.me/923063159899" target="_blank" className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all"><WhatsAppIcon size={24} /></a>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce text-accent">
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-accent text-xl">02.</span>
          <h2 className="text-3xl font-bold text-text-primary">Who Am I?</h2>
          <div className="h-px bg-bg-tertiary flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <h3 className="text-accent text-xl font-bold">The Journey So Far</h3>
            <p>
              Started with a curiosity about how websites work, turned that into late-night coding sessions, and
              now I'm building full-stack applications that solve real problems.
            </p>
            <p>
              Every project teaches me something new. Every bug makes me better. Every solution brings that rush
              that keeps me coming back for more.
            </p>
            <p>
              First line of code? A "Hello World" in HTML. Still gets me hyped.
            </p>

            <div className="pt-6">
              <h4 className="text-text-primary font-bold mb-4">When I'm Not Coding</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <BookOpen size={18} />, label: "Learning" },
                  { icon: <Music size={18} />, label: "Music" },
                  { icon: <Gamepad size={18} />, label: "Gaming" },
                  { icon: <Lightbulb size={18} />, label: "Innovation" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-bg-secondary rounded-lg border border-transparent hover:border-accent transition-all">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-bg-secondary p-8 rounded-2xl border border-bg-tertiary">
            <h3 className="font-mono text-accent mb-8 flex items-center gap-2">
              <Terminal size={20} /> &lt;Tech Stack/&gt;
            </h3>
            <div className="space-y-6">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-text-primary font-medium">{skill.name}</span>
                    <span className="font-mono text-accent">{skill.level}%</span>
                  </div>         
                  <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-accent-hover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { val: "50+", label: "Projects" },
                { val: "500+", label: "Commits" },
                { val: "24/7", label: "Learning" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-bg-primary rounded-xl border border-bg-tertiary hover:border-accent transition-all">
                  <div className="text-2xl font-bold text-accent font-mono">{stat.val}</div>
                  <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-xl">03.</span>
            <h2 className="text-3xl font-bold text-text-primary">Things I've Built</h2>
            <div className="h-px bg-bg-tertiary flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-bg-primary rounded-2xl overflow-hidden border border-bg-tertiary hover:border-accent hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.live} target="_blank" className="p-3 bg-accent text-bg-primary rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                    <a href={`https://wa.me/923063159899?text=${encodeURIComponent(project.orderText)}`} target="_blank" className="p-3 bg-green-500 text-white rounded-full hover:scale-110 transition-transform"><WhatsAppIcon size={20} /></a>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={`https://wa.me/923063159899?text=${encodeURIComponent(project.orderText)}`}
                      target="_blank"
                      className="flex-1 py-2 bg-green-500/10 text-green-500 text-xs font-bold rounded border border-green-500/20 hover:bg-green-500 hover:text-white transition-all text-center flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon size={14} /> Order
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      className="flex-1 py-2 bg-bg-tertiary text-text-primary text-xs font-bold rounded border border-transparent hover:border-accent hover:text-accent transition-all text-center flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Website Form Section */}
      <section id="order-website" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-accent text-xl">04.</span>
          <h2 className="text-3xl font-bold text-text-primary">Order Your Website</h2>
          <div className="h-px bg-bg-tertiary flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent">Ready to launch your project?</h3>
            <p className="text-text-secondary leading-relaxed">
              Fill out this form to tell me exactly what kind of website you need. 
              Whether it's an E-commerce store, a Portfolio, or a Custom Web App, 
              I'll build it professionally and fast.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <Rocket size={18} />, text: "Fast Delivery" },
                { icon: <Globe size={18} />, text: "SEO Optimized" },
                { icon: <Smartphone size={18} />, text: "Fully Responsive" },
                { icon: <Code2 size={18} />, text: "Clean Code" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-primary">
                  <span className="text-accent">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData);
              const whatsappMessage = `*NEW WEBSITE ORDER*%0A%0A*Client Name:* ${data.clientName}%0A*Website Type:* ${data.siteType}%0A*Budget:* ${data.budget}%0A*Features:* ${data.features}%0A*Description:* ${data.description}`;
              window.open(`https://wa.me/923063159899?text=${whatsappMessage}`, '_blank');
            }}
            className="bg-bg-secondary p-8 rounded-3xl border border-bg-tertiary shadow-2xl space-y-4"
          >
            <div className="space-y-2">
              <label className="text-xs text-text-secondary uppercase tracking-widest font-bold">Your Name</label>
              <input name="clientName" required className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors" placeholder="Enter your name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-text-secondary uppercase tracking-widest font-bold">Website Type</label>
                <select name="siteType" className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors">
                  <option>E-commerce</option>
                  <option>Portfolio</option>
                  <option>Business Site</option>
                  <option>Landing Page</option>
                  <option>Custom App</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-text-secondary uppercase tracking-widest font-bold">Budget (Approx)</label>
                <input name="budget" className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors" placeholder="e.g. 10k" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-text-secondary uppercase tracking-widest font-bold">Key Features</label>
              <input name="features" className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors" placeholder="e.g. Login, Payments, Chat" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-text-secondary uppercase tracking-widest font-bold">Detailed Description</label>
              <textarea name="description" required rows={4} className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Describe your dream website..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              <WhatsAppIcon size={20} /> Order via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-accent text-xl">05.</span>
          <h2 className="text-3xl font-bold text-text-primary">My Arsenal</h2>
          <div className="h-px bg-bg-tertiary flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", icon: <Laptop size={24} />, skills: skills.frontend },
            { title: "Backend", icon: <Server size={24} />, skills: skills.backend },
            { title: "Tools", icon: <Database size={24} />, skills: skills.tools }
          ].map((cat) => (
            <div key={cat.title} className="bg-bg-secondary p-8 rounded-2xl border border-bg-tertiary hover:border-accent transition-all group">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-accent group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-text-secondary">{skill.name}</span>
                      <span className="font-mono text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-accent text-xl">06.</span>
          <h2 className="text-3xl font-bold text-text-primary">Let's Connect</h2>
          <div className="h-px bg-bg-tertiary flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-text-secondary text-lg leading-relaxed">
              Have a project in mind or just want to chat? Drop me a message! 
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Email", val: "mralijaan690@gmail.com", link: "mailto:mralijaan690@gmail.com" },
                { icon: <MessageSquare size={20} />, label: "WhatsApp", val: "+92 306 315 9899", link: "https://wa.me/923063159899" },
                { icon: <MapPin size={20} />, label: "Location", val: "Pakistan", link: "#" }
              ].map((info) => (
                <a 
                  key={info.label} 
                  href={info.link}
                  className="flex items-center gap-4 p-6 bg-bg-secondary rounded-2xl border border-bg-tertiary hover:border-accent hover:translate-x-2 transition-all group"
                >
                  <span className="p-3 bg-bg-primary text-accent rounded-xl group-hover:bg-accent group-hover:text-bg-primary transition-colors">
                    {info.label === 'WhatsApp' ? <WhatsAppIcon size={20} /> : info.icon}
                  </span>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-1">{info.label}</div>
                    <div className="text-text-primary font-medium">{info.val}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-full w-fit">
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
              <span className="text-accent text-sm font-bold">Available for freelance work</span>
            </div>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData);
              const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Subject:* ${data.subject}%0A*Message:* ${data.message}`;
              window.open(`https://wa.me/923063159899?text=${whatsappMessage}`, '_blank');
            }}
            className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-bg-tertiary shadow-2xl"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-text-secondary font-medium">Your Name</label>
                  <input name="name" required className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-text-secondary font-medium">Your Email</label>
                  <input name="email" type="email" required className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-text-secondary font-medium">Subject</label>
                <input name="subject" required className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-text-secondary font-medium">Message</label>
                <textarea name="message" required rows={5} className="w-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-accent text-bg-primary font-bold rounded-xl hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 text-lg">
                <Send size={20} /> Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-top border-bg-tertiary text-center bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/AliDevTech-code" target="_blank" className="text-text-secondary hover:text-accent transition-colors"><Github size={20} /></a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="https://wa.me/923063159899" target="_blank" className="text-text-secondary hover:text-accent transition-colors"><WhatsAppIcon size={20} /></a>
          </div>
          <p className="text-text-secondary text-sm">
            Designed & Built by <span className="text-accent font-bold">Muhammad Ali</span> © {new Date().getFullYear()}
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-mono text-text-secondary uppercase tracking-widest">
            <span>Built with React</span>
            <span className="w-1 h-1 bg-bg-tertiary rounded-full"></span>
            <span>Tailwind CSS</span>
            <span className="w-1 h-1 bg-bg-tertiary rounded-full"></span>
            <span>Motion</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/923063159899" 
        target="_blank" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transition-all z-50 group"
      >
        <WhatsAppIcon size={32} />
        <span className="absolute right-full mr-4 bg-bg-secondary text-text-primary px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-bg-tertiary shadow-xl">
          Chat with me!
        </span>
      </a>
    </div>
  );
}
