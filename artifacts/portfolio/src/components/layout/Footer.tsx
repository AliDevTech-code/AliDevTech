import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-display font-bold flex items-center gap-2 mb-4">
              <span>Mr.</span>
              <span className="text-primary">Ali</span>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              A passionate Full Stack Web Developer dedicated to building beautiful, responsive, and high-performance web applications that help businesses grow.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/AliDevTech-code" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-ali-190204313" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/message/OYB7TSSLWBLZF1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">My Skills</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Frontend Design</li>
              <li className="text-muted-foreground">Backend Systems</li>
              <li className="text-muted-foreground">API Integration</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mr. Ali. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-destructive fill-destructive" /> by Ali
          </p>
        </div>
      </div>
    </footer>
  );
}
