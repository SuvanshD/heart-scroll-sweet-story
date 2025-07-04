
import { useState, useRef, useCallback } from 'react';

interface AudioState {
  isPlaying: boolean;
  currentTrack: 'background' | string;
  backgroundPosition: number;
}

export const useAudioManager = () => {
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    currentTrack: 'background',
    backgroundPosition: 0
  });

  const backgroundAudioRef = useRef<HTMLAudioElement>(null);
  const timelineAudioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const fadeOut = useCallback((audioElement: HTMLAudioElement, onComplete: () => void) => {
    let volume = audioElement.volume;
    const fadeStep = 0.05;
    
    fadeIntervalRef.current = setInterval(() => {
      volume -= fadeStep;
      if (volume <= 0) {
        audioElement.volume = 0;
        audioElement.pause();
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
        }
        onComplete();
      } else {
        audioElement.volume = volume;
      }
    }, 50);
  }, []);

  const fadeIn = useCallback((audioElement: HTMLAudioElement) => {
    audioElement.volume = 0;
    audioElement.play().catch(console.log);
    let volume = 0;
    const fadeStep = 0.05;
    
    const fadeInterval = setInterval(() => {
      volume += fadeStep;
      if (volume >= 0.7) {
        audioElement.volume = 0.7;
        clearInterval(fadeInterval);
      } else {
        audioElement.volume = volume;
      }
    }, 50);
  }, []);

  const playBackgroundMusic = useCallback(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.currentTime = audioState.backgroundPosition;
      fadeIn(backgroundAudioRef.current);
      setAudioState(prev => ({ ...prev, isPlaying: true, currentTrack: 'background' }));
    }
  }, [audioState.backgroundPosition, fadeIn]);

  const playTimelineTrack = useCallback((trackUrl: string) => {
    if (!timelineAudioRef.current) return;

    // Save background position and fade out background music
    if (backgroundAudioRef.current && !backgroundAudioRef.current.paused) {
      setAudioState(prev => ({ ...prev, backgroundPosition: backgroundAudioRef.current!.currentTime }));
      fadeOut(backgroundAudioRef.current, () => {
        // Start timeline track
        timelineAudioRef.current!.src = trackUrl;
        fadeIn(timelineAudioRef.current!);
        setAudioState(prev => ({ ...prev, currentTrack: trackUrl }));
      });
    } else {
      // Start timeline track directly
      timelineAudioRef.current.src = trackUrl;
      fadeIn(timelineAudioRef.current);
      setAudioState(prev => ({ ...prev, isPlaying: true, currentTrack: trackUrl }));
    }
  }, [fadeOut, fadeIn]);

  const returnToBackground = useCallback(() => {
    if (timelineAudioRef.current && !timelineAudioRef.current.paused) {
      fadeOut(timelineAudioRef.current, () => {
        playBackgroundMusic();
      });
    }
  }, [fadeOut, playBackgroundMusic]);

  const toggleMusic = useCallback(() => {
    if (audioState.currentTrack === 'background' && backgroundAudioRef.current) {
      if (audioState.isPlaying) {
        backgroundAudioRef.current.pause();
        setAudioState(prev => ({ ...prev, isPlaying: false }));
      } else {
        playBackgroundMusic();
      }
    } else if (timelineAudioRef.current) {
      if (audioState.isPlaying) {
        timelineAudioRef.current.pause();
        setAudioState(prev => ({ ...prev, isPlaying: false }));
      } else {
        timelineAudioRef.current.play().catch(console.log);
        setAudioState(prev => ({ ...prev, isPlaying: true }));
      }
    }
  }, [audioState.isPlaying, audioState.currentTrack, playBackgroundMusic]);

  return {
    audioState,
    backgroundAudioRef,
    timelineAudioRef,
    playBackgroundMusic,
    playTimelineTrack,
    returnToBackground,
    toggleMusic
  };
};
