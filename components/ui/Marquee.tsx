'use client';

import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  pauseOnHover = true,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden marquee-mask ${className}`}
      aria-hidden="true"
    >
      <div
        className={`animate-marquee flex items-center gap-6 ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
      >
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6">{children}</div>
      </div>
    </div>
  );
};
