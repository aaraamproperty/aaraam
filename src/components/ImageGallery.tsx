import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: string;
  thumb: string;
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  downloadUrl?: string;
}

const ImageGallery = ({ images, title = "Gallery", downloadUrl }: ImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Prefetch next image
  useEffect(() => {
    if (isOpen && images[currentIndex + 1]) {
      const img = new Image();
      img.src = images[currentIndex + 1].src;
    }
  }, [currentIndex, isOpen, images]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    },
    [isOpen, currentIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus trap: focus close button when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Return focus to the thumbnail that was clicked
    setTimeout(() => thumbnailRefs.current[currentIndex]?.focus(), 100);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleDownloadGallery = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004861]">
            {title}
          </h2>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <button
              key={image.id}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              onClick={() => openModal(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-103 focus:outline-none focus:ring-4 focus:ring-[#16A34A] focus:ring-offset-2"
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.thumb}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            onClick={handleOverlayClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              ref={closeBtnRef}
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            )}

            {/* Main Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                id="lightbox-title"
              />
            </motion.div>

            {/* Thumbnail Strip (Optional) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full max-w-[90vw] overflow-x-auto scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white ${
                    index === currentIndex
                      ? "border-white scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                >
                  <img
                    src={image.thumb}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hover\\:scale-103:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;
