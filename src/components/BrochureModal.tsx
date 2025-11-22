import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureUrl: string;
  title: string;
}

const BrochureModal = ({ isOpen, onClose, brochureUrl, title }: BrochureModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Track brochure view for analytics
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'brochure_view', {
        event_category: 'Paradise Group',
        event_label: title,
        value: brochureUrl
      });
    }
  }, [isOpen, title, brochureUrl]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-5xl h-[90vh] p-0 overflow-hidden"
        aria-describedby="brochure-description"
      >
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-xl font-bold text-[#004861] flex items-center justify-between">
            <span>{title} - Brochure</span>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
              aria-label="Close brochure"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>
        
        <div id="brochure-description" className="sr-only">
          PDF brochure viewer for {title}. Use Escape key to close.
        </div>

        <div className="flex-1 h-full overflow-hidden">
          <iframe
            src={`${brochureUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-0"
            title={`${title} Brochure PDF`}
            loading="lazy"
          />
        </div>

        <div className="px-6 py-3 bg-gray-50 text-sm text-gray-600 text-center">
          For the full experience, please contact our sales team
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureModal;
