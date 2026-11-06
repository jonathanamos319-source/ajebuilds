'use client';

import React, { useRef } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { SERVICES, Service } from '@/data/content';
import { Layout, Code2, ShoppingBag, Smartphone, Zap, ShieldCheck, GitBranch, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Code2,
  ShoppingBag,
  Smartphone,
  Zap,
  ShieldCheck,
  GitBranch,
};

const SERVICE_3D_ICONS: Record<string, { webp: string; png: string; alt: string }> = {
  'web-design': {
    webp: '/icons/service-web-design.webp',
    png: '/icons/service-web-design.png',
    alt: 'Web Design & UI/UX 3D Artist Palette Icon',
  },
  'fullstack-dev': {
    webp: '/icons/service-fullstack.webp',
    png: '/icons/service-fullstack.png',
    alt: 'Full-Stack Development 3D Laptop Icon',
  },
  'ecommerce': {
    webp: '/icons/service-ecommerce.webp',
    png: '/icons/service-ecommerce.png',
    alt: 'E-Commerce & Payments 3D Shopping Bags Icon',
  },
  'mobile-dev': {
    webp: '/icons/service-mobile.webp',
    png: '/icons/service-mobile.png',
    alt: 'Mobile App Development 3D Smartphone Icon',
  },
  'technical-seo': {
    webp: '/icons/service-seo.webp',
    png: '/icons/service-seo.png',
    alt: 'Technical SEO & Speed 3D High Voltage Zap Icon',
  },
  'maintenance': {
    webp: '/icons/service-maintenance.webp',
    png: '/icons/service-maintenance.png',
    alt: 'Maintenance & Hosting 3D Security Shield Icon',
  },
};

export const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicated set of cards for seamless infinite marquee loop
  const carouselServices = [...SERVICES, ...SERVICES];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-py bg-[var(--surface)] border-t border-[var(--line)] overflow-hidden">
      <div className="wrap mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal className="max-w-2xl">
            <span className="eyebrow">OUR CAPABILITIES</span>
            <h2 className="text-[var(--fs-h2)] font-bold tracking-tight text-[var(--fg)] mt-3 mb-3 leading-tight">
              Full-lifecycle design & engineering for digital growth.
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              From modern responsive interfaces to complex backend architectures with database persistence, we build digital products that scale reliably.
            </p>
          </ScrollReveal>

          {/* Manual Left/Right Arrow Navigation */}
          <ScrollReveal delay={0.1} className="hidden sm:flex items-center gap-1.5 self-end">
            <button
              type="button"
              onClick={handleScrollLeft}
              aria-label="Scroll capabilities left"
              className="p-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--line-strong)] hover:border-black text-[var(--fg)] transition-all hover:scale-105 active:scale-95 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleScrollRight}
              aria-label="Scroll capabilities right"
              className="p-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--line-strong)] hover:border-black text-[var(--fg)] transition-all hover:scale-105 active:scale-95 shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Moving Card Carousel Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 py-4 px-4 overflow-x-auto no-scrollbar scroll-smooth animate-capabilities-marquee"
          style={{ width: 'max-content' }}
        >
          {carouselServices.map((service, index) => (
            <ServiceCard key={`${service.id}-${index}`} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon] || Code2;
  const icon3D = SERVICE_3D_ICONS[service.id];

  return (
    <div className="w-[275px] sm:w-[295px] md:w-[315px] shrink-0 flex flex-col justify-between p-5 sm:p-6 rounded-2xl sm:rounded-[22px] bg-[var(--surface-2)] border border-[var(--line-strong)] hover:border-black/35 hover:-translate-y-1.5 transition-all duration-300 shadow-[var(--shadow-card)] group select-none">
      <div>
        {/* Compact 3D Icon Container */}
        <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 p-2 flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition-transform duration-300">
          {icon3D ? (
            <picture className="w-full h-full flex items-center justify-center">
              <source srcSet={icon3D.webp} type="image/webp" />
              <img
                src={icon3D.png}
                alt={icon3D.alt}
                width={36}
                height={36}
                className="w-8 h-8 object-contain drop-shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
                loading="lazy"
              />
            </picture>
          ) : (
            <Icon className="w-5 h-5 text-[var(--fg)]" />
          )}
        </div>

        {/* Title & Tagline - Compact, crisp */}
        <h3 className="text-base sm:text-lg font-bold text-[var(--fg)] mb-1.5 group-hover:text-black transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-xs text-[var(--muted)] leading-relaxed mb-4 min-h-[2.5rem] line-clamp-2">
          {service.tagline}
        </p>

        {/* Deliverables list - Clean checkmarks, compact typography */}
        <div className="space-y-2 pt-3.5 border-t border-[var(--line)]">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--fg)] font-bold">
            What&apos;s Included:
          </p>
          {service.deliverables.map((item) => (
            <div key={item} className="flex items-start gap-2 text-[11px] sm:text-xs text-[var(--fg)]">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry link at bottom */}
      <div className="pt-5 mt-auto">
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--fg)] hover:text-black group-hover:underline"
        >
          <span>Inquire about this</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
