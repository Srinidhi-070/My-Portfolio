import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] // A nice easing curve
    }
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-32 border-t border-neutral-200 dark:border-neutral-900 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Removed max-w-5xl and mx-auto to allow sections to control their own width */}
      {children}
    </motion.section>
  );
};

export default AnimatedSection;