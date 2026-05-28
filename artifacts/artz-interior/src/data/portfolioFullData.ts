export type GalleryCategory =
  | "All"
  | "BedRoom"
  | "Modular Kitchen"
  | "Living Room"
  | "Others";

export type GalleryItem = {
  id: string;
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
  { id: "br-1",  src: "/assets/portfolio-2.jpg", category: "BedRoom", alt: "Master bedroom design" },
  { id: "br-2",  src: "/assets/portfolio-5.jpg", category: "BedRoom", alt: "Bedroom interior with wardrobe" },
  { id: "br-3",  src: "/assets/portfolio-1.jpg", category: "BedRoom", alt: "Modern bedroom layout" },
  { id: "br-4",  src: "/assets/portfolio-6.jpg", category: "BedRoom", alt: "Luxury bedroom suite" },
  { id: "br-5",  src: "/assets/portfolio-4.jpg", category: "BedRoom", alt: "Kids bedroom design" },
  { id: "br-6",  src: "/assets/portfolio-3.jpg", category: "BedRoom", alt: "Guest bedroom" },

  { id: "mk-1",  src: "/assets/portfolio-3.jpg", category: "Modular Kitchen", alt: "L-shaped modular kitchen" },
  { id: "mk-2",  src: "/assets/portfolio-1.jpg", category: "Modular Kitchen", alt: "Open kitchen design" },
  { id: "mk-3",  src: "/assets/portfolio-6.jpg", category: "Modular Kitchen", alt: "Parallel kitchen layout" },
  { id: "mk-4",  src: "/assets/portfolio-4.jpg", category: "Modular Kitchen", alt: "U-shaped modular kitchen" },
  { id: "mk-5",  src: "/assets/portfolio-2.jpg", category: "Modular Kitchen", alt: "Modern kitchen interior" },
  { id: "mk-6",  src: "/assets/portfolio-5.jpg", category: "Modular Kitchen", alt: "Premium kitchen finish" },

  { id: "lr-1",  src: "/assets/portfolio-1.jpg", category: "Living Room", alt: "Contemporary living room" },
  { id: "lr-2",  src: "/assets/portfolio-4.jpg", category: "Living Room", alt: "Living room with TV unit" },
  { id: "lr-3",  src: "/assets/portfolio-2.jpg", category: "Living Room", alt: "Open-plan living area" },
  { id: "lr-4",  src: "/assets/portfolio-5.jpg", category: "Living Room", alt: "Living room lighting design" },
  { id: "lr-5",  src: "/assets/portfolio-6.jpg", category: "Living Room", alt: "Compact living room" },
  { id: "lr-6",  src: "/assets/portfolio-3.jpg", category: "Living Room", alt: "Living room with feature wall" },

  { id: "ot-1",  src: "/assets/portfolio-5.jpg", category: "Others", alt: "Entrance foyer design" },
  { id: "ot-2",  src: "/assets/portfolio-2.jpg", category: "Others", alt: "Dining area" },
  { id: "ot-3",  src: "/assets/portfolio-4.jpg", category: "Others", alt: "Balcony design" },
  { id: "ot-4",  src: "/assets/portfolio-6.jpg", category: "Others", alt: "Home theatre room" },
  { id: "ot-5",  src: "/assets/portfolio-1.jpg", category: "Others", alt: "Custom furniture unit" },
  { id: "ot-6",  src: "/assets/portfolio-3.jpg", category: "Others", alt: "Study & workstation" },
];
