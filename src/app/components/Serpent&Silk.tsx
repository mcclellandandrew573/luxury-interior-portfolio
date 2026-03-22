import React from 'react';
import { ProjectData } from '../data/projects';
import { AmenitySpaces } from './AmenitySpaces';
import { CommonSpaces } from './CommonSpaces';
import { TechnicalDocuments } from './TechnicalDocuments';
import { MoodBoards } from './MoodBoards';
import { BeforeAfter } from './BeforeAfter';
import { MaterialsPalette } from './MaterialsPalette';

interface SerpentAndSilkProps {
  project?: ProjectData;
}

export function SerpentAndSilk({ project }: SerpentAndSilkProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Overview */}
            <div>
              <h2 className="text-4xl mb-8">Project Brief</h2>
              <p className="text-lg text-neutral-600">Serpent & Silk is a high-end, design-driven hospitality concept centered on the reinterpretation of the ouroboros — the serpent consuming its own tail — as a spatial, material, and experiential framework. The project explores the tension between seduction and restraint, myth and modernity, power and softness.The venue is conceived as a contemporary “cathedral of night” —defined by shadow, reflection, and layered materiality. A secondary upper-level tasting room introduces intimacy & exclusivity within the larger architectural gesture.</p>
            </div>
            {/* Right Column - Details */}
            <div className="space-y-6">
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Client</h3>
                <p className="text-xl">Private Client</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Location</h3>
                <p className="text-xl">Pittsburgh, PA</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Completion</h3>
                <p className="text-xl">2022</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Scope</h3>
                <p className="text-xl">15,000 sq ft</p>
                <p className="text-neutral-600 mt-2">
                  Senior Interior Designer, FF&E, Art Curation, Amenity Design, Exterior Amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {project?.moodBoards && <MoodBoards boards={project.moodBoards} />}
      {project?.materials && <MaterialsPalette materials={project.materials} colors={project?.colors} />}
      {project?.technicalDocuments && <TechnicalDocuments documents={project.technicalDocuments} />}
      {project?.commonSpaces && <CommonSpaces spaces={project.commonSpaces} />}
      {project?.amenities && <AmenitySpaces amenities={project.amenities} />}
      {project?.beforeAfter && <BeforeAfter transformations={project.beforeAfter} />}
    </div>
  );
}
