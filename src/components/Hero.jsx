import React, { useEffect, useState } from 'react';
import { ChevronDown, MousePointerClick, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["MernStack Developer", "Web Designer"];
  const [isLoadingCv, setIsLoadingCv] = useState(false);
  const RESUME_LINK = "https://drive.google.com/file/d/1481n_E8Ohc9v9Aeke3CrX8LJDZ9UhLse/view?usp=sharing";

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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '300% 300%',
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgwLDAsMCwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Poovarasan
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6 h-12">
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
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build exceptional and accessible digital experiences for the web with a focus on performance, accessibility, and clean code.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 text-base font-medium rounded-lg text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-gray-50 dark:text-indigo-400 dark:bg-gray-800 dark:border-indigo-400 dark:hover:bg-gray-700 shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
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
          className="group p-3 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mb-1"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;