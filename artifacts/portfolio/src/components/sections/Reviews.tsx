import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Khan",
    role: "Business Owner, Pakistan",
    text: "Mr. Ali built an amazing e-commerce website for my business. Very professional and delivered on time! The design is exactly what we wanted and sales have increased.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=d1d4f9"
  },
  {
    name: "Sarah Johnson",
    role: "Startup CEO, USA",
    text: "Excellent work! The website exceeded my expectations. Clean code and beautiful design. Ali was highly responsive throughout the entire development process.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4"
  },
  {
    name: "Mohammed Al-Rashid",
    role: "Restaurant Owner, UAE",
    text: "The restaurant website Ali built for us increased our online orders by 200%. Highly recommended! The reservation system is flawless.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed&backgroundColor=c0aede"
  },
  {
    name: "Priya Sharma",
    role: "Freelancer, India",
    text: "Very skilled developer. Fixed all bugs quickly and communication was great throughout. Brought my complex Figma designs to pixel-perfect reality in React.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffdfbf"
  },
  {
    name: "James Wilson",
    role: "Marketing Manager, UK",
    text: "Professional, fast, and very responsive. Will definitely hire again for future projects. He understands the balance between good design and conversion optimization.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=d1d4f9"
  },
  {
    name: "Fatima Ahmed",
    role: "Small Business Owner, Pakistan",
    text: "Ali created a beautiful portfolio for me. Very patient and understood exactly what I wanted. He provided great suggestions that improved the overall user experience.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima&backgroundColor=ffdfbf"
  }
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] mx-4 p-7 rounded-2xl relative group"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)"
      }}
    >
      <Quote className="absolute top-5 right-5 text-white/5 w-12 h-12" />
      <div className="flex items-center gap-1 text-amber-400 mb-4">
        {[1, 2, 3, 4, 5].map(star => (
          <Star key={star} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic text-sm leading-relaxed relative z-10">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-11 h-11 rounded-full border-2 bg-white"
          style={{ borderColor: "rgba(0,212,255,0.3)" }}
        />
        <div>
          <h4 className="font-bold text-white text-sm">{review.name}</h4>
          <p className="text-xs font-medium" style={{ color: "var(--color-primary, #00d4ff)" }}>{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);
  const animRef = useRef<number>(0);

  const CARD_WIDTH = 340 + 32; // card + mx-4*2
  const TOTAL_WIDTH = CARD_WIDTH * reviews.length;

  useEffect(() => {
    const speed = 0.6;

    const animate = () => {
      if (!paused) {
        posRef.current += speed;
        if (posRef.current >= TOTAL_WIDTH) {
          posRef.current = 0;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [paused, TOTAL_WIDTH]);

  const scroll = (dir: "left" | "right") => {
    posRef.current += dir === "right" ? CARD_WIDTH : -CARD_WIDTH;
    if (posRef.current < 0) posRef.current = TOTAL_WIDTH - CARD_WIDTH;
    if (posRef.current >= TOTAL_WIDTH) posRef.current = 0;
  };

  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden border-y border-white/5"
      style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,10,20,0.8) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)"
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(0,5,15,1), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(0,5,15,1), transparent)" }}
        />

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ width: `${CARD_WIDTH * doubled.length}px` }}
          >
            {doubled.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 relative z-30">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 rounded-full border border-white/10 text-white hover:border-primary/50 hover:text-primary transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 rounded-full border border-white/10 text-white hover:border-primary/50 hover:text-primary transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
