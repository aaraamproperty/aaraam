import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul & Sneha",
    company: "Kharghar",
    role: "First-time Homebuyers",
    content:
      "As first-time homebuyers, we were overwhelmed with options. Aaraam Properties simplified everything – they explained pros and cons of each project, arranged multiple site visits, and coordinated with the developer and banker. The entire journey felt transparent and stress-free.",
    rating: 5,
  },
  {
    name: "Sachin",
    company: "IT Services Firm",
    role: "Founder",
    content:
      "We were looking for a larger office space with good connectivity and future appreciation potential. The team at Aaraam Properties understood our business requirements and showed only relevant options. Their negotiation support saved us both time and money.",
    rating: 5,
  },
  {
    name: "Priya",
    company: "NRI Investor",
    role: "Investment Professional",
    content:
      "Being based abroad, I needed someone I could trust on the ground. Aaraam Properties handled everything – from evaluating projects to coordinating possession. Communication was clear and regular, which gave me full confidence.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from families, businesses, and investors we've guided
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-secondary hover:bg-[#16A34A] border border-border rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:scale-105 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#FFD700] text-[#FFD700]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground group-hover:text-white mb-6 leading-relaxed transition-colors duration-500 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border group-hover:border-white/30 pt-4 transition-colors duration-500 mt-auto">
                <div className="font-bold text-foreground group-hover:text-white transition-colors duration-500">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
