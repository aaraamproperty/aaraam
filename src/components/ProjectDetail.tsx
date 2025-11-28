import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BrochureModal from "@/components/BrochureModal";
import ImageGallery from "@/components/ImageGallery";
import { Project, DeveloperGroup } from "@/data/developerGroups";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, FileText, CheckCircle, ArrowLeft, Calendar, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

// CyberSquare Gallery Images
import cyberSquareImage1 from "@/assets/Properies/Cyber Square Greenscape/Cyber Square/CyberSquare image1.webp";
import cyberSquareImage2 from "@/assets/Properies/Cyber Square Greenscape/Cyber Square/CyberSquare image2.webp";
import cyberSquareImage3 from "@/assets/Properies/Cyber Square Greenscape/Cyber Square/CyberSquare image3.webp";
import cyberSquareImage4 from "@/assets/Properies/Cyber Square Greenscape/Cyber Square/CyberSquare image4.webp";

// Kaamdhenu Growth Master Gallery Images
import growthMasterImage1 from "@/assets/Properies/THE KAAMDHENU BUILDERS/Kaamdhenu Growth Master/Gallery/TheKaamdhenuBuilderGrowthMaster image1.webp";
import growthMasterImage2 from "@/assets/Properies/THE KAAMDHENU BUILDERS/Kaamdhenu Growth Master/Gallery/TheKaamdhenuBuilderGrowthMaster image2.webp";
import growthMasterImage3 from "@/assets/Properies/THE KAAMDHENU BUILDERS/Kaamdhenu Growth Master/Gallery/TheKaamdhenuBuilderGrowthMaster image3.webp";
import growthMasterImage4 from "@/assets/Properies/THE KAAMDHENU BUILDERS/Kaamdhenu Growth Master/Gallery/TheKaamdhenuBuilderGrowthMaster image4.webp";

// Delta Stellar Gallery Images
import deltaSteller1 from "@/assets/Properies/Delta Group/DELTA STELLAR/Gallery/DeltaSteller image1.jpg";
import deltaSteller2 from "@/assets/Properies/Delta Group/DELTA STELLAR/Gallery/DelteaSteller image2.jpg";
import deltaSteller3 from "@/assets/Properies/Delta Group/DELTA STELLAR/Gallery/DeltaSteller image3.jpg";
import deltaSteller4 from "@/assets/Properies/Delta Group/DELTA STELLAR/Gallery/DeltaSteller image4.jpg";

// 24 High Gallery Images
import high24Image1 from "@/assets/Properies/Dreamapex realty/24 High/Gallery/DreamApex24high image1.png";
import high24Image2 from "@/assets/Properies/Dreamapex realty/24 High/Gallery/DreamApx24high image2.png";
import high24Image3 from "@/assets/Properies/Dreamapex realty/24 High/Gallery/DreamApex24high image3.jpeg";
import high24Image4 from "@/assets/Properies/Dreamapex realty/24 High/Gallery/DreamApex24high image4.jpeg";

// Equirise Gallery Images
import equiriseImage1 from "@/assets/Properies/KAMDHENU Realities/EQUIRISE/Gallery/KaamDhenuEquirise image1.jpg";
import equiriseImage2 from "@/assets/Properies/KAMDHENU Realities/EQUIRISE/Gallery/KaamdhenuEquirise image2.jpg";
import equiriseImage3 from "@/assets/Properies/KAMDHENU Realities/EQUIRISE/Gallery/KaamdhenuEquirise image3.jpg";

// Emporia Business Square Gallery Images
import emporiaImage1 from "@/assets/Properies/Emporia world/Gallery/EmphoriaBusinessSquare image1.jpeg";

// Raheja World Trade Center Gallery Images
import rahejaImage1 from "@/assets/Properies/Raheja Prime 2/Gallery/RahejaWorldTradeCenter image1.webp";
import rahejaImage2 from "@/assets/Properies/Raheja Prime 2/Gallery/RahejaWorldTradeCenter image2.webp";

