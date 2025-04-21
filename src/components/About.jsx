import React from 'react';
import image from '../assets/images/mine.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Image Column - Takes full width on mobile, 1/3 on desktop */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] border-4 border-white dark:border-gray-700">
                <img 
                  src={image} 
                  alt="Poovarasan" 
                  className="w-full h-auto object-cover aspect-square lg:aspect-[3/4]"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-indigo-400/30 rounded-xl pointer-events-none -z-10"></div>
            </div>
          </motion.div>

          {/* Content Column - Takes full width on mobile, 2/3 on desktop */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              I'm a Frontend Developer with a passion for UI/UX
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                I'm Poovarasan, a passionate MernStack Developer from Coimbatore, India with a strong background in creating responsive and interactive web applications. My journey in web development started when I was in college, and since then, I've been constantly learning and evolving my skills.
              </p>
              
              <p className="leading-relaxed">
                I specialize in HTML, CSS, JavaScript, and modern frameworks like React. I'm dedicated to writing clean, maintainable code and creating user-friendly interfaces that deliver exceptional user experiences.
              </p>
              
              <p className="leading-relaxed">
                Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and expanding my knowledge in the ever-evolving field of web development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-300">B.Tech in Information Technology</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Karpagam College of Engineering</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Coimbatore</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="pt-6">
              <motion.a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;