import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";
import commercialImage from "@/assets/hero-commercial.jpg";

const properties = [
  {
    id: 1,
    name: "Premium Office Space - BKC",
    city: "Mumbai",
    type: "Office",
    price: "₹8.5L/month",
    image: officeImage,
  },
  {
    id: 2,
    name: "Retail Shop - Connaught Place",
    city: "Delhi",
    type: "Retail",
    price: "₹12L/month",
    image: retailImage,
  },
  {
    id: 3,
    name: "Commercial Building - MG Road",
    city: "Bangalore",
    type: "Building",
    price: "₹25L/month",
    image: commercialImage,
  },
];

const FeaturedProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const currentProperty = properties[currentIndex];

  return (
    <section id="properties" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our handpicked commercial spaces across India
          </p>
        </div>

        {/* Single Property Card with Slider */}
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-card shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Property Image */}
              <div className="relative h-[400px]">
                <img
                  src={currentProperty.image}
                  alt={currentProperty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 font-bold">
                  {currentProperty.type}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {currentProperty.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    📍 {currentProperty.city}
                  </p>
                  <div className="border-t border-border pt-4 mb-6">
                    <p className="text-3xl font-bold text-accent">
                      {currentProperty.price}
                    </p>
                  </div>
                </div>

                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full text-lg">
                  View Property Details
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevProperty}
              variant="outline"
              size="icon"
              className="h-12 w-12 border-2 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextProperty}
              variant="outline"
              size="icon"
              className="h-12 w-12 border-2 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Property Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all ${
                  index === currentIndex ? "w-8 bg-accent" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
