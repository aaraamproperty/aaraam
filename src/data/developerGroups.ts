// Import logos from Developer_group_Logos folder
import tesconLogo from "@/assets/Properies/Developer_group_Logos/1 Tescon logo.png";
import kaamdhenubuildersLogo from "@/assets/Properies/Developer_group_Logos/2 Kamdhenu_Builders.png";
import paradiseLogo from "@/assets/Properies/Developer_group_Logos/3 Paradise Logo.png";
import greenscapeLogo from "@/assets/Properies/Developer_group_Logos/4 GreenScape.png";
import dreamsLogo from "@/assets/Properies/Developer_group_Logos/5 Dream Group.png";
import deltaLogo from "@/assets/Properies/Developer_group_Logos/6 Delta Groups.svg";
import dreamapexLogo from "@/assets/Properies/Developer_group_Logos/7 Dreamapex Realty.webp";
import kaamdhenurealtiesLogo from "@/assets/Properies/Developer_group_Logos/8 Kaamdhenu Realties.png";
import rahejaLogo from "@/assets/Properies/Developer_group_Logos/9 Raheja Prime.jpg";
import blancaLogo from "@/assets/Properies/Developer_group_Logos/10 shree laxmi developers.jpg";
import emporiaWorldLogo from "@/assets/Properies/Developer_group_Logos/11 Emporia World.jpeg";

