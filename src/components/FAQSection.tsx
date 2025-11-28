import officeImage from "@/assets/FAQ image.jpg";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you only deal in residential properties, or commercial as well?",
    answer:
      "We actively handle both. Our portfolio includes residential apartments, retail shops, office spaces, and investment-grade pre-leased properties across Navi Mumbai and key growth corridors.",
  },
  {
    question: "Do you charge brokerage to buyers or tenants?",
    answer:
      "Our fee structure depends on the type of transaction (primary sale, resale, lease, or commercial deal) and is always communicated transparently at the start. In many primary sales, the developer compensates us, so there is no additional cost to the buyer.",
  },
  {
    question: "How do you shortlist properties for me?",
    answer:
      "We first understand your budget, purpose (self-use, business, or investment), preferred locations, and timeline. Based on that, we curate a shortlist from trusted developers and projects that align with your goals.",
  },
  {
    question: "Can you help with home loans and documentation?",
    answer:
      "Yes. Through our network of banking and financial partners, we can connect you for loan processing and assist with the documentation and registration flow.",
  },
  {
    question: "I'm an NRI. Can you assist me remotely?",
    answer:
      "Absolutely. We can coordinate virtual walkthroughs, share detailed project information, and manage most of the process digitally, with clear guidance on compliance and documentation.",
  },
];

const FAQSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about buying, leasing, and investing in properties
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 overflow-hidden rounded-3xl group cursor-pointer">
            <img
              src={officeImage}
              alt="Office Space"
              className="w-full h-[500px] object-cover shadow-lg transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl overflow-hidden transition-all duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button className="w-full text-left px-5 py-4 flex items-center justify-between font-semibold text-[#004861] transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 flex-shrink-0 ml-3 ${
                      hoveredIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    hoveredIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-4 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
