import React, { useState, useEffect, useRef } from 'react';

interface Theme {
  name: string;
  label: string;
  bg: string;       // swatch preview: background color
  accent: string;   // swatch preview: accent dot color
  vars: Record<string, string>;
}

const themes: Theme[] = [
  {
    name: 'warm-olive',
    label: 'Warm Olive',
    bg: '#0F1110',
    accent: '#D6A85F',
    vars: {
      '--color-main-bg':       '#0F1110',
      '--color-sec-bg':        '#151817',
      '--color-soft-panel':    '#1B1F1D',
      '--color-elevated-panel':'#222724',
      '--color-border-warm':   '#2F3632',
      '--color-text-primary':  '#F4F2EC',
      '--color-text-secondary':'#A8AEA8',
      '--color-text-muted':    '#7F8780',
      '--color-accent-main':   '#D6A85F',
      '--color-accent-soft':   '#E7D8B7',
      '--color-accent-fresh':  '#9CAF88',
      '--color-accent-cool':   '#8FB8B2',
    }
  },
  {
    name: 'nordic-charcoal',
    label: 'Nordic Charcoal',
    bg: '#121315',
    accent: '#7CAAE6',
    vars: {
      '--color-main-bg':       '#121315',
      '--color-sec-bg':        '#18191B',
      '--color-soft-panel':    '#1F2124',
      '--color-elevated-panel':'#26292D',
      '--color-border-warm':   '#2C2F34',
      '--color-text-primary':  '#F3F4F6',
      '--color-text-secondary':'#9CA3AF',
      '--color-text-muted':    '#6B7280',
      '--color-accent-main':   '#7CAAE6',
      '--color-accent-soft':   '#C3D7F7',
      '--color-accent-fresh':  '#A6E3A1',
      '--color-accent-cool':   '#B4BFEF',
    }
  },
  {
    name: 'deep-forest',
    label: 'Deep Forest',
    bg: '#0B0F0D',
    accent: '#7EC8A0',
    vars: {
      '--color-main-bg':       '#0B0F0D',
      '--color-sec-bg':        '#111713',
      '--color-soft-panel':    '#171E1A',
      '--color-elevated-panel':'#1E2821',
      '--color-border-warm':   '#283128',
      '--color-text-primary':  '#E8F0EA',
      '--color-text-secondary':'#9AB09A',
      '--color-text-muted':    '#6A807A',
      '--color-accent-main':   '#7EC8A0',
      '--color-accent-soft':   '#B8E4CA',
      '--color-accent-fresh':  '#F7C97E',
      '--color-accent-cool':   '#82B4C8',
    }
  },
  {
    name: 'obsidian',
    label: 'Obsidian',
    bg: '#0E0B16',
    accent: '#B59AE6',
    vars: {
      '--color-main-bg':       '#0E0B16',
      '--color-sec-bg':        '#13101E',
      '--color-soft-panel':    '#1A1626',
      '--color-elevated-panel':'#221D30',
      '--color-border-warm':   '#312C45',
      '--color-text-primary':  '#F2F0FF',
      '--color-text-secondary':'#A89FC0',
      '--color-text-muted':    '#6F6888',
      '--color-accent-main':   '#B59AE6',
      '--color-accent-soft':   '#D8CCFF',
      '--color-accent-fresh':  '#92D9A8',
      '--color-accent-cool':   '#89C4E1',
    }
  },
];

const STORAGE_KEY = 'portfolio-theme';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });
  // Also update body background directly so it syncs instantly
  document.body.style.backgroundColor = theme.vars['--color-main-bg'];
  localStorage.setItem(STORAGE_KEY, theme.name);
}

export const AccentSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('warm-olive');
  const panelRef = useRef<HTMLDivElement>(null);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || 'warm-olive';
    const theme = themes.find(t => t.name === saved) || themes[0];
    setActiveTheme(theme.name);
    applyTheme(theme);
  }, []);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [isOpen]);

  const handleSelect = (theme: Theme) => {
    setActiveTheme(theme.name);
    applyTheme(theme);
    setIsOpen(false);
  };

  const current = themes.find(t => t.name === activeTheme) || themes[0];

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">

      {/* Theme Panel */}
      <div
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}
        className="flex flex-col gap-1.5 p-2.5 rounded-2xl border border-border-warm bg-soft-panel/90 backdrop-blur-md shadow-xl shadow-black/40 min-w-[170px]"
      >
        <p className="text-[9px] uppercase tracking-widest text-text-muted font-ui px-1.5 mb-0.5">
          Theme
        </p>
        {themes.map((theme) => {
          const isActive = activeTheme === theme.name;
          return (
            <button
              key={theme.name}
              onClick={() => handleSelect(theme)}
              className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-elevated-panel text-text-primary'
                  : 'text-text-secondary hover:bg-elevated-panel/50 hover:text-text-primary'
              }`}
            >
              {/* Theme swatch: mini two-tone circle */}
              <span className="relative flex-shrink-0 w-5 h-5 rounded-full overflow-hidden border border-white/10 shadow-sm">
                <span
                  className="absolute inset-0"
                  style={{ background: theme.bg }}
                />
                <span
                  className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full"
                  style={{ background: theme.accent }}
                />
              </span>

              <span className="text-xs font-ui leading-none">{theme.label}</span>

              {/* Active check */}
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: current.accent }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-10 h-10 rounded-full flex items-center justify-center border border-border-warm bg-soft-panel/90 text-text-secondary hover:text-accent-main hover:border-accent-main/40 shadow-lg cursor-pointer transition-all duration-300 active:scale-95"
        title="Change Theme"
      >
        {/* Two-tone swatch icon of current theme */}
        <span className="relative w-5 h-5 rounded-full overflow-hidden border border-white/15">
          <span className="absolute inset-0" style={{ background: current.bg }} />
          <span
            className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full"
            style={{ background: current.accent }}
          />
        </span>
      </button>
    </div>
  );
};
