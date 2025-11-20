import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import officeImage from "@/assets/office-space.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading - Centered */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004861] text-center mb-8">
          About Aaraam Properties
        </h2>

        {/* Sub-heading - Left Aligned */}
        <div className="mb-6 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#004861]">
            More than just an agency
          </h3>
        </div>

        {/* Description Text (Left) and Button (Right) Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 max-w-6xl mx-auto">
          {/* Description Text - Left Aligned */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Aaraam is the largest real estate ecosystem, covering all aspects of
            the industry and providing clients with outstanding services.
          </p>

          {/* Get Consultation Button - Right Aligned */}
          <Link to="/about" className="flex-shrink-0">
            <button className="group/btn inline-flex items-center gap-3 bg-white hover:bg-[#16A34A] text-[#16A34A] hover:text-white border-2 border-[#16A34A] px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl">
              Get consultation
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Media Section - Centered with Equal Spacing and Reduced Height */}
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[25px] shadow-2xl group">
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
              <img
                src={officeImage}
                alt="Aaraam Properties Team"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-[#004861]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Optional: Play button overlay for video indication */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[16px] md:border-l-[20px] border-l-white border-b-[10px] md:border-b-[12px] border-b-transparent ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
