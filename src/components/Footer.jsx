import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import link from '../data/link';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href={link.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={link.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={link.gmail}
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Poovarasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;