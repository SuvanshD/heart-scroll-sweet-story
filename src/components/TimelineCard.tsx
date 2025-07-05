
import { LoveStoryMoment } from '@/data/loveStory';
import { Card } from '@/components/ui/card';

interface TimelineCardProps {
  moment: LoveStoryMoment;
  index: number;
  isVisible: boolean;
}

const TimelineCard = ({ moment, index, isVisible }: TimelineCardProps) => {
  const isLeft = index % 2 === 0;

  return (
    <div 
      className={`flex items-center mb-16 ${
        isLeft ? 'justify-start' : 'justify-end'
      } transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`w-full max-w-md ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <Card className="bg-white/80 backdrop-blur-sm border-romantic-pink shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm hover:scale-105 group relative z-20">
          <div className="relative bg-gray-50 p-4">
            <img 
              src={moment.image} 
              alt={moment.title}
              className="w-full max-h-80 object-contain rounded-lg"
              loading="lazy"
            />
            <div className="absolute top-6 right-6 text-2xl group-hover:scale-110 transition-transform duration-300">
              {moment.emoji}
            </div>
            {/* Sparkle effects */}
            <div className="absolute top-2 left-2 text-pink-300/60 animate-sparkle">✨</div>
            <div className="absolute bottom-2 right-2 text-pink-300/60 animate-sparkle" style={{ animationDelay: '1s' }}>✨</div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-poppins text-sm text-romantic-blush font-medium">
                {moment.date}
              </span>
            </div>
            
            <h3 className="font-dancing text-2xl text-romantic-rose mb-3">
              {moment.title}
            </h3>
            
            <p className="font-poppins text-gray-700 leading-relaxed">
              {moment.story}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TimelineCard;
