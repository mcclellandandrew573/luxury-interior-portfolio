import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MoodBoardData } from '../data/projects';

interface MoodBoardsProps {
  boards: MoodBoardData[];
}

export function MoodBoards({ boards }: MoodBoardsProps) {
  if (!boards || boards.length === 0) return null;

  return (
    <section className="py-20 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl mb-4">Concept Sketches</h2>
          <p className="text-lg text-neutral-600">
            Conceptual sketches and mood boards that shaped the project's visual direction
          </p>
        </div>

        <div className="space-y-16">
          {boards.map((board, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="lg:col-span-2">
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <ImageWithFallback
                        src={board.image}
                        alt={board.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl">{board.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{board.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {board.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-white border border-neutral-200 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4 lg:order-1">
                    <h3 className="text-3xl">{board.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{board.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {board.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-white border border-neutral-200 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2 lg:order-2">
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <ImageWithFallback
                        src={board.image}
                        alt={board.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
