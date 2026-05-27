import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Art Interiorz" },
      { name: "description", content: "All pages on the Art Interiorz website." },
    ],
  }),
  component: SitemapPage,
});

const groups = [
  {
    title: "Main",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Blog", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

function SitemapPage() {
  return (
    <SiteShell>
      <PageHero
        title="Sitemap"
        crumb="Sitemap"
        image="https://artinteriorz.com/wp-content/uploads/2025/06/Mask-group.png"
      />
      <section className="py-28 bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-[10px] tracking-luxury uppercase text-gold mb-6">{g.title}</div>
              <ul className="divide-y divide-border border-y border-border">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="block py-5 font-display text-2xl hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}