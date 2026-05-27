const IMG = (slug: string) =>
  `https://artinteriorz.com/wp-content/uploads/${slug}`;

export const blogData = {
  hero: {
    title: "Design Journal",
    crumb: "Blog",
    image: IMG("2025/06/img4-2.png"),
  },
  intro:
    "Notes, guides and inspiration from the Art Interiorz studio — on materials, modular kitchens, renovation, hospitality and the craft of living beautifully.",
  posts: [
    {
      slug: "thoughtful-home-design",
      title: "Where Dream Homes Begin with Thoughtful Design",
      excerpt:
        "How we approach every home — listening first, designing second, and shaping spaces around the way you actually live.",
      category: "Residential",
      readTime: "5 min read",
      date: "June 12, 2025",
      image: IMG("2025/06/image-2.png"),
    },
    {
      slug: "modular-kitchen-guide",
      title: "The Modular Kitchen Guide: L, U, Parallel & Open Layouts",
      excerpt:
        "A practical walkthrough of every modular kitchen layout — and how to choose the one that matches your home and habits.",
      category: "Kitchen",
      readTime: "7 min read",
      date: "May 28, 2025",
      image: IMG("2025/07/11.png"),
    },
    {
      slug: "home-renovation-nagpur",
      title: "Home Renovation in Nagpur: A Stress-Free Roadmap",
      excerpt:
        "Renovation can feel daunting. We share the exact step-by-step process we use to make it seamless for our clients.",
      category: "Renovation",
      readTime: "6 min read",
      date: "April 18, 2025",
      image: IMG("2025/06/Mask-group.png"),
    },
    {
      slug: "hospitality-design-essentials",
      title: "Hospitality Design Essentials: Lobbies, Lighting & Lasting Impressions",
      excerpt:
        "The five principles we apply to every hotel, restaurant and lounge — where ambience meets utility.",
      category: "Hospitality",
      readTime: "8 min read",
      date: "March 22, 2025",
      image: IMG("2025/06/holl-1.png"),
    },
    {
      slug: "3d-visualisation",
      title: "Why We Use 3D Visualisations on Every Project",
      excerpt:
        "See it before you build it — how immersive 3D walkthroughs help our clients sign off with total confidence.",
      category: "Process",
      readTime: "4 min read",
      date: "February 14, 2025",
      image: IMG("2025/06/3D-Insights-1.png"),
    },
    {
      slug: "interior-design-cost-nagpur",
      title: "Interior Design Cost in Nagpur — A Transparent Breakdown",
      excerpt:
        "What actually drives the cost of interior design, and how we plan budgets that stay honest from concept to handover.",
      category: "Guides",
      readTime: "9 min read",
      date: "January 30, 2025",
      image: IMG("2025/07/12.png"),
    },
  ],
};