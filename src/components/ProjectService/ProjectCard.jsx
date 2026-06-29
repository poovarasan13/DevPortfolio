// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.12)] border border-gray-100 dark:border-cyber-border-dark transition-all duration-350 hover:-translate-y-1.5 group h-full flex flex-col scanline-container">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 dark:opacity-85 dark:group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-cyber-cyan border border-cyber-cyan/30">
          ID: {String(project.id).padStart(3, '0')}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3">
          <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 dark:text-cyber-cyan uppercase">
            // {project.subtitle}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 font-display group-hover:text-indigo-600 dark:group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2.5 py-0.5 bg-indigo-50/50 border border-indigo-100/30 text-indigo-700 text-[10px] font-bold tracking-wider uppercase rounded dark:bg-cyber-cyan/5 dark:border-cyber-cyan/20 dark:text-cyber-cyan font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between border-t border-gray-100 dark:border-cyber-border-dark pt-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyber-cyan transition-colors font-mono cursor-pointer"
              >
                <Github className="mr-1.5 w-4 h-4" />
                // SOURCE
              </a>
            ) : (
              <span className="text-[10px] text-gray-400 font-mono">// PRIVATE</span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-indigo-600 dark:text-cyber-cyan hover:underline transition-colors font-mono cursor-pointer"
              >
                {project.linkText?.trim() || 'DEMO'}
                <ExternalLink className="ml-1 w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;