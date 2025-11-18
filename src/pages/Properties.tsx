import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { Button } from "@/components/ui/button";
import { Search, Grid3x3, Map, MapPin, Building2, DollarSign } from "lucide-react";
import { useState } from "react";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Properties = () => {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const properties = [
    {
      id: 1,
      image: officeImage,
      name: "Premium Office Space - BKC",
      location: "Bandra Kurla Complex, Mumbai",
      price: "₹2,50,000/month",
      area: "2500 sq.ft",
      type: "Office Space",
    },
    {
      id: 2,
      image: retailImage,
      name: "Retail Shop - Phoenix Mall",
      location: "Lower Parel, Mumbai",
      price: "₹1,80,000/month",
      area: "1200 sq.ft",
      type: "Retail Shop",
    },
    {
      id: 3,
      image: officeImage,
      name: "Corporate Office - Cyber City",
      location: "Gurgaon, Delhi NCR",
      price: "₹3,20,000/month",
      area: "3500 sq.ft",
      type: "Office Space",
    },
    {
      id: 4,
      image: retailImage,
      name: "Showroom Space - MG Road",
      location: "Bangalore",
      price: "₹2,00,000/month",
      area: "1800 sq.ft",
      type: "Showroom",
    },
  ];

  const faqs = [
    {
      question: "What documents are required for commercial leasing?",
      answer: "You'll need company registration, GST certificate, ID proof, address proof, and previous address proof for KYC verification.",
    },
    {
      question: "What is the typical lease duration?",
      answer: "Commercial properties typically have lease agreements ranging from 3 to 9 years with lock-in periods.",
    },
    {
      question: "Are maintenance charges included?",
      answer: "Maintenance charges are usually separate and depend on the property and amenities provided.",
    },
    {
      question: "Can I negotiate the rental price?",
      answer: "Yes, rental prices are negotiable based on factors like lease duration, advance payment, and market conditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Our Commercial Listings
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore verified commercial properties across India
          </p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>All Cities</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Pune</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>All Types</option>
                    <option>Office Space</option>
                    <option>Retail Shop</option>
                    <option>Showroom</option>
                    <option>Warehouse</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Budget</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Any Budget</option>
                    <option>₹50K - ₹1L/month</option>
                    <option>₹1L - ₹2L/month</option>
                    <option>₹2L - ₹5L/month</option>
                    <option>₹5L+/month</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                <Search className="mr-2 h-5 w-5" />
                Apply Filters
              </Button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 rounded-full transition-colors ${
                viewMode === "grid"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              <Grid3x3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`p-3 rounded-full transition-colors ${
                viewMode === "map"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              <Map className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Properties Grid/Map */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <div
                  key={property.id}
                  className="bg-card rounded-3xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {property.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{property.area}</span>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{property.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-accent">{property.price}</span>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-3xl p-8 border border-border text-center">
              <Map className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Map View Coming Soon</h3>
              <p className="text-muted-foreground">
                Interactive map with property pins will be available soon
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Leasing FAQs</h2>
            <p className="text-muted-foreground">Common questions about commercial leasing</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-3xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Find Your Commercial Space Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you discover the perfect property for your business
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full">
            Book Site Visit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
