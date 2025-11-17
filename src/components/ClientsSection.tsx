import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "TechCorp India", logo: "TC" },
  { name: "Global Retail Ltd", logo: "GR" },
  { name: "Innovate Solutions", logo: "IS" },
  { name: "Enterprise Group", logo: "EG" },
  { name: "Smart Business Co", logo: "SB" },
  { name: "Prime Industries", logo: "PI" },
  { name: "Urban Ventures", logo: "UV" },
  { name: "Capital Partners", logo: "CP" },
];

const ClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnering with India's top corporates and retail brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-32 border border-border bg-secondary rounded-2xl grayscale hover:grayscale-0 transition-all duration-300 hover:border-accent hover:shadow-lg hover:scale-105"
              style={{
                animation: isVisible ? `slide-in-left 0.6s ease-out ${index * 100}ms both` : "none",
              }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{client.logo}</div>
                <div className="text-sm text-muted-foreground">{client.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
