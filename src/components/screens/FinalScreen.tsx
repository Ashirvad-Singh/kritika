import { motion } from 'framer-motion';

export const FinalScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      {/* Main Glass Card */}
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-auto">
        {/* Sparkle */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 12 }}
          className="text-6xl md:text-7xl mb-8"
        >
          ✨💕✨
        </motion.div>

        {/* Final Poetic Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="font-romantic text-2xl md:text-3xl text-rose-dark leading-relaxed font-medium">
            "Some choices don't change a day…
          </p>
          <p className="font-romantic text-2xl md:text-3xl text-foreground/80 leading-relaxed mt-2 italic">
            they change a life."
          </p>
        </motion.div>

        {/* Forever Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10"
        >
          <p className="text-lg text-muted-foreground">
            Thank you for choosing us. 💖
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-4xl mt-4"
          >
            🥂
          </motion.div>
        </motion.div>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-sm text-foreground/50 mt-8 font-romantic italic"
        >
          — With all my love, forever yours
        </motion.p>
      </div>
    </motion.div>
  );
};
