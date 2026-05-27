import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { blogData } from "@/data/blogData";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Art Interiorz Design Journal, Nagpur" },
      {
        name: "description",
        content:
          "Design notes, modular kitchen guides, renovation tips and hospitality inspiration from the Art Interiorz studio in Nagpur.",
      },
      { property: "og:title", content: "Design Journal — Art Interiorz" },
      { property: "og:description", content: "Notes, guides and inspiration from our Nagpur studio." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteShell>
      <PageHero title={blogData.hero.title} crumb={blogData.hero.crumb} image={blogData.hero.image} />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <Reveal><SectionLabel>From the Studio</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{blogData.intro}</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <article className="group bg-warm-white h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-ivory">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[10px] tracking-luxury uppercase text-muted-foreground">
                    <span className="text-gold">{post.category}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl lg:text-3xl leading-tight group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs tracking-[0.25em] uppercase">
                    <span className="text-muted-foreground">{post.readTime}</span>
                    <span className="inline-flex items-center gap-2 text-charcoal border-b border-gold pb-1">
                      Read More <ArrowUpRight size={14} />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}