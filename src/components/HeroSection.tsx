import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
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
            Pan-India rentals and commercial listings — verified, transparent, and corporate-ready.
          </p>

          {/* Sharp Search Bar */}
          <div className="bg-card rounded-none p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-[slide-up_0.6s_ease-out]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-secondary border border-border">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="flex-1 text-left">
                  <label className="text-xs text-muted-foreground block mb-1">
                    Location
                  </label>
                  <select className="w-full bg-transparent text-foreground font-medium focus:outline-none">
                    <option>All Cities</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Pune</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
              </div>

              {/* Property Type */}
              <div className="flex items-center gap-3 p-4 bg-secondary border border-border">
                <Home className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="flex-1 text-left">
                  <label className="text-xs text-muted-foreground block mb-1">
                    Property Type
                  </label>
                  <select className="w-full bg-transparent text-foreground font-medium focus:outline-none">
                    <option>Commercial</option>
                    <option>Office Space</option>
                    <option>Retail Shop</option>
                    <option>Warehouse</option>
                    <option>Co-working</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-3 p-4 bg-secondary border border-border">
                <DollarSign className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="flex-1 text-left">
                  <label className="text-xs text-muted-foreground block mb-1">
                    Budget
                  </label>
                  <select className="w-full bg-transparent text-foreground font-medium focus:outline-none">
                    <option>₹50K - ₹1L/month</option>
                    <option>₹1L - ₹5L/month</option>
                    <option>₹5L - ₹10L/month</option>
                    <option>₹10L+/month</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-full text-lg font-semibold">
                <Search className="mr-2 h-5 w-5" />
                Search Property
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
