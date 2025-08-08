import React from 'react';
import { EXPERIENCE } from '../constants';
import AnimatedSection from './ui/AnimatedSection';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white mb-12">Experience</h2>
      <div className="relative border-l border-neutral-200 dark:border-neutral-800 pl-8 space-y-12">
        <div className="absolute w-3 h-3 bg-neutral-300 dark:bg-neutral-600 rounded-full -left-1.5 top-1.5"></div>
        {EXPERIENCE.map((item) => (
          <div key={item.company} className="relative">
             <div className="absolute w-3 h-3 bg-neutral-400 dark:bg-neutral-700 rounded-full -left-[38px] border-4 border-neutral-50 dark:border-black"></div>
            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-1">{item.year}</p>
            <h3 className="text-xl font-semibold text-black dark:text-white">{item.role}</h3>
            <p className="text-md text-neutral-700 dark:text-neutral-300 mb-2">{item.company}</p>
            {item.description && <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;