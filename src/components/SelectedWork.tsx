import React from 'react';
import { motion, useMotionValue, useMotionTemplate, useTransform, useSpring } from 'framer-motion';
import { projects } from '../data/projects';
import { AnimatedSection } from './AnimatedSection';

export const SelectedWork: React.FC = () => {
  const featuredProject = projects[0];
  const listProjects = projects.slice(1);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt Values
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPosition = e.clientX - rect.left;
    const mouseYPosition = e.clientY - rect.top;

    mouseX.set(mouseXPosition);
    mouseY.set(mouseYPosition);

    tiltX.set((mouseXPosition / width) - 0.5);
    tiltY.set((mouseYPosition / height) - 0.5);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section id="work" className="py-24 px-4 md:px-8 bg-sec-bg relative">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-main" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Showcase
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-text-primary font-display">
            Selected Work
          </h2>
        </AnimatedSection>

        {/* Featured Project (01) */}
        <AnimatedSection className="mb-20">
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            className="group relative rounded-2xl border border-border-warm bg-soft-panel overflow-hidden transition-colors duration-300 hover:border-accent-main/40 shadow-xl"
          >
            {/* Mouse Spotlight Overlay */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    380px circle at ${mouseX}px ${mouseY}px,
                    rgba(214, 168, 95, 0.12),
                    rgba(156, 175, 136, 0.04) 40%,
                    transparent 80%
                  )
                `,
              }}
            />
            {/* Visual background details */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-fresh/5 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10 items-center">
              {/* Content Part (Left) */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs md:text-sm font-ui mb-4">
                    <span className="font-semibold text-accent-main">{featuredProject.number}</span>
                    <span className="text-text-muted">/</span>
                    <span className="text-text-secondary">{featuredProject.category}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl text-text-primary font-display mb-4">
                    {featuredProject.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 font-ui">
                    {featuredProject.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack as inline dots */}
                  <div className="text-xs text-text-muted mb-6 font-ui">
                    <span className="text-accent-soft mr-2">Built with:</span>
                    {featuredProject.tech.join(" • ")}
                  </div>
                  
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-ui text-accent-main hover:text-accent-soft transition-colors duration-200 font-medium group/link link-underlined"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Graphical Part (Right) - Handcrafted abstract representation */}
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl bg-main-bg/50 border border-border-warm overflow-hidden flex flex-col justify-center p-6 select-none">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-main via-transparent to-transparent pointer-events-none" />
                
                {/* Simulated message warning flows */}
                <div className="space-y-4 relative z-10 font-ui text-[10px] md:text-xs">
                  
                  {/* Message row 1 */}
                  <div className="flex items-start gap-2.5 max-w-[85%]">
                    <div className="w-5 h-5 rounded-full bg-border-warm flex items-center justify-center text-[8px] text-text-secondary">U1</div>
                    <div className="bg-soft-panel border border-border-warm px-2.5 py-1.5 rounded-r-lg rounded-bl-lg text-text-secondary">
                      Hey, check out this links spam!
                    </div>
                  </div>

                  {/* Warning warning row */}
                  <div className="flex items-start gap-2.5 max-w-[90%] ml-auto flex-row-reverse">
                    <div className="w-5 h-5 rounded-full bg-accent-main/20 border border-accent-main/50 flex items-center justify-center text-[8px] text-accent-main">Bot</div>
                    <div className="bg-elevated-panel border border-accent-main/30 px-2.5 py-1.5 rounded-l-lg rounded-br-lg text-text-primary">
                      <div className="text-accent-main font-semibold mb-0.5 flex items-center gap-1">
                        ⚠️ Violation Detected
                      </div>
                      User U1: Warn 1/3 (Link restriction).
                    </div>
                  </div>

                  {/* Database insert indicator */}
                  <div className="flex items-center gap-2 text-text-muted justify-center py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-fresh animate-ping" />
                    <span className="font-mono text-[9px] tracking-wider uppercase">MySQL &gt; violation_log updated</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatedSection>

        {/* Regular Projects List Rows (02-05) */}
        <div className="space-y-0">
          {listProjects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.1}>
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: {},
                  hover: {}
                }}
                className="group relative border-b border-border-warm py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-accent-main/30"
              >
                {/* Warm highlight block behind row */}
                <div className="absolute inset-x-[-16px] inset-y-1 bg-soft-panel/0 group-hover:bg-soft-panel/30 rounded-xl transition-all duration-300 -z-10" />

                {/* Left side: Number, Title, Category */}
                <div className="flex items-start gap-4 md:gap-8 md:w-5/12">
                  <span className="font-display text-lg text-text-muted transition-colors duration-300 group-hover:text-accent-main">
                    {project.number}
                  </span>
                  
                  <div>
                    <h4 className="text-xl text-text-primary font-display transition-transform duration-300 group-hover:translate-x-1.5 mb-1.5">
                      {project.title}
                    </h4>
                    <span className="inline-block text-[11px] uppercase tracking-wider font-ui text-text-muted group-hover:text-accent-soft transition-colors duration-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Middle: Description & Tech */}
                <div className="md:w-5/12 font-ui">
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <p className="text-[11px] text-text-muted">
                    {project.tech.join(" · ")}
                  </p>
                </div>

                {/* Right side: Action Link */}
                <div className="md:w-2/12 flex md:justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-ui text-text-muted hover:text-accent-main transition-colors duration-200 group/link"
                  >
                    View Project
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
