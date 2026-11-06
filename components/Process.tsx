'use client';

import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { LiquidMetalBorder } from './ui/LiquidMetalBorder';
import { PROCESS_STEPS } from '@/data/content';
import { Compass, Palette, Terminal, Rocket, Check, ArrowRight } from 'lucide-react';

const stepIcons = [Compass, Palette, Terminal, Rocket];

const PROCESS_3D_ICONS: Record<string, { webp: string; png: string; alt: string }> = {
  '01': {
    webp: '/icons/process-discover.webp',
    png: '/icons/process-discover.png',
    alt: 'Phase 01 Discover 3D Compass Icon',
  },
  '02': {
    webp: '/icons/process-design.webp',
    png: '/icons/process-design.png',
    alt: 'Phase 02 Design 3D Light Bulb Icon',
  },
  '03': {
    webp: '/icons/process-build.webp',
    png: '/icons/process-build.png',
    alt: 'Phase 03 Build 3D Hammer and Wrench Icon',
  },
  '04': {
    webp: '/icons/process-launch.webp',
    png: '/icons/process-launch.png',
    alt: 'Phase 04 Launch 3D Rocket Icon',
  },
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="section-py bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="wrap">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <span className="eyebrow justify-center">HOW WE WORK</span>
          <h2 className="text-[var(--fs-h2)] font-bold tracking-tight text-[var(--fg)] mt-3 mb-4">
            A sprint-driven process designed for speed & clarity.
          </h2>
          <p className="text-[var(--fs-body)] text-[var(--muted)]">
            No endless meetings or unexpected bottlenecks. We move through structured phases with transparent staging updates every week.
          </p>
        </ScrollReveal>

        {/* Mobile Drag Indicator telling user to move left */}
        <div className="flex lg:hidden items-center justify-between mb-4 px-1">
          <span className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider font-semibold">
            Sprint Timeline
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--lime)] text-[11px] font-mono font-bold text-[#1f3c03] shadow-xs">
            <span>Move left</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
          </div>
        </div>

        {/* Horizontal Drag/Scroll on Mobile, 4-Column Grid on Desktop */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-[var(--line-strong)] z-0"
            aria-hidden="true"
          />

          <ScrollReveal amount="some" viewportMargin="80px 0px 0px 0px">
            <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex flex-row items-stretch overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3.5 sm:gap-4 pb-4 pt-1 w-[calc(100%+2rem)] sm:w-full lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:pb-0 lg:pt-0 relative z-10">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = stepIcons[index % stepIcons.length];
                return (
                  <div key={step.step} className="w-[72vw] max-w-[260px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink flex flex-col">
                    <LiquidMetalBorder>
                      <div className="flex flex-col h-full p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-[var(--r-lg)] bg-[var(--surface)] border border-[var(--line-strong)] transition-all duration-300 group">
                        {/* Step badge and 3D icon - Clean Neutral, No Green Background */}
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-neutral-100 border border-neutral-200 p-1.5 sm:p-2 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                            {PROCESS_3D_ICONS[step.step] ? (
                              <picture className="w-full h-full flex items-center justify-center">
                                <source srcSet={PROCESS_3D_ICONS[step.step].webp} type="image/webp" />
                                <img
                                  src={PROCESS_3D_ICONS[step.step].png}
                                  alt={PROCESS_3D_ICONS[step.step].alt}
                                  width={36}
                                  height={36}
                                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain drop-shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </picture>
                            ) : (
                              <Icon className="w-5 h-5 text-[var(--fg)]" />
                            )}
                          </div>
                          <span className="font-mono text-[10px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-neutral-100 text-[var(--fg)] font-semibold border border-neutral-200">
                            {step.duration}
                          </span>
                        </div>

                        <div className="mb-2">
                          <span className="font-mono text-[10px] sm:text-xs text-[var(--muted)]">PHASE {step.step}</span>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--fg)] group-hover:text-black transition-colors">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-[11px] sm:text-xs text-[var(--muted)] leading-relaxed mb-4 sm:mb-6 line-clamp-3 lg:line-clamp-none">
                          {step.description}
                        </p>

                        {/* Key outputs - Clean checkmarks, NO bullet dots */}
                        <div className="mt-auto pt-3 sm:pt-4 border-t border-[var(--line)]">
                          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--muted)] block mb-1.5 sm:mb-2 font-bold">
                            Deliverables:
                          </span>
                          <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-[11px] font-mono text-[var(--fg)]">
                            {step.deliverables.map((d) => (
                              <li key={d} className="flex items-center gap-1.5 sm:gap-2">
                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                                <span className="line-clamp-1">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </LiquidMetalBorder>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Mobile 4-phase step dots */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 mt-3">
            {PROCESS_STEPS.map((step, i) => (
              <span
                key={step.step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === 0 ? "w-6 bg-[var(--lime)]" : "w-1.5 bg-[var(--line-strong)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
