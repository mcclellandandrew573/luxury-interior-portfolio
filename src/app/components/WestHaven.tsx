import React from 'react';
import { ProjectData } from '../data/projects';
import { AmenitySpaces } from './AmenitySpaces';
import { CommonSpaces } from './CommonSpaces';
import { TechnicalDocuments } from './TechnicalDocuments';
import { MoodBoards } from './MoodBoards';
import { BeforeAfter } from './BeforeAfter';
import { MaterialsPalette } from './MaterialsPalette';

interface WestHavenProps {
  project?: ProjectData;
}

export function WestHaven({ project }: WestHavenProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Overview */}
            <div>
              <h2 className="text-4xl mb-8">Project Brief</h2>
              <p className="text-md leading-relaxed text-neutral-500 mb-6">
                Westhaven is an award-winning master-planned community, blending residential, parks, trails, village retail, and amenity-rich environments. Westhaven has become a distinguished example of engaged-lifestyle living with focus on design excellence, and connectivity. The Westhaven Active Adult Village is an expansion of this vision dedicated to residents 55 and better, offering a socially rich living experience integrated within the broader community.
                <br></br>
                <br></br>
                Offering luxury apartments and service-oriented amenities tailored to active adult lifestyles, promoting intergenerational community integration.
                <br></br>
                <br></br>
                Astor Club & Residences: Approximately 208 rental residences across three four- and five-story buildings. Situated on about 10 acres within the active adult portion of Westhaven.
                <br></br>
                <br></br>
                Community Integration: Active adult residents enjoy full access to Westhavens broader amenities — including pools, trails, fitness, golf, and social events — in addition to exclusive Astor Club facilities.
              </p>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Client</h3>
                <p className="text-xl">Southern Land Company</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Location</h3>
                <p className="text-xl">Franklin, Tennessee</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Completion</h3>
                <p className="text-xl">2026</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Scope</h3>
                <p className="text-xl">300,000 sq ft</p>
                <p className="text-neutral-600 mt-2">
                  Interior Design, Space Planning, FF&E, Art Curation and installation, Exterior and Interior Amenities, Unit Interiors, Renderings, Procurement and Model Unit Installtion
                </p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Awards</h3>
                <p className="text-xl">Best in American Living Award BALA</p>
                <p className="text-neutral-600 mt-1">NAHB for mixed-use/ Single Family Community</p>
                <p className="text-xl">Residential Housing Community of the Year </p>
                <p className="text-neutral-600 mt-1">Grand Aurora</p>
                <p className="text-xl">Best Master Planned Community</p>
                <p className="text-neutral-600 mt-1">Gold Nugget Award</p>
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
