import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SimpleBackground } from './components/SimpleBackground';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { CVSection } from './components/CVSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [useSimpleBackground, setUseSimpleBackground] = useState(false);

  useEffect(() => {
    // Check for performance constraints
    const checkPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      if (isMobile || isLowEnd) {
        setUseSimpleBackground(true);
      }
    };
    
    checkPerformance();
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'research', 'cv', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      // Show scroll to top button when user scrolls down
      setShowScrollTop(window.scrollY > 300);

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-violet-50/80 to-blue-100/90 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-indigo-400/5" />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full mx-auto mb-4 shadow-lg"
          />
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mb-2 bg-gradient-to-r from-slate-700 to-indigo-600 bg-clip-text text-transparent"
          >
            Noor Osama
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground"
          >
            Loading portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/70 to-blue-100/80 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 text-foreground overflow-x-hidden relative">
      {/* Load background after initial render */}
      {!isLoading && (useSimpleBackground ? <SimpleBackground /> : <AnimatedBackground />)}
      
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      <main>
        <div id="hero">
          <HeroSection onSectionChange={handleSectionChange} />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="research">
          <ResearchSection />
        </div>
        
        <div id="cv">
          <CVSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer onSectionChange={handleSectionChange} />

      {/* Scroll to top indicator */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white cursor-pointer z-40 shadow-xl backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSectionChange('hero')}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <polyline points="18,15 12,9 6,15"></polyline>
        </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}