import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export function HeroSection({ 
  title = "The Meridian Residences", 
  subtitle = "A transformative luxury residential project redefining modern urban living", 
  image = "https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNTM3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="text-white max-w-3xl">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/90">Case Study</p>
          <h1 className="text-5xl md:text-7xl mb-6 font-light">{title}</h1>
          <p className="text-xl md:text-2xl font-light text-white/90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
