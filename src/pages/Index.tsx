import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import LocationSelector from "@/components/LocationSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <LocationSelector />
    </div>
  );
};

export default Index;
