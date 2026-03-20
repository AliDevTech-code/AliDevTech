import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "49",
    description: "Perfect for simple landing pages and personal websites.",
    features: [
      { name: "Landing Page", included: true },
      { name: "Up to 3 Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "Contact Form", included: true },
      { name: "7 Days Delivery", included: true },
      { name: "1 Revision", included: true },
      { name: "SEO Optimization", included: false },
      { name: "Database Integration", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "149",
    description: "Ideal for growing businesses and professional portfolios.",
    features: [
      { name: "Business Website", included: true },
      { name: "Up to 8 Pages", included: true },
      { name: "Responsive Design", included: true },
      { name: "Contact Form", included: true },
      { name: "Custom Design", included: true },
      { name: "SEO Optimization", included: true },
      { name: "14 Days Delivery", included: true },
      { name: "3 Revisions", included: true },
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "299",
    description: "Advanced web applications with backend functionality.",
    features: [
      { name: "Full Stack Web App", included: true },
      { name: "Unlimited Pages", included: true },
      { name: "Custom Design", included: true },
      { name: "Database Integration", included: true },
      { name: "Authentication", included: true },
      { name: "Admin Panel", included: true },
      { name: "30 Days Delivery", included: true },
      { name: "Unlimited Revisions", included: true },
    ],
    highlighted: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Pricing <span className="text-primary">Plans</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transparent pricing for high-quality web development services. Choose the plan that best fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? "bg-gradient-to-b from-primary/20 to-card/90 border-2 border-primary shadow-[0_0_40px_rgba(0,212,255,0.2)] md:-translate-y-4 md:hover:-translate-y-6 z-10" 
                  : "glass-card hover:-translate-y-2 border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-medium text-gray-400">$</span>
                  <span className="text-5xl font-display font-extrabold text-white">{plan.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className={`flex items-center gap-3 ${feature.included ? "text-gray-200" : "text-gray-600"}`}>
                    <div className={`p-1 rounded-full ${feature.included ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-500"}`}>
                      {feature.included ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
                    </div>
                    <span className="text-sm font-medium">{feature.name}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => {
                  // Smooth scroll to contact section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  // Update URL with plan parameter
                  const url = new URL(window.location.href);
                  url.hash = 'contact';
                  url.searchParams.set('plan', plan.name);
                  window.history.pushState({}, '', url);
                }}
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-blue-400 shadow-lg hover:shadow-primary/50"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
