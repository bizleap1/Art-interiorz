import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Art Interiorz — Best Interior Designer in Nagpur" },
      {
        name: "description",
        content:
          "Art Interiorz is a full-service interior and architectural design firm in Nagpur, crafting thoughtful residential, modular kitchen and hospitality spaces since 2017.",
      },
      { property: "og:title", content: "Art Interiorz — Best Interior Designer in Nagpur" },
      {
        property: "og:description",
        content: "Thoughtful interiors for homes, kitchens, hospitality and retail.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </SiteShell>
  );
}
