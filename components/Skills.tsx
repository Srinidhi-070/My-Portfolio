import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';
import AnimatedSection from './ui/AnimatedSection';

// Variants for the grid container to stagger its children
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// Variants for each skill card
const skillCardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white mb-12 text-center">
        My Toolkit
      </h2>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={gridContainerVariants}
        // Inherits animation state from the parent AnimatedSection
      >
        {SKILLS.map((category) => (
          <motion.div
            key={category.title}
            variants={skillCardVariants}
            className="group bg-neutral-100/50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/25 hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 tracking-tight">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 text-xs font-medium rounded-full cursor-default transition-all duration-200 group-hover:opacity-60 hover:!opacity-100 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Skills;
