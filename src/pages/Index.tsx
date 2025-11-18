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
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <Preloader onLoadComplete={() => setShowPreloader(false)} />}
      <div className="min-h-screen bg-background">
        <Navigation />
        <FloatingChatbot />
        <HeroSection />
        <PremiumProperties />
        <FeaturedPropertiesGrid />
        <AboutSection />
        <StatsSection />
        <WhyChooseUs />
        <ClientsSection />
        <TestimonialsSection />
        <FAQSection />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-accent-foreground mb-6">
              Ready to Find Your Commercial Space?
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Book a site visit today and let our experts guide you to the perfect property
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full">
              Book Site Visit
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
