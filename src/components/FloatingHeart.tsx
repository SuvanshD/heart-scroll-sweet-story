
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeartProps {
  scrollProgress: number;
}

const FloatingHeart = ({ scrollProgress }: FloatingHeartProps) => {
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    setFillPercentage(Math.min(scrollProgress * 100, 100));
  }, [scrollProgress]);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* Heart outline */}
        <Heart 
          className="text-romantic-rose/30" 
          size={48} 
          strokeWidth={2}
        />
        
        {/* Filled heart that grows with scroll */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(${100 - fillPercentage}% 0 0 0)`
          }}
        >
          <Heart 
            className="text-romantic-rose" 
            size={48} 
            fill="currentColor"
            strokeWidth={2}
          />
        </div>

        {/* Sparkle effect when fully filled */}
        {fillPercentage >= 100 && (
          <div className="absolute -top-2 -right-2">
            <div className="w-4 h-4 bg-romantic-rose rounded-full animate-sparkle"></div>
          </div>
        )}
      </div>

      {/* Progress indicator */}
      <div className="mt-2 text-center">
        <span className="font-poppins text-xs text-romantic-rose font-medium">
          {Math.round(fillPercentage)}%
        </span>
      </div>
    </div>
  );
};

export default FloatingHeart;
