'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_METADATA } from '@/data/content';
import { LiquidMetal } from './ui/LiquidMetalButton';

/**
 * Authentic Official WhatsApp Vector Icon
 */
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ROTATING_MESSAGES = [
  'Chat on WhatsApp',
  'Instant Reply • Online',
  'Direct with Amos (Joe)',
  'Get a Fast Estimate',
];

export const FloatingWhatsApp: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % ROTATING_MESSAGES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      {/* ========================================================
          MOBILE VIEW: Dedicated Floating Circular WhatsApp Button with Liquid Metal Border
          ======================================================== */}
      <div className="block sm:hidden">
        <a
          href={SITE_METADATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp with Amos Jonathan"
          className="relative flex items-center justify-center cursor-pointer active:scale-90 transition-transform duration-200 outline-none select-none"
        >
          <div
            className="relative rounded-full overflow-hidden shadow-[0_12px_32px_rgba(10,15,8,0.55)]"
            style={{ padding: 3.5 }}
          >
            {/* Liquid Metal Border Layer */}
            <LiquidMetal
              colorBack="#0A0F08"
              colorTint="#86F00A"
              speed={0.7}
              repetition={4}
              distortion={0.16}
              scale={1}
              className="absolute inset-0 z-0 rounded-full pointer-events-none"
            />

            {/* Inner Button Body */}
            <div className="relative z-10 w-13 h-13 rounded-full flex items-center justify-center bg-[#0A0F08] text-white">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-md shadow-[#25D366]/40">
                <WhatsAppIcon className="w-6 h-6 text-white drop-shadow-sm" />
              </div>
            </div>
          </div>

          {/* Online status green dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[var(--lime)] border-2 border-[#0A0F08] rounded-full shadow-xs z-20 pointer-events-none" />
        </a>
      </div>

      {/* ========================================================
          DESKTOP / WEB VIEW: Real WhatsApp Icon + Animated Text
          ======================================================== */}
      <div className="hidden sm:block">
        <a
          href={SITE_METADATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp with Amos Jonathan"
          className="group relative flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 outline-none select-none"
        >
          <div
            className="relative rounded-full overflow-hidden shadow-[0_20px_50px_-10px_rgba(10,15,8,0.4)]"
            style={{ padding: 3.5 }}
          >
            {/* Liquid Metal Border Layer */}
            <LiquidMetal
              colorBack="#0A0F08"
              colorTint="#86F00A"
              speed={0.65}
              repetition={4}
              distortion={0.16}
              scale={1}
              className="absolute inset-0 z-0 rounded-full"
            />

            {/* Inner Button Body */}
            <div className="relative z-10 rounded-full flex items-center py-2.5 pl-2.5 pr-5 gap-3 bg-[#0A0F08] text-white transition-colors duration-200 group-hover:bg-[#142010]">
              {/* Real WhatsApp Brand Icon Container */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white drop-shadow-sm" />
              </div>

              {/* Animated Text Content */}
              <div className="flex flex-col text-left min-w-[135px]">
                {/* Rotating Animated Main Label */}
                <div className="relative h-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_MESSAGES[textIndex]}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="block text-xs font-bold tracking-tight text-white group-hover:text-[var(--lime)] transition-colors leading-none"
                    >
                      {ROTATING_MESSAGES[textIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Subtitle with pulsing online status */}
                <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 leading-tight mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--lime)] animate-pulse shrink-0" />
                  <span>Online now</span>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </aside>
  );
};

export default FloatingWhatsApp;
