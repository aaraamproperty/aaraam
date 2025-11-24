import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="aaraam-footer bg-primary text-primary-foreground" role="contentinfo">
      {/* Main Footer Content - Card Style */}
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-7 items-stretch justify-center max-w-[1200px] mx-auto">
          {/* Contact Card */}
          <div 
            className="flex-1 min-w-[280px] rounded-xl p-6 shadow-[0_12px_38px_rgba(3,23,26,0.22)] border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-white/[0.01]"
            aria-label="Contact information"
          >
            <h4 className="text-xl font-bold mb-5 tracking-wide text-white">CONTACT US</h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_6px_16px_rgba(15,60,35,0.18)]">
                  <Phone className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-primary-foreground/60 mb-1.5">Phone</span>
                  <a
                    href="tel:+919876543210"
                    className="text-accent hover:text-accent/80 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_6px_16px_rgba(15,60,35,0.18)]">
                  <Mail className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-primary-foreground/60 mb-1.5">Email</span>
                  <a
                    href="mailto:info@aaraamproperties.com"
                    className="text-accent hover:text-accent/80 transition-colors font-semibold break-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                  >
                    info@aaraamproperties.com
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_6px_16px_rgba(15,60,35,0.18)]">
                  <MapPin className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-primary-foreground/60 mb-1.5">Location</span>
                  <address className="text-primary-foreground/90 not-italic leading-relaxed text-sm font-normal">
                    Office no. 3108, Plan S Business Park,<br />
                    MIDC Industrial Area, Shiravane, Nerul,<br />
                    Navi Mumbai, Maharashtra 400706
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Social Card */}
          <div 
            className="flex-1 min-w-[280px] rounded-xl p-6 shadow-[0_12px_38px_rgba(3,23,26,0.22)] border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-white/[0.01] flex flex-col items-center lg:items-start text-center lg:text-left"
            aria-label="Social links"
          >
            <h4 className="text-xl font-bold mb-3 tracking-wide text-white">SOCIAL</h4>
            <p className="text-primary-foreground/60 mb-5 text-sm">
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
            </nav>
          </div>
        </div>
      </div>

      {/* Legal Footer Bar */}
      <div className="border-t border-white/[0.03]">
        <div className="container mx-auto px-6 lg:px-8 py-3.5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60 max-w-[1200px] mx-auto">
            <p>© 2025 Aaraam Properties. All rights reserved.</p>
            <div className="flex gap-6">
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
              <a
                href="/contact"
                className="hover:text-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded"
                rel="noopener"
                aria-label="Contact page"
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
