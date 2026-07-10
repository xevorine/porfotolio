import React, { useEffect, useRef, useState } from 'react';
import { Magnetic } from './Magnetic';
const WORDS = [
  { text: 'WhatsApp Bot', x: '12%', y: '15%', colorClass: 'border-accent-fresh/30 text-accent-fresh bg-elevated-panel' },
  { text: 'Web Chatbot', x: '48%', y: '22%', colorClass: 'border-border-warm bg-soft-panel text-text-secondary' },
  { text: 'Hate Speech NLP', x: '15%', y: '45%', colorClass: 'border-accent-cool/30 text-accent-cool bg-elevated-panel' },
  { text: 'Tournament DB', x: '52%', y: '50%', colorClass: 'border-border-warm bg-soft-panel text-text-secondary' },
  { text: 'C&C Studio', x: '25%', y: '78%', colorClass: 'border-border-warm bg-soft-panel text-text-secondary' },
  { text: 'MySQL', x: '72%', y: '75%', colorClass: 'border-border-warm bg-soft-panel text-text-secondary' },
  { text: 'n8n', x: '75%', y: '38%', colorClass: 'border-accent-main/30 text-accent-main bg-elevated-panel' },
  { text: 'Gemini', x: '45%', y: '70%', colorClass: 'border-border-warm bg-soft-panel text-text-secondary' },
];

const titleWords = ['Building', 'practical', 'systems', 'with'];

export const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center pt-24 pb-12 px-4 md:px-8 overflow-hidden bg-main-bg"
    >
      {/* Ambient Blobs — pure CSS animation, no JS per-frame */}
      <div className="ambient-glow w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-accent-main/20 left-1/3 top-1/4 animate-blob-drift-1" />
      <div className="ambient-glow w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-accent-fresh/15 right-10 bottom-1/4 animate-blob-drift-2" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Label */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
            }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-fresh" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-ui">
              Portfolio / 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] mb-6 font-display max-w-2xl flex flex-wrap gap-x-[0.22em] gap-y-[0.05em]">
            {titleWords.map((word, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(22px)',
                  transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.08}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.08}s`,
                }}
              >
                {word}
              </span>
            ))}
            <span
              className="inline-block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 4 * 0.08}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 4 * 0.08}s`,
              }}
            >
              <span className="text-accent-main">web</span>,
            </span>
            <span
              className="inline-block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 5 * 0.08}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 5 * 0.08}s`,
              }}
            >
              <span className="text-accent-soft">automation</span>,
            </span>
            <span
              className="inline-block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 6 * 0.08}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 6 * 0.08}s`,
              }}
            >
              data,
            </span>
            <span
              className="inline-block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 7 * 0.08}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 7 * 0.08}s`,
              }}
            >
              and
            </span>
            <span
              className="inline-block text-accent-fresh"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 8 * 0.08}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${0.15 + 8 * 0.08}s`,
              }}
            >
              AI.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s',
            }}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mb-10 font-ui"
          >
            I'm an Informatics student who builds real-world projects — from WhatsApp moderation bots and cashier systems to machine learning experiments and database design.
          </p>

          {/* Buttons */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s',
            }}
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
                href="https://github.com/xevorine"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border-warm bg-sec-bg/50 hover:bg-soft-panel hover:text-accent-main text-text-secondary text-sm transition-all duration-300"
              >
                GitHub
              </a>
            </Magnetic>
          </div>

          {/* Scroll Down Indicator */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 1.2s',
            }}
            className="mt-10 flex flex-col items-start gap-1.5"
          >
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-ui">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-accent-main/60 to-transparent animate-scroll-line" />
          </div>
        </div>

        {/* Right Column: Floating Labels — CSS only */}
        <div className="lg:col-span-5 h-[350px] md:h-[450px] relative w-full rounded-2xl border border-border-warm bg-sec-bg/25 backdrop-blur-[1px] overflow-hidden shadow-inner shadow-white/5">
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50,-50 C 150,150 50,250 450,450" fill="none" stroke="var(--color-text-muted)" strokeWidth="0.75" strokeDasharray="4 4" />
            <path d="M -10,120 C 150,180 300,100 500,280" fill="none" stroke="var(--color-border-warm)" strokeWidth="1" />
            <circle cx="150" cy="180" r="3" fill="var(--color-accent-fresh)" opacity="0.5" />
            <circle cx="300" cy="100" r="2" fill="var(--color-accent-main)" opacity="0.5" />
          </svg>

          {WORDS.map((word, i) => (
            <span
              key={word.text}
              style={{
                left: word.x,
                top: word.y,
                position: 'absolute',
                animationDelay: `${i * 0.4}s`,
              }}
              className={`px-3 py-1.5 rounded-full border text-xs md:text-sm font-ui backdrop-blur-sm select-none shadow-md shadow-black/10 animate-float-${(i % 3) + 1} transition-colors duration-300 ${word.colorClass}`}
            >
              {word.text}
            </span>
          ))}

          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-main-bg/85 border border-border-warm text-[10px] text-text-muted font-ui pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-main animate-pulse" />
            Floating labels
          </div>
        </div>

      </div>
    </section>
  );
};
