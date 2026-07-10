import React, { useState, useEffect, useRef } from 'react';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Tools', href: '#tools' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Entry animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update scroll state
      setScrolled(scrollY > 20);

      // Update scroll progress bar via direct DOM — no React state re-render
      if (progressRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (max > 0) {
          progressRef.current.style.transform = `scaleX(${scrollY / max})`;
        }
      }

      // Active section detection
      const scrollPosition = scrollY + 150;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
      className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        scrolled ? 'top-3' : 'top-5'
      }`}
    >
      <nav className="relative overflow-hidden flex items-center justify-between w-full max-w-4xl h-12 px-4 md:px-6 rounded-full border border-border-warm bg-sec-bg/75 backdrop-blur-md shadow-lg shadow-black/20">
        {/* Scroll Progress Bar — updated via direct DOM ref, not React state */}
        <div
          ref={progressRef}
          className="absolute top-0 left-0 right-0 h-[2px] bg-accent-main origin-left"
          style={{ transform: 'scaleX(0)', willChange: 'transform' }}
        />

        {/* Left: Name */}
        <a
          href="#top"
          className="font-display text-sm md:text-base tracking-wide text-text-primary hover:text-accent-main transition-colors duration-200"
        >
          <span className="hidden sm:inline">Bivan Pramudyto</span>
          <span className="inline sm:hidden">Bivan P.</span>
        </a>

        {/* Right: Navigation Items */}
        <div className="flex items-center gap-3 md:gap-6">
          <ul className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-text-secondary">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative py-1 px-2 transition-colors duration-200 hover:text-text-primary ${
                    activeSection === item.href ? 'text-accent-main font-medium' : ''
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-accent-main rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-border-warm" />

          <a
            href="https://github.com/xevorine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 text-xs md:text-sm text-text-muted hover:text-accent-main transition-colors duration-200"
          >
            GitHub
            <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};
