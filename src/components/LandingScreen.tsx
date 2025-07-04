
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface LandingScreenProps {
  onStart: () => void;
}

const LandingScreen = ({ onStart }: LandingScreenProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-pink via-romantic-soft to-romantic-cream relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-romantic-blush/15 animate-heart-float`}
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto px-6">
        <div className="mb-8 animate-fade-in">
          <Heart className="mx-auto mb-6 text-romantic-rose animate-heart-float" size={60} />
          <h1 className="font-dancing text-4xl md:text-6xl text-romantic-rose mb-4 leading-tight">
            Our Love Story
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Let me take you on a journey of how my heart fell for you...
            <br />
            <span className="text-romantic-blush font-medium">
              Three years of beautiful memories await 💕
            </span>
          </p>
        </div>

        <Button
          onClick={onStart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="font-poppins text-lg px-8 py-4 bg-romantic-rose hover:bg-romantic-blush text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <Heart className={`mr-2 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} size={20} />
          Can't wait to see! 💖
        </Button>
      </div>
    </div>
  );
};

export default LandingScreen;
