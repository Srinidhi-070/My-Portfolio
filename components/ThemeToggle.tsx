import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const SunIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
);

const MoonIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 flex items-center bg-neutral-200 dark:bg-neutral-800 rounded-full p-1 cursor-pointer transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="absolute w-5 h-5 bg-white dark:bg-neutral-900 rounded-full shadow-sm"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        style={{
          left: theme === 'light' ? '4px' : 'auto',
          right: theme === 'dark' ? '4px' : 'auto',
        }}
      />
      <div className="relative w-full h-full flex items-center justify-between">
          <AnimatePresence>
             {theme === 'dark' && (
                 <motion.div
                    initial={{ scale: 0, opacity: 0}}
                    animate={{ scale: 1, opacity: 1}}
                    exit={{ scale: 0, opacity: 0}}
                    className="absolute left-[5px]"
                 >
                    <MoonIcon className="text-yellow-300"/>
                </motion.div>
             )}
          </AnimatePresence>
          <AnimatePresence>
            {theme === 'light' && (
                <motion.div
                    initial={{ scale: 0, opacity: 0}}
                    animate={{ scale: 1, opacity: 1}}
                    exit={{ scale: 0, opacity: 0}}
                    className="absolute right-[5px]"
                >
                    <SunIcon className="text-orange-400"/>
                </motion.div>
            )}
          </AnimatePresence>
      </div>
    </button>
  );
};

export default ThemeToggle;
