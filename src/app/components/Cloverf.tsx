import React from 'react';
import { ProjectData } from '../data/projects';
import { AmenitySpaces } from './AmenitySpaces';
import { CommonSpaces } from './CommonSpaces';
import { TechnicalDocuments } from './TechnicalDocuments';
import { MoodBoards } from './MoodBoards';
import { BeforeAfter } from './BeforeAfter';
import { MaterialsPalette } from './MaterialsPalette';

interface CloverProps {
    project?: ProjectData;
}

export function Cloverf({ project }: CloverProps) {
    return (
        <div className="flex flex-col w-full">
            <section className="py-20 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column - Overview */}
                        <div>
                            <h2 className="text-4xl mb-8">Project Brief</h2>
                            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                                Clover on Park Lane is a 343-unit garden-style multifamily community in Dallas, Texas. Originally built in 1975, the property was acquired for repositioning through a strategic value-add renovation.The goal was to elevate the community into a modern, market-competitive Class B+ offering without overcapitalizing. The property sits on a 15 acre site in Dallas.
                                <br></br>
                                <br></br>
                                The property faced dated interiors, aging amenities, and limited market appeal. Despite its strong location near major retail and employment centers, the asset underperformed relative to its potential.
                                <br></br>
                                <br></br>
                                The opportunity was to unlock value through strategic design improvements without pursuing a full luxury conversion.
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
                                <p className="text-xl">Dallas, Texas</p>
                            </div>

                            <div className="border-l-2 border-neutral-900 pl-6">
                                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Completion</h3>
                                <p className="text-xl">2018</p>
                            </div>

                            <div className="border-l-2 border-neutral-900 pl-6">
                                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Scope</h3>
                                <p className="text-xl">209,380 sq ft</p>
                                <p className="text-neutral-600 mt-2">
                                    Interior Design, Space Planning, FF&E, Custom Millwork, Art Curation, Pool Design, Spa Design, Exterior Renovations, Exterior Amenities, Unit Interior Upgrades
                                </p>
                            </div>

                            <div className="border-l-2 border-neutral-900 pl-6">
                                <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-500 mb-2">Awards</h3>
                                <p className="text-xl">Best Multifamily Renovation 2019</p>
                                <p className="text-neutral-600 mt-1">Multifamily Executive Magazine</p>
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
