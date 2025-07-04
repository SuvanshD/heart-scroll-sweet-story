
import { useState, useRef } from 'react';
import LandingScreen from '@/components/LandingScreen';
import Timeline from '@/components/Timeline';
import MusicToggle from '@/components/MusicToggle';

const Index = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    setShowTimeline(true);
    // Smooth scroll to timeline
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.log);
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background music - placeholder for now */}
      <audio 
        ref={audioRef}
        loop
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      >
        {/* Add your music file path here */}
        {/* <source src="/music/romantic-bg.mp3" type="audio/mpeg" /> */}
      </audio>

      <LandingScreen onStart={handleStart} />
      
      {showTimeline && (
        <>
          <Timeline />
          <MusicToggle isPlaying={isMusicPlaying} onToggle={toggleMusic} />
        </>
      )}
    </div>
  );
};

export default Index;
