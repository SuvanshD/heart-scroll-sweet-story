
import { useState, useRef, useCallback } from 'react';

interface AudioState {
  isPlaying: boolean;
}

export const useAudioManager = () => {
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false
  });

  const backgroundAudioRef = useRef<HTMLAudioElement>(null);

  const playBackgroundMusic = useCallback(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = 0.7;
      backgroundAudioRef.current.play().catch(console.log);
      setAudioState(prev => ({ ...prev, isPlaying: true }));
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (backgroundAudioRef.current) {
      if (audioState.isPlaying) {
        backgroundAudioRef.current.pause();
        setAudioState(prev => ({ ...prev, isPlaying: false }));
      } else {
        backgroundAudioRef.current.play().catch(console.log);
        setAudioState(prev => ({ ...prev, isPlaying: true }));
      }
    }
  }, [audioState.isPlaying]);

  return {
    audioState,
    backgroundAudioRef,
    playBackgroundMusic,
    toggleMusic
  };
};
