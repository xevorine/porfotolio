import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.2 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.2 });

  const [hovered, setHovered] = useState(false);
  const [grabHovered, setGrabHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Track hovered elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLinkOrBtn = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button');
        
      const isGrab = 
        target.classList.contains('cursor-grab') || 
        target.closest('.cursor-grab');

      if (isGrab) {
        setGrabHovered(true);
        setHovered(false);
      } else if (isLinkOrBtn) {
        setHovered(true);
        setGrabHovered(false);
      } else {
        setHovered(false);
        setGrabHovered(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-grab') || target.closest('.cursor-grab')) {
        setDragging(true);
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  // Calculate dynamic styling based on state
  let scale = 1;
  let backgroundColor = "transparent";
  let borderColor = "var(--color-accent-main)";
  let borderWidth = "1px";
  let borderStyle: "solid" | "dashed" = "solid";

  if (dragging) {
    scale = 3.5;
    borderColor = "var(--color-accent-fresh)";
    borderWidth = "1.5px";
    borderStyle = "dashed";
  } else if (grabHovered) {
    scale = 3.8;
    borderColor = "var(--color-accent-main)";
    borderWidth = "1.5px";
    borderStyle = "dashed";
  } else if (hovered) {
    scale = 2.5;
    backgroundColor = "var(--color-accent-main)";
    borderColor = "var(--color-accent-main)";
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
        scale,
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle,
      }}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.1 }}
    >
      {(grabHovered || dragging) && (
        <span className="text-[5px] font-sans font-bold tracking-[0.1em] text-white select-none">
          {dragging ? "HOLD" : "DRAG"}
        </span>
      )}
    </motion.div>
  );
};
