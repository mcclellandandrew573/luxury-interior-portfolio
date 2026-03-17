import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { IntroReel } from '../components/IntroReel';

export default function LandingPage() {
  const navigate = useNavigate();
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showSkip, setShowSkip] = useState(true);

  const phrases = [
    'Designing Spaces',
    'Crafting Experiences',
    'Building Innovation',
    'Creating Beauty',
    'Transforming Vision into Reality',
    'Design That Responds — Not Repeats',
    'Spaces Shaped by Story',
    'Where Concept Becomes Environment',
    'Interior Design Driven by Precision',
    'Thoughtful Design. Lasting Impact.',
    'Crafting Environments That Perform',
    'Design That Moves Beyond Aesthetic',
    'Explore the Work',
    'Step Inside the Portfolio',
    'See the Process',
    'Start the Tour',
    'See What Design Can Become',
    'Walk Through the Work',
    'Explore the Thinking Behind the Design',
    'Enter the World of AM Creative',
    'Step Into the Story',

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 2) % phrases.length);
    }, 9500);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    navigate('/home');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-1000">
      {/* Video Background */}
      <IntroReel />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Skip Button */}
      <AnimatePresence>
        {showSkip && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={handleSkip}
            className="absolute top-8 right-8 text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors z-10"
          >
            Skip
          </motion.button>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-10">
        {/* Animated Text */}
        <div className="text-center mb-16 h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.75, ease: 'easeOut' }}
              className="text-4xl md:text-7xl font-light text-white tracking-tight"
            >
              {phrases[currentPhrase]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white/80 text-lg mb-8 tracking-wide">
            Award-Winning Interior Design & BIM/ Workflow Automation
          </p>

          <button
            onClick={handleEnter}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-all"
          >
            <span className="tracking-widest text-sm uppercase">Enter Experience</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {phrases.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-12 transition-all duration-300 ${index === currentPhrase ? 'bg-white' : 'bg-white/30'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
