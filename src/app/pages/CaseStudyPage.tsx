import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { TechnicalDocuments } from '../components/TechnicalDocuments';
import { AmenitySpaces } from '../components/AmenitySpaces';
import { CommonSpaces } from '../components/CommonSpaces';
import { MaterialsPalette } from '../components/MaterialsPalette';
import { MoodBoards } from '../components/MoodBoards';
import { BeforeAfter } from '../components/BeforeAfter';
import { Link, useLocation } from 'react-router';
import { ArrowLeft } from 'lucide-react';

import { ProjectBrief } from '../components/ProjectBrief';
import { Cloverf } from '../components/Cloverf';
import { Revelstoke } from '../components/Revelstoke';
import { CollinsCreek } from '../components/CollinsCreek';
import { Capella } from '../components/Capella';
import { WestHaven } from '../components/WestHaven';
import { AftertheApplause } from '../components/AftertheApplause';
import { SerpentAndSilk } from '../components/Serpent&Silk';
import { EyrieHotel } from '../components/EyrieHotel';
import { ProjectTeaserVideo } from '../components/ProjectTeaserVideo';
import { projectsData } from '../data/projects';

export default function CaseStudyPage() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const projectId = pathParts[pathParts.length - 1];

  const [showOverlayTeaser, setShowOverlayTeaser] = useState(false);

  useEffect(() => {
    // Only show overlay teaser if not Clover and hasn't been seen in this session
    if (projectId !== 'Clover') {
      const seenKey = `seen_teaser_${projectId}`;
      if (!sessionStorage.getItem(seenKey)) {
        setShowOverlayTeaser(true);
      }
    } else {
      setShowOverlayTeaser(false);
    }
  }, [projectId]);

  const handleCloseOverlay = () => {
    sessionStorage.setItem(`seen_teaser_${projectId}`, 'true');
    setShowOverlayTeaser(false);
  };

  const currentProject = projectsData.find(p => p.id === projectId) || {
    id: 'Fallback',
    title: "The Meridian Residences",
    subtitle: "A transformative luxury residential project redefining modern urban living",
    category: 'Unknown',
    location: 'Unknown',
    year: 'Unknown',
    link: '#',
    image: "https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNTM3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  };

  const renderProjectBrief = () => {
    switch (projectId) {
      case 'Clover': return <Cloverf project={currentProject} />;
      case 'Revelstoke': return <Revelstoke project={currentProject} />;
      case 'CollinsCreek': return <CollinsCreek project={currentProject} />;
      case 'Capella': return <Capella project={currentProject} />;
      case 'WestHaven': return <WestHaven project={currentProject} />;
      case 'AftertheApplause': return <AftertheApplause project={currentProject} />;
      case 'Serpent&Silk': return <SerpentAndSilk project={currentProject} />;
      case 'TheEyrieHotel': return <EyrieHotel project={currentProject} />;
      default: return <ProjectBrief />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {showOverlayTeaser && projectId !== 'Clover' && (
        <ProjectTeaserVideo 
          project={currentProject} 
          isOverlay={true} 
          onClose={handleCloseOverlay} 
        />
      )}
      
      <Navigation />

      {/* Back Button */}
      <div className="fixed top-28 left-6 lg:left-8 z-40">
        <Link
          to="/work"
          className="flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all bg-white/95 backdrop-blur-sm px-4 py-2 border border-neutral-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Work</span>
        </Link>
      </div>

      <div className="pt-20">
        <HeroSection
          title={currentProject.title}
          subtitle={currentProject.subtitle}
          image={currentProject.image}
        />
        {renderProjectBrief()}

        {projectId !== 'Clover' && (
          <ProjectTeaserVideo project={currentProject} isOverlay={false} />
        )}

        {/* Footer */}
        <footer className="py-12 px-6 lg:px-8 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-neutral-400">
              © 2026 AM Creative Studio
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
