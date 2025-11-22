import { useState } from "react";
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
        className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden"
        style={{
          background: group.heroImage 
            ? 'linear-gradient(to bottom right, #004861, #003347)' 
            : `linear-gradient(to bottom right, ${group.color}, ${group.color}dd)`
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className={`grid ${group.heroImage ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 lg:gap-12 items-center`}>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-white z-10 ${!group.heroImage ? 'text-center max-w-4xl mx-auto' : ''}`}
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
              <div className={`flex flex-wrap gap-4 ${!group.heroImage ? 'justify-center' : ''}`}>
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

            {/* Hero Image (if available) */}
            {group.heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={group.heroImage}
                    alt={`${group.name} Hero`}
                    className="w-full h-auto object-cover"
                    loading="eager"
                    srcSet={`${group.heroImage} 1x, ${group.heroImage} 2x`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>
            )}
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

          <div className={`grid ${group.projects.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {group.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    srcSet={`${project.images[0]} 1x, ${project.images[0]} 2x`}
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
                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleViewDetails(project.id)}
                      className="flex-1 bg-[#004861] hover:bg-[#003347] text-white rounded-full"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      onClick={handleEnquire}
                      variant="outline"
                      className="flex-1 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white rounded-full"
                    >
                      Enquire
                      <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16"
        style={{
          background: `linear-gradient(to right, ${group.color}, #16A34A)`
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with our sales team to learn more about {group.name} projects and schedule a site visit
            </p>
            <Button
              onClick={handleContactSales}
              size="lg"
              className="bg-white text-[#004861] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupLanding;
