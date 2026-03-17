import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageGalleryModal } from './ImageGalleryModal';
import { AmenityData } from '../data/projects';

interface AmenitySpacesProps {
  amenities: AmenityData[];
}

export function AmenitySpaces({ amenities }: AmenitySpacesProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  if (!amenities || amenities.length === 0) return null;

  const handleOpenGallery = (image: string, gallery?: string[]) => {
    // Determine the full list of images to show in the modal (main image first)
    const fullGallery = [image, ...(gallery || [])];
    
    // Only open the modal if we actually have multiple images to show off 
    // (or if we prefer showing single images in the modal, we can open it anyway)
    if (fullGallery.length > 0) {
      setCurrentGallery(fullGallery);
      setInitialIndex(0);
      setModalOpen(true);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl mb-4">Amenity Spaces</h2>
          <p className="text-lg text-neutral-600">
            Thoughtfully designed spaces that enhance the residential experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {amenities.map((amenity, index) => {
            const hasGallery = amenity.gallery && amenity.gallery.length > 0;
            return (
              <div 
                key={index} 
                className={`group ${hasGallery ? 'cursor-pointer' : ''}`}
                onClick={() => hasGallery && handleOpenGallery(amenity.image, amenity.gallery)}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
                  <ImageWithFallback
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {hasGallery && (
                     <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                         <circle cx="8.5" cy="8.5" r="1.5"></circle>
                         <polyline points="21 15 16 10 5 21"></polyline>
                       </svg>
                       VIEW GALLERY
                     </div>
                  )}
                </div>
                <h3 className="text-2xl mb-2">{amenity.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      <ImageGalleryModal 
        images={currentGallery}
        initialIndex={initialIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
