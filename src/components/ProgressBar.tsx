import { useEffect, useState } from 'react';

interface ProgressBarProps {
  scrollProgress: number;
}

const ProgressBar = ({ scrollProgress }: ProgressBarProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-1 bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-blush">
        <div 
          className="h-full bg-white/80 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 