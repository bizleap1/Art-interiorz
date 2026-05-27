import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import {
  serviceCategoriesData,
  servicesDetailData,
  processData,
} from "@/data/servicesAllData";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Art Interiorz, Nagpur" },
      {
        name: "description",
        content:
          "Residential, commercial, hospitality and landscape design. Modular kitchens, 3D visualisation, renovation and turnkey projects by Art Interiorz, Nagpur.",
      },
      { property: "og:title", content: "Interior Design Services in Nagpur — Art Interiorz" },
      {
        property: "og:description",
        content: "Full-service interior design, modular kitchen, renovation and turnkey solutions.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Services"
        crumb="Services"
        image="https://artinteriorz.com/wp-content/uploads/2025/06/img4-2.png"
      />

      <section className="py-28 lg:py-40 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-20">
            <Reveal><SectionLabel>{serviceCategoriesData.label}</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
                {serviceCategoriesData.heading.prefix}{" "}
                <em className="italic text-gradient-gold">{serviceCategoriesData.heading.emphasis}</em>{" "}
                {serviceCategoriesData.heading.suffix}
              </h2>
            </Reveal>
          </div>
          <div className="space-y-24">
            {serviceCategoriesData.items.map((item, i) => (
              <div
                key={item.title}
                className={`grid lg:grid-cols-12 gap-12 items-center ${
                  i % 2 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <Reveal className="lg:col-span-7 lg:[direction:ltr]">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                </Reveal>
                <Reveal delay={0.15} className="lg:col-span-5 lg:[direction:ltr]">
                  <div className="text-xs tracking-luxury uppercase text-gold mb-3">0{i + 1}</div>
                  <h3 className="font-display text-3xl md:text-5xl leading-tight">{item.title}</h3>
                  <p className="mt-4 italic text-charcoal/70">{item.tagline}</p>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{item.text}</p>
                  <ul className="mt-8 space-y-3">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-charcoal">
                        <Check size={16} className="mt-1 text-gold flex-shrink-0" strokeWidth={1.6} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <Reveal><SectionLabel>Our Full Suite</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
                Eight ways we <em className="italic text-gradient-gold">shape</em> space.
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {servicesDetailData.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="bg-warm-white p-10 lg:p-12 h-full grid sm:grid-cols-5 gap-8 items-start">
                  <div className="sm:col-span-2 aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="sm:col-span-3">
                    <div className="text-xs tracking-luxury uppercase text-muted-foreground mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <Reveal><SectionLabel>{processData.label}</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
                {processData.heading.prefix}{" "}
                <em className="italic text-gradient-gold">{processData.heading.emphasis}</em>{" "}
                {processData.heading.suffix}
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-border">
            {processData.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <div className="bg-warm-white p-8 h-full">
                  <div className="font-display text-5xl text-gradient-gold">{step.n}</div>
                  <div className="mt-6 font-display text-xl">{step.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}