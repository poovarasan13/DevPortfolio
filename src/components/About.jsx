import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-cyber-dark relative overflow-hidden transition-colors duration-300">
      {/* Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-100">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyber-purple/5 dark:bg-cyber-purple/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 dark:bg-cyber-cyan mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display text-center sm:text-left">
            I'm a Frontend Developer with a passion for UI/UX
          </h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p className="leading-relaxed">
              I'm Poovarasan, a passionate MernStack Developer from Dharmapuri, India with a strong background in creating responsive and interactive web applications. My journey in web development started when I was in college, and since then, I've been constantly learning and evolving my skills.
            </p>
            
            <p className="leading-relaxed">
              I specialize in HTML, CSS, JavaScript, and modern frameworks like React. I'm dedicated to writing clean, maintainable code and creating user-friendly interfaces that deliver exceptional user experiences.
            </p>
            
            <p className="leading-relaxed font-mono text-sm text-indigo-600 dark:text-cyber-cyan">
              // current_focus: "Building robust high-performance interfaces & APIs"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="glass-panel p-5 rounded-xl border border-gray-100 dark:border-cyber-border-dark relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-gray-400 dark:text-cyber-cyan/40">// ACADEMICS</div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-display">Education</h4>
              <p className="text-gray-700 dark:text-gray-300 font-medium">B.Tech in Information Technology</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Karpagam College of Engineering</p>
            </div>
            
            <div className="glass-panel p-5 rounded-xl border border-gray-100 dark:border-cyber-border-dark relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-gray-400 dark:text-cyber-cyan/40">// LOCATION</div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-display">Location</h4>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Dharmapuri, Tamil Nadu</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">India</p>
            </div>
          </div>

          <div className="pt-6 flex justify-center sm:justify-start">
            <motion.a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] dark:from-cyber-cyan dark:to-cyber-purple dark:text-cyber-dark dark:hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all duration-300 cursor-pointer shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;