'use client';

import React from 'react';
import Image from 'next/image';

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

  const pixelSizeMap = {
    sm: 28,
    md: 36,
    lg: 44,
    xl: 56,
  };

  const textClassMap = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Logo Mark using Gemini Hero Image */}
      <div
        className={`relative ${iconSizeMap[size]} shrink-0 transition-transform duration-200 group-hover:scale-105 rounded-xl overflow-hidden border border-[#86F00A]/30 shadow-sm bg-[#0A0F08]`}
      >
        <Image
          src="/images/logo.jpg"
          alt="AJÉBUILDS. Logo"
          width={pixelSizeMap[size]}
          height={pixelSizeMap[size]}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Wordmark */}
      {variant === 'full' && (
        <span
          className={`font-bold tracking-tight uppercase ${textClassMap[size]} text-[var(--fg)]`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          AJ<span className="relative">É</span>BUILDS<span className="text-[#86F00A]">.</span>
        </span>
      )}
    </div>
  );
};
