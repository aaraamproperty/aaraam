import { MessageCircle, X, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

interface FloatingChatbotProps {
  isHidden?: boolean;
}

const FloatingChatbot = ({ isHidden = false }: FloatingChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  // Check if brochure is open
  useEffect(() => {
    const checkBrochureState = () => {
      setIsBrochureOpen(document.body.hasAttribute('data-brochure-open'));
    };
    
    checkBrochureState();
    const observer = new MutationObserver(checkBrochureState);
    observer.observe(document.body, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  const [inputValue, setInputValue] = useState("");

  const predefinedOptions = [
    {
      id: 1,
      text: "Find Commercial Property",
      response:
        "Great! I can help you find the perfect commercial property. What type of space are you looking for? Office, Retail, or Warehouse?",
    },
    {
      id: 2,
      text: "Schedule a Visit",
      response:
        "I'd be happy to schedule a site visit for you! Please share your preferred date and time, and I'll arrange it with our property expert.",
    },
    {
      id: 3,
      text: "Request Callback",
      response:
        "Sure! Our team will call you back shortly. Could you please share your contact number and preferred time for the call?",
    },
  ];

  const getSmartResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // About Aaraam Properties
    if (
      input.includes("about") ||
      input.includes("who are you") ||
      input.includes("company")
    ) {
      return "Aaraam Properties is India's largest commercial real estate ecosystem, founded in 2015. We specialize in corporate rentals and commercial listings across 15+ major cities with 500+ verified properties. We provide transparent, verified, and hassle-free commercial spaces.";
    }

    // Services
    if (
      input.includes("service") ||
      input.includes("what do you do") ||
      input.includes("offer")
    ) {
      return "We offer: 1) Corporate Office Spaces 2) Retail Shops & Showrooms 3) Co-working Spaces 4) Warehouses 5) Commercial Buildings. All properties are verified with transparent pricing, no brokerage hassles, and corporate-friendly agreements.";
    }

    // Property types
    if (input.includes("office") || input.includes("workspace")) {
      return "We have premium corporate office spaces across major cities. Our offices are verified, ready-to-move, and come with corporate-friendly lease agreements. Would you like to browse our featured properties or schedule a site visit?";
    }

    if (
      input.includes("retail") ||
      input.includes("shop") ||
      input.includes("showroom")
    ) {
      return "We offer retail spaces in prime locations with high footfall. Perfect for retail outlets, showrooms, and commercial shops. All properties are documented and verified. Interested in viewing our retail properties?";
    }

    if (
      input.includes("coworking") ||
      input.includes("co-working") ||
      input.includes("shared")
    ) {
      return "Our co-working spaces offer flexible seating, modern amenities, and collaborative environments. Ideal for startups, freelancers, and growing businesses. Would you like to know more about our co-working options?";
    }

    // Locations & Cities
    if (
      input.includes("location") ||
      input.includes("city") ||
      input.includes("cities") ||
      input.includes("where")
    ) {
      return "We serve 15+ major cities across India including Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad, and more. We have pan-India presence with local market expertise. Which city are you looking for?";
    }

    // Pricing & Cost
    if (
      input.includes("price") ||
      input.includes("cost") ||
      input.includes("rent") ||
      input.includes("budget")
    ) {
      return "We offer transparent pricing with no hidden charges or brokerage fees. Prices vary based on location, size, and amenities. Our leases are flexible and negotiable. Would you like to discuss your budget requirements with our team?";
    }

    // Process & Documentation
    if (
      input.includes("process") ||
      input.includes("how to") ||
      input.includes("documentation") ||
      input.includes("agreement")
    ) {
      return "Our process is simple: 1) Browse properties 2) Schedule site visit 3) Finalize property 4) We handle all documentation and legal compliance 5) Move in within 7-14 days. We provide corporate-friendly agreements tailored for business needs.";
    }

    // Why choose us
    if (
      input.includes("why") ||
      input.includes("benefit") ||
      input.includes("advantage")
    ) {
      return "Why choose Aaraam Properties? ✓ No Brokerage Hassles ✓ 500+ Verified Properties ✓ Corporate-Friendly Agreements ✓ Quick Leasing Support ✓ Local Experts in Every City ✓ Transparent Pricing ✓ Growth-Oriented Solutions. Founded in 2015, we're recognized as India's leading commercial property consultants.";
    }

    // Contact & Visit
    if (
      input.includes("contact") ||
      input.includes("phone") ||
      input.includes("email") ||
      input.includes("reach")
    ) {
      return "You can reach us through: 1) Book a site visit using the 'Book Site Visit' button 2) Visit our Contact page for direct communication 3) Fill out our inquiry form. Our team responds within 24 hours. Would you like me to schedule a callback?";
    }

    // Site visit
    if (
      input.includes("visit") ||
      input.includes("view") ||
      input.includes("see")
    ) {
      return "I can help you schedule a site visit! We arrange immediate property viewings with our local experts. Click the 'Book Site Visit' button on our website or share your preferred date and time here.";
    }

    // Verification & Trust
    if (
      input.includes("verified") ||
      input.includes("trust") ||
      input.includes("genuine") ||
      input.includes("authentic")
    ) {
      return "Every property in our portfolio is thoroughly verified, documented, and ready to move in. We ensure authenticity, proper documentation, and legal compliance. With 10 years of experience and partnerships with 100+ leading corporates, we're India's most trusted commercial property platform.";
    }

    // Lease terms
    if (
      input.includes("lease") ||
      input.includes("term") ||
      input.includes("duration") ||
      input.includes("contract")
    ) {
      return "We offer flexible lease terms based on your business needs - short-term, long-term, or customizable agreements. All our leases are corporate-friendly with transparent terms and conditions. Legal documentation is handled by our expert team.";
    }

    // Greeting
    if (
      input.includes("hi") ||
      input.includes("hello") ||
      input.includes("hey")
    ) {
      return "Hello! Welcome to Aaraam Properties - Your trusted partner for commercial real estate. How can I assist you today? Looking for office space, retail shops, or want to know more about our services?";
    }

    // Thank you
    if (input.includes("thank") || input.includes("thanks")) {
      return "You're welcome! If you have any more questions about commercial properties, leasing, or our services, feel free to ask. We're here to help you find your perfect space!";
    }

    // Default response
    return "Thank you for your message! I can help you with: finding commercial properties, scheduling site visits, property pricing, our services, locations we serve, and more. Our expert team is also available for detailed assistance. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userQuery = inputValue;
    setInputValue("");

    // Add bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getSmartResponse(userQuery),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleOptionClick = (option: (typeof predefinedOptions)[0]) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: option.text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Add bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: option.response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (isHidden || isBrochureOpen) {
    return null;
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-[100] w-80 md:w-96 bg-card border border-border rounded-3xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="bg-[#16A34A] text-white p-4 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Aaraam Assistant</h3>
                <p className="text-xs text-white/80">We're here to help!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="p-4 space-y-4 max-h-96 overflow-y-auto bg-[#F7F7F7]"
            onWheel={(e) => e.stopPropagation()}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-[#004861] text-white rounded-br-none"
                      : "bg-white text-[#004861] rounded-bl-none border border-border"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Options */}
          {messages.length <= 2 && (
            <div className="p-4 space-y-2 bg-white border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                Quick options:
              </p>
              {predefinedOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left bg-[#F7F7F7] hover:bg-[#16A34A] hover:text-white p-3 rounded-xl border border-border transition-all text-sm font-medium"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-white rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7] text-foreground"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white rounded-full px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button with "Need help?" bubble */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
        {/* Speech Bubble */}
        {!isOpen && (
          <div className="bg-[#16A34A] text-white px-5 py-3 rounded-3xl shadow-lg animate-in slide-in-from-right-4 duration-300 relative">
            <div className="text-sm font-semibold">Need help?</div>
            <div className="text-xs opacity-90">Chat with Agent</div>
            {/* Bubble tail pointing to the avatar */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#16A34A] transform rotate-45"></div>
          </div>
        )}

        {/* Avatar Button with white border */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 duration-300 border-4 border-[#16A34A] overflow-hidden"
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-[#16A34A]" />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              alt="Chat Agent"
              className="w-full h-full object-cover"
            />
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingChatbot;
