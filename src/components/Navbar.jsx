import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import link from '../data/link';
const NavItem = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-3 py-2 text-sm font-semibold text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-cyber-cyan transition-all duration-200 group cursor-pointer font-display"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-cyber-cyan transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
};

const MobileNavItem = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 text-xl font-bold text-gray-800 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-cyber-cyan transition-all duration-200 group cursor-pointer font-display"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-0 left-1/4 w-0 h-0.5 bg-indigo-600 dark:bg-cyber-cyan transition-all duration-300 group-hover:w-1/2"></span>
    </button>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-cyber-cyan dark:hover:bg-cyber-card-dark transition-all duration-250"
    >
      {icon}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-cyber-dark/80 backdrop-blur-md border-b border-indigo-500/10 dark:border-cyber-cyan/15 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,242,254,0.05)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-2xl font-bold tracking-wider text-indigo-600 dark:text-cyber-cyan font-display dark:drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">
              &lt;POOVARASAN S /&gt;
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <NavItem label="About" onClick={() => scrollToSection('about')} />
              <NavItem label="Skills" onClick={() => scrollToSection('skills')} />
              <NavItem label="Projects" onClick={() => scrollToSection('projects')} />
              <NavItem label="Education" onClick={() => scrollToSection('education')} />
              <NavItem label="Contact" onClick={() => scrollToSection('contact')} />
            </div>

            <div className="flex items-center pl-4 ml-4 border-l border-gray-200 dark:border-gray-800 space-x-2">
              <SocialLink href={link.github} icon={<Github className="w-4 h-4" />} />
              <SocialLink href={link.linkedin} icon={<Linkedin className="w-4 h-4" />} />
              <SocialLink href={link.gmail} icon={<Mail className="w-4 h-4" />} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden fixed inset-0 z-40 w-full bg-white/95 dark:bg-cyber-dark/95 backdrop-blur-lg transition-all duration-300 ease-in-out transform h-full flex flex-col cyber-grid`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-100 dark:border-cyber-border-dark">
          <span className="text-xl font-bold text-indigo-600 dark:text-cyber-cyan font-display">
            &lt;MENU /&gt;
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-cyber-cyan focus:outline-none"
          >
            <X className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
          <MobileNavItem label="About" onClick={() => scrollToSection('about')} />
          <MobileNavItem label="Skills" onClick={() => scrollToSection('skills')} />
          <MobileNavItem label="Projects" onClick={() => scrollToSection('projects')} />
          <MobileNavItem label="Education" onClick={() => scrollToSection('education')} />
          <MobileNavItem label="Contact" onClick={() => scrollToSection('contact')} />
          
          <div className="flex items-center space-x-4 pt-8">
            <SocialLink href={link.github} icon={<Github className="w-5 h-5" />} />
            <SocialLink href={link.linkedin} icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href={link.gmail} icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;