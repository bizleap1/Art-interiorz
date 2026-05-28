export type GalleryCategory =
  | "All"
  | "BedRoom"
  | "Modular Kitchen"
  | "Living Room"
  | "Others";

export type GalleryItem = {
  src: string;
  category: Exclude<GalleryCategory, "All">;
  alt: string;
};

export const galleryCategories: readonly GalleryCategory[] = [
  "All",
  "BedRoom",
  "Modular Kitchen",
  "Living Room",
  "Others",
];

export const galleryItems: GalleryItem[] = [
  { src: "/assets/portfolio-2.jpg", category: "BedRoom", alt: "Master bedroom design" },
  { src: "/assets/portfolio-5.jpg", category: "BedRoom", alt: "Bedroom interior with wardrobe" },
  { src: "/assets/portfolio-1.jpg", category: "BedRoom", alt: "Modern bedroom layout" },
  { src: "/assets/portfolio-6.jpg", category: "BedRoom", alt: "Luxury bedroom suite" },
  { src: "/assets/portfolio-4.jpg", category: "BedRoom", alt: "Kids bedroom design" },
  { src: "/assets/portfolio-3.jpg", category: "BedRoom", alt: "Guest bedroom" },

  { src: "/assets/portfolio-3.jpg", category: "Modular Kitchen", alt: "L-shaped modular kitchen" },
  { src: "/assets/portfolio-1.jpg", category: "Modular Kitchen", alt: "Open kitchen design" },
  { src: "/assets/portfolio-6.jpg", category: "Modular Kitchen", alt: "Parallel kitchen layout" },
  { src: "/assets/portfolio-4.jpg", category: "Modular Kitchen", alt: "U-shaped modular kitchen" },
  { src: "/assets/portfolio-2.jpg", category: "Modular Kitchen", alt: "Modern kitchen interior" },
  { src: "/assets/portfolio-5.jpg", category: "Modular Kitchen", alt: "Premium kitchen finish" },

  { src: "/assets/portfolio-1.jpg", category: "Living Room", alt: "Contemporary living room" },
  { src: "/assets/portfolio-4.jpg", category: "Living Room", alt: "Living room with TV unit" },
  { src: "/assets/portfolio-2.jpg", category: "Living Room", alt: "Open-plan living area" },
  { src: "/assets/portfolio-5.jpg", category: "Living Room", alt: "Living room lighting design" },
  { src: "/assets/portfolio-6.jpg", category: "Living Room", alt: "Compact living room" },
  { src: "/assets/portfolio-3.jpg", category: "Living Room", alt: "Living room with feature wall" },

  { src: "/assets/portfolio-5.jpg", category: "Others", alt: "Entrance foyer design" },
  { src: "/assets/portfolio-2.jpg", category: "Others", alt: "Dining area" },
  { src: "/assets/portfolio-4.jpg", category: "Others", alt: "Balcony design" },
  { src: "/assets/portfolio-6.jpg", category: "Others", alt: "Home theatre room" },
  { src: "/assets/portfolio-1.jpg", category: "Others", alt: "Custom furniture unit" },
  { src: "/assets/portfolio-3.jpg", category: "Others", alt: "Study & workstation" },
];
