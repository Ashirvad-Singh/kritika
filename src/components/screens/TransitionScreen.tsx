import { motion } from 'framer-motion';

interface TransitionScreenProps {
  onContinue: () => void;
}

export const TransitionScreen = ({ onContinue }: TransitionScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-auto">
        {/* Envelope Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
          className="text-7xl md:text-8xl mb-8"
        >
          💌
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          <p className="font-romantic text-2xl md:text-3xl text-rose-dark leading-relaxed">
            Before I ask you something...
          </p>
          <p className="text-foreground/70 text-lg font-light italic">
            Take a deep breath.
          </p>
          <p className="text-foreground/70 text-lg font-light italic">
            This moment matters to me.
          </p>
        </motion.div>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="btn-romantic w-full max-w-xs mx-auto"
        >
          I'm ready 💕
        </motion.button>
      </div>
    </motion.div>
  );
};
