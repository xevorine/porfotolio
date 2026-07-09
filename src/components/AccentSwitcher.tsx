import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemePalette {
  name: string;
  color: string; // Color representative for the button
  main: string;
  soft: string;
  fresh: string;
  cool: string;
}

const themes: ThemePalette[] = [
  {
    name: 'Gold',
    color: '#D6A85F',
    main: '#D6A85F',
    soft: '#E7D8B7',
    fresh: '#9CAF88',
    cool: '#8FB8B2'
  },
  {
    name: 'Forest',
    color: '#9CAF88',
    main: '#9CAF88',
    soft: '#C5D2B1',
    fresh: '#D6A85F',
    cool: '#7DA2A9'
  },
  {
    name: 'Clay',
    color: '#C87A53',
    main: '#C87A53',
    soft: '#E5C3B2',
    fresh: '#9CAF88',
    cool: '#8FB8B2'
  },
  {
    name: 'Nordic',
    color: '#8FB8B2',
    main: '#8FB8B2',
    soft: '#C5DFDC',
    fresh: '#D6A85F',
    cool: '#8BA39F'
  }
];

export const AccentSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('Gold');

  // Load theme on mount
  useEffect(() => {
    const savedThemeName = localStorage.getItem('portfolio-accent-theme') || 'Gold';
    const theme = themes.find(t => t.name === savedThemeName) || themes[0];
    applyTheme(theme);
  }, []);

  const applyTheme = (theme: ThemePalette) => {
    setActiveTheme(theme.name);
    localStorage.setItem('portfolio-accent-theme', theme.name);
    
    // Set custom CSS properties on root
    const root = document.documentElement;
    root.style.setProperty('--color-accent-main', theme.main);
    root.style.setProperty('--color-accent-soft', theme.soft);
    root.style.setProperty('--color-accent-fresh', theme.fresh);
    root.style.setProperty('--color-accent-cool', theme.cool);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-border-warm bg-sec-bg/85 backdrop-blur-md shadow-lg shadow-black/35"
          >
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => applyTheme(theme)}
                style={{ backgroundColor: theme.color }}
                title={`${theme.name} Theme`}
                className={`w-5 h-5 rounded-full relative cursor-pointer transition-transform duration-200 hover:scale-120 ${
                  activeTheme === theme.name 
                    ? 'ring-2 ring-text-primary ring-offset-2 ring-offset-main-bg scale-110' 
                    : ''
                }`}
              >
                <span className="sr-only">{theme.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex items-center justify-center border border-border-warm bg-soft-panel/90 text-text-secondary hover:text-accent-main hover:border-accent-main/40 shadow-lg cursor-pointer transition-all duration-300 active:scale-95"
        title="Change Accent Color"
      >
        <svg 
          className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180 text-accent-main' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.747 6.747 0 0 0-3.42-3.42" />
        </svg>
      </button>
    </div>
  );
};
