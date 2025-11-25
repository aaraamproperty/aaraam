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
    navigate(`/properties/${group.id}`);
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
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-end justify-between">
              {/* Content - Left Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                data-project-slug={project.id}
                className="flex-1"
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

              {/* Building Image - Right Side */}
              {project.images.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden lg:flex flex-shrink-0 w-full lg:w-2/5 items-end justify-end"
                >
                  <img
                    src={project.images[1]}
                    alt={`${project.title} Building`}
                    className="w-full h-auto max-h-[55vh] object-contain drop-shadow-2xl"
                    loading="eager"
                  />
                </motion.div>
              )}
            </div>
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

              {/* Connectivity - Show only if available */}
              {project.connectivity && project.connectivity.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-[#004861] mb-6">
                    Seamless Connectivity
                  </h2>
                  <div className="bg-gradient-to-br from-[#004861] to-[#16A34A] rounded-xl p-6 text-white">
                    <p className="text-lg mb-4 font-semibold">
                      Strategic Location with Multi-Corridor Access
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.connectivity.map((connection, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg"
                        >
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm">{connection}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Highlights - Show only if available */}
              {project.highlights && project.highlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-[#004861] mb-6">
                    Key Highlights
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100"
                      >
                        <div className="bg-[#16A34A] rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Special Offer Banner - Show for Kaamdhenu Growth Master */}
              {project.id === "kaamdhenu-growth-master" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.38 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-[#16A34A] to-[#15803d] rounded-2xl p-8 text-white shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 rounded-full p-3">
                        <Phone className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Complimentary Site Visit</h3>
                        <p className="text-white/90">Free Pickup & Drop across Mumbai & Navi Mumbai</p>
                      </div>
                    </div>
                    <p className="text-lg mb-6">
                      Experience the project firsthand with our complimentary site visit service. 
                      We provide pickup and drop facilities across Mumbai and Navi Mumbai for your convenience.
                    </p>
                    <Button
                      onClick={handleEnquire}
                      size="lg"
                      className="bg-white text-[#16A34A] hover:bg-gray-100 rounded-full font-semibold"
                    >
                      Book Your Site Visit Now
                    </Button>
                  </div>
                </motion.div>
              )}

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
                
                {/* Pricing Section - Show only if available */}
                {project.pricing && (
                  <div className="mb-6 p-4 bg-gradient-to-br from-[#004861] to-[#16A34A] rounded-xl text-white">
                    <p className="text-sm opacity-90 mb-1">Starting Price</p>
                    <p className="text-2xl font-bold mb-1">{project.pricing.starting}</p>
                    {project.pricing.note && (
                      <p className="text-xs opacity-80">{project.pricing.note}</p>
                    )}
                  </div>
                )}
                
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

                  {/* Map Location Button - Show only if available */}
                  {project.mapUrl && (
                    <Button
                      onClick={() => window.open(project.mapUrl, '_blank')}
                      size="lg"
                      variant="outline"
                      className="w-full border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white rounded-full"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      View on Map
                    </Button>
                  )}
                </div>

                {/* Contact Info - Show only if available */}
                {project.contact && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Sales Contact</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="font-semibold text-[#004861]">{project.contact.name}</p>
                      <p>{project.contact.designation}</p>
                      <p className="font-medium text-[#16A34A]">{project.contact.phone}</p>
                      <p className="text-xs">{project.contact.company}</p>
                    </div>
                  </div>
                )}

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
