import React, { useRef } from 'react';

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

/**
 * Lightweight magnetic button effect.
 * Uses direct DOM style manipulation instead of React state + Framer Motion spring
 * → Zero React re-renders, zero Framer Motion overhead
 * → CSS transition handles the easing (GPU compositor thread)
 */
export const Magnetic: React.FC<MagneticProps> = ({
  children,
  range = 60,
  strength = 0.32
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < range) {
      ref.current.style.transform = `translate(${distX * strength}px, ${distY * strength}px)`;
    } else {
      ref.current.style.transform = 'translate(0px, 0px)';
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block magnetic-btn"
    >
      {children}
    </div>
  );
};
