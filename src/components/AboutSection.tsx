import { CheckCircle, Shield, Globe } from "lucide-react";
import officeImage from "@/assets/office-space.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1 animate-[slide-in-left_0.6s_ease-out]">
            <img
              src={officeImage}
              alt="Office Space"
              className="w-full h-[500px] object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Aaraam Properties
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are India's leading commercial real estate platform, specializing in rentals and 
              commercial properties for businesses across the nation. From corporate offices to retail 
              shops, we deliver verified, transparent, and hassle-free leasing solutions.
            </p>

            {/* USP Cards */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4 p-4 bg-secondary border-l-4 border-accent">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Verified Commercial Listings</h3>
                  <p className="text-muted-foreground">Every property is verified and documented for your peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary border-l-4 border-accent">
                <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Trusted by Corporates</h3>
                  <p className="text-muted-foreground">Our corporate-friendly agreements ensure smooth business operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary border-l-4 border-accent">
                <Globe className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Pan-India Presence</h3>
                  <p className="text-muted-foreground">We operate in major cities across India with local expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
