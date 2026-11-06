'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { FAQ_ITEMS } from '@/data/content';
import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './FloatingWhatsApp';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-py bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal>
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2 className="text-[var(--fs-h2)] font-bold tracking-tight text-[var(--fg)] mt-3 mb-4 leading-tight">
                Everything you need to know about working with us.
              </h2>
              <p className="text-[var(--fs-body)] text-[var(--muted)] leading-relaxed">
                Clear answers upfront so you know exactly what to expect when partnering with AJÉBUILDS.
              </p>
              <div className="mt-8 p-6 rounded-[var(--r-md)] bg-[var(--surface)] border border-[var(--line)]">
                <h4 className="text-sm font-bold text-[var(--fg)] mb-1">Have a specific question?</h4>
                <p className="text-xs text-[var(--muted)] mb-4">
                  Reach out directly to Amos Jonathan on WhatsApp for instant answers.
                </p>
                <a
                  href="https://wa.me/2348022872198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs py-2 px-4 h-10 w-full justify-center gap-2 group hover:border-[#25D366]/40"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <ScrollReveal key={item.question} delay={index * 0.05}>
                  <div className="rounded-[var(--r-md)] bg-[var(--surface)] border border-[var(--line-strong)] hover:border-[var(--line-strong)]/80 transition-colors overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base md:text-lg font-bold text-[var(--fg)]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#0A0F08] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--line)] pt-3.5 sm:pt-4">
                          {item.answer}
                        </p>
                      </div>
                    )}
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
