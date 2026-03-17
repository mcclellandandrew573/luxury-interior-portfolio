import React from 'react';
import { FileText, Download } from 'lucide-react';
import { TechnicalDocumentData } from '../data/projects';

interface TechnicalDocumentsProps {
  documents: TechnicalDocumentData[];
}

export function TechnicalDocuments({ documents }: TechnicalDocumentsProps) {
  if (!documents || documents.length === 0) return null;

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
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-neutral-200 hover:border-neutral-900 transition-colors group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-neutral-100 group-hover:bg-neutral-900 transition-colors">
                  <FileText className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" />
                </div>
                <Download className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              </div>
              
              <h3 className="text-xl mb-2">{doc.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{doc.description}</p>
              
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>{doc.pages} pages</span>
                <span>{doc.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
