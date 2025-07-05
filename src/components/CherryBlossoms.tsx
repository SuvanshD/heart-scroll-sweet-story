import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
}

const CherryBlossoms = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create initial petals
    const initialPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4
    }));
    setPetals(initialPetals);

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals(prev => [
        ...prev.slice(-15), // Keep only last 15 petals
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: -10,
          rotation: Math.random() * 360,
          delay: 0,
          duration: 8 + Math.random() * 4
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-pink-200/95 animate-petal"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            transform: `rotate(${petal.rotation}deg)`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default CherryBlossoms; 