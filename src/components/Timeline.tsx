
import { useEffect, useState, useRef } from 'react';
import { loveStoryData } from '@/data/loveStory';
import TimelineCard from './TimelineCard';
import FloatingHeart from './FloatingHeart';

const Timeline = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(progress);

      // Check which cards should be visible
      const cards = timelineRef.current.querySelectorAll('[data-card-index]');
      const newVisibleCards = new Set<number>();

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
          newVisibleCards.add(index);
        }
      });

      setVisibleCards(newVisibleCards);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-romantic-cream via-romantic-pink to-romantic-soft">
      <FloatingHeart scrollProgress={scrollProgress} />
      
      <div className="container mx-auto px-4 py-16" ref={timelineRef}>
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl text-romantic-rose mb-4">
            Our Journey Together
          </h2>
          <p className="font-poppins text-lg text-gray-700">
            Every moment with you has been a chapter in our beautiful love story
          </p>
        </div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-romantic-rose to-romantic-blush opacity-30"></div>
          
          {loveStoryData.map((moment, index) => (
            <div key={moment.id} data-card-index={index}>
              <TimelineCard 
                moment={moment} 
                index={index}
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Final message */}
      <div 
        className={`text-center py-16 transition-all duration-1000 ${
          scrollProgress > 0.9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="font-dancing text-3xl md:text-4xl text-romantic-rose mb-6">
            Forever & Always
          </h3>
          <p className="font-poppins text-lg text-gray-700 leading-relaxed">
            From one message to a million memories, you became my forever. 
            Every day with you is a gift, and I can't wait to create countless more 
            beautiful moments together. I love you endlessly. 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
