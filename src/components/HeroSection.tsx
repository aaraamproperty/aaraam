import heroImage from "@/assets/hero-commercial.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src={heroImage}
            alt="Commercial Real Estate"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Blue Overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.05 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Unlock Premium Real Estate & Commercial Opportunities in Navi Mumbai
          </h1>
          <div className="inline-block">
            <p
              className={`text-xl md:text-2xl text-white/90 mb-12 animate-fade-in relative ${
                animate ? "hero-underline-animate" : ""
              }`}
            >
              Discover curated residential, commercial, and investment-grade properties from trusted developers – guided by a team that treats your goals like their own.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Underline animation */
        .hero-underline-animate {
          position: relative;
        }

        .hero-underline-animate::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          height: 2px;
          background: rgba(255, 255, 255, 0.85);
          transform-origin: center;
          transform: scaleX(0);
        }

        .hero-underline-animate.hero-underline-animate::after {
          animation: centerExpandLoop 3s cubic-bezier(0.22, 0.9, 0.35, 1) infinite;
        }

        @keyframes centerExpandLoop {
          0% {
            transform: scaleX(0);
            opacity: 1;
          }
          40% {
            transform: scaleX(1);
            opacity: 1;
          }
          60% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0);
            opacity: 1;
          }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .hero-underline-animate::after {
            transform: scaleX(1);
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
