import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import AnimatedSection from './ui/AnimatedSection';

const Achievements: React.FC = () => {
  return (
    <AnimatedSection id="achievements">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white mb-12">Achievements & Activities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACHIEVEMENTS.map((item) => (
          <div key={item.title} className="flex items-start space-x-4">
            <div className="mt-1.5 flex-shrink-0">
              <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              {item.url && (
                <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors mt-1 inline-block group"
                >
                    Learn more <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Achievements;