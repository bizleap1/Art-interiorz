import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export type ProjectCategory = "Residential" | "Hospitality" | "Kitchen" | "Renovation";

export type Project = {
  img: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description?: string;
  span?: string;
};

export const portfolioData = {
  label: "Selected Work",
  heading: {
    prefix: "Portfolio of",
    emphasis: "considered",
    suffix: "interiors.",
  },
  categories: ["All", "Residential", "Hospitality", "Kitchen", "Renovation"] as const,
  projects: [
    {
      img: p1,
      title: "Sterling Residence",
      category: "Residential",
      location: "Manish Nagar, Nagpur",
      description: "A 3BHK turnkey home blending warm woods, soft ivory and bespoke joinery.",
      span: "md:row-span-2",
    },
    {
      img: p2,
      title: "Ivory Modular Kitchen",
      category: "Kitchen",
      location: "Somalwada, Nagpur",
      description: "An L-shaped modular kitchen with premium quartz tops and brushed brass fittings.",
    },
    {
      img: p3,
      title: "Lumen Boutique Hotel",
      category: "Hospitality",
      location: "Civil Lines, Nagpur",
      description: "A 24-key boutique hotel — travertine lobby, layered lighting and curated art.",
      span: "md:row-span-2",
    },
    {
      img: p4,
      title: "Arched Family Dining",
      category: "Residential",
      location: "Shilpa Nagar, Nagpur",
      description: "Family dining with arched plaster detailing and warm pendant lighting.",
    },
    {
      img: p5,
      title: "Heritage Bungalow Renovation",
      category: "Renovation",
      location: "Dharampeth, Nagpur",
      description: "A full renovation that preserves the bungalow's soul with modern comforts.",
    },
    {
      img: p6,
      title: "Aurelia Suite",
      category: "Hospitality",
      location: "Wardha Road, Nagpur",
      description: "A signature hospitality suite with custom millwork and Italian marble.",
    },
  ] as Project[],
};
