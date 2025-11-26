import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="aaraam-footer text-primary-foreground" style={{ backgroundColor: '#0A3629' }} role="contentinfo">
      {/* Main Footer Content - Card Style */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-7 items-stretch justify-center max-w-[1200px] mx-auto">
          {/* Menu Card */}
          <div 
            className="flex-1 min-w-0 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-[0_12px_38px_rgba(3,23,26,0.22)] border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-white/[0.01]"
            aria-label="Menu"
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 tracking-wide text-white">MENU</h4>
            
            <nav className="space-y-3" role="navigation" aria-label="Footer navigation">
              <a
                href="/"
                className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                About Us
              </a>
              <a
                href="/properties"
                className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                Properties
              </a>
              <a
                href="/blog"
                className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Card */}
          <div 
            className="flex-1 min-w-0 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-[0_12px_38px_rgba(3,23,26,0.22)] border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-white/[0.01] flex flex-col items-start text-left"
            aria-label="Social links"
          >
            <h4 className="text-lg sm:text-xl font-bold mb-3 tracking-wide text-white">SOCIAL</h4>
            <p className="text-primary-foreground/60 mb-4 sm:mb-5 text-xs sm:text-sm">
              Follow us on social media
            </p>
            
            <nav className="flex gap-3" role="navigation" aria-label="Social media links">
              <a
                href="https://www.facebook.com/profile.php?id=61580910826912"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.03] hover:bg-accent hover:border-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Follow Aaraam Properties on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/aaraamproperties/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.03] hover:bg-accent hover:border-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Follow Aaraam Properties on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/raju-shah-583232392/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.03] hover:bg-accent hover:border-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Connect with Raju Shah on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </nav>
          </div>

          {/* Contact Card */}
          <div 
            className="flex-1 min-w-0 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-[0_12px_38px_rgba(3,23,26,0.22)] border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-white/[0.01]"
            aria-label="Contact information"
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 tracking-wide text-white">CONTACT US</h4>
            
            <div className="space-y-3.5 sm:space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_6px_16px_rgba(15,60,35,0.18)]">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-[13px] text-primary-foreground/60 mb-1.5">Phone</span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 text-accent font-semibold text-sm sm:text-base">
                    <a
                      href="tel:+918104124183"
                      className="hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                    >
                      8104124183
                    </a>
                    <span className="text-primary-foreground/40">|</span>
                    <a
                      href="tel:+917738915066"
                      className="hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                    >
                      7738915066
                    </a>
                    <span className="text-primary-foreground/40">|</span>
                    <a
                      href="tel:+919136636577"
                      className="hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                    >
                      9136636577
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_6px_16px_rgba(15,60,35,0.18)]">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-[13px] text-primary-foreground/60 mb-1.5">Email</span>
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:raju@aaraamproperties.com"
                      className="text-accent hover:text-accent/80 transition-colors font-semibold text-xs sm:text-sm break-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                    >
                      raju@aaraamproperties.com
                    </a>
                    <a
                      href="mailto:saurav@aaraamproperties.com"
                      className="text-accent hover:text-accent/80 transition-colors font-semibold text-xs sm:text-sm break-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                    >
                      saurav@aaraamproperties.com
                    </a>
                    <a
                      href="mailto:sanup@aaraamproperties.com"
                      className="text-accent hover:text-accent/80 transition-colors font-semibold text-xs sm:text-sm break-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                    >
                      sanup@aaraamproperties.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_6px_16px_rgba(15,60,35,0.18)]">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-[13px] text-primary-foreground/60 mb-1.5">Location</span>
                  <address className="text-primary-foreground/90 not-italic leading-relaxed text-xs sm:text-sm font-normal">
                    Office no. 3108, Plan S Business Park,<br />
                    MIDC Industrial Area, Shiravane, Nerul,<br />
                    Navi Mumbai, Maharashtra 400706
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer Bar */}
      <div className="border-t border-white/[0.03]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/60 max-w-[1200px] mx-auto">
            <p className="text-center md:text-left">© 2025 Aaraam Properties. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="/disclaimer"
                className="hover:text-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded"
              >
                Disclaimer
              </a>
              <a
                href="/privacy-policy"
                className="hover:text-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="hover:text-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
