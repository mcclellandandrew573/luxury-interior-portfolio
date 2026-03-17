import React from 'react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BeforeAfterData } from '../data/projects';

interface BeforeAfterProps {
  transformations: BeforeAfterData[];
}

export function BeforeAfter({ transformations }: BeforeAfterProps) {
  if (!transformations || transformations.length === 0) return null;

  const [activeComparison, setActiveComparison] = useState<number[]>(
    transformations.map(() => 50)
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const newComparisons = [...activeComparison];
    newComparisons[index] = Math.max(0, Math.min(100, percentage));
    setActiveComparison(newComparisons);
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl mb-4">Transformation</h2>
          <p className="text-lg text-neutral-600">
            Before and after views showcasing the dramatic evolution of key spaces
          </p>
        </div>

        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <div key={index}>
              <h3 className="text-2xl mb-6">{transformation.title}</h3>
              
              {/* Interactive Before/After Slider */}
              <div
                className="relative aspect-[16/9] overflow-hidden bg-neutral-100 cursor-ew-resize select-none"
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={transformation.after}
                    alt={`${transformation.title} - After`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Before Image (Clipped Overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - activeComparison[index]}% 0 0)` }}
                >
                  <ImageWithFallback
                    src={transformation.before}
                    alt={`${transformation.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${activeComparison[index]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-4 bg-neutral-900" />
                      <div className="w-0.5 h-4 bg-neutral-900" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-sm backdrop-blur-sm">
                  Before
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 text-white text-sm backdrop-blur-sm">
                  After
                </div>
              </div>

              <p className="text-neutral-600 mt-4 leading-relaxed">{transformation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
