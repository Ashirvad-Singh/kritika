import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const HEART_EMOJIS = ['💕', '💖', '💗', '💓', '💞', '💘', '❤️', '🩷'];

export const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generatedHearts: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 20,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 10,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    }));
    setHearts(generatedHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            '--duration': `${heart.duration}s`,
            '--delay': `${heart.delay}s`,
          } as React.CSSProperties}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};
