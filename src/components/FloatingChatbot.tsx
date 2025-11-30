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
  const [isMinimized, setIsMinimized] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! Welcome to Aaraam Properties 🏢 I'm here to help you find premium commercial spaces in Navi Mumbai. How can I assist you today?",
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
      text: "Browse Properties",
      response:
        "Great! We have 15+ verified commercial properties in Navi Mumbai from top developers like Tescon, Paradise Group, Dream Group, Raheja, and more. Properties range from ₹57 Lakhs+ to ₹2.33 Cr+ with offices, retail spaces, and mixed-use developments. Which type of space interests you - Office, Retail, or Mixed-Use?",
    },
    {
      id: 2,
      text: "Schedule Site Visit",
      response:
        "I'd be happy to schedule a property tour for you! Our team arranges viewings at your convenience. Please share your preferred date, time, and which property interests you (or we can recommend based on your requirements). You can also use the 'Book Site Visit' button on any property page!",
    },
    {
      id: 3,
      text: "Property Pricing",
      response:
        "Our properties offer transparent pricing across budgets: Entry-level from ₹57 Lakhs+, Mid-range ₹1-1.5 Cr+, Premium ₹1.5-2.5 Cr+. Prices include flexible payment plans and some properties offer pre-launch benefits. What's your budget range? I can suggest suitable properties!",
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
      return "Aaraam Properties is your trusted partner in commercial real estate, founded in 2018 with a vision to revolutionize the industry in India. We specialize in connecting businesses with verified, transparent, and hassle-free commercial spaces - from corporate offices to retail shops across Navi Mumbai and major cities.";
    }

    // Services
    if (
      input.includes("service") ||
      input.includes("what do you do") ||
      input.includes("offer")
    ) {
      return "We offer premium commercial properties including: 1) Corporate Office Spaces (Grade-A offices, business parks) 2) Retail Shops & Showrooms 3) Co-working Spaces 4) Mixed-Use Developments. All properties are verified with transparent pricing and corporate-friendly agreements.";
    }

    // Property types
    if (input.includes("office") || input.includes("workspace")) {
      return "We have premium corporate office spaces across Navi Mumbai including properties from leading developers like Tescon, Paradise Group, Dream Group, and more. Our offices range from 370 sq.ft to large floor plates with modern amenities. Would you like to browse featured properties or schedule a site visit?";
    }

    if (
      input.includes("retail") ||
      input.includes("shop") ||
      input.includes("showroom")
    ) {
      return "We offer high-street retail spaces in prime locations with excellent footfall. Our portfolio includes retail spaces in integrated developments like Sai World One, Cyber Square, and more. All properties are documented and verified. Interested in viewing our retail properties?";
    }

    if (
      input.includes("coworking") ||
      input.includes("co-working") ||
      input.includes("shared")
    ) {
      return "Our co-working spaces offer flexible seating, modern amenities, and collaborative environments. Ideal for startups, freelancers, and growing businesses. Properties include modern facilities with conference rooms, high-speed internet, and professional ambiance. Would you like to know more?";
    }

    // Locations & Cities
    if (
      input.includes("location") ||
      input.includes("city") ||
      input.includes("cities") ||
      input.includes("where") ||
      input.includes("navi mumbai") ||
      input.includes("nerul")
    ) {
      return "We specialize in Navi Mumbai properties with prime locations in Nerul, Turbhe, Juinagar, Kharghar, and MIDC areas. Our properties offer excellent connectivity to Navi Mumbai Airport (15-20 mins), railway stations, highways, and upcoming infrastructure like MTHL. Which specific area interests you?";
    }

    // Pricing & Cost
    if (
      input.includes("price") ||
      input.includes("cost") ||
      input.includes("rent") ||
      input.includes("budget")
    ) {
      return "We offer transparent pricing across various budgets: Entry-level offices start from ₹57 Lakhs+, mid-range properties from ₹1 Cr+, and premium spaces from ₹1.5 Cr+. Prices vary based on location, size, and amenities. All properties have flexible payment plans. Would you like to discuss your budget requirements?";
    }

    // Process & Documentation
    if (
      input.includes("process") ||
      input.includes("how to") ||
      input.includes("documentation") ||
      input.includes("agreement")
    ) {
      return "Our process is simple: 1) Browse 15+ verified properties on our website 2) Schedule site visit with our team 3) Review property details, pricing, amenities 4) We handle all documentation and RERA compliance 5) Move in smoothly. We provide corporate-friendly agreements tailored for business needs.";
    }

    // Why choose us
    if (
      input.includes("why") ||
      input.includes("benefit") ||
      input.includes("advantage")
    ) {
      return "Why choose Aaraam Properties? ✓ 15+ Verified Premium Properties ✓ Partnerships with Top Developers (Tescon, Paradise, Dream Group, Raheja) ✓ Transparent Pricing ✓ Corporate-Friendly Agreements ✓ Expert Local Knowledge ✓ Quick Property Tours ✓ End-to-End Support. Founded in 2018 by industry veterans with decades of experience.";
    }

    // Contact & Visit
    if (
      input.includes("contact") ||
      input.includes("phone") ||
      input.includes("email") ||
      input.includes("reach")
    ) {
      return "You can reach us at: 📧 raju@aaraamproperties.com, saurav@aaraamproperties.com, sanup@aaraamproperties.com | 📞 8104124183, 7738915066, 9136636577 | 📍 Office: Plan S Business Park, MIDC Shiravane, Nerul, Navi Mumbai. Book a site visit or fill our contact form for immediate assistance!";
    }

    // Site visit
    if (
      input.includes("visit") ||
      input.includes("view") ||
      input.includes("see") ||
      input.includes("tour")
    ) {
      return "I can help you schedule a site visit! We arrange property viewings with our expert team. Click the 'Book Site Visit' button on any property page or visit our Contact page. We respond within 24 hours. Which property interests you?";
    }

    // Verification & Trust
    if (
      input.includes("verified") ||
      input.includes("trust") ||
      input.includes("genuine") ||
      input.includes("authentic")
    ) {
      return "Every property is thoroughly verified with proper documentation, RERA registration, and legal compliance. We partner with established developers and ensure all properties are ready for investment. Our team verifies each detail before listing. Trust and transparency are our core values.";
    }

    // Developers & Projects
    if (
      input.includes("developer") ||
      input.includes("builder") ||
      input.includes("project") ||
      input.includes("tescon") ||
      input.includes("paradise") ||
      input.includes("dream") ||
      input.includes("raheja")
    ) {
      return "We partner with leading developers: Tescon (Plan I & M), Paradise Group (Sai World One & Pyramid), Dream Group (Digit, Gateway, Ikon), Raheja Prime, Delta Group, Kaamdhenu, and more. Each developer brings quality, trust, and innovation. Which project interests you?";
    }

    // Specific properties
    if (
      input.includes("plan i") ||
      input.includes("plan m") ||
      input.includes("sai world") ||
      input.includes("cyber square") ||
      input.includes("24 high")
    ) {
      return "Great choice! We have detailed information on all our premium properties. Each property page includes complete specifications, amenities, pricing, gallery, location map, and brochures. Visit our Properties page to explore or I can connect you with our team for a personalized tour!";
    }

    // Amenities
    if (
      input.includes("amenity") ||
      input.includes("amenities") ||
      input.includes("facilities") ||
      input.includes("features")
    ) {
      return "Our properties feature world-class amenities: 🅿️ Parking (some with robotic systems), ⚡ Power Backup, 🔒 24/7 Security & CCTV, 🏋️ Fitness Centers, 🏊 Swimming Pools, 🍽️ Food Courts, 🤝 Conference Rooms, 🌐 High-Speed Internet, and more. Each property has unique premium features!";
    }

    // Possession & Timeline
    if (
      input.includes("possession") ||
      input.includes("ready") ||
      input.includes("when") ||
      input.includes("timeline")
    ) {
      return "We have properties with various possession timelines: Ready-to-move (2026), upcoming launches (2027-2028), and pre-launch opportunities (2029-2031). Each property listing shows exact possession dates. Early investors get best pricing and payment flexibility. What timeline works for you?";
    }

    // Investment & ROI
    if (
      input.includes("investment") ||
      input.includes("roi") ||
      input.includes("return") ||
      input.includes("rental")
    ) {
      return "Our commercial properties offer excellent investment potential with 7-9%+ rental yields in prime Navi Mumbai locations. Benefits include capital appreciation, corporate tenants, strategic locations near airport/metro, and growing business ecosystem. Would you like investment-specific property recommendations?";
    }

    // Greeting
    if (
      input.includes("hi") ||
      input.includes("hello") ||
      input.includes("hey")
    ) {
      return "Hello! Welcome to Aaraam Properties - Your trusted partner for premium commercial real estate in Navi Mumbai. We offer 15+ verified properties from top developers. How can I assist you today? Looking for office space, retail shops, or want to schedule a site visit?";
    }

    // Thank you
    if (input.includes("thank") || input.includes("thanks")) {
      return "You're welcome! If you have any more questions about our commercial properties, leasing, pricing, or locations, feel free to ask. You can also book a site visit or contact our team directly. We're here to help you find your perfect space!";
    }

    // Default response
    return "Thank you for your message! I can help you with: 🏢 Browse 15+ verified commercial properties | 📅 Schedule site visits | 💰 Property pricing & investment info | 📍 Navi Mumbai locations | 🏗️ Developer information | 📞 Connect with our expert team. What would you like to know?";
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
          className="fixed bottom-20 sm:bottom-24 right-2 sm:right-4 md:right-6 z-[100] w-[calc(100vw-1rem)] sm:w-80 md:w-96 max-w-md bg-card border border-border rounded-2xl sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="bg-[#16A34A] text-white p-3 sm:p-4 rounded-t-2xl sm:rounded-t-3xl flex items-center justify-between">
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
              onClick={() => {
                setIsOpen(false);
                setIsMinimized(true);
              }}
              className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
              aria-label="Minimize chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="p-3 sm:p-4 space-y-3 sm:space-y-4 max-h-[50vh] sm:max-h-96 overflow-y-auto bg-[#F7F7F7]"
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
          <div className="p-3 sm:p-4 border-t border-border bg-white rounded-b-2xl sm:rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7] text-foreground"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white rounded-full px-3 sm:px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Minimized Vertical Tab on Right Edge - Shows when chatbot is minimized */}
      {isMinimized && !isOpen && (
        <button
          onClick={() => {
            setIsMinimized(false);
            setIsOpen(true);
          }}
          className="fixed right-0 bottom-6 z-[100] bg-[#16A34A] hover:bg-[#16A34A]/90 text-white shadow-2xl transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgba(22,163,74,0.4)] group"
          style={{
            writingMode: 'vertical-rl',
            padding: '1rem 0.75rem',
            borderRadius: '0.75rem 0 0 0.75rem',
          }}
          aria-label="Open chat"
        >
          <div className="flex flex-col items-center gap-2">
            <MessageCircle className="h-5 w-5 rotate-90 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold tracking-wide">Need Help?</span>
          </div>
        </button>
      )}

      {/* Floating Button with "Need help?" bubble - Shows when not minimized */}
      {!isMinimized && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[100] flex flex-col items-end gap-2 sm:gap-3">
          {/* Speech Bubble */}
          {!isOpen && (
            <div className="bg-[#16A34A] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-2xl sm:rounded-3xl shadow-lg animate-in slide-in-from-right-4 duration-300 relative">
              <div className="text-xs sm:text-sm font-semibold">Need help?</div>
              <div className="text-[10px] sm:text-xs opacity-90">Chat with Agent</div>
              {/* Bubble tail pointing to the avatar */}
              <div className="absolute -bottom-1.5 sm:-bottom-2 right-6 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 bg-[#16A34A] transform rotate-45"></div>
            </div>
          )}

          {/* Avatar Button with white border */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 duration-300 border-4 border-[#16A34A] overflow-hidden"
            aria-label="Toggle chat"
          >
            {isOpen ? (
              <X className="h-6 w-6 sm:h-7 sm:w-7 text-[#16A34A]" />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                alt="Chat Agent"
                className="w-full h-full object-cover"
              />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
