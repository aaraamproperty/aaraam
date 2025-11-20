import {
  Shield,
  FileCheck,
  Clock,
  Users,
  MapPin,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "No Brokerage Hassles",
    description:
      "Direct listings with transparent pricing and no hidden charges.",
  },
  {
    icon: FileCheck,
    title: "Corporate-Friendly Agreements",
    description:
      "Legal documentation tailored for business needs and compliance.",
  },
  {
    icon: Clock,
    title: "Verified Commercial Spaces",
    description:
      "Every property is verified, documented, and ready to move in.",
  },
  {
    icon: Users,
    title: "Quick Leasing Support",
    description: "Fast-track your search with dedicated support from our team.",
  },
  {
    icon: MapPin,
    title: "Local Experts in Every City",
    description:
      "Pan-India presence with local market knowledge and expertise.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented Solutions",
    description: "Flexible spaces that scale with your business requirements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Aaraam Properties
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for commercial real estate across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card hover:bg-[#16A34A] border border-border rounded-3xl p-8 transition-all duration-500 hover:border-accent hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:scale-105 group"
            >
              <div className="mb-4">
                <benefit.icon className="h-10 w-10 text-accent group-hover:text-white transition-all duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-3 transition-colors duration-500">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white transition-colors duration-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
