import { motion } from 'framer-motion';
import { useState, useRef, useCallback, useEffect } from 'react';

interface ProposalScreenProps {
  onYes: () => void;
}

export const ProposalScreen = ({ onYes }: ProposalScreenProps) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  // Move NO button to random position
  const moveNoButton = useCallback(() => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    const maxX = container.width - button.width - 40;
    const maxY = container.height - button.height - 40;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoButtonPos({ x: newX, y: newY });
    setNoAttempts((prev) => prev + 1);
    setIsShaking(true);

    // Trigger vibration on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    setTimeout(() => setIsShaking(false), 400);
  }, []);

  // Handle YES click
  const handleYesClick = () => {
    // Trigger vibration on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
    onYes();
  };

  // Button size decreases with attempts
  const noButtonScale = Math.max(0.6, 1 - noAttempts * 0.08);
  const noButtonOpacity = Math.max(0.4, 1 - noAttempts * 0.1);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      {/* Main Glass Card */}
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-auto">
        {/* Proposal Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-romantic text-3xl md:text-4xl font-semibold text-rose-dark leading-snug">
            Will you be my Valentine today
          </h2>
          <p className="font-romantic text-2xl md:text-3xl text-foreground/80 mt-2 italic">
            and my future partner for all tomorrows?
          </p>
        </motion.div>

        {/* Buttons Container */}
        <div className="flex flex-col gap-4 items-center relative min-h-[140px]">
          {/* YES Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            className="btn-romantic w-full max-w-[200px] text-xl"
          >
            YES 💍
          </motion.button>

          {/* NO Button - The Playful One */}
          <motion.button
            ref={noButtonRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: noButtonOpacity,
              y: 0,
              x: noButtonPos.x,
              scale: noButtonScale,
            }}
            transition={{
              delay: noAttempts === 0 ? 0.5 : 0,
              duration: 0.3,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className={`btn-romantic-outline w-full max-w-[200px] text-xl cursor-pointer select-none ${
              isShaking ? 'animate-shake' : ''
            }`}
            style={{
              position: noAttempts > 0 ? 'absolute' : 'relative',
            }}
          >
            NO 🙈
          </motion.button>
        </div>

        {/* Hint after multiple attempts */}
        {noAttempts >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mt-6 italic"
          >
            Looks like someone doesn't want to be clicked... 😏
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};
