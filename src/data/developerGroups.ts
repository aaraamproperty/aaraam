// Import logos
import tesconLogo from "@/assets/Properies/Tescon/logo-1.png";
import kaamdhenubuildersLogo from "@/assets/Properies/The Kamdhenu Builders/Kamdhenu_Builders.png";
import paradiseLogo from "@/assets/Properies/Paradise Group/Paradise Logo.png";
import greenscapeLogo from "@/assets/Properies/GreenScape/greenscape-logo.png";
import dreamsLogo from "@/assets/Properies/Dreams Group/Dreams Group.jpg";

export interface Project {
  id: string;
  title: string;
  location: string;
  excerpt: string;
  description: string;
  images: string[];
  brochure_url: string | null;
  amenities: string[];
  specifications: {
    type: string;
    area: string;
    status: string;
    possession: string;
  };
}

export interface DeveloperGroup {
  id: string;
  name: string;
  logo: string;
  heroImage?: string;
  description: string;
  excerpt: string;
  color: string;
  projects: Project[];
}

export const developerGroups: DeveloperGroup[] = [
  {
    id: "tescon",
    name: "Tescon",
    logo: tesconLogo,
    description: "Tescon is committed to delivering innovative residential layouts and modern township planning that sets new standards in urban development.",
    excerpt: "Innovative residential layouts and modern township planning.",
    color: "#004861",
    projects: [
      {
        id: "plan-i",
        title: "Plan I",
        location: "Mumbai, Maharashtra",
        excerpt: "Modern residential layout with innovative design",
        description: "Plan I represents Tescon's vision of contemporary residential living with thoughtfully designed layouts and modern amenities that cater to the evolving needs of urban families.",
        images: [tesconLogo],
        brochure_url: null,
        amenities: [
          "Modern Architecture",
          "24/7 Security",
          "Parking Facility",
          "Power Backup",
          "Landscaped Gardens",
          "Children's Play Area"
        ],
        specifications: {
          type: "Residential",
          area: "Multiple configurations",
          status: "Under Development",
          possession: "2026"
        }
      },
      {
        id: "plan-m",
        title: "Plan M",
        location: "Mumbai, Maharashtra",
        excerpt: "Township planning with modern infrastructure",
        description: "Plan M is a comprehensive township development featuring modern infrastructure, sustainable design principles, and community-centric planning for holistic living.",
        images: [tesconLogo],
        brochure_url: null,
        amenities: [
          "Township Planning",
          "Green Spaces",
          "Community Center",
          "Sports Facilities",
          "Shopping Complex",
          "School & Healthcare"
        ],
        specifications: {
          type: "Township",
          area: "Large-scale development",
          status: "Planning Phase",
          possession: "2027"
        }
      }
    ]
  },
  {
    id: "kaamdhenu-builders",
    name: "The Kaamdhenu Builders",
    logo: kaamdhenubuildersLogo,
    description: "The Kaamdhenu Builders specializes in creating growth-oriented residential communities that offer strong value propositions and sustainable living environments.",
    excerpt: "Growth-oriented residential communities with strong value proposition.",
    color: "#16A34A",
    projects: [
      {
        id: "kaamdhenu-growth-master",
        title: "Kaamdhenu Growth Master",
        location: "Navi Mumbai, Maharashtra",
        excerpt: "Premium residential community focused on growth and value",
        description: "Kaamdhenu Growth Master is a flagship residential development that combines strategic location advantages with quality construction and modern amenities to deliver exceptional value for homebuyers.",
        images: [kaamdhenubuildersLogo],
        brochure_url: null,
        amenities: [
          "Premium Apartments",
          "Clubhouse",
          "Swimming Pool",
          "Gymnasium",
          "Jogging Track",
          "24/7 Security",
          "Power Backup",
          "Landscaped Gardens"
        ],
        specifications: {
          type: "Residential",
          area: "1 BHK to 3 BHK",
          status: "Under Construction",
          possession: "2026"
        }
      }
    ]
  },
  {
    id: "paradise-group",
    name: "Paradise Group",
    logo: paradiseLogo,
    heroImage: "/assets/hero-images/paradise-group-hero.png",
    description: "Paradise Group is renowned for creating premium residential and mixed-use developments that offer iconic lifestyle experiences in prime locations.",
    excerpt: "Premium residential & mixed-use developments offering iconic lifestyle experiences.",
    color: "#004861",
    projects: [
      {
        id: "sai-world-one",
        title: "Sai World One",
        location: "Nerul, Navi Mumbai",
        excerpt: "Premium Grade-A office & mixed-use",
        description: "Sai World One is a landmark mixed-use development offering premium Grade-A office spaces and commercial establishments. Located in the heart of Nerul, this project redefines modern workspace with world-class amenities and stunning architecture.",
        images: [paradiseLogo],
        brochure_url: "/assets/brochures/sai-world-one-leaflet.pdf",
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
        images: [paradiseLogo],
        brochure_url: null,
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
  },
  {
    id: "greenscape",
    name: "GreenScape",
    logo: greenscapeLogo,
    description: "GreenScape is dedicated to creating sustainable, modern commercial developments built for future-ready workspaces with environmental consciousness at the core.",
    excerpt: "Sustainable, modern commercial developments built for future-ready workspaces.",
    color: "#10B981",
    projects: [
      {
        id: "cybersquare",
        title: "CyberSquare",
        location: "Pune, Maharashtra",
        excerpt: "Future-ready sustainable commercial complex",
        description: "CyberSquare is GreenScape's flagship commercial development featuring cutting-edge sustainable design, smart building technology, and modern infrastructure designed for the digital age workspace.",
        images: [greenscapeLogo],
        brochure_url: null,
        amenities: [
          "LEED Certified",
          "Smart Building Technology",
          "High-Speed Internet",
          "Green Spaces",
          "EV Charging Stations",
          "Solar Power",
          "Rainwater Harvesting",
          "Modern Office Spaces"
        ],
        specifications: {
          type: "Commercial",
          area: "Office spaces from 1000 sq.ft",
          status: "Under Construction",
          possession: "2026"
        }
      }
    ]
  },
  {
    id: "dreams-group",
    name: "Dreams Group",
    logo: dreamsLogo,
    description: "Dreams Group specializes in residential and mixed-use projects designed for lifestyle-centric living, where dreams meet reality in thoughtfully crafted spaces.",
    excerpt: "Residential and mixed-use projects designed for lifestyle-centric living.",
    color: "#8B5CF6",
    projects: [
      {
        id: "dream-digit",
        title: "Dream Digit",
        location: "Thane, Maharashtra",
        excerpt: "Digital-age smart residential community",
        description: "Dream Digit is a smart residential project that integrates digital technology with modern living spaces, offering residents a connected, convenient, and contemporary lifestyle.",
        images: [dreamsLogo],
        brochure_url: null,
        amenities: [
          "Smart Home Features",
          "High-Speed Internet",
          "Clubhouse",
          "Swimming Pool",
          "Gymnasium",
          "24/7 Security",
          "Children's Play Area",
          "Landscaped Gardens"
        ],
        specifications: {
          type: "Residential",
          area: "1 BHK to 3 BHK",
          status: "New Launch",
          possession: "2027"
        }
      },
      {
        id: "dream-gateway",
        title: "Dream Gateway",
        location: "Navi Mumbai, Maharashtra",
        excerpt: "Gateway to modern lifestyle living",
        description: "Dream Gateway offers a perfect blend of connectivity and comfort, strategically located to provide easy access to key destinations while offering a peaceful residential environment.",
        images: [dreamsLogo],
        brochure_url: null,
        amenities: [
          "Strategic Location",
          "Modern Architecture",
          "Clubhouse",
          "Sports Facilities",
          "Power Backup",
          "Security Systems",
          "Parking",
          "Green Spaces"
        ],
        specifications: {
          type: "Residential",
          area: "2 BHK to 4 BHK",
          status: "Under Construction",
          possession: "2026"
        }
      },
      {
        id: "dream-ikon",
        title: "Dream Ikon",
        location: "Mumbai, Maharashtra",
        excerpt: "Iconic mixed-use development for modern living",
        description: "Dream Ikon is an iconic mixed-use development that combines residential, commercial, and retail spaces to create a vibrant, self-sufficient community for the modern urban dweller.",
        images: [dreamsLogo],
        brochure_url: null,
        amenities: [
          "Mixed-Use Development",
          "Retail Spaces",
          "Premium Apartments",
          "Office Spaces",
          "Food Court",
          "Entertainment Zone",
          "Parking",
          "24/7 Security"
        ],
        specifications: {
          type: "Mixed-Use",
          area: "Residential & Commercial units",
          status: "Planning Phase",
          possession: "2028"
        }
      }
    ]
  },
  {
    id: "shree-laxmi",
    name: "Shree Laxmi Developers",
    logo: "/assets/developers/shree-laxmi-logo.png", // Placeholder - logo to be provided
    description: "Shree Laxmi Developers creates premium residential spaces with attention to detail and quality craftsmanship.",
    excerpt: "Premium residential developments with quality craftsmanship.",
    color: "#F59E0B",
    projects: [
      {
        id: "blanca",
        title: "Blanca",
        location: "Mumbai, Maharashtra",
        excerpt: "Contemporary residential project with modern amenities",
        description: "Blanca offers contemporary living spaces designed for modern families, featuring quality construction and thoughtful amenities.",
        images: ["/assets/developers/shree-laxmi-logo.png"],
        brochure_url: "/assets/brochures/blanca-brochure.pdf",
        amenities: [
          "Modern Architecture",
          "Clubhouse",
          "Gymnasium",
          "Swimming Pool",
          "Children's Play Area",
          "24/7 Security",
          "Power Backup",
          "Landscaped Gardens"
        ],
        specifications: {
          type: "Residential",
          area: "2 BHK to 3 BHK",
          status: "Under Construction",
          possession: "2026"
        }
      }
    ]
  },
  {
    id: "delta-groups",
    name: "DELTA Groups",
    logo: "/assets/developers/delta-logo.png", // Placeholder - logo to be provided
    description: "DELTA Groups is committed to delivering stellar residential and commercial projects with innovative design.",
    excerpt: "Stellar residential and commercial projects with innovative design.",
    color: "#3B82F6",
    projects: [
      {
        id: "delta-steller",
        title: "Delta Steller",
        location: "Navi Mumbai, Maharashtra",
        excerpt: "Stellar mixed-use development",
        description: "Delta Steller is a premium mixed-use development offering the perfect blend of residential and commercial spaces with world-class amenities.",
        images: ["/assets/developers/delta-logo.png"],
        brochure_url: "/assets/brochures/delta-steller-brochure.pdf",
        amenities: [
          "Mixed-Use Development",
          "Premium Apartments",
          "Commercial Spaces",
          "Clubhouse",
          "Swimming Pool",
          "Gymnasium",
          "24/7 Security",
          "Parking Facility"
        ],
        specifications: {
          type: "Mixed-Use",
          area: "Residential & Commercial units",
          status: "New Launch",
          possession: "2027"
        }
      }
    ]
  },
  {
    id: "dreamapex",
    name: "Dreamapex Realty",
    logo: "/assets/developers/dreamapex-logo.png", // Placeholder - logo to be provided
    description: "Dreamapex Realty specializes in high-rise residential developments that reach new heights of luxury and comfort.",
    excerpt: "High-rise residential developments reaching new heights of luxury.",
    color: "#EC4899",
    projects: [
      {
        id: "24-high",
        title: "24 High",
        location: "Mumbai, Maharashtra",
        excerpt: "Premium high-rise residential tower",
        description: "24 High is a prestigious high-rise residential tower offering panoramic views, luxurious amenities, and sophisticated living spaces.",
        images: ["/assets/developers/dreamapex-logo.png"],
        brochure_url: "/assets/brochures/24-high-brochure.pdf",
        amenities: [
          "High-Rise Tower",
          "Panoramic Views",
          "Luxury Apartments",
          "Sky Lounge",
          "Swimming Pool",
          "Gymnasium",
          "24/7 Security",
          "Concierge Service"
        ],
        specifications: {
          type: "Residential",
          area: "2 BHK to 4 BHK",
          status: "Under Construction",
          possession: "2027"
        }
      }
    ]
  },
  {
    id: "emporia-world",
    name: "Emporia World",
    logo: "/assets/developers/emporia-logo.png", // Placeholder - logo to be provided
    description: "Emporia World creates world-class commercial spaces designed for business excellence and growth.",
    excerpt: "World-class commercial spaces designed for business excellence.",
    color: "#6366F1",
    projects: [
      {
        id: "business-square",
        title: "Business Square",
        location: "Pune, Maharashtra",
        excerpt: "Premium commercial business park",
        description: "Business Square is a state-of-the-art commercial development offering premium office spaces, retail outlets, and business amenities in a strategic location.",
        images: ["/assets/developers/emporia-logo.png"],
        brochure_url: "/assets/brochures/business-square-brochure.pdf",
        amenities: [
          "Grade-A Office Spaces",
          "Retail Plaza",
          "Food Court",
          "Conference Facilities",
          "High-Speed Internet",
          "Ample Parking",
          "24/7 Security",
          "Power Backup"
        ],
        specifications: {
          type: "Commercial",
          area: "Office spaces from 500 sq.ft",
          status: "Ready to Move",
          possession: "Immediate"
        }
      }
    ]
  },
  {
    id: "kaamdhenu-realties",
    name: "Kaamdhenu Realties",
    logo: "/assets/developers/kaamdhenu-realties-logo.png", // Placeholder - logo to be provided
    description: "Kaamdhenu Realties delivers premium commercial and residential projects with strategic locations and strong value.",
    excerpt: "Premium commercial and residential projects with strategic locations.",
    color: "#14B8A6",
    projects: [
      {
        id: "equirise-nerul-lp",
        title: "Equirise Nerul LP",
        location: "Nerul, Navi Mumbai",
        excerpt: "Strategic commercial development in prime location",
        description: "Equirise Nerul LP is a strategically located commercial project offering premium office and retail spaces with excellent connectivity and modern infrastructure.",
        images: ["/assets/developers/kaamdhenu-realties-logo.png"],
        brochure_url: "/assets/brochures/equirise-nerul-lp-brochure.pdf",
        amenities: [
          "Prime Location",
          "Office Spaces",
          "Retail Outlets",
          "Food Court",
          "Parking Facility",
          "High-Speed Elevators",
          "24/7 Security",
          "Power Backup"
        ],
        specifications: {
          type: "Commercial",
          area: "Variable configurations",
          status: "Under Construction",
          possession: "2026"
        }
      }
    ]
  },
  {
    id: "raheja-prime",
    name: "Raheja Prime",
    logo: "/assets/developers/raheja-logo.png", // Placeholder - logo to be provided
    description: "Raheja Prime is known for creating landmark developments with exceptional quality and timeless design.",
    excerpt: "Landmark developments with exceptional quality and timeless design.",
    color: "#A855F7",
    projects: [
      {
        id: "dummy-project",
        title: "Upcoming Project",
        location: "Mumbai, Maharashtra",
        excerpt: "Premium development - Details to be announced",
        description: "Raheja Prime is developing a new premium project that will set new standards in luxury and lifestyle. Details will be announced soon.",
        images: ["/assets/developers/raheja-logo.png"],
        brochure_url: null,
        amenities: [
          "Premium Development",
          "Modern Amenities",
          "Strategic Location",
          "Quality Construction",
          "More details coming soon"
        ],
        specifications: {
          type: "Residential",
          area: "To be announced",
          status: "Planning Phase",
          possession: "To be announced"
        }
      }
    ]
  }
];

// Helper function to get a specific group
export const getGroupById = (id: string): DeveloperGroup | undefined => {
  return developerGroups.find(group => group.id === id);
};

// Helper function to get a specific project
export const getProjectById = (groupId: string, projectId: string): Project | undefined => {
  const group = getGroupById(groupId);
  return group?.projects.find(project => project.id === projectId);
};

