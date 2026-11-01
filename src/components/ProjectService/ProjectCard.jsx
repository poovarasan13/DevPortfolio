// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, Github, Building2, Users } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const credit = project.credit || project.credits;

  return (
    <div className="glass-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.12)] border border-gray-100 dark:border-cyber-border-dark transition-all duration-350 hover:-translate-y-1.5 group h-full flex flex-col scanline-container">
      <div className="relative h-48 overflow-hidden flex-shrink-0 group/image">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full cursor-pointer relative"
            title={`Visit ${project.title}`}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-105 dark:opacity-85 dark:group-hover/image:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-xs font-mono text-white dark:text-cyber-cyan border border-white/20 dark:border-cyber-cyan/40 flex items-center gap-1.5 transform translate-y-2 group-hover/image:translate-y-0 transition-transform duration-300">
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        ) : (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 dark:opacity-85 dark:group-hover:opacity-100"
            loading="lazy"
          />
        )}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-cyber-cyan border border-cyber-cyan/30 pointer-events-none z-10">
          {String(project.id + 1).padStart(3, '0')}
        </div>
        {credit && (
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-gray-200 border border-white/20 flex items-center gap-1 shadow-sm pointer-events-none z-10">
            <Building2 className="w-2.5 h-2.5 text-cyber-cyan" />
            <span>{credit}</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 dark:text-cyber-cyan uppercase">
              // {project.subtitle}
            </span>
            {project.role && (
              <span className="text-[10px] font-mono text-indigo-700 dark:text-cyber-cyan bg-indigo-50/80 dark:bg-cyber-cyan/10 border border-indigo-200/50 dark:border-cyber-cyan/25 px-2 py-0.5 rounded flex items-center gap-1">
                <Users className="w-2.5 h-2.5 text-indigo-600 dark:text-cyber-cyan" />
                {project.role}
              </span>
            )}
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 group/title mt-1.5"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display group-hover/title:text-indigo-600 dark:group-hover/title:text-cyber-cyan transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover/title:text-indigo-600 dark:group-hover/title:text-cyber-cyan transition-colors opacity-70 group-hover/title:opacity-100" />
            </a>
          ) : (
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1.5 font-display group-hover:text-indigo-600 dark:group-hover:text-cyber-cyan transition-colors">
              {project.title}
            </h3>
          )}
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
          
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-cyber-border-dark pt-4 mt-auto">
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
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">// PRIVATE</span>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-mono text-indigo-600 dark:text-cyber-cyan bg-indigo-50 hover:bg-indigo-100 dark:bg-cyber-cyan/10 dark:hover:bg-cyber-cyan/20 border border-indigo-200/60 dark:border-cyber-cyan/30 rounded-lg transition-all duration-200 shadow-sm cursor-pointer group/link ml-auto"
                >
                  <span>{project.linkText?.trim() || 'LIVE DEMO'}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
