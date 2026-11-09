'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  triggerOffset?: string;
}

/**
 * GsapSection
 * Mobile-stable reveal animation.
 * Mobile: Pure vertical translation (y) with zero horizontal movement to eliminate screen lapping/wobbling.
 * Desktop: Subtle scale and vertical reveal with clearProps for complete stability.
 */
export const GsapSection: React.FC<GsapSectionProps> = ({
  children,
  className = '',
  delay = 0,
  triggerOffset = 'top 90%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect reduced motion accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Mobile-optimized: Zero GSAP overhead on mobile CPU, instant rendering and zero scroll-wobble
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const ctx = gsap.context(() => {
      // Desktop smooth reveal
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 30,
          scale: 0.99,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: triggerOffset,
            once: true,
          },
          onComplete: () => {
            gsap.set(el, { clearProps: 'transform,opacity' });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, triggerOffset]);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-full overflow-hidden will-change-transform ${className}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

export default GsapSection;
