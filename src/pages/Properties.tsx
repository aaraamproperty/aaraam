import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BookSiteVisitModal from "@/components/BookSiteVisitModal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { developerGroups } from "@/data/developerGroups";
import heroImage from "@/assets/hero-commercial.jpg";

const Properties = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />
      <BookSiteVisitModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />

      {/* Hero Section - Clean Version */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Properties"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#004861]/20" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projects Across India
          </h1>
          <p className="text-white/90 text-base md:text-lg">
            Disclaimer: Prices shown below are inclusive of GST & extra charges
          </p>
        </div>
      </section>

      {/* Properties Title Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004861] mb-2">
            Premium Properties
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our curated selection of premium developments
          </p>
        </div>
      </section>

      {/* Developer Groups Cards - All 11 Groups */}
      <section className="py-12 bg-background" id="main-content">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developerGroups.map((group, index) => {
              const linkTo = group.projects.length === 1 
                ? `/properties/${group.id}/${group.projects[0].id}`
                : `/properties/${group.id}`;
              
              return (
                <motion.article
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(18,40,30,0.06)] hover:shadow-[0_20px_60px_rgba(18,40,30,0.12)] transition-all duration-300 ease-smooth cursor-pointer"
                  onClick={() => navigate(linkTo)}
                  onKeyDown={(e) => e.key === "Enter" && navigate(linkTo)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${group.name} properties`}
                >
                  {/* Image/Logo Section */}
                  <div className="relative overflow-hidden bg-gray-50 h-48 md:h-56 w-full flex items-center justify-center p-4">
                    <img
                      src={group.logo}
                      alt={`${group.name} logo`}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 ease-smooth group-hover:scale-103"
                    />
                    
                    {/* Brochure Available Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#16A34A] text-white shadow-md">
                        Brochure Available
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Group Name */}
                    <h3 className="font-bold text-xl text-[#004861] mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                      {group.name}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 min-h-[2.5rem]">
                      {group.excerpt}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 mt-4">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(linkTo);
                        }}
                        className="flex-1 bg-[#16A34A] hover:bg-[#16A34A]/90 text-white text-sm py-2.5"
                        aria-label={`View details for ${group.name}`}
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowBookingModal(true);
                        }}
                        variant="outline"
                        className="flex-1 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white text-sm py-2.5"
                        aria-label={`Enquire about ${group.name}`}
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004861] mb-4">
            Find Your Perfect Property Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert guidance for residential and commercial properties across
            India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowBookingModal(true)}
              className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              aria-label="Schedule a property site visit"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Book Site Visit
            </Button>
            <Button
              onClick={() => {
                navigate('/contact');
                setTimeout(() => {
                  const formSection = document.getElementById('contact-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              variant="outline"
              className="border-2 border-[#004861] text-[#004861] hover:bg-[#004861] hover:text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              aria-label="Contact us for enquiries"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Accessibility: Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#16A34A] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Properties;
