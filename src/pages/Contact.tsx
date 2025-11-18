import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import officeImage from "@/assets/office-space.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero */}
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
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            We're here to help you find the perfect commercial space
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-3xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  ></textarea>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg rounded-full">
                  Submit Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-3xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Send us an email and we'll respond within 24 hours
                    </p>
                    <a
                      href="mailto:info@aaraamproperties.com"
                      className="text-accent hover:text-accent/80 font-medium"
                    >
                      info@aaraamproperties.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Speak directly with our property experts
                    </p>
                    <a
                      href="tel:+911234567890"
                      className="text-accent hover:text-accent/80 font-medium"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Aaraam Properties Headquarters<br />
                      123 Business District, BKC<br />
                      Mumbai, Maharashtra 400051
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent rounded-3xl p-8 text-accent-foreground">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 bg-accent-foreground/10 hover:bg-accent-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-accent-foreground/10 hover:bg-accent-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-accent-foreground/10 hover:bg-accent-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-accent-foreground/10 hover:bg-accent-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1906538154846!2d72.86384431490092!3d19.062117787092848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d9ff34e5df%3A0x4c4c4c4c4c4c4c4c!2sBandra%20Kurla%20Complex%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to View Your Next Space?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a site visit and let our experts guide you through the perfect property
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

export default Contact;
