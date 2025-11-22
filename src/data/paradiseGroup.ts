export interface Project {
  id: string;
  title: string;
  location: string;
  excerpt: string;
  description: string;
  images: string[];
  brochure: string;
  amenities: string[];
  specifications: {
    type: string;
    area: string;
    status: string;
    possession: string;
  };
}

export interface GroupData {
  id: string;
  name: string;
  logo: string;
  heroImage: string;
  description: string;
  projects: Project[];
}

export const paradiseGroupData: GroupData = {
  id: "paradise-group",
  name: "Paradise Group",
  logo: "/src/assets/Properies/Paradise Group/Paradise Logo.png",
  heroImage: "/assets/hero-images/paradise-group-hero.png",
  description: "Parent group for Sai World One and Sai World Pyramid — premium residential & mixed-use projects.",
  projects: [
    {
      id: "sai-world-one",
      title: "Sai World One",
      location: "Nerul, Navi Mumbai",
      excerpt: "Premium Grade-A office & mixed-use",
      description: "Sai World One is a landmark mixed-use development offering premium Grade-A office spaces and commercial establishments. Located in the heart of Nerul, this project redefines modern workspace with world-class amenities and stunning architecture.",
      images: [
        "/assets/hero-images/paradise-group-hero.png",
        "/src/assets/Properies/Paradise Group/Paradise Logo.png"
      ],
      brochure: "/assets/brochures/sai-world-one-leaflet.pdf",
      amenities: [
        "Grade-A Office Spaces",
        "24/7 Security",
        "High-Speed Elevators",
        "Parking Facility",
        "Power Backup",
        "Modern Interiors",
        "Retail Spaces",
        "Food Court"
      ],
      specifications: {
        type: "Commercial & Mixed-Use",
        area: "Multiple configurations available",
        status: "Ready to Move",
        possession: "Immediate"
      }
    },
    {
      id: "sai-world-pyramid",
      title: "Sai World Pyramid",
      location: "Nerul, Navi Mumbai",
      excerpt: "Iconic mixed-use development",
      description: "Sai World Pyramid is an iconic architectural marvel featuring a unique pyramid design. This mixed-use development offers premium office spaces, retail outlets, and entertainment facilities, making it a complete business destination.",
      images: [
        "/assets/hero-images/paradise-group-hero.png",
        "/src/assets/Properies/Paradise Group/Paradise Logo.png"
      ],
      brochure: "/assets/brochures/sai-world-pyramid.pdf",
      amenities: [
        "Iconic Architecture",
        "Premium Office Spaces",
        "Retail Plaza",
        "Entertainment Zone",
        "24/7 Security",
        "Ample Parking",
        "High-Speed Internet",
        "Conference Facilities"
      ],
      specifications: {
        type: "Commercial & Mixed-Use",
        area: "Variable configurations",
        status: "Under Construction",
        possession: "2026"
      }
    }
  ]
};
