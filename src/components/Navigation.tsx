import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">
              Aaraam <span className="text-accent">Properties</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="/"
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                isScrolled
                  ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </a>
            <a
              href="/properties"
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                isScrolled
                  ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Properties
            </a>
            <a
              href="/about"
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                isScrolled
                  ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "text-white hover:bg-white/10"
              }`}
            >
              About Us
            </a>
            <a
              href="/blog"
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                isScrolled
                  ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Blog
            </a>
            <a
              href="/contact"
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                isScrolled
                  ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Book Site Visit Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 rounded-full">
              Book Site Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border bg-card">
            <a href="/" className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary">
              Home
            </a>
            <a href="/properties" className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary">
              Properties
            </a>
            <a href="/about" className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary">
              About Us
            </a>
            <a href="/blog" className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary">
              Blog
            </a>
            <a href="/contact" className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary">
              Contact
            </a>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              Book Site Visit
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
