import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { DeveloperGroup } from "@/data/developerGroups";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Phone, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface GroupLandingProps {
  group: DeveloperGroup;
}

const GroupLanding = ({ group }: GroupLandingProps) => {
  const navigate = useNavigate();

  // Scroll to hero section on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleExploreProjects = () => {
    const projectsSection = document.getElementById("properties");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSales = () => {
    navigate("/contact");
  };

  const handleViewDetails = (projectId: string) => {
    navigate(`/properties/${group.id}/${projectId}`);
    window.scrollTo(0, 0);
  };

  const handleEnquire = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero Section */}
      <section 
        className={`relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden ${group.heroImage ? 'hero--with-overlay' : ''}`}
        style={{
          backgroundImage: group.heroImage 
            ? `linear-gradient(to bottom right, rgba(0, 72, 97, 0.35), rgba(0, 51, 71, 0.35)), url(${group.heroImage})`
            : `linear-gradient(to bottom right, ${group.color}, ${group.color}dd)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className={`flex ${group.heroImage ? 'flex-col items-center justify-center text-center' : 'flex-col'} gap-8 lg:gap-12 items-center justify-between`}>
            {/* Content - Centered */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-white z-10 ${!group.heroImage ? 'text-center max-w-4xl mx-auto' : 'text-center max-w-4xl mx-auto'}`}
            >
              {!group.heroImage && (
                <div className="mb-8 flex justify-center">
                  <img
                    src={group.logo}
                    alt={`${group.name} Logo`}
                    className="h-32 md:h-40 w-auto object-contain"
                    loading="eager"
                  />
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {group.name}
              </h1>
              <p className="text-lg md:text-xl mb-4 text-gray-100">
                {group.description}
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-200">
                Explore our portfolio of {group.projects.length} premium {group.projects.length === 1 ? 'project' : 'projects'} designed to exceed expectations.
              </p>
              <div className={`flex flex-wrap gap-4 ${!group.heroImage ? 'justify-center' : 'justify-center'}`}>
                <Button
                  onClick={handleExploreProjects}
                  className="bg-[#16A34A] hover:bg-[#15803d] text-white px-8 py-6 text-lg rounded-full"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={handleContactSales}
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                >
                  Contact Sales
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10 rounded-full blur-3xl" 
          style={{ backgroundColor: '#16A34A' }}
        />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-5 rounded-full blur-3xl" />
      </section>

      {/* Projects Section */}
      <section id="properties" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004861] mb-4">
              Our Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our {group.projects.length} premium {group.projects.length === 1 ? 'development' : 'developments'}
            </p>
          </motion.div>

          <div className={`grid gap-8 ${
            group.projects.length === 1 
              ? 'md:grid-cols-1 max-w-2xl mx-auto' 
              : group.projects.length === 2 
              ? 'md:grid-cols-2 max-w-5xl mx-auto' 
              : group.projects.length === 3
              ? 'md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto'
          }`}>
            {group.projects.map((project, index) => {
              const projectLink = `/properties/${group.id}/${project.id}`;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(18,40,30,0.06)] hover:shadow-[0_20px_60px_rgba(18,40,30,0.12)] transition-all duration-300 ease-smooth cursor-pointer"
                  onClick={() => {
                    navigate(projectLink);
                    window.scrollTo(0, 0);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(projectLink);
                      window.scrollTo(0, 0);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} details`}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[3] || project.images[1] || project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-103"
                      loading="lazy"
                      srcSet={`${project.images[3] || project.images[1] || project.images[0]} 1x, ${project.images[3] || project.images[1] || project.images[0]} 2x`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-[#16A34A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {project.specifications.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#004861] mb-3">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="h-5 w-5 text-[#16A34A] flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.excerpt}
                    </p>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-semibold text-[#004861]">
                          {project.specifications.type}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Possession:</span>
                        <span className="font-semibold text-[#004861]">
                          {project.specifications.possession}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row items-center justify-between gap-3">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDetails(project.id);
                        }}
                        className="flex-1 bg-[#004861] hover:bg-[#003347] text-white rounded-full"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEnquire();
                        }}
                        variant="outline"
                        className="flex-1 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white rounded-full"
                      >
                        Enquire
                        <Phone className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupLanding;
