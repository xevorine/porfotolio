import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-main-bg text-text-primary selection:bg-accent-main selection:text-main-bg">
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />
      
      {/* Header Navigation */}
      <Navbar />
      
      {/* Core Scenes */}
      <main>
        <Hero />
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
