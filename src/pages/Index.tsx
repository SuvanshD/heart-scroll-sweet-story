
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
    
    // Start playing music
    if (audioRef.current) {
      audioRef.current.play().catch(console.log);
    }
    
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
      {/* Background music */}
      <audio 
        ref={audioRef}
        loop
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      >
        <source src="https://www.soundjay.com/misc/sounds/romantic-piano.mp3" type="audio/mpeg" />
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" />
        {/* Fallback for browsers that don't support the audio element */}
        Your browser does not support the audio element.
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