// Import hero images
import groupHeroImage from "@/assets/Properies/Global/cityscape-twilight-bangkok-thailand.jpg";
import universalHeroBg from "@/assets/Properies/Tescon Group/Plan M Tescon/Plan M bg.png";
import equiriseBuilding from "@/assets/Properies/KAMDHENU Realities/EQUIRISE/Kamdhenu_Equiris bg.png";
import planMHero from "@/assets/Properies/Tescon Group/Plan M Tescon/Plan M image.webp";
import planMChatGpt from "@/assets/Properies/Tescon Group/Plan M Tescon/ChatGpt Plan M image.png";
import planMChatGpt1 from "@/assets/Properies/Tescon Group/Plan M Tescon/Plan M bg.png";
import planMCard from "@/assets/Properies/Tescon Group/Plan M Tescon/Plan M image1.webp";
import planIBuilding from "@/assets/Properies/Tescon Group/Plan i Tescon/Plan_I bg.png";
import saiWorldOneHero from "@/assets/Properies/Paradise Group/Sai World One/Sai_World_one_image bg.png";
import saiWorldPyramidBuilding from "@/assets/Properies/Paradise Group/Sai World Pyramid/Sai_world_pyramid_img bg.png";
import cyberSquareBuilding from "@/assets/Properies/Cyber Square Greenscape/Cyber Square/CyberSquare bg.png";
import dreamIkonHero from "@/assets/Properies/Dream Group/Dream Ikon/Dream_Ikon bg.png";
import dreamGatewayHero from "@/assets/Properies/Dream Group/Dream Gateway/Dream_Gateway_image bg.png";
import dreamDigitBuilding from "@/assets/Properies/Dream Group/Dream Digit/Dream_Digit_image bg.png";
import deltaStellarBuilding from "@/assets/Properies/Delta Group/DELTA STELLAR/Delta_steller bg.png";
import twentyFourHighBuilding from "@/assets/Properies/Dreamapex realty/24 High/24_high_photo bg.png";
import equiriseNerulBuilding from "@/assets/Properies/KAMDHENU Realities/EQUIRISE/Kamdhenu_Equiris bg.png";
import rahejaPrimeBuilding from "@/assets/Properies/Raheja Prime 2/Raheja_Prime bg.png";
import blancaBuilding from "@/assets/Properies/BLANCA Shreelaxmi Developers/Blanca Shreelaxmi Developers bg.png";
import businessSquareBuilding from "@/assets/Properies/Emporia world/business_square bg.png";

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
  connectivity?: string[];
  pricing?: {
    starting: string;
    note?: string;
  };
  contact?: {
    name: string;
    designation: string;
    phone: string;
    company: string;
  };
  highlights?: string[];
  mapUrl?: string;
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
    heroImage: groupHeroImage,
    description: "Tescon delivers ultra-modern commercial business parks with innovative designs, comprehensive amenities, and strategic locations. Specializing in high-ROI investment opportunities with modern infrastructure including robotic car parking, premium amenities, and RERA-approved projects.",
    excerpt: "Ultra-modern commercial business parks",
    color: "#004861",
    projects: [
      {
        id: "plan-i",
        title: "PLAN I Business Park",
        location: "Nerul MIDC, Opposite DY Patil Stadium, Navi Mumbai",
        excerpt: "Investment Starting ₹69 Lakhs | Ultra-modern office spaces from 387 sq.ft | Full CC received",
        description: "PLAN I Business Park is an ultra-modern commercial development offering office spaces from 387 sq.ft carpet onwards, starting at just ₹69 Lakhs. Located in prime Nerul MIDC opposite DY Patil Stadium, this G+23 tower on a 1-acre land parcel features unique elevation design and robotic car parking with each unit. With full CC (Commencement Certificate) received and all approvals in place, PLAN I offers bare shell units with possession as per RERA. The project features exceptional ceiling heights (10 ft for offices, 13 ft for commercial), modern amenities including fitness centre, infinity swimming pool, food court, and common conference rooms. Strategic location with 3-minute walk to bus stand, 10-minute walk to Juinagar station, and 100m from highway makes this an ideal investment opportunity.",
        images: [universalHeroBg, planIBuilding, tesconLogo],
        brochure_url: "/assets/brochures/tescon-plan-i-brochure.pdf",
        pricing: {
          starting: "₹69 Lakhs",
          note: "Investment starting price | Bare shell units"
        },
        highlights: [
          "Ultra-modern office spaces from 387 sq.ft carpet onwards",
          "Investment starting at ₹69 Lakhs",
          "Located in Nerul MIDC, opposite DY Patil Stadium",
          "Full CC received & all approvals in place",
          "Possession: As per RERA",
          "Unit condition: Bare shell",
          "1-acre land parcel",
          "G+23 floor configuration",
          "Unique elevation design",
          "Robotic car parking with each unit",
          "Office ceiling height: 10 ft",
          "Commercial ceiling height: 13 ft"
        ],
        connectivity: [
          "Bus Stand: 3-minute walk - Public transport access",
          "Juinagar Station: 10-minute walk - Harbour Line connectivity",
          "Highway: 100 meters - Major road access",
          "DY Patil Stadium: Opposite - Landmark location",
          "Nerul MIDC: Prime commercial zone"
        ],
        amenities: [
          "Robotic Car Parking",
          "Fitness Centre",
          "Indoor Games",
          "Infinity Swimming Pool",
          "Food Court",
          "Common Conference Rooms",
          "Outdoor Games",
          "Library",
          "Gazebo Seating",
          "High-Speed Elevators",
          "24/7 Security",
          "CCTV Surveillance",
          "Power Backup",
          "Fire Safety Systems",
          "Professional Property Management"
        ],
        specifications: {
          type: "Commercial - Office Spaces",
          area: "From 387 sq.ft carpet onwards",
          status: "Full CC Received - Ready for Investment",
          possession: "As per RERA"
        },
        mapUrl: "https://maps.google.com/?q=Nerul+MIDC+DY+Patil+Stadium+Navi+Mumbai"
      },
      {
        id: "plan-m",
        title: "PLAN M Business Park",
        location: "Thane-Belapur Highway,Near Turbhe Station, Navi Mumbai",
        excerpt: "High ROI Opportunity (5–7%) | Starting ₹79.40 Lakhs + taxes | Possession: Nov 2025",
        description: "PLAN M Business Park is a prestigious 2.5-acre commercial development offering high ROI opportunities of 5–7% with investments starting at ₹79.40 Lakhs + taxes. Located on the Navi Mumbai growth corridor with direct Thane-Belapur highway access and just 200m from Turbhe railway station, this project features an impressive three-wing elevation: MIDAS Wing (G+5), West Wing (G+36), and East Wing (G+36). The development includes G+8 car parking with 800+ slots, 14 Miconic high-speed lifts, and a 30-ft wide driveway. With exceptional ceiling heights (11 ft for offices, 13 ft for commercial), PLAN M offers bare shell units with possession in Nov 2025 as per RERA. Modern amenities include fitness centre, yoga & meditation, swimming pool with jacuzzi, steam & sauna, themed library, food court, children's creche, and concierge services. Located 18 km from the upcoming international airport with central access to Thane–Panvel–Mumbai.",
        images: [universalHeroBg, planMChatGpt, tesconLogo, planMCard],
        brochure_url: "/assets/brochures/tescon-plan-m-brochure.pdf",
        pricing: {
          starting: "₹79.40 Lakhs + taxes",
          note: "High ROI: 5–7% | Bare shell units"
        },
        highlights: [
          "High ROI Opportunity: 5–7% returns",
          "Investment starting at ₹79.40 Lakhs + taxes",
          "Navi Mumbai growth corridor location",
          "Unit condition: Bare shell",
          "Possession: Nov 2025 (as per RERA)",
          "2.5-acre development",
          "Three-wing elevation: MIDAS (G+5), West (G+36), East (G+36)",
          "G+8 car parking with 800+ slots",
          "14 Miconic high-speed lifts",
          "30-ft wide driveway",
          "Office ceiling height: 11 ft",
          "Commercial ceiling height: 13 ft"
        ],
        connectivity: [
          "Thane-Belapur Highway: Direct access - Prime highway frontage",
          "Turbhe Railway Station: 200 meters - Major rail hub",
          "Navi Mumbai International Airport: 18 km - Upcoming connectivity",
          "Central access to Thane–Panvel–Mumbai corridors"
        ],
        amenities: [
          "800+ Parking Slots (G+8)",
          "14 Miconic High-Speed Lifts",
          "Fitness Centre",
          "Yoga & Meditation Zone",
          "Indoor Games",
          "Swimming Pool + Jacuzzi",
          "Steam & Sauna",
          "Cafeteria",
          "Themed Library",
          "Food Court",
          "Children's Creche",
          "Concierge Services",
          "Valet Services",
          "24/7 Security",
          "CCTV Surveillance",
          "Power Backup",
          "Fire Safety Systems"
        ],
        specifications: {
          type: "Commercial - Business Park",
          area: "Multiple configurations available",
          status: "Ready for Possession",
          possession: "November 2025 (As per RERA)"
        },
        mapUrl: "https://maps.app.goo.gl/kqi3uFXCLsQe5RGc9"
      }
    ]
  },
  {
    id: "kaamdhenu-builders",
    name: "The Kaamdhenu Builders",
    logo: kaamdhenubuildersLogo,
    heroImage: "/assets/hero-images/Kaamdheny_Growth_Master_image bg.png",
    description: "The Kaamdhenu Builders specializes in creating growth-oriented commercial and residential communities that offer strong value propositions, strategic locations, and sustainable investment opportunities.",
    excerpt: "Premium residential and commercial developments",
    color: "#16A34A",
    projects: [
      {
        id: "kaamdhenu-growth-master",
        title: "Kaamdhenu Growth Master",
        location: "Nerul, Navi Mumbai",
        excerpt: "Exclusive Pre-Launch Opportunity – Pay only 1% Per Slab with a flexible payment plan!",
        description: `Kaamdhenu Growth Master is an exclusive pre-launch commercial opportunity offering premium warm-shell offices in a G+20 storey tower at Nerul, Navi Mumbai. Located opposite DY Patil Stadium & Courtyard by Marriott, just 2 minutes from Sion-Panvel Highway, this project represents a smart investment opportunity with strong ROI potential.

With the plinth level completed and CC (Commencement Certificate) received, investors can secure prime office spaces from 500 to 6,500 sq.ft. carpet area starting from ₹75 Lakhs onwards. Expected post-possession rentals of ₹70,000+ per month offer potential returns of up to 9%+ yield.

The development features an elegant grand lobby with secure access and a dedicated amenities floor including lounge, conference rooms, meeting hubs, and cafeteria. This is a future-ready office opportunity with a flexible payment plan of just 1% per slab.`,
        images: [universalHeroBg, "/assets/hero-images/Kaamdhenu_Growth_Master_image bg.png", kaamdhenubuildersLogo],
        brochure_url: "/assets/brochures/kaamdhenu-growth-master-gm-brochure.pdf",
        amenities: [
          "Elegant Grand Lobby with Secure Access",
          "Dedicated Amenities Floor",
          "Conference Rooms",
          "Meeting Hubs",
          "Business Lounge",
          "Cafeteria",
          "Premium Warm-Shell Offices",
          "High-Speed Elevators",
          "24/7 Security",
          "Power Backup",
          "Fire Safety Systems",
          "CCTV Surveillance",
          "Professional Property Management",
          "Ample Parking"
        ],
        specifications: {
          type: "Commercial - Premium Offices",
          area: "500 - 6,500 sq.ft. Carpet",
          status: "Pre-Launch - Plinth Level Completed",
          possession: "2026 (Expected)"
        },
        highlights: [
          "Plinth Level Completed | G+20 Tower | CC Received",
          "Office Spaces: 500 – 6,500 sq.ft Carpet",
          "Prices from ₹75 Lakhs + onwards",
          "Expected rentals up to ₹70,000+/month",
          "Up to 9%+ ROI potential",
          "Pay only 1% Per Slab - Flexible Payment Plan",
          "Opposite DY Patil Stadium & Courtyard by Marriott",
          "2 minutes from Sion-Panvel Highway",
          "Plinth Ready | Future-Ready Offices",
          "Smart Investment Opportunity"
        ],
        connectivity: [
          "DY Patil Stadium: Opposite",
          "Courtyard by Marriott: Opposite",
          "Sion-Panvel Highway: 2 minutes",
          "Nerul Railway Station: 5 minutes",
          "Vashi: 10 minutes",
          "Palm Beach Road: 5 minutes"
        ],
        pricing: {
          starting: "₹75 Lakhs + onwards",
          note: "Exclusive Pre-Launch | Pay only 1% Per Slab"
        },
        contact: {
          name: "Kabir Menda",
          designation: "Sales Representative",
          phone: "8655347705",
          company: "The Kaamdhenu Builders"
        },
        mapUrl: "https://maps.app.goo.gl/d57J48Ea87dThpXD8?g_st=iwb"
      }
    ]
  },
  {
    id: "paradise-group",
    name: "Paradise Group",
    logo: paradiseLogo,
    heroImage: groupHeroImage,
    description: "Paradise Group creates world-class integrated developments that combine residential luxury, premium business spaces, and high-street retail. Known for iconic architectural landmarks featuring comprehensive amenities, strategic locations, and positive living environments.",
    excerpt: "Integrated mixed-use developments",
    color: "#004861",
    projects: [
      {
        id: "sai-world-one",
        title: "Sai World One — One World. One Life.",
        location: "Opposite D.Y. Patil Stadium, Thane-Belapur Road, Nerul, Navi Mumbai",
        excerpt: "6-acre integrated world | Residences + Business Spaces + High-Street Retail | 2 Iconic G+36 Towers",
        description: "Sai World One is a prestigious 6-acre integrated development offering a complete world-class lifestyle experience. This landmark project features 2 iconic G+36 residential towers with 2 & 3 BHK world luxury homes, a G+28 storey commercial business landmark with mountain & sea-view offices, and G+2 high-street retail ideal for lifestyle brands, auto showrooms, and restaurants. Located opposite D.Y. Patil Stadium on Thane-Belapur Road, the development includes designer lobby, lavish clubhouse, infinity pool, Navi Mumbai's first-ever pickleball court, dual gyms, multipurpose sports turf, and 3-tier security. With exceptional connectivity (Nerul Station: 5 mins, Airport: 15 mins, MTHL: 20 mins), Sai World One offers an unparalleled integrated living and business ecosystem.",
        images: [universalHeroBg, saiWorldOneHero, paradiseLogo],
        brochure_url: "/assets/brochures/sai-world-one-brochure.pdf",
        highlights: [
          "6-acre integrated world in Nerul",
          "Residences + Business Spaces + High-Street Retail",
          "Opposite D.Y. Patil Stadium, Thane-Belapur Road",
          "2 Iconic Residential Towers (G+36 floors each)",
          "2 & 3 BHK world luxury homes",
          "Designer lobby & lavish clubhouse",
          "Infinity swimming pool",
          "First-ever pickleball court in Navi Mumbai",
          "Dual gyms & multipurpose sports turf",
          "3-tier security & ample parking",
          "G+28 storey commercial business landmark",
          "Mountain & sea-view offices - 40 offices per floor",
          "Double-height lounge",
          "G+2 high-street retail (Road-facing exclusive)"
        ],
        connectivity: [
          "Thane-Belapur Road: 0 minutes - Direct frontage",
          "Nerul Station: 5 minutes - Harbour Line access",
          "Navi Mumbai International Airport: 15 minutes",
          "MTHL / Atal Setu: 20 minutes - Mumbai connectivity",
          "DY Patil Stadium: Opposite - Landmark location"
        ],
        amenities: [
          "2 Iconic G+36 Residential Towers",
          "Designer Lobby",
          "Lavish Clubhouse",
          "Infinity Swimming Pool",
          "First Pickleball Court in Navi Mumbai",
          "Dual Gymnasiums",
          "Multipurpose Sports Turf",
          "3-Tier Security System",
          "Ample Parking",
          "G+28 Commercial Tower",
          "Mountain & Sea View Offices",
          "Double-Height Lounge",
          "G+2 High-Street Retail",
          "24/7 Security",
          "CCTV Surveillance",
          "Power Backup",
          "High-Speed Elevators"
        ],
        specifications: {
          type: "Integrated Development - Residential + Commercial + Retail",
          area: "2 & 3 BHK Luxury Homes | Commercial Offices | High-Street Retail",
          status: "New Launch",
          possession: "2027-2028 (Expected)"
        },
        mapUrl: "https://maps.google.com/?q=DY+Patil+Stadium+Thane+Belapur+Road+Nerul"
      },
      {
        id: "sai-world-pyramid",
        title: "Sai World Pyramid — Positive Life, Positive Energy",
        location: "Nerul, Navi Mumbai",
        excerpt: "Retail + Business Park + Residential | 2-acre development | G+27 Commercial + G+40 Residential",
        description: "Sai World Pyramid is a unique 2-acre integrated development with a positive energy theme, featuring a G+27 commercial tower (IT/ITES floors 10-27) with rooftop garden & restaurant, and a G+40 residential tower with 2 & 3 BHK homes featuring hill & waterfall-facing units. The commercial tower offers offices from ₹1.18 Cr++ to ₹2.99 Cr++ with 6-level parking and 8 lifts. The residential tower includes 2 BHK (1320 SA/805 CA at ₹1.87 Cr++) and 3 BHK (2035-2335 SA/1240-1436 CA at ₹2.81-3.23 Cr++) with grand lobby, podium amenities, and 5 lifts. G+1 retail features 31 ground floor shops and 30 first floor shops with front-facing double-height units. With parking from P2-P7, amenities on 8th floor, and units starting from 10th floor, this project offers exceptional connectivity: Juinagar Station (2 mins), Sion-Panvel Highway (1 min), Airport (15 mins).",
        images: [universalHeroBg, saiWorldPyramidBuilding, paradiseLogo],
        brochure_url: "/assets/brochures/sai-world-pyramid-brochure.pdf",
        pricing: {
          starting: "₹1.18 Cr++",
          note: "Commercial: ₹1.18-2.99 Cr++ | 2 BHK: ₹1.87 Cr++ | 3 BHK: ₹2.81-3.23 Cr++"
        },
        highlights: [
          "Theme: Positive Life, Positive Energy",
          "2-acre land parcel with 2 towers",
          "Retail + Business Park + Residential",
          "Commercial Tower (G+27): IT/ITES floors 10-27",
          "Rooftop garden + restaurant",
          "6-level parking | 8 lifts",
          "Commercial pricing: ₹1.18 Cr++ – ₹2.99 Cr++",
          "Residential Tower (G+40): 2 & 3 BHK homes",
          "2 BHK: 1320 SA/805 CA — ₹1.87 Cr++",
          "3 BHK: 2035-2335 SA/1240-1436 CA — ₹2.81-3.23 Cr++",
          "Grand lobby | Podium amenities",
          "Hill & waterfall-facing units | 5 lifts",
          "Retail (G+1): 31 + 30 shops with double-height units",
          "Parking: P2-P7 | Amenities: 8th floor | Units: From 10th floor"
        ],
        connectivity: [
          "Juinagar Station: 2 minutes - Harbour Line connectivity",
          "Sion-Panvel Highway: 1 minute - Major highway access",
          "Navi Mumbai International Airport: 15 minutes",
          "Nerul Hub: Central Navi Mumbai location"
        ],
        amenities: [
          "G+27 Commercial Tower",
          "G+40 Residential Tower",
          "Rooftop Garden & Restaurant",
          "6-Level Parking (P2-P7)",
          "8th Floor Amenity Deck",
          "Grand Lobby",
          "Podium Amenities",
          "Hill & Waterfall Views",
          "G+1 Retail Spaces",
          "Double-Height Retail Units",
          "High-Speed Elevators (8 Commercial + 5 Residential)",
          "24/7 Security",
          "CCTV Surveillance",
          "Power Backup",
          "Fire Safety Systems"
        ],
        specifications: {
          type: "Integrated - Commercial + Residential + Retail",
          area: "2 BHK: 805-1436 CA | 3 BHK: 1240-1436 CA | Commercial: Variable",
          status: "Ready to Move / Near Completion",
          possession: "Immediate to 2026"
        },
        mapUrl: "https://maps.google.com/?q=Nerul+Navi+Mumbai+Juinagar"
      }
    ]
  },
  {
    id: "greenscape",
    name: "GreenScape",
    logo: greenscapeLogo,
    heroImage: "/assets/hero-images/cybersquare-hero.jpeg",
    description: "GreenScape is dedicated to creating sustainable, modern commercial developments built for future-ready workspaces with environmental consciousness at the core.",
    excerpt: "Sustainable green developments",
    color: "#10B981",
    projects: [
      {
        id: "cybersquare",
        title: "Cyber Square",
        location: "Nerul (LP) – Opp. D.Y. Patil University, Navi Mumbai",
        excerpt: "Unlock the future with our brand-new commercial project featuring a stunning Retail Plaza spanning 3 Lakh sq.ft. on 6 acres of prime land.",
        description: `Cyber Square is a landmark mixed-use development by GreenScape, strategically located in Nerul (LP) opposite D.Y. Patil University. This iconic project spans 6 acres of prime land featuring a Ground + 25 Story tower with Highway Frontage.

The development offers 3 lakh sq.ft of High Street Retail Plaza with double-height lobby spaces, complemented by state-of-the-art IT/ITES office floors with large floor plates of approximately 49,000 sq.ft carpet area. Office spaces start from 901 sq.ft carpet with impressive 12 ft floor-to-ceiling heights.

With 3-level basement car parking offering 1500+ slots, 22 high-speed elevators, and an open-to-sky central green area, Cyber Square sets new standards in commercial excellence. The project also includes indoor amenities spanning ~50,000 sq.ft, creating a complete business ecosystem.`,
        images: [universalHeroBg, cyberSquareBuilding, greenscapeLogo],
        brochure_url: "/assets/brochures/cybersquare-layout-plan-nerul.pdf",
        amenities: [
          "Highway Frontage",
          "3 Level Basement Car Parking — 1500+ slots",
          "Ground + 25 Story Building",
          "3 lac sq. ft High Street Retail Plaza",
          "Double Height Lobby Space",
          "Large floor plate ≈ 49,000 sq.ft. carpet",
          "Office area starting from 901 sq.ft. carpet",
          "Floor-to-Ceiling height — 12 ft",
          "22 Elevators",
          "Open-to-Sky Central Green Area",
          "Indoor amenities ~50,000 sq.ft.",
          "Mixed Use Development",
          "LEED Certified",
          "Smart Building Technology",
          "High-Speed Internet",
          "Green Spaces",
          "EV Charging Stations",
          "Solar Power",
          "Rainwater Harvesting"
        ],
        specifications: {
          type: "Commercial - Mixed Use (IT/ITES Offices & Retail)",
          area: "Offices: 901 - 49,000 sq.ft. Carpet | Retail: High Street Plaza 3 Lakh sq.ft.",
          status: "New Launch",
          possession: "2027 (Expected)"
        },
        highlights: [
          "Location Advantage: Nerul (LP) – Opp. D.Y. Patil University",
          "Highway Frontage",
          "6 Acres of Land Parcel (Mixed Use Development)",
          "3 Level Basement Car Parking — 1500+ slots",
          "Ground + 25 Story — IT/ITES office floors",
          "3 lac sq. ft High Street Retail Plaza",
          "Double Height Lobby Space",
          "Large floor plate ≈ 49,000 sq.ft. carpet",
          "Office area starting from 901 sq.ft. carpet",
          "Floor-to-Ceiling height — 12 ft",
          "22 Elevators",
          "Open-to-Sky Central Green Area",
          "Indoor amenities ~50,000 sq.ft."
        ],
        connectivity: [
          "D.Y. Patil University: Opposite",
          "Nerul Railway Station: 2-3 km",
          "Mumbai-Pune Expressway: Direct Access",
          "Navi Mumbai International Airport: 15-20 mins",
          "Vashi: 10 mins",
          "CBD Belapur: 8 mins"
        ],
        mapUrl: "https://maps.app.goo.gl/VQ4qRuoE2pS9gmjQ9?g_st=awb"
      }
    ]
  },
  {
    id: "dreams-group",
    name: "Dreams Group",
    logo: dreamsLogo,
    heroImage: groupHeroImage,
    description: "Dreams Group creates landmark commercial developments with strategic locations and comprehensive amenities. Specializing in premium office spaces that combine business functionality with lifestyle amenities including co-working spaces, retail, and recreational facilities.",
    excerpt: "Mixed-use commercial and retail spaces",
    color: "#8B5CF6",
    projects: [
      {
        id: "dream-digit",
        title: "Dream Digit — Nearby Possession",
        location: "Thane Belapur Road, Navi Mumbai",
        excerpt: "Commercial office spaces from ₹70 Lakhs onwards | 26-storey tower on Thane Belapur Road",
        description: "Dream Digit is a prestigious 26-storey commercial tower offering premium office spaces on the prime Thane Belapur Road. This nearby possession property features office sizes of 382 sq.ft and 500 sq.ft, starting from ₹70 Lakhs onwards. The development includes a grand arrival lobby, horizon terrace with outdoor restaurant, modern business centre with co-working spaces, club leisure avenues including a Futsal court, podium parking, and high-street retail at ground level. With excellent connectivity to Turbhe and Koperkhairane Stations, Vashi, and the upcoming airport, Dream Digit represents an ideal investment in Navi Mumbai's thriving commercial corridor.",
        images: [universalHeroBg, dreamDigitBuilding, dreamsLogo],
        brochure_url: "/assets/brochures/dream-digit-brochure.pdf",
        pricing: {
          starting: "₹70 Lakhs",
          note: "Onwards | 382 sq.ft & 500 sq.ft configurations"
        },
        highlights: [
          "Commercial office spaces on Thane Belapur Road",
          "Pricing from ₹70 Lakhs onwards",
          "26-storey tower with modern architecture",
          "Office sizes: 382 sq.ft & 500 sq.ft",
          "Grand arrival lobby with premium finishes",
          "Horizon terrace & outdoor restaurant",
          "Business centre & co-working spaces",
          "Club leisure avenues + Futsal court",
          "Podium parking facilities",
          "High-street retail at ground level",
          "Nearby Possession - Ready to move soon"
        ],
        connectivity: [
          "Turbhe Station: 5 minutes - Western Line connectivity",
          "Koperkhairane Station: 5 minutes - Harbour Line access",
          "Vashi Toll: 10 minutes - Palm Beach Road access",
          "Vashi Station: 15 minutes - Major transport hub",
          "Navi Mumbai International Airport: 30 minutes - Upcoming connectivity",
          "JNPT Port: 55 minutes - Logistics & trade corridor"
        ],
        amenities: [
          "26-Storey Commercial Tower",
          "Grand Arrival Lobby",
          "Horizon Terrace",
          "Outdoor Restaurant",
          "Business Centre",
          "Co-Working Spaces",
          "Club Leisure Avenues",
          "Futsal Court",
          "Podium Parking",
          "High-Street Retail",
          "High-Speed Elevators",
          "24/7 Security",
          "CCTV Surveillance",
          "Power Backup",
          "Fire Safety Systems"
        ],
        specifications: {
          type: "Commercial - Office Spaces",
          area: "382 sq.ft & 500 sq.ft",
          status: "Nearby Possession",
          possession: "2025-2026"
        },
        mapUrl: "https://maps.google.com/?q=Thane+Belapur+Road+Navi+Mumbai"
      },
      {
        id: "dream-gateway",
        title: "Dream Gateway — Prime Turbhe Address",
        location: "Opposite Turbhe Station, Thane Belapur Highway, Navi Mumbai",
        excerpt: "Upcoming development on 2.5-acre land parcel | Flexible payment plans | Possession: December 2028",
        description: "Dream Gateway is an upcoming landmark development strategically located opposite Turbhe Station, directly on the Thane Belapur Highway. This premium project spans a 2.5-acre land parcel and offers flexible payment plans including CLP, 100% Down Payment, and Yearly plans. Scheduled for possession in December 2028, Dream Gateway promises the best pricing for early investors who schedule a site visit. The prime location ensures excellent connectivity to Mumbai and Navi Mumbai's key business districts, while the direct highway access makes it ideal for commercial and mixed-use purposes. This is a rare opportunity to invest in one of Navi Mumbai's most strategic locations.",
        images: [universalHeroBg, dreamGatewayHero, dreamsLogo],
        brochure_url: "/assets/brochures/dream-gateway-brochure.pdf",
        highlights: [
          "Located opposite Turbhe Station - Direct access",
          "Directly on Thane Belapur Highway - Prime frontage",
          "Upcoming development on 2.5-acre land parcel",
          "Flexible payment plans: CLP, 100% Down Payment, Yearly plans",
          "Possession: December 2028",
          "Assured best pricing on site visit",
          "Strategic location for commercial & mixed-use",
          "Excellent connectivity to Mumbai & Navi Mumbai"
        ],
        amenities: [
          "Prime Highway Location",
          "Station Opposite Access",
          "Large Land Parcel (2.5 acres)",
          "Modern Architecture",
          "Flexible Payment Options",
          "Strategic Commercial Location",
          "Premium Infrastructure",
          "High Connectivity"
        ],
        specifications: {
          type: "Commercial / Mixed-Use Development",
          area: "Multiple configurations - To be announced",
          status: "Upcoming Launch",
          possession: "December 2028"
        },
        mapUrl: "https://maps.google.com/?q=Turbhe+Station+Thane+Belapur+Highway"
      },
      {
        id: "dream-ikon",
        title: "Dream Ikon — Premium Commercial Landmark",
        location: "Opposite DY Patil Stadium, Nerul, Navi Mumbai",
        excerpt: "One of the best commercial developments | 70% units sold | Possession: December 2026 | Negotiable pricing",
        description: "Dream Ikon is a premium commercial landmark strategically located opposite the iconic DY Patil Stadium in Nerul. Recognized as one of the best commercial developments in the area, this project has already achieved an impressive 70% sales milestone, reflecting strong market confidence and demand. With possession scheduled for December 2026, Dream Ikon offers negotiable pricing with the best rates assured on site visits. The prime Nerul location provides excellent connectivity to major business districts, transport hubs, and upcoming infrastructure including the Navi Mumbai International Airport. This limited opportunity represents an exceptional investment in one of Navi Mumbai's most sought-after commercial addresses.",
        images: [universalHeroBg, dreamIkonHero, dreamsLogo],
        brochure_url: "/assets/brochures/dream-ikon-brochure.pdf",
        highlights: [
          "Located opposite DY Patil Stadium, Nerul",
          "One of the best commercial developments in the area",
          "70% units already sold - Strong market confidence",
          "Possession: December 2026",
          "Negotiable pricing available",
          "Best rates assured on site visit",
          "Premium commercial landmark",
          "Limited units remaining - Act fast"
        ],
        amenities: [
          "Premium Commercial Spaces",
          "Strategic DY Patil Location",
          "Modern Infrastructure",
          "Professional Lobby",
          "High-Speed Elevators",
          "Ample Parking",
          "24/7 Security",
          "CCTV Surveillance",
          "Power Backup",
          "Fire Safety Systems",
          "Business Amenities",
          "Professional Property Management"
        ],
        specifications: {
          type: "Commercial - Premium Offices",
          area: "Multiple configurations available",
          status: "Under Construction - 70% Sold",
          possession: "December 2026"
        },
        mapUrl: "https://maps.google.com/?q=DY+Patil+Stadium+Nerul+Navi+Mumbai"
      }
    ]
  },
  {
    id: "delta-groups",
    name: "DELTA Groups",
    logo: deltaLogo,
    heroImage: "/assets/hero-images/delta-stellar-hero.jpeg",
    description: "DELTA Groups is committed to delivering stellar commercial projects with innovative design, strategic locations, and world-class infrastructure for modern businesses.",
    excerpt: "Premium commercial projects",
    color: "#3B82F6",
    projects: [
      {
        id: "delta-steller",
        title: "Delta Stellar",
        location: "Juinagar, Navi Mumbai – Sion Panvel Highway Corridor",
        excerpt: "31-storied Premium Commercial Tower with Sea Views & Open Panoramic Views",
        description: `Delta Stellar is a prestigious 31-storied high-rise commercial tower strategically located on the Sion-Panvel Highway in Juinagar, Navi Mumbai. This premium development offers stunning sea views and open panoramic vistas, making it an ideal choice for IT/ITES companies, corporates, consultants, and SMEs.

The tower features a magnificent 33 ft high Grand Entrance Lobby and G+2 to 7 levels of surface parking with EV charging points. With flexible planning options that allow combining multiple offices for larger floor plates, Delta Stellar is designed to accommodate businesses of all sizes.

Located just 1 km from Juinagar Station and DY Patil Stadium, 400 meters from the upcoming Google Data Centre, and 7 km from the airport, this project offers unmatched connectivity and growth potential.

Office spaces start from ₹2.33 Cr + taxes for 936 sq.ft. carpet area, providing excellent value in Navi Mumbai's emerging commercial hub.`,
        images: [universalHeroBg, deltaStellarBuilding, deltaLogo],
        brochure_url: "/assets/brochures/delta-stellar-it-building-plans.pdf",
        amenities: [
          "31-storied High-Rise Commercial Tower",
          "Sea Views & Open Panoramic Views",
          "33 ft High Grand Entrance Lobby",
          "G+2 to 7 Levels of Surface Parking",
          "12-meter Driveway for Entry & Exit",
          "EV Charging Points in Parking & Utility Areas",
          "Flexible Office Planning",
          "Provision to Combine Multiple Offices",
          "Ideal for IT/ITES, Corporates, Consultants, SMEs",
          "High-Speed Elevators",
          "24/7 Security",
          "Power Backup",
          "Fire Safety Systems",
          "CCTV Surveillance",
          "Professional Property Management"
        ],
        specifications: {
          type: "Commercial - Premium Offices",
          area: "Starting from 936 sq.ft. Carpet (Flexible planning available)",
          status: "New Launch",
          possession: "2027 (Expected)"
        },
        highlights: [
          "31-storied high-rise commercial tower",
          "Sea & open panoramic views",
          "G+2 to 7 levels of surface parking",
          "33 ft High Grand Entrance Lobby",
          "12m dual-side driveway for entry & exit",
          "EV charging points in parking & utility areas",
          "Flexible planning - combine offices for larger floor plates",
          "Ideal for IT/ITES, corporates, consultants, SMEs",
          "Strategic location on Sion-Panvel Highway",
          "Close to Google Data Centre & Airport"
        ],
        connectivity: [
          "Juinagar Station: 1 km",
          "DY Patil Stadium: 1 km",
          "Sion-Panvel Highway: On Highway",
          "Upcoming Google Data Centre: 400 meters",
          "Navi Mumbai Airport: 7 km",
          "Vashi: 5 km"
        ],
        pricing: {
          starting: "₹2.33 Cr + taxes",
          note: "For 936 sq.ft. carpet area"
        },
        mapUrl: "https://maps.app.goo.gl/d57J48Ea87dThpXD8?g_st=iwb"
      }
    ]
  },
  {
    id: "dreamapex",
    name: "Dreamapex Realty",
    logo: dreamapexLogo,
    description: "Dreamapex Realty creates boutique commercial developments with high rental yields and capital appreciation potential. Specializing in RERA-registered, legally clear properties ideal for investors, startups, professionals, and entrepreneurs.",
    excerpt: "Boutique office spaces",
    color: "#EC4899",
    projects: [
      {
        id: "24-high",
        title: "24 High Business Park",
        location: "Nerul MIDC, Opp. DY Patil Stadium, Navi Mumbai",
        excerpt: "Boutique offices from ₹1.50 Cr+ with high rental yield & capital appreciation",
        description: "24 High Business Park is a premium commercial development offering boutique office spaces designed for modern businesses. Located strategically opposite DY Patil Stadium in Nerul MIDC, this 100% legal, title-clear, and RERA-registered property provides excellent investment opportunities with high rental yields and strong capital appreciation potential. Ideal for investors, startups, professionals, and entrepreneurs seeking quality commercial real estate in Navi Mumbai's thriving business district.",
        images: [universalHeroBg, twentyFourHighBuilding, dreamapexLogo],
        brochure_url: "/assets/brochures/24-high-e-brochure.pdf",
        pricing: {
          starting: "₹1.50 Cr+",
          note: "Boutique offices with high rental yield"
        },
        contact: {
          name: "Sales Team",
          designation: "Business Development",
          phone: "9321336805",
          company: "24 High Business Park"
        },
        highlights: [
          "Boutique offices from ₹1.50 Cr+",
          "High rental yield & capital appreciation",
          "100% legal | Title clear | RERA registered",
          "Strategic location opposite DY Patil Stadium",
          "Ideal for investors, startups, professionals & entrepreneurs",
          "Premium commercial development in Nerul MIDC",
          "Excellent connectivity to Mumbai & Navi Mumbai",
          "Modern infrastructure with business amenities"
        ],
        amenities: [
          "Premium Office Spaces",
          "Professional Reception",
          "High-Speed Elevators",
          "Ample Parking",
          "24/7 Security",
          "CCTV Surveillance",
          "Power Backup",
          "Fire Safety Systems",
          "Modern Intercom",
          "Business Lounge",
          "Conference Facilities",
          "Cafeteria",
          "Landscaped Areas",
          "DG Backup",
          "Professional Property Management"
        ],
        specifications: {
          type: "Commercial - Boutique Offices",
          area: "Various configurations available",
          status: "Ready to Move",
          possession: "Immediate"
        },
        mapUrl: "https://maps.google.com/?q=Nerul+MIDC+DY+Patil+Stadium+Navi+Mumbai"
      }
    ]
  },
  {
    id: "kaamdhenu-realties",
    name: "Kaamdhenu Realties",
    logo: kaamdhenurealtiesLogo,
    heroImage: equiriseBuilding,
    description: "Kaamdhenu Realties develops Grade-A enterprise offices with premium amenities and strategic locations. Known for innovative design, superior construction quality, and comprehensive business ecosystems that combine offices, dining, and networking spaces.",
    excerpt: "Grade-A commercial offices",
    color: "#14B8A6",
    projects: [
      {
        id: "equirise-nerul-lp",
        title: "EQUIRISE — Kaamdhenu Realties",
        location: "NMEC - Nerul LP, Navi Mumbai",
        excerpt: "Grade-A enterprise offices at NMEC – Nerul LP | Starting @ ₹1.09 Cr+ with Easy Payment Plan",
        description: "EQUIRISE is a premium Grade-A commercial development located at Navi Mumbai's prominent NMEC - Nerul LP address. This architectural landmark features a striking glass elevation with a premium lobby, offering column-free office spaces ranging from 484 to 1,255 sq.ft. The project boasts 9-level parking with EV charging facilities, exclusive E-Deck restaurants on the 10th floor, sky amenities on the 29th floor, and rooftop networking spaces. With multi-tier security, smart access systems, and an easy payment plan starting at ₹1.09 Cr+, EQUIRISE represents the perfect business address for modern enterprises.",
        images: [universalHeroBg, equiriseNerulBuilding, kaamdhenurealtiesLogo],
        brochure_url: "/assets/brochures/kamdhenu-equirise-nerul-lp.pdf",
        pricing: {
          starting: "₹1.09 Cr+",
          note: "Easy Payment Plan Available | Limited Units"
        },
        highlights: [
          "Grade-A enterprise offices at NMEC – Nerul LP",
          "Starting @ ₹1.09 Cr+ with Easy Payment Plan",
          "Limited units | Visit today",
          "Striking glass elevation & premium lobby",
          "9-level parking + EV charging facilities",
          "E-Deck restaurants on 10th floor",
          "Sky amenities on 29th floor",
          "Rooftop networking spaces",
          "Column-free offices (484–1255 sq.ft.)",
          "Multi-tier security & smart access systems"
        ],
        amenities: [
          "Striking Glass Elevation",
          "Premium Lobby",
          "9-Level Parking",
          "EV Charging Stations",
          "E-Deck Restaurants (10th Floor)",
          "Sky Amenities (29th Floor)",
          "Rooftop Networking Spaces",
          "Column-Free Office Layouts",
          "Multi-Tier Security",
          "Smart Access Control",
          "High-Speed Elevators",
          "24/7 CCTV Surveillance",
          "Power Backup",
          "Fire Safety Systems",
          "Professional Property Management"
        ],
        specifications: {
          type: "Commercial - Grade-A Offices",
          area: "484 - 1,255 sq.ft. (Column-free)",
          status: "Ready to Move / Near Completion",
          possession: "Immediate to Q1 2026"
        },
        mapUrl: "https://maps.google.com/?q=NMEC+Nerul+LP+Navi+Mumbai"
      }
    ]
  },
  {
    id: "raheja-prime",
    name: "Raheja Prime",
    logo: rahejaLogo,
    heroImage: "/assets/hero-images/raheja-prime-hero.jpeg",
    description: "Raheja Prime is known for creating landmark developments with exceptional quality and timeless design. The World Trade Center in Navi Mumbai represents the pinnacle of commercial excellence with strategic location and world-class infrastructure.",
    excerpt: "Ultra-luxury residences",
    color: "#A855F7",
    projects: [
      {
        id: "dummy-project",
        title: "Raheja Prime — World Trade Center",
        location: "Navi Mumbai, Maharashtra",
        excerpt: "The Business Address That Sells Itself — Exclusive Pre-Launch: Starting from ₹1.47 Cr",
        description: `WORLD TRADE CENTER – NAVI MUMBAI represents the ultimate business address in the heart of Navi Mumbai. This 39-storey landmark tower by Raheja Prime offers premium office spaces ranging from 526 to 3,621 sq.ft., designed for discerning investors and business owners.

The development features an iconic 42 ft. Grand Lobby that creates an impressive first impression for clients and visitors. Modern amenities include outdoor dining spaces, a premium gymnasium, cricket net, and turf areas perfect for networking and team building.

Strategically located just 10 minutes from Juinagar Station with easy access to Vashi, Palm Beach Road, and the upcoming Navi Mumbai International Airport, this project offers unparalleled connectivity. The flexible office configurations allow businesses to combine units for larger floor plates as needed.

With pre-launch pricing starting from ₹1.47 Cr for units up to the 20th floor, this represents a rare opportunity for early investors to secure prime commercial real estate in one of Navi Mumbai's most sought-after addresses. Limited units available.`,
        images: [universalHeroBg, rahejaPrimeBuilding, rahejaLogo],
        brochure_url: "/assets/brochures/raheja-prime-2-plans-a3-hi-res.pdf",
        amenities: [
          "39-Storey Landmark Tower",
          "42 ft. Iconic Grand Lobby",
          "Outdoor Dining Spaces",
          "Premium Gymnasium",
          "Cricket Net & Turf for Networking",
          "Flexible Office Configurations",
          "Option to Combine Units",
          "High-Speed Elevators",
          "24/7 Security",
          "Power Backup",
          "Fire Safety Systems",
          "CCTV Surveillance",
          "Professional Property Management",
          "Ample Parking",
          "Modern Infrastructure"
        ],
        specifications: {
          type: "Commercial - Premium Offices",
          area: "526 - 3,621 sq.ft.",
          status: "Pre-Launch - Limited Units",
          possession: "2027 (Expected)"
        },
        highlights: [
          "39-Storey Landmark Tower",
          "Offices: 526 – 3,621 sq.ft.",
          "42 ft. Iconic Grand Lobby",
          "Outdoor dining, premium gym, cricket net, turf for networking",
          "10 mins from Juinagar Station; near Vashi, Palm Beach & upcoming airport",
          "Starting price: ₹1.47 Cr (units to 20th floor)",
          "Ideal for investors & business owners — limited units",
          "Flexible office sizes with options to combine for larger floor plates"
        ],
        connectivity: [
          "Juinagar Station: 10 minutes",
          "Vashi: Nearby",
          "Palm Beach Road: Easy Access",
          "Navi Mumbai International Airport: Upcoming",
          "Sion-Panvel Highway: Connected",
          "CBD Belapur: 15 minutes"
        ],
        pricing: {
          starting: "₹1.47 Cr",
          note: "Exclusive Pre-Launch (Units to 20th floor)"
        },
        contact: {
          name: "Rahul",
          designation: "Sales Manager",
          phone: "9025611179",
          company: "Raheja Prime"
        }
      }
    ]
  },
  {
    id: "shree-laxmi",
    name: "Shree Laxmi Developers",
    logo: blancaLogo,
    heroImage: "/assets/hero-images/blanca-hero.jpeg",
    description: "Shree Laxmi Developers creates iconic commercial towers designed for business excellence, combining strategic connectivity with premium workspace solutions and high ROI potential.",
    excerpt: "Luxury residential projects",
    color: "#D97706",
    projects: [
      {
        id: "blanca",
        title: "Blanca",
        location: "Juinagar, Navi Mumbai",
        excerpt: "The Only Business Address Your Business Deserves",
        description: `Blanca is redefining how ambitious brands occupy space in Navi Mumbai. Rising G+29 levels along the Sion-Panvel and Thane-Belapur growth corridor, it delivers flexible office formats from agile 452 sq.ft. suites to expansive 14,000 sq.ft. floorplates—plus high-impact retail from 1,240 to 8,100 sq.ft.

Double-height retail frontage, 13 ft office ceilings, wellness and collaboration zones, and panoramic hill & sea views all converge to create an environment that attracts talent, impresses clients, and anchors long-term value.

With multi-axis connectivity—rail, highway, emerging airport—and limited pre-launch inventory, Blanca presents a rare window for early investors to capture superior yield potential in a rapidly ascending micro-market.`,
        images: [universalHeroBg, blancaBuilding, blancaLogo],
        brochure_url: "/assets/brochures/blanca-it-park-brochure.pdf",
        amenities: [
          "G+29 Iconic Tower",
          "Offices with Hill & Sea Views",
          "2 Basements + 5-Level Car Park",
          "Office Ceiling Height: 13 ft",
          "Shop Ceiling Height: 14+14 ft",
          "Grand Entrance Lobby with Secure Access",
          "Wellness Zones",
          "Cafeteria",
          "Business Lounge",
          "Meeting Hubs",
          "Selfie Point",
          "High-Speed Elevators",
          "24/7 Security",
          "Power Backup",
          "Fire Safety Systems",
          "CCTV Surveillance",
          "Professional Property Management"
        ],
        specifications: {
          type: "Commercial - Offices & Retail",
          area: "Offices: 452 - 14,000 sq.ft. Carpet \n Retail: 1,240 - 8,100 sq.ft. Carpet",
          status: "Pre-Launch - Limited Inventory",
          possession: "2027 (Expected)"
        },
        connectivity: [
          "Juinagar Station: 2-5 mins",
          "Turbhe Station: 2-5 mins",
          "Sion-Panvel Highway: Immediate access (0 mins)",
          "Thane-Belapur Road: 0 mins",
          "Palm Beach Road: ~5 mins",
          "Kharghar-Turbhe Link Road: 0-5 mins",
          "Upcoming Navi Mumbai International Airport: ~20 mins"
        ],
        pricing: {
          starting: "₹91 Lakhs + Taxes",
          note: "Limited Release / Pre-Launch Advantage"
        },
        contact: {
          name: "Vijay Gupta",
          designation: "Sales Head",
          phone: "8928989116",
          company: "Shree Laxmi Developers"
        },
        highlights: [
          "Limited Inventory - Pre-Launch Benefits Available",
          "High ROI & Rental Yield Potential",
          "Multi-Corridor Accessibility",
          "Premium Hill & Sea Views",
          "Emerging Commercial Micro-Market",
          "Airport Proximity Advantage",
          "Flexible Space Configurations",
          "Grade-A Commercial Tower"
        ]
      }
    ]
  },
  {
    id: "emporia-world",
    name: "Emporia World",
    logo: emporiaWorldLogo,
    heroImage: equiriseBuilding,
    description: "Emporia World is a visionary developer creating integrated mixed-use developments that combine retail, dining, entertainment, and premium business spaces. Known for strategic location selection and comprehensive amenity planning, Emporia World delivers projects that serve as complete lifestyle and business destinations.",
    excerpt: "Integrated commercial developments",
    color: "#2563EB",
    projects: [
      {
        id: "business-square",
        title: "EMPORIA WORLD — Business Square",
        location: "Kharghar Turbhe Link Road, Navi Mumbai",
        excerpt: "Mixed-use development combining retail, restaurants, banquet & a business park — prime connectivity and demand drivers from Navi Mumbai's infrastructure.",
        description: "Business Square is a distinctive mixed-use development strategically positioned on the Kharghar Turbhe Link Road. The project seamlessly integrates retail spaces, restaurants, banquet facilities, and an A-grade business park, creating a comprehensive commercial ecosystem. With podium and rooftop amenities including a signature rooftop air-restaurant and lounge, Business Square offers a premium business address that capitalizes on Navi Mumbai's infrastructure growth, including proximity to the upcoming international airport and JNPT port.",
        images: [
          universalHeroBg,
          businessSquareBuilding,
          emporiaWorldLogo
        ],
        brochure_url: "/assets/brochures/business-square-brochure.pdf",
        specifications: {
          type: "Mixed-Use Development",
          area: "Retail, Restaurant, Banquet & Business Park",
          status: "Ready to Move",
          possession: "Immediate"
        },
        highlights: [
          "Mixed-use development: Retail, Restaurant, Banquet & Business Park",
          "Podium & Rooftop amenities including rooftop air-restaurant & lounge",
          "A-grade business centre with podium amenities",
          "Strategic location on Kharghar Turbhe Link Road (KTLR)",
          "Direct connectivity to Navi Mumbai Corporate Park & Kharghar",
          "Close proximity to Sion Panvel Highway & Juinagar Railway Station",
          "Commercial demand catalysts: Navi Mumbai International Airport & JNPT",
          "Comprehensive business ecosystem with integrated facilities"
        ],
        connectivity: [
          "Kharghar Turbhe Link Road (KTLR): 0 minutes — Direct access",
          "Sion Panvel Highway: 1 minute — Major arterial road",
          "Juinagar Railway Station: 2 minutes — Harbour Line connectivity",
          "Navi Mumbai International Airport: 15 minutes — Upcoming airport",
          "MTHL (Mumbai Trans Harbour Link): 20 minutes — Pan-Mumbai connectivity",
          "JNPT Port: 30 minutes — Logistics & trade hub"
        ],
        amenities: [
          "Rooftop Air-Restaurant & Lounge",
          "Multi-Purpose Banquet Hall",
          "Retail Plaza",
          "Business Park",
          "Podium Amenities",
          "Restaurant Zone",
          "Professional Reception",
          "High-Speed Elevators",
          "Power Backup",
          "24x7 Security",
          "CCTV Surveillance",
          "Ample Parking",
          "Landscaped Areas",
          "Modern Intercom",
          "Fire Safety Systems"
        ],
        mapUrl: "https://maps.google.com/?q=Kharghar+Turbhe+Link+Road+Navi+Mumbai"
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

