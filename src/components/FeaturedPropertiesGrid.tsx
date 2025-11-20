import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";

const FeaturedPropertiesGrid = () => {
  const properties = [
    {
      id: 1,
      image: officeImage,
      name: "Corporate Office - Powai",
      location: "Powai, Mumbai",
      price: "₹1,80,000/month",
      highlights: ["2000 sq.ft", "Furnished", "Parking"],
    },
    {
      id: 2,
      image: retailImage,
      name: "Retail Shop - Connaught Place",
      location: "CP, Delhi",
      price: "₹2,20,000/month",
      highlights: ["1500 sq.ft", "High Footfall", "Corner Plot"],
    },
    {
      id: 3,
      image: officeImage,
      name: "IT Office - Electronic City",
      location: "Bangalore",
      price: "₹1,50,000/month",
      highlights: ["2800 sq.ft", "Tech Park", "24/7 Access"],
    },
    {
      id: 4,
      image: retailImage,
      name: "Showroom - Koregaon Park",
      location: "Pune",
      price: "₹1,90,000/month",
      highlights: ["2200 sq.ft", "Premium Area", "Display Windows"],
    },
  ];

  return (
    <section className="pb-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#004861] mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of commercial spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-[#004861]/10 hover:border-[#16A34A] transition-all hover:shadow-xl group flex flex-col"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden h-48 flex-shrink-0">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-[#004861] mb-2 h-14 line-clamp-2">
                  {property.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1 h-5">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{property.location}</span>
                </p>

                <div className="flex flex-wrap gap-2 mb-4 min-h-[60px]">
                  {property.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F7F7F7] text-[#004861] px-3 py-1.5 rounded-full border border-[#004861]/20 h-fit"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Price with fixed height */}
                <div className="text-[#16A34A] font-bold text-xl mb-4 h-8 flex items-center">
                  {property.price}
                </div>

                {/* Button at the bottom with fixed position */}
                <div className="mt-auto pt-2">
                  <Button className="w-full bg-[#16A34A] hover:bg-[#16A34A]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all h-11">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesGrid;
