import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading - Centered */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004861] text-center mb-8">
            About Aaraam Properties
          </h2>

          {/* Sub-heading - Centered */}
          <div className="mb-6 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#004861]">
              Your Trusted Real Estate Advisory in Navi Mumbai
            </h3>
          </div>

          {/* Description Text - Centered */}
          <div className="mb-12 text-center">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mx-auto max-w-4xl">
              Aaraam Properties specializes in premium residential, commercial, and investment properties. We work closely with leading developers to match the right property to your requirement – from first homes to long-term income-generating assets.
            </p>
          </div>

          {/* Media Section - Centered with Equal Spacing and Reduced Height */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-[25px] shadow-2xl">
              <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
                <video
                  src="/about us video.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Get Consultation Button - Centered after video */}
          <div className="text-center">
            <Link to="/about">
              <button className="group/btn inline-flex items-center gap-3 bg-white hover:bg-[#16A34A] text-[#16A34A] hover:text-white border-2 border-[#16A34A] px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl">
                Get consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
