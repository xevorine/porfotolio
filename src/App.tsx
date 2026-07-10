import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { AccentSwitcher } from './components/AccentSwitcher';
import { Marquee } from './components/Marquee';
import { Preloader } from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    // Initialize Lenis smooth scroll
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
  }, [isLoading]);

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
      
      {/* Custom Interactive Cursor */}
      <CustomCursor />

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
            "Develop Web Systems", 
            "Build WhatsApp Automation Bots", 
            "Train CNN Image Classifiers", 
            "Design Relational ERD Databases", 
            "Integrate Gemini AI Layers"
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
