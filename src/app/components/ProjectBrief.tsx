import React from 'react';
export function ProjectBrief() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Overview */}
          <div>
            <h2 className="text-4xl mb-8">Project Brief</h2>
            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              The Meridian Residences represents a pinnacle of contemporary luxury living, 
              encompassing 45,000 square feet of meticulously designed spaces. Our vision 
              was to create an environment that seamlessly blends sophisticated elegance 
              with functional comfort, catering to the discerning tastes of modern urban dwellers.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              Through thoughtful curation of materials, textures, and spatial planning, we 
              crafted an atmosphere of refined tranquility that serves as both a sanctuary 
              and a statement of architectural excellence.
            </p>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div className="border-l-2 border-neutral-900 pl-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Client</h3>
              <p className="text-xl">Meridian Property Group</p>
            </div>

            <div className="border-l-2 border-neutral-900 pl-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Location</h3>
              <p className="text-xl">Manhattan, New York</p>
            </div>

            <div className="border-l-2 border-neutral-900 pl-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Completion</h3>
              <p className="text-xl">January 2026</p>
            </div>

            <div className="border-l-2 border-neutral-900 pl-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Scope</h3>
              <p className="text-xl">45,000 sq ft</p>
              <p className="text-neutral-600 mt-2">
                Interior Architecture, FF&E, Custom Millwork, Art Curation
              </p>
            </div>

            <div className="border-l-2 border-neutral-900 pl-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Awards</h3>
              <p className="text-xl">Best Residential Design 2026</p>
              <p className="text-neutral-600 mt-1">American Society of Interior Designers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
