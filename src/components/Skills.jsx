import React from 'react';
import { motion } from 'framer-motion';
import skills from '../data/skill';
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-cyber-dark relative overflow-hidden transition-colors duration-300">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-100">
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyber-cyan/5 dark:bg-cyber-cyan/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">My Tech Stack</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-cyber-cyan mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies, frameworks, and programming languages I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="glass-panel p-6 flex flex-col items-center justify-center border border-gray-100 dark:border-cyber-border-dark rounded-2xl relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all duration-350"
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-3 right-3 font-mono text-[9px] text-gray-400 dark:text-cyber-cyan/30 group-hover:text-cyber-cyan transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="mb-4 p-4 bg-gray-100/50 dark:bg-cyber-dark/60 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-cyber-cyan/10 transition-colors">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-cyber-cyan transition-colors text-center font-display tracking-wider uppercase">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;