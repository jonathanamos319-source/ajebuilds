'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ScrollReveal } from './ui/ScrollReveal';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { LiquidMetalButton } from './ui/LiquidMetalButton';

const ParticleSaturn = dynamic(
  () => import('./ui/ParticleSaturn').then((m) => m.ParticleSaturn),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

export const FinalCta: React.FC = () => {
  return (
    <section className="py-[clamp(32px,6vh,72px)] bg-[var(--bg)]">
      <div className="wrap">
        <ScrollReveal>
          {/* Green Card - Brand Lime (#86F00A) */}
          <div className="relative rounded-2xl sm:rounded-[var(--r-lg)] bg-[#86F00A] text-[#0A0F08] p-6 sm:p-12 lg:p-18 overflow-hidden shadow-2xl">
            {/* Abstract Design (Particle Saturn) - full width of the section with no visible edges */}
            <div className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden opacity-50">
              <ParticleSaturn
                coreColor="#0A0F08"
                ringColor="#0A0F08"
                blending="normal"
                particleSize={18}
                glow={25}
                sizePercent={175}
                className="w-full h-full"
              />
            </div>

            <div className="relative z-10 max-w-3xl">
              {/* Header: Let's Collaborate (Big & White, no button/pill) */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4">
                Let&apos;s Collaborate
              </h2>

              <p className="text-lg sm:text-2xl font-extrabold text-[#0A0F08] leading-snug mb-3">
                Ready to build something remarkable?
              </p>

              <p className="text-sm sm:text-base text-[#0A0F08]/85 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10">
                Let&apos;s discuss your project and create a high-performance website that works relentlessly for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <LiquidMetalButton
                  href="#contact"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<ArrowUpRight className="w-4 h-4 text-white" />}
                >
                  Start Your Project
                </LiquidMetalButton>

                <a
                  href="https://cal.com/amos-jonathan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-[#0A0F08] text-[#0A0F08] font-bold text-sm sm:text-base hover:bg-[#0A0F08]/10 transition-transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCta;
