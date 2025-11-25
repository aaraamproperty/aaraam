import { useEffect, useRef, useState } from "react";
import { X, Download, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureUrl: string;
  title: string;
}

interface FormData {
  name: string;
  mobile: string;
  email: string;
  company: string;
  interest: string;
  budgetRange: string;
  consent: boolean;
}

const BrochureModal = ({ isOpen, onClose, brochureUrl, title }: BrochureModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    company: "",
    interest: "office",
    budgetRange: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Hide chatbot when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('data-brochure-open', 'true');
    } else {
      document.body.removeAttribute('data-brochure-open');
    }
    return () => {
      document.body.removeAttribute('data-brochure-open');
    };
  }, [isOpen]);

  // Prevent printing and saving via keyboard shortcuts
  // LIMITATION: This is a deterrent, not foolproof security
  // - Users can still print via browser menu (File > Print)
  // - Tech-savvy users can bypass via DevTools or browser extensions
  // - Screenshots and screen recording are still possible
  // - True protection requires server-side DRM or watermarking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Escape to close (keep existing functionality)
      if (e.key === "Escape") {
        onClose();
        return;
      }
      
      // Block Ctrl+P / Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        e.stopPropagation();
        console.log('Print shortcut blocked');
        return false;
      }
      
      // Block Ctrl+S / Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        e.stopPropagation();
        console.log('Save shortcut blocked');
        return false;
      }
    };

    // Add listener with capture phase for better coverage
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    document.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [isOpen, onClose]);

  // Track brochure view for analytics
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'brochure_view', {
        event_category: 'Property Brochure',
        event_label: title,
        value: brochureUrl
      });
    }
  }, [isOpen, title, brochureUrl]);

  // Show download form immediately when download button is clicked (removed auto-trigger)
  // useEffect(() => {
  //   if (isOpen && !formSubmitted) {
  //     const timer = setTimeout(() => {
  //       setShowDownloadForm(true);
  //     }, 20000); // 20 seconds
  //
  //     return () => clearTimeout(timer);
  //   }
  // }, [isOpen, formSubmitted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form (email is now optional)
    if (!formData.name || !formData.mobile || !formData.consent) {
      alert("Please fill all required fields and accept the consent.");
      setIsSubmitting(false);
      return;
    }

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Brochure Download',
        event_label: title,
        form_data: {
          interest: formData.interest,
          budget_range: formData.budgetRange
        }
      });
    }

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Track download event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'brochure_download', {
        event_category: 'Property Brochure',
        event_label: title,
        value: brochureUrl
      });
    }

    setFormSubmitted(true);
    setIsSubmitting(false);

    // Trigger download
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = `${title.replace(/\s+/g, '-')}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Auto-close form after download
    setTimeout(() => {
      setShowDownloadForm(false);
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden [&>button]:hidden"
        aria-describedby="brochure-description"
      >
        <DialogHeader className="px-4 py-3 border-b bg-white">
          <DialogTitle className="text-lg font-bold text-[#004861] flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {title} - Brochure
            </span>
            <div className="flex items-center gap-2">
              {!formSubmitted && (
                <Button
                  onClick={() => setShowDownloadForm(true)}
                  variant="outline"
                  size="sm"
                  className="border-[#004861] text-[#004861] hover:bg-[#004861] hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              )}
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                aria-label="Close brochure"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div id="brochure-description" className="sr-only">
          PDF brochure viewer for {title}. Use Escape key to close.
        </div>

        {/* 
          Brochure Protection Container
          - Disables right-click context menu (prevents "Save as", "Print", "Rotate", etc.)
          - Hidden during print via CSS (@media print in index.css)
          - Prevents drag-and-drop saving
          - Keyboard shortcuts blocked via useEffect above
          
          LIMITATIONS: This is a deterrent layer, not bulletproof security
          - Tech-savvy users can access via DevTools, network tab, or browser extensions
          - Screenshots and screen recording are still possible
          - Direct URL access (if known) bypasses all protections
          - Browser's File > Print menu still accessible (but content hidden via CSS)
          - True document security requires server-side DRM, dynamic watermarking, or streaming
        */}
        <div 
          className="flex-1 h-[calc(95vh-120px)] overflow-hidden relative bg-gray-900 no-print-brochure"
          onContextMenu={(e) => {
            // Disable right-click context menu
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
          onDragStart={(e) => {
            // Prevent dragging the PDF element
            e.preventDefault();
            return false;
          }}
          onMouseDown={(e) => {
            // Prevent right-click at mouse down level
            if (e.button === 2) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
          }}
        >
          {/* PDF Viewer using object/embed for better compatibility */}
          <object
            data={`${brochureUrl}#toolbar=0`}
            type="application/pdf"
            className="w-full h-full border-0"
            aria-label={`${title} Brochure PDF`}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }}
          >
            <embed
              src={`${brochureUrl}#toolbar=0`}
              type="application/pdf"
              className="w-full h-full border-0"
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                return false;
              }}
            />
            {/* Fallback if PDF cannot be displayed */}
            <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8">
              <FileText className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4 text-center">
                Unable to display PDF in browser.
              </p>
              <Button
                onClick={() => setShowDownloadForm(true)}
                className="bg-[#004861] hover:bg-[#003449] text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>
          </object>

          {/* Download Form Overlay */}
          {showDownloadForm && !formSubmitted && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 p-4 overflow-y-auto">
              <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#004861] flex items-center gap-2">
                    <Download className="h-6 w-6" />
                    DOWNLOAD BROCHURE
                  </h3>
                  <button
                    onClick={() => setShowDownloadForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="h-12 text-base"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12 focus-within:ring-2 focus-within:ring-[#004861] focus-within:border-[#004861]">
                      <div className="flex items-center gap-1 px-3 border-r border-gray-300 bg-gray-50">
                        <span className="text-2xl">🇮🇳</span>
                        <span className="text-sm font-medium">+91</span>
                      </div>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        pattern="[0-9]{10}"
                        className="flex-1 px-3 text-base outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email (Optional)"
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, consent: checked as boolean }))
                      }
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                      I Consent to The Processing of Provided Data According To{' '}
                      <span className="text-[#004861] underline">Privacy Policy</span> |{' '}
                      <span className="text-[#004861] underline">Terms & Conditions</span>, I Authorize 
                      Propertypistol Realty Private Limited and Its representatives to Call, SMS, Email or 
                      WhatsApp Me About Its Products and Offers. This Consent Overrides Any Registration For 
                      DNC/NDNC.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#004861] hover:bg-[#003449] text-white h-12 text-base font-semibold rounded-full"
                  >
                    {isSubmitting ? "Processing..." : "Start Download"}
                  </Button>
                </form>
              </div>
            </div>
          )}

          {/* Success Message */}
          {formSubmitted && showDownloadForm && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl text-center">
                <div className="mb-4 text-green-600">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004861] mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your brochure download is ready. We've also emailed a copy for your reference. Our team will connect shortly to tailor options for you.
                </p>
                <Button
                  onClick={() => setShowDownloadForm(false)}
                  className="bg-[#004861] hover:bg-[#003449] text-white"
                >
                  Continue Viewing
                </Button>
              </div>
            </div>
          )}
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default BrochureModal;
