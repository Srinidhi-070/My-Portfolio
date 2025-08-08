
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  // Use MotionValues to track cursor position without causing re-renders on every mouse move.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Create springs that smooth the cursor's movement.
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  
  // A separate, "slower" spring for the follower element to create a trailing effect.
  const followerSpringConfig = { ...springConfig, damping: 40, stiffness: 200 };
  const followerX = useSpring(cursorX, followerSpringConfig);
  const followerY = useSpring(cursorY, followerSpringConfig);

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Update the MotionValues directly. This is highly performant.
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      // Check if the cursor is over an interactive element.
      const isInteractive = !!target.closest(
        'a, button, input, textarea, [role="button"], [tabindex]'
      );
      setIsPointer(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
    // The effect runs only once on mount, which is correct.
    // cursorX and cursorY are stable references.
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`
        body, a, button { cursor: none !important; }
      `}</style>
      {/* This is the main cursor dot */}
      <motion.div
        className="fixed w-2 h-2 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          translateX: springX,
          translateY: springY,
          left: -4,
          top: -4,
        }}
      />
      {/* This is the trailing follower circle */}
      <motion.div
        className="fixed w-10 h-10 border-2 border-neutral-400/50 dark:border-neutral-600/50 rounded-full z-[9999] pointer-events-none"
        style={{
          translateX: followerX,
          translateY: followerY,
          left: -20,
          top: -20,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 1 : 0.5,
        }}
        transition={{ type: 'spring', ...springConfig }}
      />
    </>
  );
};

export default CustomCursor;
