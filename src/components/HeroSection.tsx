import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-luxury-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Dream Home Today
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Discover premium properties in Mumbai's most sought-after locations
          </p>

          {/* Search Bar */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="flex-1 text-left">
                  <label className="text-xs text-muted-foreground block mb-1">
                    Location
                  </label>
                  <select className="w-full bg-transparent text-foreground font-medium focus:outline-none">
                    <option>Mumbai</option>
                    <option>Navi Mumbai</option>
                    <option>Thane</option>
                    <option>Outskirts</option>
                  </select>
                </div>
              </div>

              {/* Property Type */}
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <Home className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="flex-1 text-left">
                  <label className="text-xs text-muted-foreground block mb-1">
                    Property Type
                  </label>
                  <select className="w-full bg-transparent text-foreground font-medium focus:outline-none">
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Studio</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <DollarSign className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="flex-1 text-left">
                  <label className="text-xs text-muted-foreground block mb-1">
                    Budget
                  </label>
                  <select className="w-full bg-transparent text-foreground font-medium focus:outline-none">
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹2Cr</option>
                    <option>₹2Cr - ₹5Cr</option>
                    <option>₹5Cr+</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-full rounded-xl text-lg font-semibold">
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
