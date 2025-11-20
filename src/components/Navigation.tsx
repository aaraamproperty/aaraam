import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import BookSiteVisitModal from "@/components/BookSiteVisitModal";
import { useLocation } from "react-router-dom";
import logo from "@/assets/AARAAM Logo.png";
import logoWhite from "@/assets/AARAAM White Logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload both logos
  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    img1.src = logo;
    img2.src = logoWhite;
  }, []);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const LogoComponent = () => (
    <div
      className={`relative w-auto ${
        prefersReducedMotion ? "" : "transition-all duration-300 ease-in-out"
      } ${isScrolled ? "h-[150px]" : "h-[150px]"}`}
      style={{ minWidth: "150px" }}
    >
      {/* White logo - visible at top */}
      <img
        src={logoWhite}
        alt="Aaraam Properties"
        className={`absolute inset-0 h-full w-auto object-contain ${
          prefersReducedMotion
            ? ""
            : "transition-opacity duration-200 ease-in-out"
        }`}
        style={{ opacity: isScrolled ? 0 : 1 }}
      />
      {/* Regular logo - visible when scrolled */}
      <img
        src={logo}
        alt="Aaraam Properties"
        className={`absolute inset-0 h-full w-auto object-contain ${
          prefersReducedMotion
            ? ""
            : "transition-opacity duration-200 ease-in-out"
        }`}
        style={{ opacity: isScrolled ? 1 : 0 }}
      />
    </div>
  );

  return (
    <>
      <BookSiteVisitModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              {isHomepage ? (
                <LogoComponent />
              ) : (
                <a href="/" className="block">
                  <LogoComponent />
                </a>
              )}
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
              <Button
                onClick={() => setShowBookingModal(true)}
                className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Book Site Visit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-border bg-card">
              <a
                href="/"
                className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary"
              >
                Home
              </a>
              <a
                href="/properties"
                className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary"
              >
                Properties
              </a>
              <a
                href="/about"
                className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary"
              >
                About Us
              </a>
              <a
                href="/blog"
                className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block text-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-lg hover:bg-secondary"
              >
                Contact
              </a>
              <Button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-[#16A34A] hover:bg-[#16A34A]/90 text-white rounded-full"
              >
                Book Site Visit
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
