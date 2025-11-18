import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { CheckCircle, Shield, Globe, Users, Building2, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeImage from "@/assets/office-space.jpg";

const About = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Office Leasing",
      description: "Premium office spaces tailored for corporates across major cities in India.",
    },
    {
      icon: Users,
      title: "Retail Shops & Showrooms",
      description: "High-visibility retail locations perfect for your business growth.",
    },
    {
      icon: Shield,
      title: "Corporate Rentals",
      description: "Flexible rental solutions with corporate-grade agreements and support.",
    },
    {
      icon: TrendingUp,
      title: "Property Advisory",
      description: "Expert guidance on commercial real estate investments and leasing strategies.",
    },
  ];

  const strengths = [
    { icon: CheckCircle, title: "Verified Listings", description: "100% verified commercial properties" },
    { icon: Globe, title: "Pan-India Coverage", description: "Presence in major cities nationwide" },
    { icon: Award, title: "Corporate Grade Process", description: "Professional end-to-end service" },
    { icon: Users, title: "Dedicated Support", description: "24/7 customer assistance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${officeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            About Aaraam Properties
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            India's trusted partner for commercial real estate solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-[slide-in-left_0.6s_ease-out]">
              <img
                src={officeImage}
                alt="Aaraam Properties Office"
                className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-4">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aaraam Properties was founded with a vision to simplify commercial real estate 
                  across India. We specialize in connecting businesses with verified, transparent, 
                  and hassle-free commercial spaces—from corporate offices to retail shops.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-3xl border-l-4 border-accent">
                <h3 className="font-bold text-xl text-foreground mb-2">Mission</h3>
                <p className="text-muted-foreground">
                  To revolutionize commercial real estate by providing transparent, verified, 
                  and corporate-grade leasing solutions across India.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-3xl border-l-4 border-accent">
                <h3 className="font-bold text-xl text-foreground mb-2">Vision</h3>
                <p className="text-muted-foreground">
                  To be India's most trusted commercial property platform, empowering businesses 
                  to find their perfect space with confidence and ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive commercial real estate solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-3xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-3xl border border-border hover:border-accent transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <strength.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{strength.title}</h3>
                <p className="text-sm text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Ready to Find Your Perfect Commercial Space?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you to the ideal property for your business needs
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full">
            Book Site Visit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
