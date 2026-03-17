import React, { useState, useRef, useEffect } from 'react';

const videos = [
  '/portfolio-video-clips-intro/clip-00.mp4',
  '/portfolio-video-clips-intro/clip-01.mp4',
  '/portfolio-video-clips-intro/clip-02.mp4',
  '/portfolio-video-clips-intro/clip-21.mp4',
  '/portfolio-video-clips-intro/clip-22.mp4',
  '/portfolio-video-clips-intro/clip-23.mp4',
  '/portfolio-video-clips-intro/clip-24.mp4',
  '/portfolio-video-clips-intro/clip-25.mp4',
];

export function HeroVideoLoop() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      // Force muted state before loading to satisfy browser autoplay policies
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.load();

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Autoplay failed:", error);
        });
      }
    }
  }, [currentVideoIndex]);

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <video
        ref={videoRef}
        key={videos[currentVideoIndex]}
        className="w-full h-full object-cover transition-opacity duration-200000"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  );
}
