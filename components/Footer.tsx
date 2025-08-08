
import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import { CONTACT_INFO } from '../constants';


const Footer: React.FC = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  const socialLinks = [
    { name: 'Email', href: `mailto:${CONTACT_INFO.email}`, icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
    { name: 'GitHub', href: CONTACT_INFO.github, icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { name: 'Blog', href: CONTACT_INFO.blog, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.5A4.5 4.5 0 0 0 17.5 5c-.59 0-1.5.5-2.5 1.5-1-.99-2-1.5-2.5-1.5A4.5 4.5 0 0 0 8 9.5c0 5 3 12.5 6 12.5z"></path></svg> }
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-neutral-500 dark:text-neutral-500 text-sm">
        <div className="mb-4">
          <button onClick={scrollToTop} aria-label="Scroll to top">
            <AnimatedLogo />
          </button>
        </div>

        <div className="flex items-center space-x-6 my-6">
            {socialLinks.map(link => (
                 <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.name}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    {link.icon}
                </a>
            ))}
        </div>

        <p>© {new Date().getFullYear()} Srinidhi N S</p>
        <p className="text-xs mt-2">Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;