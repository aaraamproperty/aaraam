import heroImage from "@/assets/hero-commercial.jpg";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger animation after component mounts with delay to ensure preloader is done
    const timer = setTimeout(() => setAnimate(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  // Handle video end to ensure smooth restart
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onEnded={handleVideoEnd}
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-20 leading-tight animate-fade-in">
            Unlock Commercial Spaces in Navi Mumbai
          </h1>
          <div className="inline-block">
            <p
              className={`text-xl md:text-2xl text-white mb-12 animate-fade-in relative px-4 py-2 bg-black/0 backdrop-blur-md rounded-2xl ${
              animate ? "hero-underline-animate" : ""
              }`}
            >
              Premium properties from trusted developers in Navi Mumbai
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

        .hero-underline-animate::after {
  animation: centerExpandLoop 3s cubic-bezier(0.22, 0.9, 0.35, 1) forwards;
  animation-iteration-count: 1;
}

        @keyframes centerExpandLoop {
          0% {
            transform: scaleX(0);
            opacity: 1;
          }
          100% {
            transform: scaleX(1);
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
