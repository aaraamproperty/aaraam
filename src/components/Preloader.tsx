import { useEffect, useState } from "react";

const Preloader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadComplete, 500); // Smooth transition
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-background animate-fade-out pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center animate-fade-in">
        {/* Animated logo or brand element */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-accent/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Brand text */}
        <h2 className="text-2xl font-bold text-primary mb-2">
          Aaraam <span className="text-accent">Properties</span>
        </h2>
        <p className="text-sm text-muted-foreground">Loading your commercial space...</p>
      </div>
    </div>
  );
};

export default Preloader;
