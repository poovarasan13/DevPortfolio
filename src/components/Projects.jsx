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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my recent work and contributions
          </p>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-2 mb-10">
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
        </div> */}

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