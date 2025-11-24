import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BrochureModal from "@/components/BrochureModal";
import { Project, DeveloperGroup } from "@/data/developerGroups";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, FileText, CheckCircle, ArrowLeft, Calendar, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectDetailProps {
  project: Project;
  group: DeveloperGroup;
}

const ProjectDetail = ({ project, group }: ProjectDetailProps) => {
  const navigate = useNavigate();
  const [showBrochure, setShowBrochure] = useState(false);
  const [showBrochure404, setShowBrochure404] = useState(false);
  const [brochureUrl, setBrochureUrl] = useState("");

  // Set page title, meta tags, and JSON-LD on mount
  useEffect(() => {
    document.title = `${project.title} — ${group.name} | Aaraam Properties`;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${project.excerpt} - ${project.title} by ${group.name}. Located in ${project.location}.`);
    }

    // Add JSON-LD structured data for SEO
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.id = 'project-structured-data';
    scriptTag.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": project.title,
      "description": project.description,
      "provider": {
        "@type": "RealEstateAgent",
        "name": group.name
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": project.location
      },
      "image": project.images,
      "amenityFeature": project.amenities.map(a => ({
        "@type": "LocationFeatureSpecification",
        "name": a
      }))
    });
    document.head.appendChild(scriptTag);

    return () => {
      const existingScript = document.getElementById('project-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [project, group]);

  // Handle Escape key for 404 modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showBrochure404) {
        setShowBrochure404(false);
      }
    };

    if (showBrochure404) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showBrochure404]);

  const handleViewBrochure = async () => {
    const brochureUrlToCheck = project.brochure_url || `/brochures/${project.id}.pdf`;
    
    try {
      // Check if the brochure exists
      const response = await fetch(brochureUrlToCheck, { method: 'HEAD' });
      
      if (response.status === 404) {
        // Show 404 modal
        setShowBrochure404(true);
      } else if (response.ok) {
        // Open brochure modal
        setBrochureUrl(brochureUrlToCheck);
        setShowBrochure(true);
        
        // Track button click for analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'view_brochure_click', {
            event_category: group.name,
            event_label: project.title,
            value: 'Brochure Button'
          });
        }
        
        // Track with dataLayer if available
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'view_brochure',
            group: group.name,
            project: project.title
          });
        }
      } else {
        // Other errors
        setShowBrochure404(true);
      }
    } catch (error) {
      // Network error or CORS issue - show 404 modal
      console.error('Error checking brochure:', error);
      setShowBrochure404(true);
    }
  };

  const handleEnquire = () => {
    navigate("/contact");
  };

  const handleBackToGroup = () => {
    navigate(`/groups/${group.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero Banner */}
      <section id="hero" className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={project.images[0]}
          srcSet={`${project.images[0]} 1x, ${project.images[0]} 2x`}
          alt={`${project.title} - ${group.name} property hero image`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              data-project-slug={project.id}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 text-white text-lg mb-6">
                <MapPin className="h-6 w-6 text-[#16A34A]" />
                <span>{project.location}</span>
              </div>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Project actions">
                <Button
                  onClick={handleEnquire}
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 backdrop-blur-sm"
                  aria-label={`Enquire about ${project.title}`}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Enquire Now
                </Button>
                <Button
                  onClick={handleViewBrochure}
                  size="lg"
                  className="bg-[#16A34A] hover:bg-[#15803d] text-white rounded-full px-8"
                  data-brochure-url={project.brochure_url || `/brochures/${project.id}.pdf`}
                  aria-label={`View brochure for ${project.title}`}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Brochure
                </Button>
                <button
                  onClick={handleBackToGroup}
                  className="inline-flex items-center gap-2 text-white hover:text-[#16A34A] transition-colors px-4"
                  aria-label={`Back to ${group.name}`}
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to {group.name}
                </button>
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
              {project.images.length > 1 && (
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
              )}
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
                    aria-label={`View brochure for ${project.title}`}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    View Brochure
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
        brochureUrl={brochureUrl || project.brochure_url || ""}
        title={project.title}
      />

      {/* Brochure 404 Modal */}
      {showBrochure404 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowBrochure404(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-404-title"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mb-6">
                <FileText className="h-16 w-16 text-gray-400 mx-auto" />
              </div>
              <h2 id="brochure-404-title" className="text-2xl font-bold text-[#004861] mb-4">
                Brochure Not Available
              </h2>
              <p className="text-gray-600 mb-8">
                We haven't uploaded the brochure for this project yet. Please check back later or contact us for more information.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={handleEnquire}
                  size="lg"
                  className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white rounded-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales Team
                </Button>
                <Button
                  onClick={() => setShowBrochure404(false)}
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