// Plan I Gallery Images
import planIImage1 from "@/assets/Properies/Tescon Group/Plan i Tescon/Gallery/TesconGroupPlani image1.webp";
import planIImage2 from "@/assets/Properies/Tescon Group/Plan i Tescon/Gallery/TesconGroupPlani image2.webp";
import planIImage3 from "@/assets/Properies/Tescon Group/Plan i Tescon/Gallery/TesconGroupPlani image3.webp";
import planIImage4 from "@/assets/Properies/Tescon Group/Plan i Tescon/Gallery/TesconGroupPlani image4.webp";

// Plan M Gallery Images
import planMImage1 from "@/assets/Properies/Tescon Group/Plan M Tescon/Gallery/TesconGroupPlanM image1.jpg";
import planMImage2 from "@/assets/Properies/Tescon Group/Plan M Tescon/Gallery/TesconGroupPlanM image2.jpg";
import planMImage3 from "@/assets/Properies/Tescon Group/Plan M Tescon/Gallery/TesconGroupPlanM image3.jpg";

// Sai World One Gallery Images
import saiWorldOneImage1 from "@/assets/Properies/Paradise Group/Sai World One/Gallery/ParadiseGroupSaiWorldOne image1.webp";
import saiWorldOneImage2 from "@/assets/Properies/Paradise Group/Sai World One/Gallery/ParadiseGroupSaiWorldOne image2.webp";
import saiWorldOneImage3 from "@/assets/Properies/Paradise Group/Sai World One/Gallery/ParadiseGroupSaiWorldOne image3.webp";
import saiWorldOneImage4 from "@/assets/Properies/Paradise Group/Sai World One/Gallery/ParadiseGroupSaiWorldOne image4.webp";

// Sai World Pyramid Gallery Images
import saiWorldPyramidImage1 from "@/assets/Properies/Paradise Group/Sai World Pyramid/Gallery/ParadiseGroupSaiWorldPyamid image1.webp";
import saiWorldPyramidImage2 from "@/assets/Properies/Paradise Group/Sai World Pyramid/Gallery/ParadiseGroupSaiWorldPyamid image2.webp";
import saiWorldPyramidImage3 from "@/assets/Properies/Paradise Group/Sai World Pyramid/Gallery/ParadiseGroupSaiWorldPyamid image3.webp";
import saiWorldPyramidImage4 from "@/assets/Properies/Paradise Group/Sai World Pyramid/Gallery/ParadiseGroupSaiWorldPyamid image4.webp";

// Dream Digit Gallery Images
import dreamDigitImage1 from "@/assets/Properies/Dream Group/Dream Digit/Gallery/DreamDigit image1.jpg";
import dreamDigitImage2 from "@/assets/Properies/Dream Group/Dream Digit/Gallery/DreamDigit image2.jpg";
import dreamDigitImage3 from "@/assets/Properies/Dream Group/Dream Digit/Gallery/DreamDigit image3.jpg";
import dreamDigitImage4 from "@/assets/Properies/Dream Group/Dream Digit/Gallery/DreamDigit image4.jpg";

// Dream Ikon Gallery Images
import dreamIkonImage1 from "@/assets/Properies/Dream Group/Dream Ikon/Gallery/DreamIkon image1.jpg";
import dreamIkonImage2 from "@/assets/Properies/Dream Group/Dream Ikon/Gallery/DreamIkon image2.jpg";
import dreamIkonImage3 from "@/assets/Properies/Dream Group/Dream Ikon/Gallery/DreamIkon image3.jpg";
import dreamIkonImage4 from "@/assets/Properies/Dream Group/Dream Ikon/Gallery/DreamIkon image4.jpg";

// Dream Gateway Gallery Images
import dreamGatewayImage1 from "@/assets/Properies/Dream Group/Dream Gateway/Gallery/Dream Gateway image.webp";
import dreamGatewayImage2 from "@/assets/Properies/Dream Group/Dream Gateway/Gallery/Dream_Gateway_image bg.png";

