import React, { useEffect } from 'react';

interface ImageGalleryModalProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageGalleryModal({ images, initialIndex = 0, isOpen, onClose }: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  // Reset index when opened with new images
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext(e as any);
      if (e.key === 'ArrowLeft') handlePrev(e as any);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close gallery"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Main Content Area */}
      <div 
        className="relative flex items-center justify-center w-full max-w-7xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {images.length > 1 && (
          <button 
            onClick={handlePrev}
            className="absolute left-0 lg:-left-12 p-3 text-white/50 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {/* Current Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={images[currentIndex]} 
            alt={`Gallery image ${currentIndex + 1} of ${images.length}`} 
            className="max-h-[85vh] max-w-full object-contain select-none"
            draggable="false"
          />
          
          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 tracking-widest text-sm font-mono">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button 
            onClick={handleNext}
            className="absolute right-0 lg:-right-12 p-3 text-white/50 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
