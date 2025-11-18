import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-card border border-border rounded-3xl shadow-2xl animate-scale-in">
          <div className="bg-accent text-accent-foreground p-4 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Aaraam Assistant</h3>
                <p className="text-xs text-accent-foreground/80">We're here to help!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent-foreground/10 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            <div className="bg-secondary p-4 rounded-2xl rounded-tl-none">
              <p className="text-sm text-foreground">
                Hello! How can I assist you with your commercial property search today?
              </p>
            </div>
            
            <div className="space-y-2">
              <button className="w-full text-left bg-background hover:bg-secondary p-3 rounded-2xl border border-border transition-colors text-sm">
                I'm looking for office space
              </button>
              <button className="w-full text-left bg-background hover:bg-secondary p-3 rounded-2xl border border-border transition-colors text-sm">
                I need a retail shop
              </button>
              <button className="w-full text-left bg-background hover:bg-secondary p-3 rounded-2xl border border-border transition-colors text-sm">
                Book a site visit
              </button>
            </div>
          </div>
          
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 animate-fade-in"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
};

export default FloatingChatbot;
