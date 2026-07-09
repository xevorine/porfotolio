import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number; // duration of animation in seconds
}

export const Marquee: React.FC<MarqueeProps> = ({ items, speed = 25 }) => {
  const content = items.join("  •  ") + "  •  ";

  return (
    <div className="relative w-full overflow-hidden py-5 border-y border-border-warm bg-sec-bg/25 backdrop-blur-[1px] select-none">
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap text-[10px] md:text-xs uppercase tracking-[0.3em] font-ui text-text-muted/65"
        >
          <span className="pr-4">{content}</span>
          <span className="pr-4">{content}</span>
        </motion.div>
      </div>
    </div>
  );
};
