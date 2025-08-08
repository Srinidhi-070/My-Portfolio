
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="group">
      <svg
        height="28"
        viewBox="0 0 245 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Code, Curiosity & Coffee Logo"
        className="text-neutral-700 dark:text-neutral-300 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white"
      >
        {/* Coffee cup with </> steam */}
        <path
          d="M17.8571 13.5C18.5714 13.5 19.1429 14.0714 19.1429 14.7857V20.5C19.1429 21.2143 18.5714 21.7857 17.8571 21.7857H3.42857C2.71429 21.7857 2.14286 21.2143 2.14286 20.5V14.7857C2.14286 14.0714 2.71429 13.5 3.42857 13.5H17.8571Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M19.1429 16.6071H21.2857C21.9125 16.6071 22.4286 17.1232 22.4286 17.75C22.4286 18.3768 21.9125 18.8929 21.2857 18.8929H19.1429V16.6071Z"
          fill="currentColor"
        />
        <path
          d="M8.57141 6.21429L6.42855 8.35714L8.57141 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8571 6.21429L15 8.35714L12.8571 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7857 5.5L9.64283 11.2143"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text
          x="32"
          y="20"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="500"
          fill="currentColor"
        >
          Code, Curiosity &amp; Coffee
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
