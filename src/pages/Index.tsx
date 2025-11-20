import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PremiumProperties from "@/components/PremiumProperties";
import FeaturedPropertiesGrid from "@/components/FeaturedPropertiesGrid";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BookSiteVisitModal from "@/components/BookSiteVisitModal";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      {showPreloader && (
        <Preloader onLoadComplete={() => setShowPreloader(false)} />
      )}
      <BookSiteVisitModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <FloatingChatbot />
        <HeroSection />
        <AboutSection />
        <PremiumProperties />
        <FeaturedPropertiesGrid />
        <StatsSection />
        <WhyChooseUs />
        <ClientsSection />
        <FAQSection />
        <TestimonialsSection />

        <Footer />
      </div>
    </>
  );
};

export default Index;
