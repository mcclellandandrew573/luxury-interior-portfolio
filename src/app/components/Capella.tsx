import React from 'react';
import { ProjectData } from '../data/projects';
import { AmenitySpaces } from './AmenitySpaces';
import { CommonSpaces } from './CommonSpaces';
import { TechnicalDocuments } from './TechnicalDocuments';
import { MoodBoards } from './MoodBoards';
import { BeforeAfter } from './BeforeAfter';
import { MaterialsPalette } from './MaterialsPalette';

interface CapellaProps {
  project?: ProjectData;
}

export function Capella({ project }: CapellaProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lgLgrid-cols-2 gap-16">
            {/* Left Column - Overview */}
            <div>
              <h2 className="text-4xl mb-8">Project Brief</h2>
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                Capella is a high-rise multifamily development located within the evolving urban fabric of Symphony Park in Las Vegas—a district defined by culture, performance, and civic identity. Positioned as a vertical extension of this context, the project translates the energy of the Strip and the refinement of the Arts District into a cohesive residential experience rooted in hospitality.
                <br></br>
                <br></br>
                The design approach centers on elevated living through curated amenity spaces, layered materiality, and a strong emphasis on atmosphere. Interior environments are conceived as a sequence of experiences—transitioning from dramatic, high-impact arrival moments to intimate, residential-scaled retreats.
                <br></br>
                <br></br>
                Rich contrasts, warm tones, and sculptural lighting establish a sense of understated luxury, while maintaining a contemporary and livable aesthetic.Capella redefines multifamily living within an urban core by blending architectural presence with interior precision—creating a residence that feels both iconic and deeply personal.
              </p>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Client</h3>
                <p className="text-xl">Southern Land Company</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Location</h3>
                <p className="text-xl">Las Vegas, Nevada</p>
              </div>

              <div className="border-l-2 border-neutral-9 00 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Completion</h3>
                <p className="text-xl">2026</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Scope</h3>
                <p className="text-xl">397,000 sq ft</p>
                <p className="text-neutral-600 mt-2">
                  Senior Interior Designer, FF&E, Art Curation, Amenity Design, Exterior Amenities
                </p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Awards</h3>
                <p className="text-xl">2025 Place of the Year</p>
                <p className="text-neutral-600 mt-1">ULI Nevada</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-2">Awards</h3>
                <p className="text-xl">Southern Nevada Placemaking Spotlight Award</p>
                <p className="text-neutral-600 mt-1">NAIOP Southern Nevada</p>
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
