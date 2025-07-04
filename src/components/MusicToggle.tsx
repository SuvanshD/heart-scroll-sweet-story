
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle = ({ isPlaying, onToggle }: MusicToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      className="fixed bottom-6 left-6 z-50 bg-romantic-rose/80 hover:bg-romantic-rose text-white rounded-full p-3 shadow-lg backdrop-blur-sm"
      size="sm"
    >
      <Heart 
        className={`transition-transform duration-300 ${isPlaying ? 'animate-heart-float' : ''}`} 
        size={20} 
        fill={isPlaying ? "currentColor" : "none"}
      />
    </Button>
  );
};

export default MusicToggle;
