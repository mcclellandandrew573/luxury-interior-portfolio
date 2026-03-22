import React, { useState, useRef, useEffect } from 'react';

const videos = [
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807257/clip-15_dzbzgx.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807254/clip-13_l5yl48.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807254/clip-16_wcbeka.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807247/clip-12_qy3ciy.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807252/clip-14_djg2qt.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807245/clip-11_lgy1io.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807244/clip-10_ya73ip.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807244/clip-09_okrasm.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807242/clip-07_egs5k6.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807242/clip-06_sgxiwl.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807242/clip-08_qpb9u6.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807239/clip-05_zdxunn.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807238/clip-02_gjit3f.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807238/clip-04_sky4dy.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807236/clip-01_fm2pyv.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807236/clip-03_mik44b.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807234/clip-00_slyhaa.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807232/07_qojnbp.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807231/clip-25_etjhjz.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807230/clip-24_zm5yva.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807229/clip-23_gp1cr5.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807228/clip-22_oxnzav.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807227/clip-21_wldjtc.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807226/clip-20_wn5xkm.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807224/clip-19_b1ecuu.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807222/clip-18_pz7hyf.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773807221/clip-17_emyvmh.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773811314/openart-video_e75fb2f6_1773352989415_ak06zh.mp4',
  'https://res.cloudinary.com/dk4hujmt3/video/upload/v1773811159/openart-video_c0b22782_1773370117408_dxlidq.mp4'
];

export function IntroReel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 2) % videos.length);
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
        className="w-full h-full object-cover transition-opacity duration-1000"
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
