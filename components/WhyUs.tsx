'use client';

import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { DIFFERENTIATORS } from '@/data/content';
import { Zap, Eye, MessagesSquare, CheckCircle2 } from 'lucide-react';

const icons = [Zap, Eye, MessagesSquare];

const DIFF_3D_ICONS: Record<string, { webp: string; png: string; alt: string }> = {
  '01': {
    webp: '/icons/diff-speed.webp',
    png: '/icons/diff-speed.png',
    alt: 'Fast Delivery 3D Lightning Zap Icon',
  },
  '02': {
    webp: '/icons/diff-conversion.webp',
    png: '/icons/diff-conversion.png',
    alt: 'Conversion-First Design 3D Bullseye Icon',
  },
  '03': {
    webp: '/icons/diff-support.webp',
    png: '/icons/diff-support.png',
    alt: 'Direct Engineering Support 3D Speech Balloon Icon',
  },
};

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="section-py bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="eyebrow">THE AJÉBUILDS ADVANTAGE</span>
                <h2 className="text-[var(--fs-h2)] font-bold tracking-tight text-[var(--fg)] leading-tight">
                  Engineered for businesses that refuse to settle for mediocre templates.
                </h2>
                <p className="text-[var(--fs-body)] text-[var(--muted)] leading-relaxed pt-2">
                  We don’t churn out slow, bloated WordPress sites. We craft bespoke web experiences using Next.js, modern design systems, and rock-solid backend infrastructure that turn casual browsers into loyal customers worldwide.
                </p>
                <div className="pt-4 flex flex-col gap-3 font-mono text-xs text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct founder & engineer communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>0% boilerplate junk, 100% bespoke code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Global sub-second performance & mobile optimization</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Differentiators */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {DIFFERENTIATORS.map((diff, index) => {
              const Icon = icons[index % icons.length];
              return (
                <ScrollReveal key={diff.number} delay={index * 0.15}>
                  <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[var(--r-lg)] bg-[var(--surface)] border border-[var(--line-strong)] hover:border-black/30 transition-all duration-300 group relative">
                    <div className="flex items-start justify-between mb-5 sm:mb-6">
                      {/* Number with NO bullet dot */}
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[var(--fg)] tracking-tight">
                        {diff.number}
                      </span>
                      {/* Clean 3D Icon Container - NO green background */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-100 border border-neutral-200 p-1.5 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                        {DIFF_3D_ICONS[diff.number] ? (
                          <picture className="w-full h-full flex items-center justify-center">
                            <source srcSet={DIFF_3D_ICONS[diff.number].webp} type="image/webp" />
                            <img
                              src={DIFF_3D_ICONS[diff.number].png}
                              alt={DIFF_3D_ICONS[diff.number].alt}
                              width={32}
                              height={32}
                              className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                              loading="lazy"
                            />
                          </picture>
                        ) : (
                          <Icon className="w-5 h-5 text-[var(--fg)]" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] mb-2 group-hover:text-black transition-colors">
                      {diff.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--muted)] font-semibold mb-3 uppercase tracking-wider">
                      {diff.subtitle}
                    </p>
                    <p className="text-[var(--fs-sm)] text-[var(--muted)] leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
