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
 * Snappy reveal as user scrolls into view.
 * Crucially configured with once: true and clearProps: 'all'
 * so content and grids NEVER get reversed or hidden during scrolling.
 */
export const GsapSection: React.FC<GsapSectionProps> = ({
  children,
  className = '',
  delay = 0,
  triggerOffset = 'top 92%',
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

    const isMobile = window.innerWidth < 640;
    const startX = isMobile ? -36 : -75;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: startX,
          scale: 0.97,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: 'back.out(1.4)', // Signature energetic pop-in overshoot & settle
          scrollTrigger: {
            trigger: el,
            start: triggerOffset,
            once: true, // Crucial: trigger once and STAY permanently visible, never reverse to opacity: 0
            toggleActions: 'play none none none',
          },
          onComplete: () => {
            // Completely clean up inline styles so all child grids, sticky elements, and modals behave natively
            gsap.set(el, { clearProps: 'all' });
          },
        }
      );
    }, containerRef);

    // Failsafe: Ensure content is never stuck at opacity 0 under any circumstance
    const safetyTimer = setTimeout(() => {
      if (el && getComputedStyle(el).opacity === '0') {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    }, 1200);

    return () => {
      clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, [delay, triggerOffset]);

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
};

export default GsapSection;
