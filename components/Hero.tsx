import React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        className="max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-black dark:text-white"
        >
          Learning to build with AI and code - one step at a time.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-300"
        >
          Exploring tools, solving everyday problems, and shaping a path to something bigger.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8">
          <Button 
            onClick={scrollToProjects} 
            variant="outline"
            className="group"
          >
            Explore My Journey
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;