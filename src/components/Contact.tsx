import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Magnetic } from './Magnetic';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 bg-main-bg relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.12, 0.18, 0.12]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="ambient-glow w-[350px] h-[350px] bg-accent-soft/10 left-1/4 bottom-0 -translate-x-1/2"
      />
      
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section label */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Get in touch
            </span>
          </div>
        </AnimatedSection>

        {/* Large Friendly Heading */}
        <AnimatedSection delay={0.1} className="mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary font-display max-w-2xl mx-auto leading-tight">
            Let’s build something <span className="italic text-accent-main">practical</span>.
          </h2>
        </AnimatedSection>

        {/* Short Text Description */}
        <AnimatedSection delay={0.2} className="mb-12">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-ui max-w-lg mx-auto">
            Interested in discussing projects, reviewing my work, or collaborating? Feel free to reach out.
          </p>
        </AnimatedSection>

        {/* Simple Links with subtle styling */}
        <AnimatedSection delay={0.3} className="flex flex-wrap items-center justify-center gap-8 md:gap-12 font-ui text-sm md:text-base">
          <Magnetic>
            <a
              href="mailto:email@example.com"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-main transition-colors duration-200 link-underlined py-1"
            >
              Email
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-main transition-colors duration-200 link-underlined py-1"
            >
              LinkedIn
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-main transition-colors duration-200 link-underlined py-1"
            >
              GitHub
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Magnetic>
        </AnimatedSection>

      </div>
    </section>
  );
};
