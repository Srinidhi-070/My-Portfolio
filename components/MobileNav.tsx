
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';

interface MobileNavProps {
  closeMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeMenu }) => {
  const scrollTo = (id: string) => {
    closeMenu();
    // Use a short timeout to allow the menu to start closing before scrolling
    setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }, 100)
  };

  const menuVariants: Variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 30,
      },
    },
  };

  const listItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    },
    closed: { 
      y: 20,
      opacity: 0
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg md:hidden"
    >
      <div className="h-full flex flex-col items-center justify-center space-y-8 pt-16">
        <nav className="flex flex-col items-center space-y-6">
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              variants={listItemVariants}
              className="text-3xl font-bold text-neutral-800 dark:text-neutral-200"
            >
              {link.name}
            </motion.button>
          ))}
        </nav>
        <motion.div variants={listItemVariants}>
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
