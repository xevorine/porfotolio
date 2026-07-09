import React from 'react';
import { motion } from 'framer-motion';
import { toolGroups } from '../data/tools';
import { AnimatedSection } from './AnimatedSection';

export const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-24 px-4 md:px-8 bg-sec-bg relative">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Title */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Stack & Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-text-primary font-display">
            Tools I Use
          </h2>
        </AnimatedSection>

        {/* Grouped organic clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {toolGroups.map((group, groupIdx) => (
            <AnimatedSection 
              key={group.category} 
              delay={groupIdx * 0.1}
              className="p-6 rounded-xl border border-border-warm bg-soft-panel/20 backdrop-blur-sm"
            >
              {/* Category Header */}
              <h3 className="text-xs uppercase tracking-widest font-ui text-text-muted mb-4 pb-2 border-b border-border-warm/50 flex justify-between items-center">
                <span>{group.category}</span>
                <span className="text-[10px] text-text-muted opacity-50">Cluster {groupIdx + 1}</span>
              </h3>

              {/* Group items wrapper with organic wrap */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, itemIdx) => {
                  // Calculate semi-random floating params based on index
                  const floatDuration = 4 + ((itemIdx + groupIdx) % 3);
                  const floatDelay = (itemIdx * 0.2) % 1.5;
                  
                  return (
                    <motion.span
                      key={item}
                      custom={itemIdx}
                      animate={{
                        y: [0, -5, 0],
                        x: [0, 2, 0]
                      }}
                      transition={{
                        duration: floatDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: floatDelay
                      }}
                      whileHover={{ 
                        scale: 1.04, 
                        y: -3,
                        transition: { duration: 0.2 } 
                      }}
                      className="px-3 py-1.5 text-xs md:text-sm font-ui rounded-lg border border-border-warm bg-elevated-panel/40 text-text-secondary hover:text-accent-main hover:border-accent-main/30 cursor-default select-none shadow-sm shadow-black/5 transition-colors duration-200"
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
