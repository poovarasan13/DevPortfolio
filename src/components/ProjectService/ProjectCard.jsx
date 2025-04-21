// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:transform hover:scale-[1.02] group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 p-2 rounded-full text-gray-900 hover:bg-white transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 p-2 rounded-full text-gray-900 hover:bg-white transition-colors"
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 text-sm">{project.subtitle}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full dark:bg-indigo-900/30 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {project.linkText}
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;