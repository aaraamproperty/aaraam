import { useEffect, useState } from "react";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PremiumProperties = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      id: 1,
      image: officeImage,
      name: "Premium Corporate Office",
      location: "Bandra Kurla Complex, Mumbai",
      price: "₹2,50,000/month",
      area: "2500 sq.ft",
    },
    {
      id: 2,
      image: retailImage,
      name: "Luxury Retail Space",
      location: "Khan Market, Delhi",
      price: "₹3,00,000/month",
      area: "1800 sq.ft",
    },
    {
      id: 3,
      image: officeImage,
      name: "Modern Co-working Hub",
      location: "Whitefield, Bangalore",
      price: "₹1,80,000/month",
      area: "3000 sq.ft",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [properties.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <section id="premium-properties" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Premium Properties</h2>
          <p className="text-lg text-muted-foreground">
            Handpicked commercial spaces for your business
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Slide */}
          <div className="overflow-hidden rounded-3xl">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-full"
                }`}
              >
                <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-primary mb-4">
                        {property.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">{property.location}</p>
                      <div className="space-y-3 mb-8">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Area:</span>
                          <span className="font-semibold text-foreground">{property.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rental:</span>
                          <span className="font-bold text-accent text-xl">{property.price}</span>
                        </div>
                      </div>
                      <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg">
                        View Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card hover:bg-accent text-foreground hover:text-accent-foreground w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card hover:bg-accent text-foreground hover:text-accent-foreground w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-accent w-8"
                    : "bg-border hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumProperties;
