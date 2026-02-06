import { motion } from 'framer-motion';

interface ForeverScreenProps {
  onContinue: () => void;
}

export const ForeverScreen = ({ onContinue }: ForeverScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-auto">
        {/* Ring Emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 12 }}
          className="text-6xl md:text-7xl mb-8"
        >
          💍✨
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          <p className="font-romantic text-xl md:text-2xl text-rose-dark leading-relaxed">
            From this moment forward...
          </p>
          <p className="text-foreground/80 text-lg font-light leading-relaxed">
            Every sunrise will remind me of your smile.
          </p>
          <p className="text-foreground/80 text-lg font-light leading-relaxed">
            Every sunset will be a promise kept.
          </p>
        </motion.div>

        {/* Continue */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="btn-romantic w-full max-w-xs mx-auto"
        >
          One more thing... 💫
        </motion.button>
      </div>
    </motion.div>
  );
};
