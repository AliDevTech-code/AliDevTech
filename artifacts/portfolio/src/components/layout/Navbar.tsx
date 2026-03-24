import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code2, Briefcase, DollarSign, Star, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home",      href: "#home",      icon: <Home size={18} /> },
    { name: "About",     href: "#about",     icon: <User size={18} /> },
    { name: "Skills",    href: "#skills",    icon: <Code2 size={18} /> },
    { name: "Portfolio", href: "#portfolio", icon: <Briefcase size={18} /> },
    { name: "Pricing",   href: "#pricing",   icon: <DollarSign size={18} /> },
    { name: "Reviews",   href: "#reviews",   icon: <Star size={18} /> },
    { name: "Contact",   href: "#contact",   icon: <Mail size={18} /> },
  ];

  const close = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#home" className="text-2xl font-display font-bold flex items-center gap-2 group">
            <span className="text-foreground">Mr.</span>
            <span className="text-primary group-hover:text-white transition-colors duration-300">Ali</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-semibold"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "block" }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "block" }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32, mass: 0.8 }}
            className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
            style={{
              width: "280px",
              background: "rgba(5,10,20,0.97)",
              backdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.6)"
            }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
              <span className="text-lg font-display font-bold">
                <span className="text-white">Mr.</span>
                <span className="text-primary"> Ali</span>
              </span>
              <button
                onClick={close}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, type: "spring", stiffness: 300, damping: 30 }}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all duration-200 group"
                >
                  <span className="text-primary/60 group-hover:text-primary transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium text-base">{link.name}</span>
                </motion.a>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div className="px-6 py-6 border-t border-white/8">
              <motion.a
                href="#contact"
                onClick={close}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0070f3)", color: "#fff" }}
              >
                Hire Me
              </motion.a>
              <p className="text-center text-xs text-muted-foreground mt-4">
                📍 Sukkur, Sindh, Pakistan · Available for freelance
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
