import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import link from '../data/link';
const NavItem = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
    >
      {label}
    </button>
  );
};

const MobileNavItem = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-400 transition-colors"
    >
      {label}
    </button>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
    >
      {icon}
    </a>
  );
};

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
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
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Poovarasan S</h1>
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

            <div className="flex items-center pl-4 ml-4 border-l border-gray-200 dark:border-gray-700">
              <SocialLink href={link.github} icon={<Github className="w-5 h-5" />} />
              <SocialLink href={link.linkedin} icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href={link.gmail} icon={<Mail className="w-5 h-5" />} />
              
              {/* <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
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
        } md:hidden fixed inset-0 z-40 w-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out transform h-full flex flex-col`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 focus:outline-none"
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
            <SocialLink href="https://github.com/poovarasan13" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://www.linkedin.com/in/poovarasan13" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="mailto:poovarasan936161@gmail.com" icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;