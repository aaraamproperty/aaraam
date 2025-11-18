import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Disclaimer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Important information about our services and website
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">General Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on this website is for general informational purposes only. 
                All information on the site is provided in good faith; however, we make no representation 
                or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                reliability, availability, or completeness of any information on the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Property Listings</h2>
              <p className="text-muted-foreground leading-relaxed">
                Property details, prices, and availability are subject to change without notice. 
                While we strive to keep information accurate and up-to-date, Aaraam Properties 
                does not guarantee that all listings are current or available. We recommend 
                contacting us directly to verify property details before making any decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites that are not provided or 
                maintained by Aaraam Properties. We do not guarantee the accuracy, relevance, 
                timeliness, or completeness of any information on these external websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Professional Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is not intended to be a substitute for professional 
                real estate, legal, or financial advice. Always seek the advice of qualified 
                professionals regarding your specific real estate needs and circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under no circumstance shall Aaraam Properties have any liability to you for any 
                loss or damage of any kind incurred as a result of the use of the site or reliance 
                on any information provided on the site. Your use of the site and your reliance on 
                any information on the site is solely at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Changes to Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this disclaimer at any time without notice. 
                Please review this page periodically for changes.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
