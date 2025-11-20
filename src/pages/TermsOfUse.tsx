import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#004861] mb-6 animate-fade-in">
            Terms of Use
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-[#004861]/10 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be
                bound by these Terms of Use and our Privacy Policy. If you do
                not agree with these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Use of Website
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in a
                manner that does not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Infringe the rights of others</li>
                <li>Restrict or inhibit anyone's use of the website</li>
                <li>
                  Attempt to gain unauthorized access to any part of the website
                </li>
                <li>Transmit any harmful or malicious code</li>
                <li>Collect or harvest personal data about other users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Property Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All property listings, prices, and details are provided for
                informational purposes and are subject to change without notice.
                Aaraam Properties makes no guarantees about the availability or
                accuracy of listed properties. Any agreement to lease or
                purchase property will be subject to separate legal contracts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos,
                images, and software, is the property of Aaraam Properties and
                protected by copyright and trademark laws. You may not
                reproduce, distribute, or create derivative works without our
                express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                User Submissions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting inquiries, reviews, or other content to our
                website, you grant Aaraam Properties a non-exclusive,
                royalty-free license to use, modify, and display such content in
                connection with our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the content or practices of these external
                sites. Accessing third-party links is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Aaraam Properties shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                from your use of this website or services, even if we have been
                advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Aaraam Properties from
                any claims, damages, or expenses arising from your use of the
                website or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use shall be governed by and construed in
                accordance with the laws of India. Any disputes arising from
                these terms shall be subject to the exclusive jurisdiction of
                courts in Mumbai, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Use at any time.
                Changes will be effective immediately upon posting. Your
                continued use of the website after changes constitutes
                acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004861] mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Use, please contact us at
                legal@aaramproperties.com
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

export default TermsOfUse;
