import { useEffect, useState, useRef } from "react";

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
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const completePreloader = () => {
      if (hasCompletedRef.current) return;
      hasCompletedRef.current = true;

      if (prefersReducedMotion) {
        // Instant hide for reduced motion
        setIsHiding(true);
        setTimeout(() => {
          onLoadComplete();
        }, 50);
      } else {
        // Wait for animation to complete (650ms stroke + 250ms hold)
        const animationDuration = 900;
        const waitTime = Math.max(0, animationDuration - performance.now());

        setTimeout(() => {
          setIsHiding(true);
          // Exit animation (350ms) then complete
          setTimeout(() => {
            onLoadComplete();
          }, 400);
        }, waitTime);
      }
    };

    // Wait for page load
    const handleLoad = () => {
      completePreloader();
    };

    // Safety timeout to prevent infinite loading
    timeoutRef.current = window.setTimeout(() => {
      completePreloader();
    }, timeout);

    if (document.readyState === "complete") {
      // Page already loaded
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
      {/* Inline SVG Logo with animation classes */}
      <svg
        id="aaraam-logo-animated"
        className={`preloader__logo ${
          isAnimating ? "preloader__logo--animate" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 120"
        fill="none"
        aria-hidden="true"
        width="300"
        height="120"
      >
        {/* "Aaraam" Text - Top Line */}
        <g className="logo-text-aaraam">
          {/* A */}
          <path
            d="M 25 85 L 35 55 L 45 85 M 28 75 L 42 75"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--a1"
            pathLength="1"
          />

          {/* a */}
          <path
            d="M 55 75 Q 55 68 62 68 Q 68 68 68 75 L 68 85 M 68 75 Q 68 82 62 82 Q 55 82 55 75"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--a2"
            pathLength="1"
          />

          {/* a */}
          <path
            d="M 78 75 Q 78 68 85 68 Q 91 68 91 75 L 91 85 M 91 75 Q 91 82 85 82 Q 78 82 78 75"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--a3"
            pathLength="1"
          />

          {/* r */}
          <path
            d="M 101 85 L 101 70 M 101 72 Q 101 68 108 68"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--r1"
            pathLength="1"
          />

          {/* a */}
          <path
            d="M 118 75 Q 118 68 125 68 Q 131 68 131 75 L 131 85 M 131 75 Q 131 82 125 82 Q 118 82 118 75"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--a4"
            pathLength="1"
          />

          {/* a */}
          <path
            d="M 141 75 Q 141 68 148 68 Q 154 68 154 75 L 154 85 M 154 75 Q 154 82 148 82 Q 141 82 141 75"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--a5"
            pathLength="1"
          />

          {/* m */}
          <path
            d="M 164 85 L 164 70 M 164 72 Q 164 68 170 68 L 176 68 M 176 68 L 176 85 M 176 72 Q 176 68 182 68 L 188 68 M 188 68 L 188 85"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--m"
            pathLength="1"
          />
        </g>

        {/* "PROPERTIES" Text - Bottom Line */}
        <g className="logo-text-properties">
          {/* P */}
          <path
            d="M 25 100 L 25 115 M 25 100 L 33 100 Q 37 100 37 104 Q 37 108 33 108 L 25 108"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--p"
            pathLength="1"
          />

          {/* R */}
          <path
            d="M 43 115 L 43 100 L 51 100 Q 55 100 55 104 Q 55 108 51 108 L 43 108 M 51 108 L 55 115"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--r2"
            pathLength="1"
          />

          {/* O */}
          <ellipse
            cx="66"
            cy="107.5"
            rx="6"
            ry="7.5"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            className="logo-stroke logo-stroke--o1"
            pathLength="1"
          />

          {/* P */}
          <path
            d="M 78 100 L 78 115 M 78 100 L 86 100 Q 90 100 90 104 Q 90 108 86 108 L 78 108"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--p2"
            pathLength="1"
          />

          {/* E */}
          <path
            d="M 102 100 L 96 100 L 96 115 L 102 115 M 96 107.5 L 101 107.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--e"
            pathLength="1"
          />

          {/* R */}
          <path
            d="M 108 115 L 108 100 L 116 100 Q 120 100 120 104 Q 120 108 116 108 L 108 108 M 116 108 L 120 115"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--r3"
            pathLength="1"
          />

          {/* T */}
          <path
            d="M 126 100 L 138 100 M 132 100 L 132 115"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--t"
            pathLength="1"
          />

          {/* I */}
          <path
            d="M 144 100 L 144 115"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--i"
            pathLength="1"
          />

          {/* E */}
          <path
            d="M 156 100 L 150 100 L 150 115 L 156 115 M 150 107.5 L 155 107.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="logo-stroke logo-stroke--e2"
            pathLength="1"
          />

          {/* S */}
          <path
            d="M 168 100 Q 162 100 162 104 Q 162 107.5 168 107.5 Q 174 107.5 174 111 Q 174 115 168 115"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="logo-stroke logo-stroke--s"
            pathLength="1"
          />
        </g>

        {/* Decorative Elements */}
        {/* Top accent line above Aaraam */}
        <line
          x1="20"
          y1="45"
          x2="195"
          y2="45"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="logo-stroke logo-stroke--accent-top"
          pathLength="1"
        />

        {/* Bottom accent line below PROPERTIES */}
        <line
          x1="20"
          y1="95"
          x2="180"
          y2="95"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="logo-stroke logo-stroke--accent-bottom"
          pathLength="1"
        />

        {/* Accent dot (pulse animation) */}
        <circle
          cx="275"
          cy="60"
          r="4"
          fill="currentColor"
          className="logo-accent-dot"
        />

        {/* Fill shapes that fade in */}
        <g className="logo-fill" opacity="0.15">
          {/* A fill */}
          <path
            d="M 25 85 L 35 55 L 45 85 L 42 75 L 28 75 Z"
            fill="currentColor"
          />
        </g>
      </svg>

      {/* Screen reader text */}
      <span className="sr-only">Loading Aaraam Properties…</span>
    </div>
  );
};

export default Preloader;
