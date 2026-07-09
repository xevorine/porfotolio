import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-main-bg relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute left-10 bottom-10 w-64 h-64 bg-accent-soft/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto">
        
        {/* Title */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-fresh" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Philosophy
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-text-primary font-display">
            About
          </h2>
        </AnimatedSection>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Narrative Paragraph */}
          <div className="lg:col-span-8">
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-ui mb-8">
                I like building projects that connect technical ideas with practical use cases. My work usually starts from a real problem: moderating a WhatsApp group, helping a business record transactions, comparing ML models, or designing structured database systems.
              </p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed font-ui">
                Rather than chasing abstract engineering trends, I focus on building tools that solve immediate challenges. I believe software should be approachable, predictable, and clean, bridging functional database design with friendly user interfaces.
              </p>
            </AnimatedSection>
          </div>

          {/* Right Column: Focus Side Notes (No cards, just human notes) */}
          <div className="lg:col-span-4 lg:pl-6">
            <AnimatedSection delay={0.2}>
              <div className="border-l border-border-warm pl-6 space-y-6 py-2">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-ui text-accent-main mb-1.5">
                    Web Systems
                  </h4>
                  <p className="text-xs text-text-muted leading-normal font-ui">
                    Creating secure transaction flows, clean APIs, and dashboard systems for small business needs.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-ui text-accent-fresh mb-1.5">
                    AI Automation
                  </h4>
                  <p className="text-xs text-text-muted leading-normal font-ui">
                    Integrating chat agents, moderation layers, and n8n schedules to skip manual admin work.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-ui text-accent-soft mb-1.5">
                    Data Structures
                  </h4>
                  <p className="text-xs text-text-muted leading-normal font-ui">
                    Drafting clean, normalized SQL tables and ERDs to keep database operations fast and logical.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-ui text-accent-cool mb-1.5">
                    UI Design
                  </h4>
                  <p className="text-xs text-text-muted leading-normal font-ui">
                    Crafting uncluttered, responsive interfaces with clear hierarchies and smooth feedback.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
};
