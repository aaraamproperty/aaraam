import { useEffect, useRef, useState } from "react";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";
import { MapPin, Maximize2, IndianRupee, ArrowRight } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

interface Property {
  id: number;
  image: string;
  name: string;
  location: string;
  price: string;
  area: string;
  amenities: string[];
  description: string;
  color: string;
}

interface CardProps {
  property: Property;
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card = ({ property, i, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-[80px] px-4 z-10"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-10vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] w-full max-w-[1100px] h-[320px] rounded-[25px] overflow-hidden origin-top shadow-2xl bg-white"
      >
        {/* Fixed Height Card Layout: Image Left, Content Right */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Image (Fixed aspect ratio) */}
          <div className="relative w-full md:w-[45%] h-[180px] md:h-full overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Color Accent Overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundColor: property.color }}
            />
          </div>

          {/* Right Side - Content (Compact & Truncated) */}
          <div className="flex-1 p-5 md:p-6 flex flex-col justify-between bg-white overflow-hidden">
            {/* Title - Truncated */}
            <h3 className="text-xl md:text-2xl font-bold text-[#004861] mb-2 leading-tight line-clamp-2">
              {property.name}
            </h3>

            {/* Location - Truncated */}
            <p className="flex items-center gap-2 text-muted-foreground mb-3 line-clamp-1">
              <MapPin className="h-4 w-4 text-[#16A34A] flex-shrink-0" />
              <span className="text-xs md:text-sm truncate">
                {property.location}
              </span>
            </p>

            {/* Property Details - Compact */}
            <div className="space-y-2 mb-3 pb-3 border-b border-[#004861]/10">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Maximize2 className="h-3 w-3 text-[#004861]" />
                  Area:
                </span>
                <span className="text-sm font-semibold text-[#004861]">
                  {property.area}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Rental:</span>
                <span className="font-bold text-[#16A34A] text-base md:text-lg flex items-center gap-1">
                  <IndianRupee className="h-4 w-4" />
                  {property.price.replace("₹", "")}
                </span>
              </div>
            </div>

            {/* Description - Truncated with ellipsis */}
            <p className="text-xs md:text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">
              {property.description}
            </p>

            {/* CTA Button - Compact */}
            <button className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:gap-3 self-start group">
              View Details
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PremiumProperties = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const properties: Property[] = [
    {
      id: 1,
      image: officeImage,
      name: "Premium Corporate Office",
      location: "Bandra Kurla Complex, Mumbai",
      price: "₹2,50,000/month",
      area: "2500 sq.ft",
      amenities: [
        "24/7 Security",
        "Parking",
        "Power Backup",
        "Conference Rooms",
      ],
      description:
        "A state-of-the-art corporate office space in the heart of Mumbai's business district. Perfect for growing businesses.",
      color: "#BBACAF",
    },
    {
      id: 2,
      image: retailImage,
      name: "Luxury Retail Space",
      location: "Khan Market, Delhi",
      price: "₹3,00,000/month",
      area: "1800 sq.ft",
      amenities: [
        "High Footfall",
        "Prime Location",
        "Modern Interiors",
        "Display Windows",
      ],
      description:
        "Premium retail space in one of Delhi's most prestigious shopping destinations. Ideal for luxury brands.",
      color: "#977F6D",
    },
    {
      id: 3,
      image: officeImage,
      name: "Modern Co-working Hub",
      location: "Whitefield, Bangalore",
      price: "₹1,80,000/month",
      area: "3000 sq.ft",
      amenities: [
        "High-Speed WiFi",
        "Cafeteria",
        "Meeting Rooms",
        "Gaming Zone",
      ],
      description:
        "Vibrant co-working space designed for startups and creative teams. Foster innovation and collaboration.",
      color: "#C2491D",
    },
    {
      id: 4,
      image: officeImage,
      name: "Executive Business Suite",
      location: "Connaught Place, New Delhi",
      price: "₹3,50,000/month",
      area: "2800 sq.ft",
      amenities: [
        "Premium Furnishing",
        "Reception Area",
        "Private Cabins",
        "Lounge Access",
      ],
      description:
        "Luxurious business suite in the iconic CP area, perfect for established enterprises seeking prestige.",
      color: "#B62429",
    },
    {
      id: 5,
      image: officeImage,
      name: "Tech Park Office Space",
      location: "HITEC City, Hyderabad",
      price: "₹2,20,000/month",
      area: "3200 sq.ft",
      amenities: ["Tech Infrastructure", "Cafeteria", "Gym", "Recreation Area"],
      description:
        "Modern office space in Hyderabad's premier IT hub with world-class facilities for technology companies.",
      color: "#88A28D",
    },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white relative">
      {/* Header - Sticky only when in section */}
      <div
        className={`bg-white py-6 ${isSticky ? "sticky top-[80px] z-40" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004861] mb-2">
              Premium Properties
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Handpicked commercial spaces for your business growth
            </p>
          </div>
        </div>
      </div>

      <main ref={container} className="relative">
        {properties.map((property, i) => {
          const targetScale = 1 - (properties.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              property={property}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default PremiumProperties;
