import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import officeImage from "@/assets/office-space.jpg";

const faqs = [
  {
    question: "What documents do I need for commercial rentals?",
    answer:
      "For commercial rentals, you typically need business registration documents, GST certificate, identity proof, and address proof. Our team will guide you through the complete documentation process.",
  },
  {
    question: "Can I negotiate rental prices?",
    answer:
      "Yes, rental prices are negotiable. Our team works with both property owners and businesses to find mutually beneficial terms that work for everyone involved.",
  },
  {
    question: "Do you offer corporate leasing support?",
    answer:
      "Absolutely! We specialize in corporate leasing with dedicated support for businesses. We handle all legal documentation, compliance, and provide flexible lease terms.",
  },
  {
    question: "How fast can I get a property?",
    answer:
      "Once you shortlist a property, we can arrange immediate site visits. The entire process from selection to handover typically takes 7-14 days, depending on documentation.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about leasing commercial properties
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <img
              src={officeImage}
              alt="Office Space"
              className="w-full h-[500px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Right: Accordion */}
          <div className="order-1 lg:order-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
