import { useEffect, useState, useRef } from "react";
import aaraamLogo from "@/assets/Aaraam Gold Logo.svg";

interface PreloaderProps {
  onLoadComplete: () => void;
  timeout?: number;
}

const Preloader = ({ onLoadComplete, timeout = 3000 }: PreloaderProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const hasCompletedRef = useRef(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const completePreloader = () => {
      if (hasCompletedRef.current) return;
      hasCompletedRef.current = true;

      if (prefersReducedMotion) {
        setIsHiding(true);
        setTimeout(() => {
          onLoadComplete();
        }, 50);
      } else {
        // 3000ms animation
        const animationDuration = 3000;
        const waitTime = Math.max(0, animationDuration - performance.now());

        setTimeout(() => {
          setIsHiding(true);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
        }, waitTime);
      }
    };

    const handleLoad = () => {
      completePreloader();
    };

    timeoutRef.current = window.setTimeout(() => {
      completePreloader();
    }, timeout);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onLoadComplete, timeout]);

  return (
    <div
      id="aaraam-preloader"
      className={`preloader ${isHiding ? "preloader--hidden" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="preloader__logo-wrapper">
        <img 
          src={aaraamLogo} 
          alt="Aaraam Properties" 
          className={`preloader__logo ${isAnimating ? "preloader__logo--animate" : ""}`}
        />
      </div>

      <span className="sr-only">Loading Aaraam Properties…</span>
    </div>
  );
};

export default Preloader;
