
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';
import AnimatedLogo from './AnimatedLogo';
import MobileNav from './MobileNav';
import MenuButton from './ui/MenuButton';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-neutral-50/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200/50 dark:border-neutral-800/50' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollTo('hero')}
                className="text-left"
                aria-label="Code, Curiosity & Coffee, back to top"
              >
                <AnimatedLogo />
              </button>
            </div>
            <div className="flex items-center">
              <nav className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollTo(link.href)}
                      className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </nav>
              <div className="hidden md:block ml-6">
                <ThemeToggle />
              </div>
              <div className="md:hidden ml-4">
                <MenuButton toggled={isMenuOpen} toggle={setIsMenuOpen} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && <MobileNav closeMenu={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;