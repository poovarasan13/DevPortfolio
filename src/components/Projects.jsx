// src/components/Projects.jsx
import React, { useState } from 'react';

import FilterButton from './ProjectService/FilterButton';
import ProjectCard from './ProjectService/ProjectCard';
import projects from '../data/project';
const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-cyber-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-100">
        <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-cyber-purple/5 dark:bg-cyber-purple/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-cyber-cyan mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A curated showcase of applications, interfaces, and open-source packages I've designed and built
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <FilterButton 
            label="All" 
            active={filter === 'all'} 
            onClick={() => setFilter('all')} 
          />
          <FilterButton 
            label="Featured" 
            active={filter === 'featured'} 
            onClick={() => setFilter('featured')} 
          />
          {allTags.map((tag, index) => (
            <FilterButton 
              key={index} 
              label={tag} 
              active={filter === tag} 
              onClick={() => setFilter(tag)} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;