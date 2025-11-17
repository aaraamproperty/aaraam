import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import propertyImage from "@/assets/property-showcase.jpg";

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    {
      name: "Mumbai",
      description: "Central business district with iconic landmarks",
    },
    {
      name: "Navi Mumbai",
      description: "Modern planned city with excellent infrastructure",
    },
    {
      name: "Thane",
      description: "Rapidly growing with great connectivity",
    },
    {
      name: "Outskirts",
      description: "Peaceful surroundings with nature's touch",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Step 1 of 2
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Choose Your Preferred Location
              </h2>
              <p className="text-lg text-muted-foreground">
                Select from Mumbai's finest neighborhoods to find your ideal property
              </p>
            </div>

            <div className="space-y-4">
              {locations.map((location) => (
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location.name)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                    selectedLocation === location.name
                      ? "border-accent bg-accent/5 shadow-lg"
                      : "border-border bg-card hover:border-accent/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {location.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {location.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`h-6 w-6 transition-colors ${
                        selectedLocation === location.name
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            <Button
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg"
              disabled={!selectedLocation}
            >
              Continue to Property Selection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={propertyImage}
                alt="Luxury Property"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Properties</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSelector;
