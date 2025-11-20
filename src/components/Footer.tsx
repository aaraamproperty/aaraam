import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Mail Section */}
          <div className="text-center md:text-left">
            <a
              href="/contact"
              className="block hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">MAIL</h3>
              </div>
              <p className="text-primary-foreground/80 mb-2">
                Get in touch via email
              </p>
              <span className="text-accent hover:text-accent/80 transition-colors font-medium">
                info@aaraamproperties.com
              </span>
            </a>
          </div>

          {/* Call Section */}
          <div className="text-center md:text-left">
            <a
              href="/contact"
              className="block hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">CALL</h3>
              </div>
              <p className="text-primary-foreground/80 mb-2">
                Speak with our team
              </p>
              <span className="text-accent hover:text-accent/80 transition-colors font-medium">
                +91 123 456 7890
              </span>
            </a>
          </div>

          {/* Social Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <h3 className="text-xl font-bold">SOCIAL</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Follow us on social media
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 Aaraam Properties. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="/disclaimer"
                className="hover:text-[#16A34A] transition-colors cursor-pointer"
              >
                Disclaimer
              </a>
              <a
                href="/privacy-policy"
                className="hover:text-[#16A34A] transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="hover:text-[#16A34A] transition-colors cursor-pointer"
              >
                Terms of Use
              </a>
              <a
                href="/contact"
                className="hover:text-[#16A34A] transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
