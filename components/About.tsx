import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedSection from './ui/AnimatedSection';

// A new component for the interactive name.
const NameHighlight: React.FC = () => {
  const { theme } = useTheme();
  const name = "Srinidhi N. S.";
  const letters = Array.from(name);

  // Define accent colors that work well in both light and dark themes.
  const accentColor = theme === 'light' ? '#4f46e5' : '#a5b4fc'; // Tailwind Indigo-600 and Indigo-300

  return (
    <span className="font-semibold" aria-label={name}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="inline-block cursor-pointer"
          style={{ whiteSpace: 'pre' }} // Preserves spaces within the inline-block
          whileHover={{
            y: -4,
            scale: 1.05,
            color: accentColor,
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 12,
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

// Icon for external links
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-5 right-5 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  ariaLabel?: string;
}

// Re-engineered BentoCard to be a simple <a> tag for robust click handling.
const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', href, ariaLabel }) => {
  const containerClasses = "block relative group bg-neutral-100/50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 p-6 hover:shadow-lg dark:hover:shadow-black/25 hover:border-neutral-300 dark:hover:border-neutral-700";

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={ariaLabel || 'Read more (opens in a new tab)'}
        className={`${containerClasses} ${className}`}
      >
        {children}
        <ExternalLinkIcon />
      </a>
    );
  }

  // If there's no href, it's just a non-clickable styled box.
  const nonClickableClasses = "bg-neutral-100/50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6";
  return (
    <div className={`${nonClickableClasses} ${className}`}>
        {children}
    </div>
  );
};

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white mb-12 text-center">
        About Me
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-start">
        <div className="md:col-span-2 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p className="mb-6">
                Hi, I’m <NameHighlight />, a final-year student pursuing a B.E. in Artificial Intelligence and Data Science at Ramaiah Institute of Technology. I’m passionate about building digital tools—whether it's a simple web app or a smart system—that can make daily life easier and more meaningful.
            </p>
            <p className="mb-6">
                I enjoy experimenting with AI tools, agents, and creative technologies. I believe in learning by doing, which is why I'm constantly developing side projects, improving what I've already built, and exploring new ideas along the way.
            </p>
            <p>
                Though I’m still early in my journey, I have a long-term goal: to build my own startup one day. Until then, I’m focused on gaining real-world experience, collaborating with professionals, and shaping myself into a builder who solves real problems with purpose and curiosity.
            </p>
        </div>
        
        <div className="md:col-span-1 space-y-6">
            <BentoCard 
                href="https://www.google.com/maps/place/Bengaluru,+Karnataka,+India/"
                ariaLabel="View location on Google Maps (opens in a new tab)"
            >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">Location</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Bengaluru, India
                </p>
            </BentoCard>

            <BentoCard 
                href="https://www.msrit.edu/"
                ariaLabel="View Ramaiah Institute of Technology website (opens in a new tab)"
            >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">Education</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    B.E. in AI & Data Science, Ramaiah Institute of Technology.
                </p>
            </BentoCard>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;