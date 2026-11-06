'use client';

import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'dark' | 'lime' | 'light';
}

export const AjeBuildsLogo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  theme = 'light',
}) => {
  const iconSizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  const textClassMap = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const isLime = theme === 'lime';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision SVG Mark */}
      <div className={`relative ${iconSizeMap[size]} shrink-0 transition-transform duration-200 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Rounded base square */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="22"
            fill="#0A0F08"
            stroke="rgba(134, 240, 10, 0.4)"
            strokeWidth="3"
          />

          {/* Isometric depth accent */}
          <path
            d="M 26 53 L 45 53 L 45 74 L 51 68 L 51 49 L 78 28 L 75 25 L 26 53 Z"
            fill="#1E3809"
          />

          {/* Upward-pointing cursor arrow mark in Lime */}
          <path
            d="M 28 50 L 80 24 L 52 72 L 46 54 Z"
            fill="#86F00A"
          />

          {/* Inner highlight */}
          <path
            d="M 28 50 L 80 24 L 72 28 L 34 50 Z"
            fill="#B9FF54"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {variant === 'full' && (
        <span
          className={`font-bold tracking-tight uppercase ${textClassMap[size]} text-[#0A0F08]`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          AJ<span className="relative">É</span>BUILDS<span className="text-[#86F00A]">.</span>
        </span>
      )}
    </div>
  );
};
