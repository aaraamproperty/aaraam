import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { developerGroups } from "@/data/developerGroups";
import { MapPin, ArrowRight, FileText, Building2 } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

interface DeveloperCard {
  id: string;
  logo: string;
  name: string;
  excerpt: string;
  projectCount: number;
  color: string;
  linkTo: string;
}

interface CardProps {
  developer: DeveloperCard;
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card = ({ developer, i, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  const handleViewDetails = () => {
    navigate(developer.linkTo);
    window.scrollTo(0, 0);
  };

  const handleEnquire = () => {
    navigate("/contact");
  };

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
        {/* Fixed Height Card Layout: Logo Left, Content Right */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Logo */}
          <div className="relative w-full md:w-[45%] h-[180px] md:h-full overflow-hidden bg-white flex items-center justify-center p-8">
            <img
              src={developer.logo}
              alt={developer.name}
              className="max-w-[80%] max-h-[80%] object-contain"
              loading="lazy"
              srcSet={`${developer.logo} 1x, ${developer.logo} 2x`}
            />
            {/* Color Accent Overlay */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundColor: developer.color }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 p-5 md:p-6 flex flex-col justify-between bg-white overflow-hidden">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#004861] mb-2 leading-tight line-clamp-2">
              {developer.name}
            </h3>

            {/* Project Count */}
            <p className="flex items-center gap-2 text-muted-foreground mb-3">
              <Building2 className="h-4 w-4 text-[#16A34A] flex-shrink-0" />
              <span className="text-xs md:text-sm">
                {developer.projectCount} {developer.projectCount === 1 ? 'Project' : 'Projects'}
              </span>
            </p>

            {/* Excerpt */}
            <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
              {developer.excerpt}
            </p>

            {/* Divider */}
            <div className="mb-4 pb-3 border-b border-[#004861]/10">
              <div className="flex items-center gap-2 text-[#16A34A] font-semibold">
                <FileText className="h-4 w-4" />
                <span className="text-sm">View All Projects</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={handleViewDetails}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg group"
              >
                View Details
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={handleEnquire}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#004861] hover:bg-[#003347] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
              >
                Enquire
              </button>
            </div>
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

  // Convert developer groups to card format
  const developers: DeveloperCard[] = developerGroups.map(group => ({
    id: group.id,
    logo: group.logo,
    name: group.name,
    excerpt: group.excerpt,
    projectCount: group.projects.length,
    color: group.color,
    linkTo: `/groups/${group.id}`
  }));

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
              Explore our trusted developer partners and their premium projects
            </p>
          </div>
        </div>
      </div>

      <main ref={container} className="relative">
        {developers.map((developer, i) => {
          const targetScale = 1 - (developers.length - i) * 0.05;
          return (
            <Card
              key={`dev_${i}`}
              i={i}
              developer={developer}
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
