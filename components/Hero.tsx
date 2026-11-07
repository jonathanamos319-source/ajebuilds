'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Leaf, BarChart2, Trophy } from 'lucide-react';

const ROTATING_WORDS = ['Website', 'App', 'Web App', 'AI Automation'];

export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-[var(--line)]">
      <div className="wrap relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Social Proof, Headline, Subtitle, CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Social Proof: Avatars + 5 Stars + Rating text */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 mb-5 sm:mb-7"
            >
              {/* Overlapping Avatar Stack */}
              <div className="flex items-center -space-x-2.5">
                <img
                  src="/images/hero/avatar-1.png"
                  alt="AJÉBUILDS verified client avatar 1"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <img
                  src="/images/hero/avatar-2.png"
                  alt="AJÉBUILDS verified client avatar 2"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <img
                  src="/images/hero/avatar-3.png"
                  alt="AJÉBUILDS verified client avatar 3"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <img
                  src="/images/hero/avatar-4.png"
                  alt="AJÉBUILDS verified client avatar 4"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                />
              </div>

              {/* Stars & Text - Brand colors (Lime / Forest), NO ORANGE */}
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[var(--lime)] text-[#63b905]"
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[var(--fg)] tracking-tight mt-0.5">
                  200+ happy clients
                </span>
              </div>
            </motion.div>

            {/* Main Headline with Animated Rotating Words */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.85rem] font-bold tracking-tight text-[var(--fg)] leading-[1.14] mb-5 sm:mb-6"
            >
              Elevate Your Brand With a High-Performing{' '}
              <span className="inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block bg-[var(--lime)]/20 text-[#1f3c03] px-2.5 py-0.5 rounded-lg border border-[var(--lime)]/40 shadow-xs"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-7 sm:mb-9"
            >
              At AJÉBUILDS., we craft high-performance websites and digital solutions designed to help your brand grow, convert, and stand out worldwide.
            </motion.p>

            {/* CTAs - Brand Lime Button, NO ORANGE */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--lime)] hover:bg-[var(--lime-dark)] text-[#0A0F08] font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>Let&apos;s talk</span>
              </Link>

              <Link
                href="#process"
                className="inline-flex items-center justify-center gap-2 text-[var(--fg)] hover:text-black font-medium text-sm sm:text-base transition-colors py-3.5 px-4 rounded-full hover:bg-[var(--surface-2)] w-full sm:w-auto text-center"
              >
                <span>See how it works</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Photo (Clean card, NO claude sunburst / orange design) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main Photo Frame - Clean photo card */}
              <div className="relative z-10 rounded-2xl sm:rounded-[28px] overflow-hidden border border-[var(--line)] shadow-xl bg-white">
                <img
                  src="/images/hero/hero-developer.png"
                  alt="Amos Jonathan (Joe) building high-performance Next.js websites and web applications at AJÉBUILDS"
                  width={640}
                  height={520}
                  className="w-full h-auto object-cover max-h-[520px] aspect-[4/3] sm:aspect-[1.12/1]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Bottom Feature Badges Bar - Brand colors, NO ORANGE */}
              <div className="relative z-20 mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border border-[var(--line)] shadow-xs text-[11px] sm:text-xs font-medium text-[var(--fg)] hover:border-[var(--line-strong)] transition-colors">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--lime)]/20 flex items-center justify-center text-[#244603]">
                    <Leaf className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                  <span>Friendly Hosting</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border border-[var(--line)] shadow-xs text-[11px] sm:text-xs font-medium text-[var(--fg)] hover:border-[var(--line-strong)] transition-colors">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--lime)]/20 flex items-center justify-center text-[#244603]">
                    <BarChart2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                  <span>High converting websites</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border border-[var(--line)] shadow-xs text-[11px] sm:text-xs font-medium text-[var(--fg)] hover:border-[var(--line-strong)] transition-colors">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--lime)]/20 flex items-center justify-center text-[#244603]">
                    <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                  <span>Best performances</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
