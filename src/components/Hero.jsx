import React, { useEffect, useState } from 'react';
import { ChevronDown, MousePointerClick, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["Java Full Stack Developer","MernStack Developer", "Web Designer"];
  const [isLoadingCv, setIsLoadingCv] = useState(false);
  const RESUME_LINK = "https://drive.google.com/file/d/1Y5OyVdkzT-DkuaR3bxO3QdjKuyOjaQK5/view?usp=sharing";

  const handleDownloadCv = (e) => {
    e.preventDefault();
    setIsLoadingCv(true);
    const link = document.createElement('a');
    link.href = RESUME_LINK;
    link.download = `Poovarasan_Resume_${new Date().toISOString().slice(0, 10)}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsLoadingCv(false), 1000);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-cyber-dark cyber-grid scanline-container transition-colors duration-300"
    >
      {/* Tech Ambient Neon Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-72 md:w-96 h-72 md:h-96 bg-indigo-500/10 dark:bg-cyber-cyan/10 rounded-full filter blur-[80px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/10 w-80 md:w-[450px] h-80 md:h-[450px] bg-purple-500/10 dark:bg-cyber-purple/10 rounded-full filter blur-[100px] md:blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto tech-bracket-container py-12 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-xs uppercase font-mono tracking-[0.25em] text-indigo-600 dark:text-cyber-cyan mb-3 dark:drop-shadow-[0_0_5px_rgba(0,242,254,0.3)]">
            // INITIALIZING PORTFOLIO...
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight font-display tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyber-cyan dark:to-cyber-purple dark:drop-shadow-[0_0_15px_rgba(0,242,254,0.25)]">
              Poovarasan
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-12 font-mono">
            &lt;{' '}
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 70,
                cursor: '_',
              }}
            />
            {' '}/&gt;
          </h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build responsive, high-performance web applications using modern technology stacks. Focused on translating clean code into elegant, interactive user experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-cyber-cyan dark:to-cyber-purple dark:text-cyber-dark dark:hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              Contact Me
              <MousePointerClick className="w-4 h-4" />
            </motion.a>
            
            <motion.a
              href={RESUME_LINK}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg text-indigo-600 bg-white border border-indigo-600 hover:bg-gray-50 dark:text-cyber-cyan dark:bg-transparent dark:border-cyber-cyan dark:hover:bg-cyber-cyan/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] shadow-md"
              onClick={handleDownloadCv}
              download
            >
              {isLoadingCv ? 'Downloading...' : 'Download CV'}
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll to About section"
          className="group p-3 rounded-full text-gray-400 hover:text-indigo-600 dark:hover:text-cyber-cyan focus:outline-none flex flex-col items-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mb-1"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
          <span className="text-[10px] uppercase font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            scroll_down
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
