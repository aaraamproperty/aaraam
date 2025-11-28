import { useEffect, useRef } from "react";
import tesconLogo from "@/partner_logos/1 Tescon logo.png";
import kaamdhenubuildersLogo from "@/partner_logos/2 Kamdhenu_Builders.png";
import paradiseLogo from "@/partner_logos/3 Paradise Logo.png";
import greenscapeLogo from "@/partner_logos/4 GreenScape.png";
import dreamsLogo from "@/partner_logos/5 Dream Group.png";
import deltaLogo from "@/partner_logos/6 Delta Groups.svg";
import dreamapexLogo from "@/partner_logos/7 Dreamapex Realty.webp";
import kaamdhenurealtiesLogo from "@/partner_logos/8 Kaamdhenu Realties.png";
import rahejaLogo from "@/partner_logos/9 Raheja Prime.jpg";
import blancaLogo from "@/partner_logos/10 shree laxmi developers.jpg";
import emporiaWorldLogo from "@/partner_logos/11 Emporia World.jpeg";

const clientsRow1Data = [
  { name: "Tescon", logo: tesconLogo },
  { name: "The Kaamdhenu Builders", logo: kaamdhenubuildersLogo },
  { name: "Paradise Group", logo: paradiseLogo },
  { name: "GreenScape", logo: greenscapeLogo },
  { name: "Dreams Group", logo: dreamsLogo },
  { name: "DELTA Groups", logo: deltaLogo },
];

const clientsRow2Data = [
  { name: "Dreamapex Realty", logo: dreamapexLogo },
  { name: "Kaamdhenu Realties", logo: kaamdhenurealtiesLogo },
  { name: "Raheja Prime", logo: rahejaLogo },
  { name: "Shree Laxmi Developers", logo: blancaLogo },
  { name: "Emporia World", logo: emporiaWorldLogo },
];

const ClientsSection = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Duplicate clients for seamless loop
  const clientsRow1 = [...clientsRow1Data, ...clientsRow1Data, ...clientsRow1Data];
  const clientsRow2 = [...clientsRow2Data, ...clientsRow2Data, ...clientsRow2Data];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004861] mb-4">
              Trusted by Leading Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Partnering with India's top corporates and retail brands
            </p>
          </div>

        <div className="space-y-8">
          {/* Row 1: Left to Right */}
          <div className="relative">
            <div
              ref={scrollRef1}
              className="flex gap-8 animate-scroll-left"
              style={{
                width: "fit-content",
              }}
            >
              {clientsRow1.map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex items-center justify-center h-32 min-w-[200px] hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-24 max-w-[180px] w-auto h-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="relative">
            <div
              ref={scrollRef2}
              className="flex gap-8 animate-scroll-right"
              style={{
                width: "fit-content",
              }}
            >
              {clientsRow2.map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex items-center justify-center h-32 min-w-[200px] hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-24 max-w-[180px] w-auto h-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
