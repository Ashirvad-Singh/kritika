import { motion } from 'framer-motion';

interface PromiseScreenProps {
  onContinue: () => void;
}

export const PromiseScreen = ({ onContinue }: PromiseScreenProps) => {
  const promises = [
    'To always make you laugh',
    'To be there in every storm',
    'To grow together, not apart',
    'To choose you, every single day',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-auto">
        {/* Heart Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-5xl mb-6"
        >
          🤞💕
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-romantic text-2xl md:text-3xl text-rose-dark mb-8"
        >
          My promises to you
        </motion.h2>

        {/* Promise List */}
        <div className="space-y-3 mb-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
              className="flex items-center gap-3 justify-center"
            >
              <span className="text-rose">✦</span>
              <p className="text-foreground/80 font-light italic">{promise}</p>
            </motion.div>
          ))}
        </div>

        {/* Continue */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="btn-romantic w-full max-w-xs mx-auto"
        >
          Now ask me... 💍
        </motion.button>
      </div>
    </motion.div>
  );
};
