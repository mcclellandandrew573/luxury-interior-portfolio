import React, { useEffect, useState } from 'react';
import { ProjectData } from '../data/projects';
import { Play } from 'lucide-react';

interface ProjectTeaserVideoProps {
  project?: ProjectData;
  isOverlay?: boolean;
  onClose?: () => void;
}

export function ProjectTeaserVideo({ project, isOverlay = false, onClose }: ProjectTeaserVideoProps) {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Fallback video if one isn't provided in the project data
  const videoUrl = project?.videoReel || "https://www.w3schools.com/html/mov_bbb.mp4";

  useEffect(() => {
    // Animation sequence for fading text in
    const t1 = setTimeout(() => setShowText1(true), 500);
    const t2 = setTimeout(() => setShowText2(true), 2500);
    const t3 = setTimeout(() => setShowText3(true), 4500);
    const t4 = setTimeout(() => setShowButton(true), 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!project) return null;

  const content = (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 pointer-events-none" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 lg:px-8 z-10 text-white">
        
        <h1 
          className={`text-5xl lg:text-7xl mb-6 font-light tracking-wide transition-opacity duration-1000 transform ${showText1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {project.title}
        </h1>
        
        <p 
          className={`text-xl lg:text-2xl mb-8 max-w-3xl text-neutral-200 font-light transition-opacity duration-1000 transform ${showText2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {project.subtitle}
        </p>
        
        <div 
          className={`text-sm tracking-[0.2em] uppercase text-neutral-300 mb-12 flex flex-col md:flex-row gap-4 md:gap-8 transition-opacity duration-1000 transform ${showText3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span>{project.location}</span>
          <span className="hidden md:inline">•</span>
          <span>{project.category}</span>
          <span className="hidden md:inline">•</span>
          <span>{project.year}</span>
        </div>

        <div className={`transition-opacity duration-1000 transform ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {isOverlay ? (
            <button
              onClick={onClose}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors rounded-none"
            >
              <span className="text-sm tracking-[0.1em] uppercase font-medium">Explore Project</span>
              <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors rounded-none"
            >
              <span className="text-sm tracking-[0.1em] uppercase font-medium">Back to Top</span>
            </button>
          )}
        </div>
      </div>
    </>
  );

  if (isOverlay) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        {content}
      </div>
    );
  }

  return (
    <section className="relative w-full h-[80vh] bg-black overflow-hidden mt-auto">
      {content}
    </section>
  );
}
