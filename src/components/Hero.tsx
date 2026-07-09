import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from './Magnetic';

interface FloatingWordProps {
  text: string;
  x: string;
  y: string;
  delay?: number;
  duration?: number;
  colorClass?: string;
}

const FloatingWord: React.FC<FloatingWordProps> = ({ 
  text, 
  x, 
  y, 
  delay = 0, 
  duration = 6,
  colorClass = "border-border-warm bg-soft-panel text-text-secondary hover:text-accent-main hover:border-accent-main/50"
}) => {
  
  return (
    <motion.div
      style={{ left: x, top: y, position: 'absolute' }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 5, 0],
        x: [0, 8, -5, 0]
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: duration + 1.5, repeat: Infinity, ease: "easeInOut", delay }
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
      dragElastic={0.4}
      className={`px-3 py-1.5 rounded-full border text-xs md:text-sm font-ui cursor-grab active:cursor-grabbing backdrop-blur-sm select-none shadow-md shadow-black/10 transition-colors duration-300 ${colorClass}`}
    >
      {text}
    </motion.div>
  );
};

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    }
  }
};

const titleWordVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="top" 
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center pt-24 pb-12 px-4 md:px-8 overflow-hidden bg-main-bg"
    >
      {/* Ambient Moving Blob */}
      <motion.div 
        animate={{ 
          x: [0, 60, -40, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="ambient-glow w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-accent-main/20 left-1/3 top-1/4"
      />

      <motion.div 
        animate={{ 
          x: [0, -50, 40, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="ambient-glow w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-accent-fresh/15 right-10 bottom-1/4"
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline and text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-fresh" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Portfolio / 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] mb-6 font-display max-w-2xl flex flex-wrap gap-x-[0.22em] gap-y-[0.05em]"
          >
            {["Building", "practical", "systems", "with"].map((word, i) => (
              <motion.span key={i} variants={titleWordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
            <motion.span variants={titleWordVariants} className="inline-block">
              <span className="text-accent-main">web</span>,
            </motion.span>
            <motion.span variants={titleWordVariants} className="inline-block">
              <span className="text-accent-soft">automation</span>,
            </motion.span>
            <motion.span variants={titleWordVariants} className="inline-block">
              data,
            </motion.span>
            <motion.span variants={titleWordVariants} className="inline-block">
              and
            </motion.span>
            <motion.span variants={titleWordVariants} className="inline-block text-accent-fresh">
              AI.
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mb-10 font-ui"
          >
            I’m an Informatics student who builds real-world projects — from WhatsApp moderation bots and cashier systems to machine learning experiments and database design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 font-ui"
          >
            <Magnetic>
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-accent-main text-main-bg font-medium text-sm transition-all duration-300 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent-main/10"
              >
                Explore Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border-warm bg-sec-bg/50 hover:bg-soft-panel hover:text-accent-main text-text-secondary text-sm transition-all duration-300"
              >
                GitHub
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column: Warm Abstract Composition with Floating Labels */}
        <div className="lg:col-span-5 h-[350px] md:h-[450px] relative w-full rounded-2xl border border-border-warm bg-sec-bg/25 backdrop-blur-[1px] overflow-hidden shadow-inner shadow-white/5">
          {/* Subtle Organic Background Grid/Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 50,-50 C 150,150 50,250 450,450" 
              fill="none" 
              stroke="var(--color-text-muted)" 
              strokeWidth="0.75" 
              strokeDasharray="4 4"
            />
            <path 
              d="M -10,120 C 150,180 300,100 500,280" 
              fill="none" 
              stroke="var(--color-border-warm)" 
              strokeWidth="1"
            />
            <circle cx="150" cy="180" r="3" fill="var(--color-accent-fresh)" opacity="0.5"/>
            <circle cx="300" cy="100" r="2" fill="var(--color-accent-main)" opacity="0.5"/>
          </svg>

          {/* Floating interactive labels */}
          <FloatingWord text="WhatsApp Bot" x="12%" y="15%" delay={0.1} duration={5.5} colorClass="bg-elevated-panel border-accent-fresh/30 text-accent-fresh" />
          <FloatingWord text="Laravel Cashier" x="48%" y="22%" delay={0.3} duration={6.2} />
          <FloatingWord text="CNN Model" x="15%" y="45%" delay={0.5} duration={5.8} colorClass="bg-elevated-panel border-accent-cool/30 text-accent-cool" />
          <FloatingWord text="RPG Database" x="52%" y="50%" delay={0.2} duration={6.8} />
          <FloatingWord text="C&C Studio" x="25%" y="78%" delay={0.6} duration={5.2} />
          <FloatingWord text="MySQL" x="72%" y="75%" delay={0.4} duration={6.5} />
          <FloatingWord text="n8n" x="75%" y="38%" delay={0.7} duration={5.9} colorClass="bg-elevated-panel border-accent-main/30 text-accent-main" />
          <FloatingWord text="Gemini" x="45%" y="70%" delay={0.8} duration={6.4} />

          {/* Info Badge in the bottom-left */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-main-bg/85 border border-border-warm text-[10px] text-text-muted font-ui pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse" />
            Drag label to interact
          </div>
        </div>

      </div>
    </section>
  );
};
