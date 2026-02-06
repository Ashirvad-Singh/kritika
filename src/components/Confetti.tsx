import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
  size: number;
  rotation: number;
  swing: number;
}

const CONFETTI_EMOJIS = ['💖', '💕', '✨', '💗', '🌸', '💘', '💝', '🩷', '❤️', '💐', '🦋', '💫', '🌹', '💒'];

export const Confetti = ({ active, duration = 8000 }: { active: boolean; duration?: number }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [wave, setWave] = useState(0);

  useEffect(() => {
    if (active) {
      // Create multiple waves of confetti
      const createWave = (waveNum: number) => {
        const newPieces: ConfettiPiece[] = Array.from({ length: 80 }, (_, i) => ({
          id: waveNum * 100 + i,
          left: Math.random() * 100,
          delay: Math.random() * 1.5,
          duration: 4 + Math.random() * 3,
          emoji: CONFETTI_EMOJIS[Math.floor(Math.random() * CONFETTI_EMOJIS.length)],
          size: 18 + Math.random() * 32,
          rotation: Math.random() * 360,
          swing: -30 + Math.random() * 60,
        }));
        return newPieces;
      };

      // Initial burst
      setPieces(createWave(0));

      // Second wave
      const timer1 = setTimeout(() => {
        setPieces(prev => [...prev, ...createWave(1)]);
        setWave(1);
      }, 1500);

      // Third wave
      const timer2 = setTimeout(() => {
        setPieces(prev => [...prev, ...createWave(2)]);
        setWave(2);
      }, 3000);

      // Fourth wave
      const timer3 = setTimeout(() => {
        setPieces(prev => [...prev, ...createWave(3)]);
        setWave(3);
      }, 4500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [active]);

  if (!active && pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute confetti-piece"
          style={{
            left: `${piece.left}%`,
            top: '-60px',
            fontSize: `${piece.size}px`,
            '--fall-duration': `${piece.duration}s`,
            '--fall-delay': `${piece.delay}s`,
            '--rotation': `${piece.rotation}deg`,
            '--swing': `${piece.swing}px`,
          } as React.CSSProperties}
        >
          {piece.emoji}
        </span>
      ))}
    </div>
  );
};
