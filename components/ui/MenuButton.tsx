
import React from 'react';
import { motion, Transition } from 'framer-motion';

interface Props {
  toggled: boolean;
  toggle: (toggled: boolean) => void;
  className?: string;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const transition: Transition = {
  duration: 0.2,
  ease: 'easeInOut',
};

export default function MenuButton({
  toggled,
  toggle,
  className,
}: Props): JSX.Element {
  return (
    <button
      onClick={() => toggle(!toggled)}
      className={`relative w-8 h-8 z-50 text-neutral-800 dark:text-neutral-200 ${className}`}
      aria-label={toggled ? 'Close menu' : 'Open menu'}
      aria-expanded={toggled}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          variants={{
            closed: { d: 'M 4 6 L 20 6' },
            open: { d: 'M 5 18 L 19 4' },
          }}
          initial="closed"
          animate={toggled ? 'open' : 'closed'}
          transition={transition}
        />
        <Path
          d="M 4 12 L 20 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial="closed"
          animate={toggled ? 'open' : 'closed'}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 4 18 L 20 18' },
            open: { d: 'M 5 4 L 19 18' },
          }}
          initial="closed"
          animate={toggled ? 'open' : 'closed'}
          transition={transition}
        />
      </svg>
    </button>
  );
}