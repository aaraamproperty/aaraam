import officeImage from "@/assets/office-space.jpg";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need for commercial rentals?",
    answer: "For commercial rentals, you typically need business registration documents, GST certificate, identity proof, and address proof. Our team will guide you through the complete documentation process.",
  },
  {
    question: "Can I negotiate rental prices?",
    answer: "Yes, rental prices are negotiable. Our team works with both property owners and businesses to find mutually beneficial terms that work for everyone involved.",
  },
  {
    question: "Do you offer corporate leasing support?",
    answer: "Absolutely! We specialize in corporate leasing with dedicated support for businesses. We handle all legal documentation, compliance, and provide flexible lease terms.",
  },
  {
    question: "How fast can I get a property?",
    answer: "Once you shortlist a property, we can arrange immediate site visits. The entire process from selection to handover typically takes 7-14 days, depending on documentation.",
  },
];

const FAQSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about leasing commercial properties</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src={officeImage} alt="Office Space" className="w-full h-[500px] object-cover rounded-3xl shadow-lg" />
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-3xl overflow-hidden transition-all duration-200"
                onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <button className="w-full text-left px-6 py-6 flex items-center justify-between font-semibold text-foreground hover:text-accent transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${hoveredIndex === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ease-in-out ${hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
