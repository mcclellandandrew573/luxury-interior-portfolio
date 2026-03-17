import React from 'react';
import { ProjectData } from '../data/projects';
import { AmenitySpaces } from './AmenitySpaces';
import { BeforeAfter } from './BeforeAfter';
import { CommonSpaces } from './CommonSpaces';
import { MaterialsPalette } from './MaterialsPalette';
import { MoodBoards } from './MoodBoards';
import { TechnicalDocuments } from './TechnicalDocuments';

interface RevelstokeProps {
  project?: ProjectData;
}

export function Revelstoke({ project }: RevelstokeProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Overview */}
            <div>
              <h2 className="text-4xl mb-8">Project Brief</h2>
              <p className="text-lg text-neutral-600">
                Revelstoke is a ground-up luxury multifamily development in North Fort Worth designed to elevate everyday residential living through hospitality-inspired amenities and thoughtfully curated interiors.
                <br></br>
                <br></br>
                The project balances contemporary design with a warm regional sensibility, drawing inspiration from the cultural texture of Fort Worth while delivering a modern, market-competitive community.
                <br></br>
                <br></br>
                The design strategy focused on creating a cohesive resident experience—from the arrival sequence and leasing lobby to the amenity spaces and private residences—resulting in an environment that feels both refined and approachable.
              </p>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Client</h3>
                <p className="text-xl">Presidium Group</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Location</h3>
                <p className="text-xl">Fort Worth, Texas</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Completion</h3>
                <p className="text-xl">2019</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Scope</h3>
                <p className="text-xl">150,000 sq ft</p>
                <p className="text-neutral-600 mt-2">Interior Design, Space Planning, FF&E, Custom Millwork, Art Curation + Installation, Model Units, Pool Design, Spa Design, Amenities, Unit Finish Selections
                </p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Awards</h3>
                <p className="text-xl">Best Multifamily Community 2022</p>
                <p className="text-neutral-600 mt-1">TAB Star Awards</p>
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
