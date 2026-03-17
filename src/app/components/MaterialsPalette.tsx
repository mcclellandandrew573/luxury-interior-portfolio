import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MaterialData, ColorData } from '../data/projects';

interface MaterialsPaletteProps {
  materials?: MaterialData[];
  colors?: ColorData[];
}

export function MaterialsPalette({ materials, colors }: MaterialsPaletteProps) {
  if ((!materials || materials.length === 0) && (!colors || colors.length === 0)) return null;

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl mb-4">Materials & Finishes</h2>
          <p className="text-lg text-neutral-600">
            A curated palette of premium materials defining the project's aesthetic
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {materials?.map((material, index) => (
            <div key={index}>
              <div className="aspect-square overflow-hidden mb-4 bg-neutral-100 border border-neutral-200">
                <ImageWithFallback
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">{material.category}</p>
                <h3 className="text-lg">{material.name}</h3>
                <p className="text-sm text-neutral-600">{material.application}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Color Palette */}
        <div>
          <h3 className="text-2xl mb-6">Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {colors?.map((color, index) => (
              <div key={index}>
                <div
                  className="aspect-square mb-3 border border-neutral-200"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-sm mb-1">{color.name}</p>
                <p className="text-xs text-neutral-500 font-mono">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
