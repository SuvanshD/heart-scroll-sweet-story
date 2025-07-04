
export interface LoveStoryMoment {
  id: string;
  title: string;
  date: string;
  image: string;
  story: string;
  emoji?: string;
}

export const loveStoryData: LoveStoryMoment[] = [
  {
    id: "1",
    title: "The First Hello",
    date: "July 2022",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    story: "This was the day everything began. A simple message that changed our lives forever. I never imagined that one conversation could lead to the most beautiful love story.",
    emoji: "💌"
  },
  {
    id: "2",
    title: "Our First Date",
    date: "August 2022",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
    story: "Under the starlit sky, we talked for hours. Time stood still as I got lost in your eyes and realized I wanted to spend every moment getting to know you better.",
    emoji: "✨"
  },
  {
    id: "3",
    title: "When I Knew",
    date: "October 2022",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    story: "The moment you laughed at my terrible joke while we were cuddled up watching movies. That's when I knew you were the one who would make every ordinary day feel extraordinary.",
    emoji: "😍"
  },
  {
    id: "4",
    title: "First 'I Love You'",
    date: "December 2022",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    story: "Three little words that held the weight of my entire heart. The way your face lit up when I said them made me fall even deeper in love with you.",
    emoji: "❤️"
  },
  {
    id: "5",
    title: "Adventures Together",
    date: "Spring 2023",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    story: "Every adventure became more meaningful with you by my side. From hiking trails to quiet moments in nature, you turned every experience into a treasured memory.",
    emoji: "🌿"
  },
  {
    id: "6",
    title: "Our Love Today",
    date: "Present Day",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    story: "Three years later, and I fall in love with you more each day. You are my yesterday, my today, and all of my tomorrows. Thank you for being my everything.",
    emoji: "💕"
  }
];
