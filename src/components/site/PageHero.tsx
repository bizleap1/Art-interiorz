import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function PageHero({
  title,
  crumb,
  image,
}: {
  title: string;
  crumb: string;
  image: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      <div className="absolute inset-8 md:inset-12 border border-warm-white/15 pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-warm-white/80 tracking-luxury text-xs uppercase mb-6 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold" />
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="opacity-50">/</span>
          <span>{crumb}</span>
        </motion.div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-warm-white text-5xl sm:text-6xl lg:text-8xl leading-[0.95]"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}