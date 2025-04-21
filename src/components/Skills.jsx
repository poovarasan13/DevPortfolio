import React from 'react';
import { motion } from 'framer-motion';
import skills from '../data/skill';
const Skills = () => {
  

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Tech Stack</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group ">
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="mb-3 p-6 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              </motion.div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;