import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedProperties />
      <StatsSection />
      <WhyChooseUs />
      <ClientsSection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
