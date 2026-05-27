import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";
import { Reveal, SectionLabel } from "./Reveal";
import { aboutData } from "@/data/aboutData";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              src={aboutImg}
              alt="The Art Interiorz design studio in Nagpur"
              loading="lazy"
              width={1280}
              height={1536}
              className="h-full w-full object-cover"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-charcoal text-warm-white p-8 w-56 shadow-luxury">
            <div className="font-display text-5xl text-gradient-gold">{aboutData.badge.value}</div>
            <div className="mt-2 text-xs tracking-luxury uppercase text-warm-white/70 whitespace-pre-line">
              {aboutData.badge.caption}
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <SectionLabel>{aboutData.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
              {aboutData.heading.prefix} <em className="italic text-gradient-gold">{aboutData.heading.emphasis}</em> {aboutData.heading.suffix}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
              {aboutData.description}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border pt-10">
            {aboutData.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div>
                  <div className="font-display text-4xl md:text-5xl text-charcoal">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] tracking-luxury uppercase text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
