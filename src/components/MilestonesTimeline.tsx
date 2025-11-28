import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import officeImage from "@/assets/office-space.jpg";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface MilestonesTimelineProps {
  milestones: Milestone[];
}

const MilestonesTimeline = ({ milestones }: MilestonesTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Check if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  // Click handler for year/circle
  const handleYearClick = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-advance logic - loops every 4 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 4000); // 4 seconds per milestone

    return () => clearInterval(interval);
  }, [milestones.length, prefersReducedMotion]);

  // Scroll active year into view - only if section is visible
  useEffect(() => {
    if (isSectionInView && yearRefs.current[activeIndex]) {
      yearRefs.current[activeIndex]?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex, prefersReducedMotion, isSectionInView]);

  const activeMilestone = milestones[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#004861] mb-4">
            Our Milestones
          </h2>
          <p className="text-lg text-muted-foreground">
            A journey of excellence and growth
          </p>
        </motion.div>

        {/* Timeline Years */}
        <div className="mb-12 relative max-w-4xl mx-auto">
          <div
            ref={timelineRef}
            className="flex items-center justify-between overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 relative"
            role="tablist"
            aria-label="Milestones timeline"
          >
            {/* Timeline Line - positioned to go through circles */}
            <div
              className="hidden md:block absolute h-[2px] bg-[#CFDDE1] left-4 right-4"
              style={{
                top: "calc(1.25rem + 0.75rem + 0.5rem + 0.420rem)",
                zIndex: 1,
              }}
            />

            {milestones.map((milestone, index) => (
              <button
                key={index}
                ref={(el) => (yearRefs.current[index] = el)}
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={`milestone-${index}`}
                onClick={() => handleYearClick(index)}
                className="flex flex-col items-center snap-center relative cursor-pointer focus:outline-none flex-shrink-0 z-10"
              >
                {/* Year Text */}
                <span
                  className={`text-lg md:text-xl font-bold mb-3 whitespace-nowrap transition-colors duration-200 ${
                    activeIndex === index
                      ? "text-[#16A34A]"
                      : "text-[#004861]/40"
                  }`}
                >
                  {milestone.year}
                </span>

                {/* Dot Indicator with white background to sit on line */}
                <div className="relative">
                  <div
                    className="w-4 h-4 rounded-full transition-all duration-200 border-2 border-white shadow-md"
                    style={{
                      backgroundColor: activeIndex === index ? "#16A34A" : "#d6e3df",
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Content */}
        <div
          className="max-w-4xl mx-auto"
          role="tabpanel"
          id={`milestone-${activeIndex}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                ease: "easeOut",
              }}
              className="relative overflow-hidden rounded-3xl"
            >
              {/* Milestone Image */}
              <motion.div
                initial={
                  prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }
                }
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  ease: "easeOut",
                }}
                className="relative w-full h-[400px] md:h-[500px]"
              >
                <img
                  src={officeImage}
                  alt={`${activeMilestone.title} milestone`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>

              {/* Content Card - Overlapping bottom of image */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.3,
                  delay: prefersReducedMotion ? 0 : 0.1,
                }}
                className="relative -mt-32 mx-4 md:mx-8 bg-white rounded-3xl shadow-2xl p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#004861] mb-3">
                      {activeMilestone.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {activeMilestone.description}
                    </p>
                  </div>

                  {/* Year Badge - Slides in from right */}
                  <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      delay: prefersReducedMotion ? 0 : 0.2,
                    }}
                    className="flex-shrink-0 bg-[#16A34A] text-white px-6 py-3 rounded-2xl shadow-lg"
                  >
                    <span className="text-3xl md:text-4xl font-bold">
                      {activeMilestone.year}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Screen Reader Announcements */}
        <div
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Showing milestone {activeIndex + 1} of {milestones.length}:{" "}
          {activeMilestone.year} - {activeMilestone.title}
        </div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MilestonesTimeline;
