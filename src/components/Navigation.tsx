import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">
              Aaraam Properties
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="#properties" className="text-foreground hover:text-accent transition-colors font-medium">
              Properties
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About Us
            </a>
            <a href="#blog" className="text-foreground hover:text-accent transition-colors font-medium">
              Blog
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="#properties" className="block text-foreground hover:text-accent transition-colors font-medium">
              Properties
            </a>
            <a href="#about" className="block text-foreground hover:text-accent transition-colors font-medium">
              About Us
            </a>
            <a href="#blog" className="block text-foreground hover:text-accent transition-colors font-medium">
              Blog
            </a>
            <a href="#contact" className="block text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
