import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechVentures Pvt Ltd",
    role: "CEO",
    content:
      "Aaraam Properties made our office search incredibly smooth. They understood our needs and delivered the perfect space in just two weeks. Highly professional!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Retail Solutions Inc",
    role: "Operations Head",
    content:
      "We needed a retail space in a prime location. Their team was transparent, efficient, and helped us negotiate a great deal. Absolutely recommend them!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Innovation Labs",
    role: "Founder",
    content:
      "The corporate-friendly agreements and quick leasing process saved us months. Aaraam Properties is now our go-to partner for all commercial properties.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:scale-105"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
