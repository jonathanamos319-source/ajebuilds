'use client';

import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Marquee } from './ui/Marquee';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiDocker,
  SiSupabase,
  SiNodedotjs,
  SiVite,
  SiMui,
  SiChartdotjs,
  SiMysql,
  SiGooglechrome,
  SiPostgresql,
  SiJenkins,
  SiGithubactions,
} from 'react-icons/si';
import { FaReact, FaJava, FaCreditCard } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
}

const TECH_ITEMS: TechItem[] = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js 15', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'React Native', icon: FaReact, color: '#61DAFB' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  { name: 'Chart.js', icon: SiChartdotjs, color: '#FF6384' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Chrome Extensions', icon: SiGooglechrome, color: '#4285F4' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D33833' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
];

const ECOSYSTEM_HIGHLIGHTS: TechItem[] = [
  { name: 'Next.js 15 App Router', icon: SiNextdotjs },
  { name: 'TypeScript Strict Mode', icon: SiTypescript },
  { name: 'Spring Boot REST APIs', icon: SiSpringboot },
  { name: 'Tailwind CSS v4 Engine', icon: SiTailwindcss },
  { name: 'Supabase & PostgreSQL', icon: SiPostgresql },
  { name: 'Docker Containerization', icon: SiDocker },
  { name: 'React Native Mobile', icon: FaReact },
  { name: 'Stripe, Paystack & Global Checkouts', icon: FaCreditCard },
  { name: 'Chart.js Visual Analytics', icon: SiChartdotjs },
  { name: 'Vite Lightning HMR', icon: SiVite },
  { name: 'Jenkins CI/CD Pipelines', icon: SiJenkins },
  { name: 'GitHub Actions Automation', icon: SiGithubactions },
];

export const TechStack: React.FC = () => {
  return (
    <section className="section-py-md bg-[var(--bg)] border-t border-[var(--line)] overflow-hidden">
      <div className="wrap mb-10 text-center">
        <ScrollReveal>
          <span className="eyebrow justify-center">ENGINEERING ECOSYSTEM</span>
          <h2 className="text-[var(--fs-h3)] font-bold tracking-tight text-[var(--fg)] mt-2">
            Modern, battle-tested technologies.
          </h2>
          <p className="text-sm text-[var(--muted)] max-w-xl mx-auto mt-2">
            We use production-grade frameworks and infrastructure to build fast, secure, and maintainable software applications.
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee Track 1 - Primary Stack with Real Logos */}
      <div className="py-3">
        <Marquee>
          {TECH_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--surface)] border border-[var(--line-strong)] hover:border-[#0A0F08] transition-all shadow-sm group hover:-translate-y-0.5 duration-200"
              >
                <span className="flex items-center justify-center w-5 h-5 text-base transition-transform group-hover:scale-110">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="font-mono text-sm font-semibold tracking-tight text-[var(--fg)]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Infinite Marquee Track 2 - Architectural Highlights */}
      <div className="py-2">
        <Marquee>
          {ECOSYSTEM_HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--line)] text-xs font-mono text-[var(--fg)] hover:border-[var(--line-strong)] transition-colors"
              >
                <Icon className="w-4 h-4 text-[#0A0F08] shrink-0" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;
