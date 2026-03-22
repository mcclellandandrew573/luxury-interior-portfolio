import React from 'react';
import { ProjectData } from '../data/projects';
import { AmenitySpaces } from './AmenitySpaces';
import { CommonSpaces } from './CommonSpaces';
import { TechnicalDocuments } from './TechnicalDocuments';
import { MoodBoards } from './MoodBoards';
import { BeforeAfter } from './BeforeAfter';
import { MaterialsPalette } from './MaterialsPalette';

interface AftertheApplauseProps {
  project?: ProjectData;
}

export function AftertheApplause({ project }: AftertheApplauseProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Overview */}
            <div>
              <h2 className="text-4xl mb-8">Project Brief</h2>
              <p className="text-lg text-neutral-600">After the applause imagines a world where performers, patrons, & insiders slip away to extend the night's glamour. Each space transforms through a gradually intensifying Art Deco lens. Rather than nostalgic pastiche, the design distills Deco into precise geometries—fluted panels, stepped forms, subtle inlays—paired with sumptuous materiality & light.
                <br></br>
                <br></br>
                The space propels materiality into dramatic, mesmerizing territory, elevating aesthetics as guests progress through curated zones. Velvet banquettes, polished stone & lacquer surfaces catch the glow of halo-lit bars, orchestrating a fresh story infused with theatricality. Strategic moods & spatial interactivity amplify sociability: plush seating clusters foster conversations, the open lounge invite movement, and dance zones pulse with possibility.</p>
            </div>

            {/*Right Column*/}
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Client</h3>
                <p className="text-xl">Smith Development Group</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Location</h3>
                <p className="text-xl">Dallas, Texas</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Completion</h3>
                <p className="text-xl">2022</p>
              </div>

              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Scope</h3>
                <p className="text-xl">15,000 sq ft</p>
                <p className="text-neutral-600 mt-2">
                  Interior Design, Space Planning, FF&E, Art Curation, Renderings and Visualizations
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
