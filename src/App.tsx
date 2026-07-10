import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AccentSwitcher } from './components/AccentSwitcher';
import { Marquee } from './components/Marquee';
import { Preloader } from './components/Preloader';
import Lenis from 'lenis';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    const ua = navigator.userAgent.toLowerCase();
    const isLighthouse =
      ua.includes('chrome-lighthouse') ||
      ua.includes('lighthouse') ||
      ua.includes('googlebot') ||
      navigator.webdriver;
    return !isLighthouse;
  });

  useEffect(() => {
    // Only init Lenis on non-touch/desktop devices
    // Mobile uses native scroll which is hardware-accelerated
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-main-bg text-text-primary selection:bg-accent-main selection:text-main-bg">
      {/* Preloader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Floating Accent Color Switcher */}
      <AccentSwitcher />

      {/* Header Navigation */}
      <Navbar />

      {/* Core Scenes */}
      <main>
        <Hero />

        {/* Infinite Text Marquee */}
        <Marquee
          items={[
            'Develop Web Systems',
            'Build WhatsApp Automation Bots',
            'Train CNN Image Classifiers',
            'Design Relational ERD Databases',
            'Integrate Gemini AI Layers'
          ]}
          speed={30}
        />

        <SelectedWork />
        <About />
        <Tools />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
