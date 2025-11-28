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
    title: "Specialized in Residential & Commercial Assets",
    description:
      "From premium apartments and retail spaces to offices and pre-leased units, we understand the nuances of each segment and guide you accordingly.",
  },
  {
    icon: FileCheck,
    title: "Curated Project & Developer Network",
    description:
      "We work only with selected, reputed developers, ensuring you get options that are legally sound, structurally robust, and future-ready.",
  },
  {
    icon: Clock,
    title: "End-to-End Advisory, Not Just Brokerage",
    description:
      "We don't just show properties – we help you evaluate location, pricing, future growth, rental potential, and exit strategy.",
  },
  {
    icon: Users,
    title: "Transparent, Data-Backed Guidance",
    description: "Clear comparisons, project insights, and market intelligence so that every decision is based on facts, not pressure.",
  },
  {
    icon: MapPin,
    title: "Strong After-Sales Support",
    description:
      "Assistance with documentation, bank loans via partners, registration, and any post-transaction coordination you may need.",
  },
  {
    icon: TrendingUp,
    title: "Local Market Expertise",
    description: "Deep familiarity with Navi Mumbai and surrounding corridors – ideal for end-users, NRIs, and investors looking for trustworthy ground support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Aaraam Properties
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for residential, commercial, and investment real estate
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
