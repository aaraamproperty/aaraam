import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-commercial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Blue Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 72, 97, 0.6), rgba(0, 72, 97, 0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Find the Perfect Commercial Space for Your Business
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in">
            Pan-India corporate rentals and commercial listings curated for your needs.
          </p>

          {/* CTA Button */}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all animate-[slide-up_0.6s_ease-out]">
            Book Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
