import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "It depends on the project complexity. A simple landing page is ready in 3–5 days, a business website in 7–14 days, and a full-stack web application in 2–4 weeks. I always share an exact timeline before starting."
  },
  {
    q: "What is the payment process?",
    a: "I take 50% advance and 50% on delivery. Accepted payment methods: EasyPaisa, JazzCash, Bank Transfer, and Binance (USDT). The project scope and price are confirmed first, then work begins."
  },
  {
    q: "How many revisions do I get?",
    a: "Basic package includes 1 revision, Standard includes 3 revisions, and Premium includes unlimited revisions. I discuss all requirements clearly before starting to ensure you are 100% satisfied."
  },
  {
    q: "Will the website look good on mobile?",
    a: "Absolutely! Every website I build is fully responsive — it works perfectly on phones, tablets, and desktops. Since 70%+ of traffic comes from mobile, this is always my top priority."
  },
  {
    q: "Where will the website be hosted?",
    a: "I deploy your website on Vercel, Netlify, or Firebase for free. If you need a custom domain like 'yourbusiness.com', the domain is purchased separately (usually $10–15/year). Hosting cost is included in the project."
  },
  {
    q: "Will I get support after delivery?",
    a: "Yes! You get 7 days of free support after delivery during which I fix any bugs. I remain available on WhatsApp even after that — I usually reply within 1–2 hours."
  },
  {
    q: "Can I provide my own content (text/images)?",
    a: "Of course! If you provide your own content, I will use it. If you don't have content ready, I will use placeholder text and free stock images that you can replace later."
  },
  {
    q: "Can you make changes to an existing website?",
    a: "Yes, definitely! I handle redesigns, adding new features, and fixing bugs on existing websites. I review the code first and then give you an estimate before starting."
  }
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: open ? "rgba(0,212,255,0.05)" : "rgba(255,255,255,0.03)",
        border: open ? "1px solid rgba(0,212,255,0.2)" : "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.3s, border 0.3s"
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`font-semibold text-base transition-colors duration-200 ${open ? "text-primary" : "text-white group-hover:text-primary"}`}>
          {faq.q}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.06)",
            color: open ? "#00d4ff" : "rgba(255,255,255,0.5)"
          }}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Answers to the most common questions from clients. Have something else in mind? Message me on WhatsApp!
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have a question?</p>
          <a
            href="https://wa.me/923063159899?text=Hi%20Ali,%20I%20have%20a%20question!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-1"
            style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L0 24l6.345-1.499A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.667-.518-5.188-1.418l-.371-.22-3.767.89.944-3.663-.242-.378A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
