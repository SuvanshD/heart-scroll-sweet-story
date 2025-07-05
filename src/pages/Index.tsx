
import { useState, useEffect } from 'react';
import LandingScreen from '@/components/LandingScreen';
import Timeline from '@/components/Timeline';
import MusicToggle from '@/components/MusicToggle';
import BackToTop from '@/components/BackToTop';
import ProgressBar from '@/components/ProgressBar';
import CherryBlossoms from '@/components/CherryBlossoms';
import { useAudioManager } from '@/hooks/useAudioManager';

const Index = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { 
    audioState, 
    backgroundAudioRef, 
    playBackgroundMusic, 
    toggleMusic 
  } = useAudioManager();

  const handleStart = () => {
    setShowTimeline(true);
    
    // Start playing background music
    playBackgroundMusic();
    
    // Smooth scroll to timeline
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Background music - Madhubala by Amit Trivedi */}
      <audio ref={backgroundAudioRef} loop>
        <source src="/madhubala.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Progress bar */}
      <ProgressBar scrollProgress={scrollProgress} />

      {/* Cherry blossoms */}
      <CherryBlossoms />

      <LandingScreen onStart={handleStart} />
      
      {showTimeline && (
        <>
          <Timeline />
          <MusicToggle isPlaying={audioState.isPlaying} onToggle={toggleMusic} />
          <BackToTop />
        </>
      )}
    </div>
  );
};

export default Index;
