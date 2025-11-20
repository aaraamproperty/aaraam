import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#004861] mb-6 animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-[#004861]/10 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business details</li>
                <li>Property preferences and requirements</li>
                <li>Communication history and inquiries</li>
                <li>Site visit and viewing requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Schedule property viewings and site visits</li>
                <li>Send you relevant property listings and updates</li>
                <li>Communicate about our services and promotions</li>
                <li>Analyze usage and improve user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with trusted
                partners and service providers who assist us in operating our
                website and conducting our business, provided they agree to keep
                this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to enhance user experience. Cookies are
                small files stored on your device that help us understand how
                you use our site. You can choose to disable cookies through your
                browser settings, though this may affect site functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or how we
                handle your information, please contact us at
                privacy@aaramproperties.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                with an updated date.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
