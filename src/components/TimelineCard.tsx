
import { LoveStoryMoment } from '@/data/loveStory';
import { Card } from '@/components/ui/card';
import { Music } from 'lucide-react';

interface TimelineCardProps {
  moment: LoveStoryMoment;
  index: number;
  isVisible: boolean;
  hasAudioTrack?: boolean;
  isPlayingAudio?: boolean;
}

const TimelineCard = ({ moment, index, isVisible, hasAudioTrack, isPlayingAudio }: TimelineCardProps) => {
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
        <Card className={`bg-white/80 backdrop-blur-sm border-romantic-pink shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
          isPlayingAudio ? 'ring-2 ring-romantic-rose ring-opacity-50' : ''
        }`}>
          <div className="relative">
            <img 
              src={moment.image} 
              alt={moment.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 text-2xl">
              {moment.emoji}
            </div>
            {hasAudioTrack && (
              <div className={`absolute top-4 left-4 transition-all duration-300 ${
                isPlayingAudio ? 'text-romantic-rose animate-pulse' : 'text-white/70'
              }`}>
                <Music size={20} />
              </div>
            )}
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
