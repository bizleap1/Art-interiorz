import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { heroData } from "@/data/heroData";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] w-full overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury interior living space by Art Interiorz, Nagpur"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.5 }}
        className="absolute inset-4 md:inset-8 lg:inset-12 border border-warm-white/20 pointer-events-none z-10"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center py-24"
      >
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-warm-white/80 tracking-luxury text-xs uppercase mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold" />
          {heroData.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-warm-white text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.1] max-w-4xl"
        >
          {heroData.title.line1}<br />
          <em className="italic font-light text-gradient-gold">{heroData.title.emphasis}</em> {heroData.title.line2}
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 max-w-xl text-warm-white/80 font-light text-lg leading-relaxed"
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href={heroData.primaryCta.href}
            className="group inline-flex items-center gap-3 bg-warm-white text-charcoal px-9 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-warm-white transition-all duration-500"
          >
            {heroData.primaryCta.label}
            <span className="h-px w-6 bg-charcoal group-hover:w-10 group-hover:bg-warm-white transition-all" />
          </a>
          <a
            href={heroData.secondaryCta.href}
            className="text-xs tracking-[0.3em] uppercase text-warm-white border-b border-warm-white/40 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            {heroData.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { repeat: Infinity, duration: 2.4 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-warm-white/70 text-[10px] tracking-[0.3em] uppercase"
      >
        Scroll
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
