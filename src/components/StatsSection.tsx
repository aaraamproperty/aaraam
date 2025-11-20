import {
  Building2,
  MapPin,
  Store,
  Users,
  Briefcase,
  Globe,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Building2, label: "Years of Service", value: 15, suffix: "+" },
  { icon: MapPin, label: "Cities Covered", value: 50, suffix: "+" },
  { icon: Store, label: "Shops Leased", value: 2500, suffix: "+" },
  { icon: Briefcase, label: "Commercial Spaces", value: 5000, suffix: "+" },
  { icon: Users, label: "Corporate Clients", value: 1200, suffix: "+" },
  { icon: Globe, label: "Pan-India Projects", value: 350, suffix: "+" },
];

const StatsSection = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationKey((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Numbers that reflect our commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={`${index}-${animationKey}`}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon: Icon,
  label,
  value,
  suffix,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const duration = 2000,
      steps = 60,
      increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-3xl p-8 text-center hover:bg-primary-foreground/15 hover:scale-105 transition-all animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon
        className="h-12 w-12 text-accent mx-auto mb-4 animate-slide-up"
        style={{ animationDelay: `${delay}ms` }}
      />
      <div
        className="text-4xl font-bold mb-2 animate-slide-up"
        style={{ animationDelay: `${delay + 100}ms` }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-lg text-primary-foreground/80 animate-slide-up"
        style={{ animationDelay: `${delay + 200}ms` }}
      >
        {label}
      </div>
    </div>
  );
};

export default StatsSection;
