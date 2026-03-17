import React from 'react';
import { ProjectData } from '../data/projects';
import { AmenitySpaces } from './AmenitySpaces';
import { CommonSpaces } from './CommonSpaces';
import { TechnicalDocuments } from './TechnicalDocuments';
import { MoodBoards } from './MoodBoards';
import { BeforeAfter } from './BeforeAfter';
import { MaterialsPalette } from './MaterialsPalette';

interface CollinsCreekProps {
  project?: ProjectData;
}

export function CollinsCreek({ project }: CollinsCreekProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Overview */}
            <div>
              <h2 className="text-4xl mb-8">Project Brief</h2>
              <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                Using the mall’s central corridor as a focus of the new development, a plan was created with the help of the City to rezone the property. The overall focus of the development is to encourage a complete experience where people can live, work and play. When completed Collin Creek will serve the city of Plano and aid in the revitalization of the Downtown District. The developer has worked tirelessly with the city to bring forward a project that was sensitive to the needs of the citizens and community. Numerous meetings were held to inform individuals of the project and intent, since community input was key for understanding any concerns or needs to the local residents. This rezoning and project was approved and began April 22, 2019.
                <br></br>
                <br></br>
                Collin Creek is a unified development that incorporates a compatible  mix of uses, such as retail, office space, commercial and residential, and integrated with plenty of open spaces and pedestrian networks for enhanced community.
                <br></br>
                <br></br>
                The design style for the multifamily and commercial sections of the community will be described as Texas Contemporary, and is defined as a contemporary, industrial  look that utilizes Texas stone, cedar timbers, glass, metal and stucco.
              </p>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Client</h3>
                <p className="text-xl">Bush Architects</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Location</h3>
                <p className="text-xl">Plano, Texas</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Completion</h3>
                <p className="text-xl">2019</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Scope</h3>
                <p className="text-xl">2,000,000 sq ft</p>
                <p className="text-neutral-600 mt-2">
                  Interior Design, Space Planning, FF&E, Custom Millwork, Art Curation, Pool Design, Spa Design, Exterior Renovations, Exterior Amenities, Unit Interior Finishes, Budgeting + Cost Estimations, Phased Demolition + Reconstruction, Coordination, Renderings
                </p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Awards</h3>
                <p className="text-xl">Urban Design Dream /Study Award 2019</p>
                <p className="text-neutral-600 mt-1">Dallas Planning Council</p>
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
