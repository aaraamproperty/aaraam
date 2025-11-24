import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BookSiteVisitModal from "@/components/BookSiteVisitModal";
import { Button } from "@/components/ui/button";
import {
  Search,
  Grid3x3,
  Map as MapIcon,
  MapPin,
  Building2,
  Home,
  X,
  ChevronDown,
  SlidersHorizontal,
  Filter,
} from "lucide-react";
import { useState, useEffect } from "react";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";
import heroImage from "@/assets/hero-commercial.jpg";

// Property interface
interface Property {
  id: number;
  image: string;
  name: string;
  location: string;
  price: string;
  area: string;
  type: "Residential" | "Commercial";
  category: string;
  status: "Under Construction" | "Ready to Move" | "Ready to Live In";
  bhk?: string;
  summary: string;
}

const Properties = () => {
  // Touch device detection
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Hover state management for filter panel
  const [isFilterHovered, setIsFilterHovered] = useState(false);
  const [closeTimerRef, setCloseTimerRef] = useState<NodeJS.Timeout | null>(
    null
  );

  // Individual dropdown hover states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimers, setDropdownTimers] = useState<
    Map<string, NodeJS.Timeout>
  >(new Map());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Complete property dataset
  const properties: Property[] = [
    {
      id: 1,
      image: officeImage,
      name: "Premium Office Space - BKC",
      location: "Bandra Kurla Complex, Mumbai",
      price: "₹2.5 Cr onwards",
      area: "2500 sq.ft",
      type: "Commercial",
      category: "Office Space",
      status: "Ready to Move",
      summary:
        "Premium Grade-A office space in Mumbai's premier business district",
    },
    {
      id: 2,
      image: retailImage,
      name: "Retail Shop - Phoenix Mall",
      location: "Lower Parel, Mumbai",
      price: "₹1.8 Cr onwards",
      area: "1200 sq.ft",
      type: "Commercial",
      category: "Retail Shop",
      status: "Ready to Move",
      summary: "High-footfall retail space in premium mall location",
    },
    {
      id: 3,
      image: officeImage,
      name: "Corporate Office - Cyber City",
      location: "Gurgaon, Delhi NCR",
      price: "₹3.2 Cr onwards",
      area: "3500 sq.ft",
      type: "Commercial",
      category: "Office Space",
      status: "Under Construction",
      summary: "Modern corporate office with state-of-the-art amenities",
    },
    {
      id: 4,
      image: retailImage,
      name: "Showroom Space - MG Road",
      location: "Bangalore",
      price: "₹2 Cr onwards",
      area: "1800 sq.ft",
      type: "Commercial",
      category: "Showroom",
      status: "Ready to Move",
      summary: "Prime showroom space on Bangalore's busiest commercial street",
    },
    {
      id: 5,
      image: officeImage,
      name: "Luxury Residences - Worli",
      location: "Worli, Mumbai",
      price: "₹4.5 Cr onwards",
      area: "2200 sq.ft",
      type: "Residential",
      category: "Apartment",
      status: "Under Construction",
      bhk: "3 BHK",
      summary: "Sea-facing luxury apartments with world-class amenities",
    },
    {
      id: 6,
      image: retailImage,
      name: "Urban Homes - Whitefield",
      location: "Whitefield, Bangalore",
      price: "₹1.2 Cr onwards",
      area: "1450 sq.ft",
      type: "Residential",
      category: "Apartment",
      status: "Ready to Live In",
      bhk: "2 BHK",
      summary: "Modern apartments in IT hub with excellent connectivity",
    },
    {
      id: 7,
      image: officeImage,
      name: "Business Park - MIDC",
      location: "Andheri, Mumbai",
      price: "₹5 Cr onwards",
      area: "5000 sq.ft",
      type: "Commercial",
      category: "Business Park",
      status: "Ready to Move",
      summary: "Complete business park solution with parking and amenities",
    },
    {
      id: 8,
      image: retailImage,
      name: "Garden Villas - Chattarpur",
      location: "Chattarpur, Delhi",
      price: "₹6.5 Cr onwards",
      area: "3500 sq.ft",
      type: "Residential",
      category: "Villa",
      status: "Under Construction",
      bhk: "4 BHK",
      summary: "Spacious villas with private gardens and premium lifestyle",
    },
  ];

  // State management
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Enhanced filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    "ALL" | "Residential" | "Commercial"
  >("ALL");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedBHK, setSelectedBHK] = useState("All BHK");
  const [selectedBudget, setSelectedBudget] = useState("All Budget");
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);

  // Search bar focus state
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Handle search clear
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by useEffect
  };

  // Detect touch device and motion preference on mount
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          (navigator as any).msMaxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener("touchstart", checkTouch, { once: true });

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      window.removeEventListener("touchstart", checkTouch);
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside all filter rows
      if (!target.closest(".filter-row")) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openDropdown]);

  // Hover panel handlers
  const handleFilterMouseEnter = () => {
    if (isTouchDevice) return; // Disable hover on touch devices
    if (closeTimerRef) {
      clearTimeout(closeTimerRef);
      setCloseTimerRef(null);
    }
    setShowMoreFilters(true);
    setIsFilterHovered(true);
  };

  const handleFilterMouseLeave = () => {
    if (isTouchDevice) return;
    const timer = setTimeout(() => {
      setShowMoreFilters(false);
      setIsFilterHovered(false);
    }, 250); // 250ms debounce
    setCloseTimerRef(timer);
  };

  const handlePanelMouseEnter = () => {
    if (isTouchDevice) return;
    if (closeTimerRef) {
      clearTimeout(closeTimerRef);
      setCloseTimerRef(null);
    }
  };

  const handlePanelMouseLeave = () => {
    if (isTouchDevice) return;
    const timer = setTimeout(() => {
      setShowMoreFilters(false);
      setIsFilterHovered(false);
    }, 250);
    setCloseTimerRef(timer);
  };

  // Keyboard handler for filter button
  const handleFilterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowMoreFilters(!showMoreFilters);
    } else if (e.key === "Escape" && showMoreFilters) {
      setShowMoreFilters(false);
    }
  };

  // Individual dropdown handlers
  const handleDropdownMouseEnter = (dropdownId: string) => {
    if (isTouchDevice) return;

    // Clear any pending close timer for this dropdown
    const timers = dropdownTimers;
    if (timers.has(dropdownId)) {
      clearTimeout(timers.get(dropdownId));
      timers.delete(dropdownId);
    }

    // Close any other open dropdown before opening this one
    if (openDropdown && openDropdown !== dropdownId) {
      setOpenDropdown(null);
      // Small delay before opening new dropdown for smooth transition
      setTimeout(() => setOpenDropdown(dropdownId), 50);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  const handleDropdownMouseLeave = (dropdownId: string) => {
    if (isTouchDevice) return;

    const timer = setTimeout(() => {
      setOpenDropdown(null);
    }, 250); // 250ms debounce

    const timers = new Map(dropdownTimers);
    timers.set(dropdownId, timer);
    setDropdownTimers(timers);
  };

  const handleDropdownToggle = (dropdownId: string) => {
    if (isTouchDevice) {
      setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    }
  };

  const handleDropdownKeyDown = (
    e: React.KeyboardEvent,
    dropdownId: string
  ) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpenDropdown(null);
      // Return focus to the select element
      setTimeout(() => {
        e.currentTarget.querySelector("select")?.focus();
      }, 0);
    } else if (e.key === "Enter" || e.key === "ArrowDown") {
      // Open dropdown on Enter or Down arrow
      if (openDropdown !== dropdownId) {
        e.preventDefault();
        setOpenDropdown(dropdownId);
        // Focus the select to show options
        setTimeout(() => {
          const select = e.currentTarget.querySelector(
            "select"
          ) as HTMLSelectElement;
          if (select) {
            select.focus();
            // Programmatically open the select dropdown
            if (!isTouchDevice) {
              select.click();
            }
          }
        }, 0);
      }
    }
  };

  // Apply filters with real-time updates
  useEffect(() => {
    let filtered = properties;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.summary.toLowerCase().includes(query)
      );
    }

    // Region filter
    if (selectedRegion !== "ALL") {
      filtered = filtered.filter((p) => p.location.includes(selectedRegion));
    }

    // Property type filter
    if (selectedPropertyType !== "ALL") {
      filtered = filtered.filter((p) => p.type === selectedPropertyType);
    }

    // Status filter
    if (selectedStatus !== "All Status") {
      filtered = filtered.filter((p) => p.status === selectedStatus);
    }

    // BHK filter
    if (selectedBHK !== "All BHK" && selectedBHK !== "All") {
      filtered = filtered.filter((p) => p.bhk?.includes(selectedBHK));
    }

    // Budget filter
    if (selectedBudget !== "All Budget") {
      const budgetValue = (price: string) => {
        const match = price.match(/[\d.]+/);
        return match ? parseFloat(match[0]) : 0;
      };

      switch (selectedBudget) {
        case "Under ₹2 Cr":
          filtered = filtered.filter((p) => budgetValue(p.price) < 2);
          break;
        case "₹2 - ₹4 Cr":
          filtered = filtered.filter(
            (p) => budgetValue(p.price) >= 2 && budgetValue(p.price) < 4
          );
          break;
        case "₹4 - ₹6 Cr":
          filtered = filtered.filter(
            (p) => budgetValue(p.price) >= 4 && budgetValue(p.price) < 6
          );
          break;
        case "Above ₹6 Cr":
          filtered = filtered.filter((p) => budgetValue(p.price) >= 6);
          break;
      }
    }

    setFilteredProperties(filtered);
  }, [
    searchQuery,
    selectedRegion,
    selectedPropertyType,
    selectedStatus,
    selectedBHK,
    selectedBudget,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedRegion("ALL");
    setSelectedPropertyType("ALL");
    setSelectedStatus("All Status");
    setSelectedBHK("All BHK");
    setSelectedBudget("All Budget");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />
      <BookSiteVisitModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />

      {/* Hero Section with Background Image - Clean Version */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Commercial Properties"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#004861]/90" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projects Across India
          </h1>
          <p className="text-white/90 text-base md:text-lg">
            Disclaimer: Prices shown below are inclusive of GST & extra charges
          </p>
        </div>
      </section>

      {/* Properties Title Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004861] mb-2">
            Premium Properties
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our curated selection of premium developments
          </p>
        </div>
      </section>

      {/* Temporarily hidden search section - can be restored later */}
      <div className="hidden">
        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.15)]">
            {/* Search Input Container */}
            <form onSubmit={handleSearchSubmit} className="mb-6">
              <div
                className={`
                  relative flex items-center gap-3
                  h-14 md:h-14 lg:h-14
                  bg-white rounded-[28px]
                  border transition-all duration-150 ease-out
                  shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                  ${
                    isSearchFocused
                      ? "border-[#16A34A] border-2 shadow-[0_8px_24px_rgba(22,163,74,0.12)]"
                      : "border-[#E6E9EA]"
                  }
                `}
                role="search"
              >
                {/* Search Icon */}
                <button
                  type="submit"
                  className="flex items-center justify-center w-11 h-11 ml-1.5 rounded-full text-muted-foreground hover:text-[#16A34A] transition-colors duration-200"
                  aria-label="Submit search"
                >
                  <Search className="h-5 w-5" />
                </button>

                {/* Search Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Property name or location..."
                  className="flex-1 h-full bg-transparent text-base md:text-base text-foreground placeholder:text-[rgba(0,0,0,0.38)] focus:outline-none pr-12"
                  aria-label="Search properties by name or location"
                  autoComplete="off"
                />

                {/* Clear Button */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="flex items-center justify-center w-11 h-11 mr-1.5 rounded-full text-muted-foreground hover:text-[#16A34A] hover:bg-muted transition-all duration-200"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </form>

            {/* Property Type Tabs */}
            <div className="flex items-center gap-6 border-t border-[#E6E9EA] pt-6 overflow-x-auto">
              <button
                onClick={() => setSelectedPropertyType("ALL")}
                className={`
                  relative pb-2 text-sm md:text-base font-semibold transition-all whitespace-nowrap
                  ${
                    selectedPropertyType === "ALL"
                      ? "text-[#16A34A]"
                      : "text-muted-foreground hover:text-[#16A34A]"
                  }
                `}
                aria-label="Show all properties"
                aria-pressed={selectedPropertyType === "ALL"}
              >
                ALL
                {selectedPropertyType === "ALL" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A] rounded-full" />
                )}
              </button>
              <button
                onClick={() => setSelectedPropertyType("Residential")}
                className={`
                  relative pb-2 text-sm md:text-base font-semibold transition-all whitespace-nowrap
                  ${
                    selectedPropertyType === "Residential"
                      ? "text-[#16A34A]"
                      : "text-muted-foreground hover:text-[#16A34A]"
                  }
                `}
                aria-label="Show residential properties"
                aria-pressed={selectedPropertyType === "Residential"}
              >
                RESIDENTIAL
                {selectedPropertyType === "Residential" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A] rounded-full" />
                )}
              </button>
              <button
                onClick={() => setSelectedPropertyType("Commercial")}
                className={`
                  relative pb-2 text-sm md:text-base font-semibold transition-all whitespace-nowrap
                  ${
                    selectedPropertyType === "Commercial"
                      ? "text-[#16A34A]"
                      : "text-muted-foreground hover:text-[#16A34A]"
                  }
                `}
                aria-label="Show commercial properties"
                aria-pressed={selectedPropertyType === "Commercial"}
              >
                COMMERCIAL
                {selectedPropertyType === "Commercial" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A] rounded-full" />
                )}
              </button>

              {/* Utility buttons placeholder - can be restored */}
              <div className="ml-auto flex items-center gap-3 has-utility-buttons">
                {/* Grid/Map toggle - Currently hidden, can be restored by uncommenting */}
                {/* <Button variant="outline" size="sm">GRID</Button> */}

                {/* More Filters - Hover-enabled with click fallback */}
                <div
                  className="relative"
                  onMouseEnter={handleFilterMouseEnter}
                  onMouseLeave={handleFilterMouseLeave}
                >
                  <Button
                    id="filtersBtn"
                    onClick={() => setShowMoreFilters(!showMoreFilters)}
                    onKeyDown={handleFilterKeyDown}
                    variant="outline"
                    size="sm"
                    className={`
                      transition-all 
                      ${
                        showMoreFilters
                          ? "bg-[#16A34A] text-white border-[#16A34A] hover:bg-[#16A34A]/90"
                          : "hover:border-[#16A34A] hover:text-[#16A34A]"
                      }
                    `}
                    aria-label="Toggle additional filters"
                    aria-expanded={showMoreFilters}
                    aria-haspopup="true"
                    aria-controls="filtersPanel"
                    tabIndex={0}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    FILTERS
                  </Button>
                </div>
              </div>
            </div>

            {/* Expanded Filters Panel */}
            <div
              id="filtersPanel"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showMoreFilters
                  ? "max-h-[500px] opacity-100 mt-6"
                  : "max-h-0 opacity-0 mt-0"
              }`}
              role="dialog"
              aria-label="Additional filters"
              aria-hidden={!showMoreFilters}
              onMouseEnter={handlePanelMouseEnter}
              onMouseLeave={handlePanelMouseLeave}
            >
              <div className="pt-6 border-t border-[#E6E9EA]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Project Status */}
                  <div
                    className="filter-row relative pb-3.5"
                    onMouseEnter={() => handleDropdownMouseEnter("status")}
                    onMouseLeave={() => handleDropdownMouseLeave("status")}
                    onKeyDown={(e) => handleDropdownKeyDown(e, "status")}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Status
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle("status")}
                        className="w-full px-[18px] py-3 border border-[#E6E9EA] rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all cursor-pointer text-left"
                        aria-label="Filter by project status"
                        aria-expanded={openDropdown === "status"}
                        tabIndex={0}
                      >
                        {selectedStatus}
                      </button>
                      <ChevronDown
                        className={`absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none transition-transform ${
                          openDropdown === "status" ? "rotate-180" : ""
                        } ${
                          prefersReducedMotion
                            ? ""
                            : "duration-240 ease-[cubic-bezier(0.22,0.9,0.35,1)]"
                        }`}
                      />

                      {/* Custom Dropdown */}
                      {openDropdown === "status" && (
                        <div
                          className={`absolute top-full left-0 right-0 mt-1 bg-white border border-[#E6E9EA] rounded-lg shadow-lg overflow-hidden z-50 ${
                            prefersReducedMotion
                              ? ""
                              : "animate-in fade-in slide-in-from-top-2 duration-200"
                          }`}
                          onMouseEnter={() =>
                            handleDropdownMouseEnter("status")
                          }
                          onMouseLeave={() =>
                            handleDropdownMouseLeave("status")
                          }
                        >
                          {[
                            "All Status",
                            "Under Construction",
                            "Ready to Move",
                            "Ready to Live In",
                          ].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setSelectedStatus(option);
                                setOpenDropdown(null);
                              }}
                              className={`w-full px-[18px] py-3 text-left hover:bg-[#16A34A]/10 transition-colors ${
                                selectedStatus === option
                                  ? "bg-[#16A34A]/5 text-[#16A34A] font-medium"
                                  : "text-foreground"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BHK Configuration */}
                  <div
                    className="filter-row relative pb-3.5"
                    onMouseEnter={() => handleDropdownMouseEnter("bhk")}
                    onMouseLeave={() => handleDropdownMouseLeave("bhk")}
                    onKeyDown={(e) => handleDropdownKeyDown(e, "bhk")}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      BHK
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle("bhk")}
                        className="w-full px-[18px] py-3 border border-[#E6E9EA] rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all cursor-pointer text-left"
                        aria-label="Filter by BHK"
                        aria-expanded={openDropdown === "bhk"}
                        tabIndex={0}
                      >
                        {selectedBHK}
                      </button>
                      <ChevronDown
                        className={`absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none transition-transform ${
                          openDropdown === "bhk" ? "rotate-180" : ""
                        } ${
                          prefersReducedMotion
                            ? ""
                            : "duration-240 ease-[cubic-bezier(0.22,0.9,0.35,1)]"
                        }`}
                      />

                      {/* Custom Dropdown */}
                      {openDropdown === "bhk" && (
                        <div
                          className={`absolute top-full left-0 right-0 mt-1 bg-white border border-[#E6E9EA] rounded-lg shadow-lg overflow-hidden z-50 ${
                            prefersReducedMotion
                              ? ""
                              : "animate-in fade-in slide-in-from-top-2 duration-200"
                          }`}
                          onMouseEnter={() => handleDropdownMouseEnter("bhk")}
                          onMouseLeave={() => handleDropdownMouseLeave("bhk")}
                        >
                          {["All BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map(
                            (option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setSelectedBHK(option);
                                  setOpenDropdown(null);
                                }}
                                className={`w-full px-[18px] py-3 text-left hover:bg-[#16A34A]/10 transition-colors ${
                                  selectedBHK === option
                                    ? "bg-[#16A34A]/5 text-[#16A34A] font-medium"
                                    : "text-foreground"
                                }`}
                              >
                                {option}
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Approximate Budget */}
                  <div
                    className="filter-row relative pb-3.5"
                    onMouseEnter={() => handleDropdownMouseEnter("budget")}
                    onMouseLeave={() => handleDropdownMouseLeave("budget")}
                    onKeyDown={(e) => handleDropdownKeyDown(e, "budget")}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Approximate Budget
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle("budget")}
                        className="w-full px-[18px] py-3 border border-[#E6E9EA] rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all cursor-pointer text-left"
                        aria-label="Filter by budget"
                        aria-expanded={openDropdown === "budget"}
                        tabIndex={0}
                      >
                        {selectedBudget}
                      </button>
                      <ChevronDown
                        className={`absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none transition-transform ${
                          openDropdown === "budget" ? "rotate-180" : ""
                        } ${
                          prefersReducedMotion
                            ? ""
                            : "duration-240 ease-[cubic-bezier(0.22,0.9,0.35,1)]"
                        }`}
                      />

                      {/* Custom Dropdown */}
                      {openDropdown === "budget" && (
                        <div
                          className={`absolute top-full left-0 right-0 mt-1 bg-white border border-[#E6E9EA] rounded-lg shadow-lg overflow-hidden z-50 ${
                            prefersReducedMotion
                              ? ""
                              : "animate-in fade-in slide-in-from-top-2 duration-200"
                          }`}
                          onMouseEnter={() =>
                            handleDropdownMouseEnter("budget")
                          }
                          onMouseLeave={() =>
                            handleDropdownMouseLeave("budget")
                          }
                        >
                          {[
                            "All Budget",
                            "Under ₹2 Cr",
                            "₹2 - ₹4 Cr",
                            "₹4 - ₹6 Cr",
                            "Above ₹6 Cr",
                          ].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setSelectedBudget(option);
                                setOpenDropdown(null);
                              }}
                              className={`w-full px-[18px] py-3 text-left hover:bg-[#16A34A]/10 transition-colors ${
                                selectedBudget === option
                                  ? "bg-[#16A34A]/5 text-[#16A34A] font-medium"
                                  : "text-foreground"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Reset Button - White/Green Style */}
                  <div className="flex items-end pb-3.5">
                    <Button
                      onClick={resetFilters}
                      className="w-full bg-white text-[#16A34A] border-2 border-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all shadow-md h-[48px]"
                      aria-label="Reset all filters"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Reset Filters
                    </Button>
                  </div>
                </div>

                {/* Close button for touch devices */}
                {isTouchDevice && (
                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={() => setShowMoreFilters(false)}
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Close filters panel"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Close
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 border-b border-border bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <p
            className="text-sm text-muted-foreground"
            aria-live="polite"
            aria-atomic="true"
          >
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProperties.length}
            </span>{" "}
            {filteredProperties.length === 1 ? "property" : "properties"}
            {(searchQuery ||
              selectedRegion !== "ALL" ||
              selectedPropertyType !== "ALL" ||
              selectedStatus !== "All Status" ||
              selectedBHK !== "All BHK" ||
              selectedBudget !== "All Budget") && (
              <span> matching your criteria</span>
            )}
          </p>
        </div>
      </section>

      {/* Properties Grid/Map */}
      <section className="py-12 bg-background" id="main-content">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                No properties found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results
              </p>
              <Button
                onClick={resetFilters}
                className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white"
                aria-label="Reset filters to show all properties"
              >
                Reset All Filters
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property, index) => (
                <article
                  key={property.id}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:border-[#16A34A] transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] animate-fade-in"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                  onMouseEnter={() => setHoveredCard(property.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onFocus={() => setHoveredCard(property.id)}
                  onBlur={() => setHoveredCard(null)}
                  tabIndex={0}
                  role="article"
                  aria-label={`${property.name} property card`}
                >
                  {/* Image Container with Enhanced Hover Animation */}
                  <div className="relative overflow-hidden bg-muted h-56">
                    <img
                      src={property.image}
                      alt={`${property.name} - ${property.location}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-[360ms] will-change-transform"
                      style={{
                        transform:
                          hoveredCard === property.id
                            ? "scale(1.06)"
                            : "scale(1.02)",
                        transitionTimingFunction:
                          "cubic-bezier(0.22, 0.9, 0.35, 1)",
                      }}
                    />
                    {/* Image Overlay with Fade Effect */}
                    <div
                      className="absolute inset-0 bg-[#004861] transition-opacity duration-[280ms] ease-in-out pointer-events-none"
                      style={{
                        opacity: hoveredCard === property.id ? 0 : 0.18,
                      }}
                    />
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          property.status === "Ready to Move" ||
                          property.status === "Ready to Live In"
                            ? "bg-[#16A34A] text-white"
                            : "bg-[#16A34A] text-white"
                        }`}
                      >
                        {property.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="font-bold text-lg text-[#004861] mb-2 line-clamp-1 group-hover:text-[#16A34A] transition-colors">
                      {property.name}
                    </h3>

                    {/* BHK/Category Tag */}
                    {property.bhk ? (
                      <p className="text-sm font-semibold text-foreground mb-2">
                        {property.bhk}
                      </p>
                    ) : (
                      <p className="text-sm font-semibold text-foreground mb-2">
                        {property.category}
                      </p>
                    )}

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
                      {property.summary}
                    </p>

                    {/* Price */}
                    <p className="text-lg font-bold text-[#16A34A] mb-3">
                      {property.price}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="line-clamp-1">{property.location}</span>
                    </div>

                    {/* CTA Buttons - Fade Up on Hover */}
                    <div
                      className="flex gap-2 transition-all duration-[280ms] ease-in-out will-change-transform"
                      style={{
                        opacity: hoveredCard === property.id ? 1 : 0,
                        transform:
                          hoveredCard === property.id
                            ? "translateY(0)"
                            : "translateY(6px)",
                      }}
                    >
                      <Button
                        onClick={() => setShowBookingModal(true)}
                        className="flex-1 bg-[#16A34A] hover:bg-[#16A34A]/90 text-white text-sm py-2"
                        aria-label={`View details for ${property.name}`}
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => setShowBookingModal(true)}
                        variant="outline"
                        className="flex-1 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white text-sm py-2"
                        aria-label={`Enquire about ${property.name}`}
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Map View */
            <div className="bg-card rounded-lg p-12 border border-border text-center min-h-[600px] flex flex-col items-center justify-center">
              <MapIcon className="h-20 w-20 text-[#16A34A] mb-6" />
              <h3 className="text-2xl font-bold text-[#004861] mb-3">
                Interactive Map View
              </h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Explore properties on an interactive map. This feature
                integrates with mapping services to show exact property
                locations with pins and quick info cards.
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-8 max-w-2xl w-full">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Map Integration Ready:</strong> Connect your preferred
                  mapping service (Google Maps, Mapbox, etc.) to display{" "}
                  {filteredProperties.length} properties with interactive
                  markers.
                </p>
                <Button
                  onClick={() => setViewMode("grid")}
                  variant="outline"
                  className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white"
                  aria-label="Switch back to grid view"
                >
                  <Grid3x3 className="mr-2 h-4 w-4" />
                  Back to Grid View
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004861] mb-4">
            Find Your Perfect Property Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert guidance for residential and commercial properties across
            India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowBookingModal(true)}
              className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              aria-label="Schedule a property site visit"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Book Site Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Accessibility: Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#16A34A] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Properties;
