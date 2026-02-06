import { motion } from 'framer-motion';
import { Confetti } from '../Confetti';
import { useState, useEffect } from 'react';

interface SuccessScreenProps {
  onFinalMessage: () => void;
}

export const SuccessScreen = ({ onFinalMessage }: SuccessScreenProps) => {
  const [showConfetti, setShowConfetti] = useState(true);

  // Share on WhatsApp
  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      "💖 I just said YES! 💍\n\nSomeone made my heart skip a beat today... and I said yes to forever. 💕"
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  // Stop confetti after longer duration
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Confetti active={showConfetti} duration={10000} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
      >
        {/* Main Glass Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-auto">
          {/* Big Heart Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="text-7xl md:text-8xl mb-6 animate-pulse-heart"
          >
            💖
          </motion.div>

          {/* Success Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-romantic text-2xl md:text-3xl font-semibold text-rose-dark mb-8 leading-relaxed"
          >
            You just made my heart permanently yours 💖
          </motion.h2>

          {/* Love Letter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/30 rounded-2xl p-6 mb-8 border border-white/40"
          >
            <p className="text-foreground/90 text-lg leading-relaxed font-light italic">
              "Perfect nahi hoon,
              <br />
              par jo bhi hoon, tumhare liye hoon.
              <br /><br />
              Agar future ek journey hai,
              <br />
              toh main chahunga tum mere saath chalo."
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-3"
          >
            <button
              onClick={shareOnWhatsApp}
              className="btn-romantic w-full max-w-xs mx-auto flex items-center justify-center gap-2"
            >
              Send this moment 💬
            </button>
            
            <button
              onClick={onFinalMessage}
              className="btn-romantic-outline w-full max-w-xs mx-auto"
            >
              Read one last thing 💝
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
