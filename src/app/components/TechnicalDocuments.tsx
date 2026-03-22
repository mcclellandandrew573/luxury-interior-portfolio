import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import { TechnicalDocumentData } from '../data/projects';
import { ImageGalleryModal } from './ImageGalleryModal';

interface TechnicalDocumentsProps {
  documents: TechnicalDocumentData[];
}

export function TechnicalDocuments({ documents }: TechnicalDocumentsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  if (!documents || documents.length === 0) return null;

  const handleDocumentClick = (doc: TechnicalDocumentData, e: React.MouseEvent) => {
    if (doc.gallery && doc.gallery.length > 0) {
      e.preventDefault();
      setCurrentGallery(doc.gallery);
      setInitialIndex(0);
      setModalOpen(true);
    } else if (doc.link) {
      // Normal anchor behavior applies if it's an <a> tag out the box
      // or window.open if it's not wrapped in one
      window.open(doc.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl mb-4">Technical Documentation</h2>
          <p className="text-lg text-neutral-600">
            Comprehensive technical documentation and specifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const hasClickAction = doc.link || (doc.gallery && doc.gallery.length > 0);
            return (
              <div
                key={index}
                onClick={(e) => hasClickAction && handleDocumentClick(doc, e)}
                className={`bg-white p-6 border border-neutral-200 transition-colors group block ${hasClickAction ? 'hover:border-neutral-900 cursor-pointer' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-neutral-100 transition-colors ${hasClickAction ? 'group-hover:bg-neutral-900' : ''}`}>
                    <FileText className={`w-6 h-6 text-neutral-900 transition-colors ${hasClickAction ? 'group-hover:text-white' : ''}`} />
                  </div>
                  {hasClickAction && <Download className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />}
                </div>
                
                <h3 className="text-xl mb-2">{doc.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{doc.description}</p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <span>{doc.pages} {doc.pages === 1 ? 'page' : 'pages'}</span>
                  <span>{doc.size}</span>
                </div>
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
