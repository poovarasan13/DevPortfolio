import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Experience /> */}
          <Education/>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;