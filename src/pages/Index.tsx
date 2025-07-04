
import { useState } from 'react';
import LandingScreen from '@/components/LandingScreen';
import Timeline from '@/components/Timeline';
import MusicToggle from '@/components/MusicToggle';
import { useAudioManager } from '@/hooks/useAudioManager';

const Index = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  const { 
    audioState, 
    backgroundAudioRef, 
    timelineAudioRef, 
    playBackgroundMusic, 
    playTimelineTrack, 
    returnToBackground, 
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

  return (
    <div className="min-h-screen">
      {/* Background music */}
      <audio ref={backgroundAudioRef} loop>
        <source src="https://www.soundjay.com/misc/sounds/romantic-piano.mp3" type="audio/mpeg" />
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Timeline-specific audio */}
      <audio 
        ref={timelineAudioRef}
        onEnded={returnToBackground}
      />

      <LandingScreen onStart={handleStart} />
      
      {showTimeline && (
        <>
          <Timeline 
            onTrackChange={playTimelineTrack}
            onTrackEnd={returnToBackground}
          />
          <MusicToggle isPlaying={audioState.isPlaying} onToggle={toggleMusic} />
        </>
      )}
    </div>
  );
};

export default Index;
