import { useEffect, useRef } from "react";
import saiAaradhya from "@/partner_logos/Sai Aaradhya Logo.png";
import paradise from "@/partner_logos/Paradise Logo.png";
import saiIcon from "@/partner_logos/Sai Icon Logo.png";
import positiveLife from "@/partner_logos/Codename Positive Life.png";
import saiPrerna from "@/partner_logos/Sai Prerna Logo.png";
import saiSymphony from "@/partner_logos/Sai Symphony Logo.png";
import saiWorldEmpire from "@/partner_logos/Sai World Empire Logo.png";
import saiWorldDreams from "@/partner_logos/Sai World Dreams Logo_new.png";
import sunCity from "@/partner_logos/Sun City Logo.png";
import swl from "@/partner_logos/SWL Logo.jpg";

const clients = [
  { name: "Sai Aaradhya", logo: saiAaradhya },
  { name: "Paradise", logo: paradise },
  { name: "Sai Icon", logo: saiIcon },
  { name: "Codename Positive Life", logo: positiveLife },
  { name: "Sai Prerna", logo: saiPrerna },
  { name: "Sai Symphony", logo: saiSymphony },
  { name: "Sai World Empire", logo: saiWorldEmpire },
  { name: "Sai World Dreams", logo: saiWorldDreams },
  { name: "Sun City", logo: sunCity },
  { name: "SWL", logo: swl },
];

const ClientsSection = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Duplicate clients for seamless loop
  const clientsRow1 = [...clients, ...clients, ...clients];
  const clientsRow2 = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
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
    </section>
  );
};

export default ClientsSection;
