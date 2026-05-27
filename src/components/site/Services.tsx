import { Reveal, SectionLabel } from "./Reveal";
import { motion } from "framer-motion";
import { servicesData } from "@/data/servicesData";

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <Reveal><SectionLabel>{servicesData.label}</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
                {servicesData.heading.prefix} <em className="italic text-gradient-gold">{servicesData.heading.emphasis}</em> {servicesData.heading.suffix}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-md">
              {servicesData.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {servicesData.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-warm-white p-10 lg:p-12 h-full overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px gold-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <s.icon className="text-gold mb-8" size={32} strokeWidth={1.2} />
                <div className="text-xs tracking-luxury uppercase text-muted-foreground mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                <div className="mt-10 flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-charcoal opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                  Discover <span className="h-px w-8 bg-gold" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
