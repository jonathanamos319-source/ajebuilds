'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

interface LiquidMetalBorderProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * LiquidMetalBorder
 * Wraps any card with a rotating conic-gradient border that animates
 * like liquid mercury / chrome when hovered.
 */
export function LiquidMetalBorder({ children, className = '' }: LiquidMetalBorderProps) {
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(0);
  const rafRef = useRef<number | null>(null);
  const angleRef = useRef(0);

  const animate = useCallback(() => {
    angleRef.current = (angleRef.current + 1.4) % 360;
    setAngle(angleRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (hovered) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovered, animate]);

  // Liquid metal colour stops — silver → lime → silver → white → silver
  const gradient = `conic-gradient(
    from ${angle}deg,
    #c0c0c0 0deg,
    #86F00A 60deg,
    #e8e8e8 100deg,
    #ffffff 140deg,
    #a8a8a8 180deg,
    #86F00A 220deg,
    #d4d4d4 260deg,
    #ffffff 300deg,
    #c0c0c0 360deg
  )`;

  return (
    <div
      className={`relative rounded-[var(--r-lg)] p-[2px] transition-all duration-300 ${className}`}
      style={{
        background: hovered ? gradient : 'transparent',
        boxShadow: hovered
          ? '0 0 18px 2px rgba(134,240,10,0.18), 0 0 40px 4px rgba(192,192,192,0.08)'
          : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Inner card — always solid bg so gradient shows only as border */}
      <div className="relative z-10 h-full rounded-[calc(var(--r-lg)-2px)] bg-[var(--surface)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