// Blanca Gallery Images
import blancaImage1 from "@/assets/Properies/BLANCA Shreelaxmi Developers/Gallery/Blanca Shreelaxmi Developers bg.png";
import blancaImage2 from "@/assets/Properies/BLANCA Shreelaxmi Developers/Gallery/Blanca Shreelaxmi Developers img.jpeg";
import blancaImage3 from "@/assets/Properies/BLANCA Shreelaxmi Developers/Gallery/shree laxmi developers.jpg";

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
          <div className="container mx-auto px-4 lg:px-8 pb-6">
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
                  {/* Show Back button only for groups with multiple projects */}
                  {group.projects.length > 1 && (
                    <button
                      onClick={handleBackToGroup}
                      className="inline-flex items-center gap-2 text-white hover:text-[#16A34A] transition-colors px-4"
                      aria-label={`Back to ${group.name}`}
                    >
                      <ArrowLeft className="h-5 w-5" />
                      Back to {group.name}
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Building Image - Right Side */}
              {project.images.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden lg:flex flex-shrink-0 w-full lg:w-2/5 items-end justify-center -mb-6"
                  style={{ height: '480px' }}
                >
                  <img
                    src={project.images[1]}
                    alt={`${project.title} Building`}
                    className="w-auto object-contain drop-shadow-2xl block"
                    style={{ maxHeight: '460px' }}
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
                  <div className="bg-[#16A34A] rounded-xl p-6 text-white">
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
                        className="flex items-start gap-3 p-4 bg-[#16A34A]/10 rounded-lg border border-[#16A34A]/20"
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
              {project.id === "cybersquare" && group.id === "greenscape" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "cyber-1",
                        thumb: cyberSquareImage1,
                        src: cyberSquareImage1,
                        alt: "Greenscape CyberSquare exterior view - angle 1",
                        caption: "Greenscape CyberSquare — Front facade with highway frontage"
                      },
                      {
                        id: "cyber-2",
                        thumb: cyberSquareImage2,
                        src: cyberSquareImage2,
                        alt: "Greenscape CyberSquare architectural design",
                        caption: "Mixed-use development with retail plaza and office tower"
                      },
                      {
                        id: "cyber-3",
                        thumb: cyberSquareImage3,
                        src: cyberSquareImage3,
                        alt: "Greenscape CyberSquare central plaza",
                        caption: "Open-to-sky central green area with double height lobby"
                      },
                      {
                        id: "cyber-4",
                        thumb: cyberSquareImage4,
                        src: cyberSquareImage4,
                        alt: "Greenscape CyberSquare aerial view",
                        caption: "6 acres prime land parcel in Nerul (LP)"
                      }
                    ]}
                    title="Gallery Of Greenscape Cyber Square"
                    downloadUrl="/assets/brochures/cybersquare-gallery.zip"
                  />
                </motion.div>
              ) : project.id === "kaamdhenu-growth-master" && group.id === "kaamdhenu-builders" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "growth-1",
                        thumb: growthMasterImage1,
                        src: growthMasterImage1,
                        alt: "Kaamdhenu Growth Master exterior view",
                        caption: "Kaamdhenu Growth Master — Premium commercial development"
                      },
                      {
                        id: "growth-2",
                        thumb: growthMasterImage2,
                        src: growthMasterImage2,
                        alt: "Kaamdhenu Growth Master architectural design",
                        caption: "Modern office spaces with state-of-the-art amenities"
                      },
                      {
                        id: "growth-3",
                        thumb: growthMasterImage3,
                        src: growthMasterImage3,
                        alt: "Kaamdhenu Growth Master facilities",
                        caption: "Premium business infrastructure"
                      },
                      {
                        id: "growth-4",
                        thumb: growthMasterImage4,
                        src: growthMasterImage4,
                        alt: "Kaamdhenu Growth Master overview",
                        caption: "Strategic location in MIDC Nerul"
                      }
                    ]}
                    title="Gallery Of Kaamdhenu Growth Master"
                  />
                </motion.div>
              ) : project.id === "delta-steller" && group.id === "delta-groups" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "delta-1",
                        thumb: deltaSteller1,
                        src: deltaSteller1,
                        alt: "Delta Stellar exterior view",
                        caption: "Delta Stellar — Modern IT/Commercial building"
                      },
                      {
                        id: "delta-2",
                        thumb: deltaSteller2,
                        src: deltaSteller2,
                        alt: "Delta Stellar architectural design",
                        caption: "Contemporary commercial spaces"
                      },
                      {
                        id: "delta-3",
                        thumb: deltaSteller3,
                        src: deltaSteller3,
                        alt: "Delta Stellar facilities",
                        caption: "Premium office infrastructure"
                      },
                      {
                        id: "delta-4",
                        thumb: deltaSteller4,
                        src: deltaSteller4,
                        alt: "Delta Stellar overview",
                        caption: "Strategic location in Nerul"
                      }
                    ]}
                    title="Gallery Of Delta Stellar"
                  />
                </motion.div>
              ) : project.id === "24-high" && group.id === "dreamapex" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "24high-1",
                        thumb: high24Image1,
                        src: high24Image1,
                        alt: "24 High Business Park exterior view",
                        caption: "24 High Business Park — Premium commercial tower"
                      },
                      {
                        id: "24high-2",
                        thumb: high24Image2,
                        src: high24Image2,
                        alt: "24 High Business Park design",
                        caption: "Modern business infrastructure in Nerul"
                      },
                      {
                        id: "24high-3",
                        thumb: high24Image3,
                        src: high24Image3,
                        alt: "24 High Business Park facilities",
                        caption: "State-of-the-art office spaces"
                      },
                      {
                        id: "24high-4",
                        thumb: high24Image4,
                        src: high24Image4,
                        alt: "24 High Business Park overview",
                        caption: "Prime location with excellent connectivity"
                      }
                    ]}
                    title="Gallery Of 24 High Business Park"
                  />
                </motion.div>
              ) : project.id === "equirise-nerul-lp" && group.id === "kaamdhenu-realties" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "equirise-1",
                        thumb: equiriseImage1,
                        src: equiriseImage1,
                        alt: "Kaamdhenu Equirise exterior view",
                        caption: "Kaamdhenu Equirise — Premium office development"
                      },
                      {
                        id: "equirise-2",
                        thumb: equiriseImage2,
                        src: equiriseImage2,
                        alt: "Kaamdhenu Equirise design",
                        caption: "Modern office infrastructure in Nerul LP"
                      },
                      {
                        id: "equirise-3",
                        thumb: equiriseImage3,
                        src: equiriseImage3,
                        alt: "Kaamdhenu Equirise facilities",
                        caption: "State-of-the-art business amenities"
                      }
                    ]}
                    title="Gallery Of Kaamdhenu Equirise"
                  />
                </motion.div>
              ) : project.id === "business-square" && group.id === "emporia-world" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "emporia-1",
                        thumb: emporiaImage1,
                        src: emporiaImage1,
                        alt: "Emporia Business Square view",
                        caption: "Emporia Business Square — Modern commercial space"
                      }
                    ]}
                    title="Gallery Of Emporia Business Square"
                  />
                </motion.div>
              ) : project.id === "dummy-project" && group.id === "raheja-prime" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "raheja-1",
                        thumb: rahejaImage1,
                        src: rahejaImage1,
                        alt: "Raheja World Trade Center exterior",
                        caption: "Raheja World Trade Center — Premium business destination"
                      },
                      {
                        id: "raheja-2",
                        thumb: rahejaImage2,
                        src: rahejaImage2,
                        alt: "Raheja World Trade Center design",
                        caption: "Iconic commercial tower in Navi Mumbai"
                      }
                    ]}
                    title="Gallery Of Raheja World Trade Center"
                  />
                </motion.div>
              ) : project.id === "plan-i" && group.id === "tescon" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "plan-i-1",
                        thumb: planIImage1,
                        src: planIImage1,
                        alt: "PLAN I Business Park exterior view",
                        caption: "PLAN I Business Park — Ultra-modern commercial development"
                      },
                      {
                        id: "plan-i-2",
                        thumb: planIImage2,
                        src: planIImage2,
                        alt: "PLAN I Business Park design",
                        caption: "G+23 tower with robotic car parking"
                      },
                      {
                        id: "plan-i-3",
                        thumb: planIImage3,
                        src: planIImage3,
                        alt: "PLAN I Business Park facilities",
                        caption: "Premium amenities with infinity pool"
                      },
                      {
                        id: "plan-i-4",
                        thumb: planIImage4,
                        src: planIImage4,
                        alt: "PLAN I Business Park overview",
                        caption: "Strategic location in Nerul MIDC"
                      }
                    ]}
                    title="Gallery Of PLAN I Business Park"
                  />
                </motion.div>
              ) : project.id === "plan-m" && group.id === "tescon" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "plan-m-1",
                        thumb: planMImage1,
                        src: planMImage1,
                        alt: "PLAN M Business Park exterior view",
                        caption: "PLAN M Business Park — Modern commercial spaces"
                      },
                      {
                        id: "plan-m-2",
                        thumb: planMImage2,
                        src: planMImage2,
                        alt: "PLAN M Business Park design",
                        caption: "Premium office infrastructure in Nerul"
                      },
                      {
                        id: "plan-m-3",
                        thumb: planMImage3,
                        src: planMImage3,
                        alt: "PLAN M Business Park facilities",
                        caption: "State-of-the-art business amenities"
                      }
                    ]}
                    title="Gallery Of PLAN M Business Park"
                  />
                </motion.div>
              ) : project.id === "sai-world-one" && group.id === "paradise-group" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "sai-world-one-1",
                        thumb: saiWorldOneImage1,
                        src: saiWorldOneImage1,
                        alt: "Sai World One exterior view",
                        caption: "Sai World One — Iconic commercial tower"
                      },
                      {
                        id: "sai-world-one-2",
                        thumb: saiWorldOneImage2,
                        src: saiWorldOneImage2,
                        alt: "Sai World One architectural design",
                        caption: "Premium business destination in Nerul"
                      },
                      {
                        id: "sai-world-one-3",
                        thumb: saiWorldOneImage3,
                        src: saiWorldOneImage3,
                        alt: "Sai World One facilities",
                        caption: "Modern office spaces with luxury amenities"
                      },
                      {
                        id: "sai-world-one-4",
                        thumb: saiWorldOneImage4,
                        src: saiWorldOneImage4,
                        alt: "Sai World One overview",
                        caption: "Strategic location near Palm Beach Marg"
                      }
                    ]}
                    title="Gallery Of Sai World One"
                  />
                </motion.div>
              ) : project.id === "sai-world-pyramid" && group.id === "paradise-group" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "sai-world-pyramid-1",
                        thumb: saiWorldPyramidImage1,
                        src: saiWorldPyramidImage1,
                        alt: "Sai World Pyramid exterior view",
                        caption: "Sai World Pyramid — Unique architectural marvel"
                      },
                      {
                        id: "sai-world-pyramid-2",
                        thumb: saiWorldPyramidImage2,
                        src: saiWorldPyramidImage2,
                        alt: "Sai World Pyramid design",
                        caption: "Distinctive pyramid-shaped commercial building"
                      },
                      {
                        id: "sai-world-pyramid-3",
                        thumb: saiWorldPyramidImage3,
                        src: saiWorldPyramidImage3,
                        alt: "Sai World Pyramid facilities",
                        caption: "Premium office spaces with modern amenities"
                      },
                      {
                        id: "sai-world-pyramid-4",
                        thumb: saiWorldPyramidImage4,
                        src: saiWorldPyramidImage4,
                        alt: "Sai World Pyramid overview",
                        caption: "Landmark commercial property in Nerul"
                      }
                    ]}
                    title="Gallery Of Sai World Pyramid"
                  />
                </motion.div>
              ) : project.id === "dream-digit" && group.id === "dreams-group" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "dream-digit-1",
                        thumb: dreamDigitImage1,
                        src: dreamDigitImage1,
                        alt: "Dream Digit exterior view",
                        caption: "Dream Digit — Modern IT/Commercial space"
                      },
                      {
                        id: "dream-digit-2",
                        thumb: dreamDigitImage2,
                        src: dreamDigitImage2,
                        alt: "Dream Digit architectural design",
                        caption: "Contemporary office infrastructure"
                      },
                      {
                        id: "dream-digit-3",
                        thumb: dreamDigitImage3,
                        src: dreamDigitImage3,
                        alt: "Dream Digit facilities",
                        caption: "Premium business amenities"
                      },
                      {
                        id: "dream-digit-4",
                        thumb: dreamDigitImage4,
                        src: dreamDigitImage4,
                        alt: "Dream Digit overview",
                        caption: "Strategic location in Nerul"
                      }
                    ]}
                    title="Gallery Of Dream Digit"
                  />
                </motion.div>
              ) : project.id === "dream-ikon" && group.id === "dreams-group" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "dream-ikon-1",
                        thumb: dreamIkonImage1,
                        src: dreamIkonImage1,
                        alt: "Dream Ikon exterior view",
                        caption: "Dream Ikon — Premium commercial tower"
                      },
                      {
                        id: "dream-ikon-2",
                        thumb: dreamIkonImage2,
                        src: dreamIkonImage2,
                        alt: "Dream Ikon design",
                        caption: "Modern office spaces in Nerul"
                      },
                      {
                        id: "dream-ikon-3",
                        thumb: dreamIkonImage3,
                        src: dreamIkonImage3,
                        alt: "Dream Ikon facilities",
                        caption: "State-of-the-art business infrastructure"
                      },
                      {
                        id: "dream-ikon-4",
                        thumb: dreamIkonImage4,
                        src: dreamIkonImage4,
                        alt: "Dream Ikon overview",
                        caption: "Prime location with excellent connectivity"
                      }
                    ]}
                    title="Gallery Of Dream Ikon"
                  />
                </motion.div>
              ) : project.id === "dream-gateway" && group.id === "dreams-group" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "dream-gateway-1",
                        thumb: dreamGatewayImage1,
                        src: dreamGatewayImage1,
                        alt: "Dream Gateway exterior view",
                        caption: "Dream Gateway — Premium commercial development"
                      },
                      {
                        id: "dream-gateway-2",
                        thumb: dreamGatewayImage2,
                        src: dreamGatewayImage2,
                        alt: "Dream Gateway architectural design",
                        caption: "Modern office spaces in prime location"
                      }
                    ]}
                    title="Gallery Of Dream Gateway"
                  />
                </motion.div>
              ) : project.id === "blanca" && group.id === "shree-laxmi" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageGallery
                    images={[
                      {
                        id: "blanca-1",
                        thumb: blancaImage1,
                        src: blancaImage1,
                        alt: "Blanca exterior view",
                        caption: "Blanca — Premium residential development by Shree Laxmi Developers"
                      },
                      {
                        id: "blanca-2",
                        thumb: blancaImage2,
                        src: blancaImage2,
                        alt: "Blanca architectural design",
                        caption: "Modern residential spaces with luxury amenities"
                      },
                      {
                        id: "blanca-3",
                        thumb: blancaImage3,
                        src: blancaImage3,
                        alt: "Shree Laxmi Developers logo",
                        caption: "Trusted developer with quality construction"
                      }
                    ]}
                    title="Gallery Of Blanca"
                  />
                </motion.div>
              ) : project.images.length > 1 && (
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
                  <div className="mb-6 p-4 bg-[#16A34A] rounded-xl text-white">
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
