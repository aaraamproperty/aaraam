import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BrochureModal from "@/components/BrochureModal";
import { paradiseGroupData, Project } from "@/data/paradiseGroup";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, FileText, CheckCircle, ArrowLeft, Calendar, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

const ParadiseProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [showBrochure, setShowBrochure] = useState(false);

  // Find the project
  const project = paradiseGroupData.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#004861] mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/properties/paradise-group")}>
            Back to Paradise Group
          </Button>
        </div>
      </div>
    );
  }

  const handleViewBrochure = () => {
    setShowBrochure(true);
    // Track button click for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_details_click', {
        event_category: 'Paradise Group',
        event_label: project.title,
        value: 'Brochure Button'
      });
    }
  };

  const handleEnquire = () => {
    navigate("/contact");
  };

  const handleBackToGroup = () => {
    navigate("/properties/paradise-group");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero Banner */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-12">
            <button
              onClick={handleBackToGroup}
              className="inline-flex items-center gap-2 text-white mb-6 hover:text-[#16A34A] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Paradise Group
            </button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 text-white text-lg mb-6">
                <MapPin className="h-6 w-6 text-[#16A34A]" />
                <span>{project.location}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleViewBrochure}
                  size="lg"
                  className="bg-[#16A34A] hover:bg-[#15803d] text-white rounded-full px-8"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Brochure
                </Button>
                <Button
                  onClick={handleEnquire}
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Bar */}
      <section className="bg-[#004861] text-white py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-300 mb-1">Type</p>
              <p className="font-semibold">{project.specifications.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Area</p>
              <p className="font-semibold">{project.specifications.area}</p>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Status</p>
              <p className="font-semibold">{project.specifications.status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Possession</p>
              <p className="font-semibold">{project.specifications.possession}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#004861] mb-4">
                  About {project.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#004861] mb-6">
                  Amenities & Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#004861] mb-6">Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative rounded-xl overflow-hidden shadow-lg group aspect-video"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        srcSet={`${image} 1x, ${image} 2x`}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="sticky top-24 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#004861] mb-6">
                  Interested in this project?
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Location</p>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Possession</p>
                      <p className="text-gray-600">{project.specifications.possession}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Maximize2 className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Area Options</p>
                      <p className="text-gray-600">{project.specifications.area}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleViewBrochure}
                    size="lg"
                    className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white rounded-full"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                  
                  <Button
                    onClick={handleEnquire}
                    size="lg"
                    variant="outline"
                    className="w-full border-[#004861] text-[#004861] hover:bg-[#004861] hover:text-white rounded-full"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Sales Team
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center mt-6">
                  Our team will get back to you within 24 hours
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal
        isOpen={showBrochure}
        onClose={() => setShowBrochure(false)}
        brochureUrl={project.brochure}
        title={project.title}
      />

      <Footer />
    </div>
  );
};

export default ParadiseProjectDetail;
