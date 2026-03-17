import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageGalleryModal } from './ImageGalleryModal';
import { CommonSpaceData } from '../data/projects';

interface CommonSpacesProps {
  spaces: CommonSpaceData[];
}

export function CommonSpaces({ spaces }: CommonSpacesProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  if (!spaces || spaces.length === 0) return null;

  const handleOpenGallery = (image: string, gallery?: string[]) => {
    const fullGallery = [image, ...(gallery || [])];
    if (fullGallery.length > 0) {
      setCurrentGallery(fullGallery);
      setInitialIndex(0);
      setModalOpen(true);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl mb-4">Major Spaces</h2>
          <p className="text-lg text-neutral-400">
            Signature spaces showcasing refined design and exceptional craftsmanship
          </p>
        </div>

        {/* First row - Large image */}
        <div className="mb-8">
          <div 
            className={`relative aspect-[21/9] overflow-hidden mb-4 bg-neutral-800 group ${spaces[0].gallery && spaces[0].gallery.length > 0 ? 'cursor-pointer' : ''}`}
            onClick={() => spaces[0].gallery && spaces[0].gallery.length > 0 && handleOpenGallery(spaces[0].image, spaces[0].gallery)}
          >
            <ImageWithFallback
              src={spaces[0].image}
              alt={spaces[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {spaces[0].gallery && spaces[0].gallery.length > 0 && (
               <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 VIEW GALLERY
               </div>
            )}
          </div>
          <div className="flex justify-between items-start">
            <h3 className="text-3xl">{spaces[0].title}</h3>
            <p className="text-neutral-400 text-right">{spaces[0].details}</p>
          </div>
        </div>

        {/* Second row - Two medium images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {spaces.slice(1, 3).map((space, index) => {
            const hasGallery = space.gallery && space.gallery.length > 0;
            return (
              <div key={index} className="group">
                <div 
                  className={`relative aspect-[4/3] overflow-hidden mb-4 bg-neutral-800 ${hasGallery ? 'cursor-pointer' : ''}`}
                  onClick={() => hasGallery && handleOpenGallery(space.image, space.gallery)}
                >
                  <ImageWithFallback
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {hasGallery && (
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW GALLERY
                    </div>
                  )}
                </div>
                <h3 className="text-2xl mb-2">{space.title}</h3>
                <p className="text-neutral-400 text-sm">{space.details}</p>
              </div>
            );
          })}
        </div>

        {/* Third row - Two medium images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spaces.slice(3, 5).map((space, index) => {
             const hasGallery = space.gallery && space.gallery.length > 0;
             return (
              <div key={index} className="group">
                <div 
                  className={`relative aspect-[4/3] overflow-hidden mb-4 bg-neutral-800 ${hasGallery ? 'cursor-pointer' : ''}`}
                  onClick={() => hasGallery && handleOpenGallery(space.image, space.gallery)}
                >
                  <ImageWithFallback
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {hasGallery && (
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW GALLERY
                    </div>
                  )}
                </div>
                <h3 className="text-2xl mb-2">{space.title}</h3>
                <p className="text-neutral-400 text-sm">{space.details}</p>
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
