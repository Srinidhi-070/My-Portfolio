import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import AnimatedSection from './ui/AnimatedSection';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      className="bg-neutral-100 dark:bg-neutral-950 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800/50 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-200/50 dark:hover:bg-neutral-900 group"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
      <div className="flex items-center space-x-4">
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors flex items-center"
          >
            View Code
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;