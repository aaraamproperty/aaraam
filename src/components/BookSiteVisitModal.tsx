import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone, User, Mail } from "lucide-react";
import { useState } from "react";

interface BookSiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookSiteVisitModal = ({ isOpen, onClose }: BookSiteVisitModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon to confirm your site visit.");
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-3xl border-none max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#004861]">
            Book a Site Visit
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Fill in your details and we'll arrange a personalized property tour
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#004861] flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#004861] flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#004861] flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#004861] flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Preferred Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7]"
              >
                <option value="">Select city</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#004861] flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#004861]">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-[#F7F7F7] resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 rounded-full border-[#004861] text-[#004861] hover:bg-[#F7F7F7]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#16A34A] hover:bg-[#16A34A]/90 text-white rounded-full"
            >
              Book Visit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookSiteVisitModal;
