import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
            document.body.style.overflow = '';
          }, 350); // Small delay to appreciate the 100% state
          return 100;
        }
        // Organic progress increments
        const increment = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-12 bg-[#0F1110] text-[#F4F2EC] select-none overflow-hidden"
    >
      {/* Decorative top-left context */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-text-muted font-ui">
          Bivan's Portfolio
        </span>
      </div>

      {/* Center content: Expanding name */}
      <div className="flex flex-col items-center justify-center my-auto">
        <motion.h1 
          style={{ 
            letterSpacing: `${0.1 + (progress / 100) * 0.4}em`,
            opacity: 0.15 + (progress / 100) * 0.85
          }}
          className="text-2xl md:text-4xl text-center uppercase font-display text-text-primary transition-all duration-150"
        >
          Bivan Pramudyto
        </motion.h1>
      </div>

      {/* Bottom status: Percentage load */}
      <div className="flex items-end justify-between font-ui">
        <div className="text-[10px] text-text-muted uppercase tracking-wider">
          Initializing experience...
        </div>
        <div className="text-4xl md:text-6xl font-light text-accent-main select-none tabular-nums">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
};
