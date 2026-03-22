import React, { useState, useRef, useEffect } from 'react';

const videos = [
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807234/clip-00_slyhaa.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807236/clip-01_fm2pyv.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807236/clip-03_mik44b.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807228/clip-22_oxnzav.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807221/clip-17_emyvmh.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807238/clip-02_gjit3f.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807239/clip-05_zdxunn.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807242/clip-08_qpb9u6.mp4',
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
