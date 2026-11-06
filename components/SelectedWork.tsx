'use client';

import React, { useState, useRef } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import {
  ExternalLink,
  ArrowUpRight,
  Play,
  Pause,
  Maximize2,
  X,
  Sparkles,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export type PortfolioCategory =
  | 'All'
  | 'E-Commerce'
  | 'Crypto & Web Apps'
  | 'SaaS & Dashboards'
  | 'Agency & Portfolios';

export interface PortfolioMediaItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'E-Commerce' | 'Crypto & Web Apps' | 'SaaS & Dashboards' | 'Agency & Portfolios';
  type: 'image' | 'video';
  src: string;
  poster?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured?: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioMediaItem[] = [
  {
    id: 'eke-ad-video',
    title: 'Eke Market — Animated Motion Campaign',
    subtitle: 'High-conversion product video ad highlighting real-time crypto price tracking',
    category: 'Crypto & Web Apps',
    type: 'video',
    src: '/assets/aistudio/eke-ad-g51UIrJK.mp4',
    liveUrl: 'https://eke-market.vercel.app/',
    tags: ['Motion Design', 'Video Ad', 'Crypto Tracker'],
    featured: true,
  },
  {
    id: 'eke-market-home',
    title: 'Eke Market — Crypto Price Tracker',
    subtitle: 'Real-time cryptocurrency tracking engine with CoinGecko live market data',
    category: 'Crypto & Web Apps',
    type: 'image',
    src: '/assets/aistudio/screencapture-eke-market-vercel-app-2026-11-06-11_43_24.png',
    liveUrl: 'https://eke-market.vercel.app/',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'CoinGecko API'],
    featured: true,
  },
  {
    id: 'haifly-storefront',
    title: 'Haiflytrap — E-Commerce Brand Store',
    subtitle: 'Complete D2C storefront for organic pest control solutions with automated checkout',
    category: 'E-Commerce',
    type: 'image',
    src: '/assets/aistudio/screencapture-haiflytrapng-2026-11-06-11_39_00.png',
    liveUrl: 'https://haiflytrapng.com/',
    tags: ['E-Commerce', 'React', 'TailwindCSS', 'Node.js'],
    featured: true,
  },
  {
    id: 'haifly-invoice-dashboard',
    title: 'Haifly Invoice — SaaS Analytics Dashboard',
    subtitle: 'Full-cycle invoicing platform with revenue metrics, client status, and billing tracking',
    category: 'SaaS & Dashboards',
    type: 'image',
    src: '/assets/aistudio/screencapture-haiflyinvoice-vercel-app-en-dashboard-2026-11-06-11_36_38.png',
    liveUrl: 'https://haiflyinvoice.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'Supabase', 'Dashboard UI'],
    featured: true,
  },
  {
    id: 'haifly-shop',
    title: 'Haiflytrap — Product Catalog & Cart',
    subtitle: 'Optimized product purchasing experience with inventory variants and fast checkout',
    category: 'E-Commerce',
    type: 'image',
    src: '/assets/aistudio/screencapture-haiflytrapng-shop-2026-11-06-11_39_29.png',
    liveUrl: 'https://haiflytrapng.com/shop',
    tags: ['Product Grid', 'Cart Checkout', 'Conversion CRO'],
  },
  {
    id: 'eke-market-compare',
    title: 'Eke Market — Multi-Asset Comparison Engine',
    subtitle: 'Interactive comparison charts allowing investors to benchmark assets against Bitcoin',
    category: 'Crypto & Web Apps',
    type: 'image',
    src: '/assets/aistudio/screencapture-eke-market-vercel-app-compare-2026-11-06-11_44_52.png',
    liveUrl: 'https://eke-market.vercel.app/compare',
    tags: ['Chart.js', 'Vite', 'Interactive Graphing'],
  },
  {
    id: 'ajebuilds-services-architecture',
    title: 'AJÉBUILDS — Interactive Architecture & Design Systems',
    subtitle: 'Full-lifecycle design systems with high-converting UI components and interactive engineering',
    category: 'Agency & Portfolios',
    type: 'image',
    src: '/assets/aistudio/screencapture-localhost-3000-2026-11-06-11_19_51 (1)_edited.png',
    tags: ['Design System', 'UI/UX', 'Interactive Architecture'],
    featured: true,
  },
  {
    id: 'haifly-invoice-create',
    title: 'Haifly Invoice — Invoice Generator & PDF Flow',
    subtitle: 'Modern invoice creation workflow with tax calculations, discounts, and PDF generation',
    category: 'SaaS & Dashboards',
    type: 'image',
    src: '/assets/aistudio/screencapture-haiflyinvoice-vercel-app-en-invoices-new-2026-11-06-11_37_51.png',
    liveUrl: 'https://haiflyinvoice.vercel.app/',
    tags: ['Form Engine', 'PDF Generation', 'Next.js'],
  },
  {
    id: 'haifly-reviews',
    title: 'Haiflytrap — Customer Reviews & Trust Wall',
    subtitle: 'Social proof review wall designed to boost consumer confidence and conversion rates',
    category: 'E-Commerce',
    type: 'image',
    src: '/assets/aistudio/screencapture-haiflytrapng-reviews-2026-11-06-11_40_19.png',
    liveUrl: 'https://haiflytrapng.com/reviews',
    tags: ['Social Proof', 'User Reviews', 'CRO Design'],
  },
  {
    id: 'eke-market-trending',
    title: 'Eke Market — 24h Trending & Gainers',
    subtitle: 'Algorithmic market scanner surfacing highest volume tokens and top daily movers',
    category: 'Crypto & Web Apps',
    type: 'image',
    src: '/assets/aistudio/screencapture-eke-market-vercel-app-trending-2026-11-06-11_43_09.png',
    liveUrl: 'https://eke-market.vercel.app/trending',
    tags: ['Live Feed', 'CoinGecko API', 'Data Engine'],
  },
  {
    id: 'ajebuilds-platform',
    title: 'AJÉBUILDS — Agency Engine Platform',
    subtitle: 'High-performance engineering platform featuring GSAP animations and liquid metal shaders',
    category: 'Agency & Portfolios',
    type: 'image',
    src: '/assets/aistudio/screencapture-localhost-3000-2026-11-06-11_19_51_edited.png',
    tags: ['Next.js 15', 'Tailwind v4', 'GSAP ScrollTrigger'],
  },
  {
    id: 'ajebuilds-process-ecosystem',
    title: 'AJÉBUILDS — Sprint Process & Engineering Ecosystem',
    subtitle: 'Transparent sprint-driven development lifecycle and production-grade software stack',
    category: 'Agency & Portfolios',
    type: 'image',
    src: '/assets/aistudio/screencapture-localhost-3000-2026-11-06-11_19_51 (2)_edited.png',
    tags: ['DevOps', 'Engineering Stack', 'Next.js 15'],
  },
  {
    id: 'confianzatech-platform',
    title: 'Confianza Tech — Software & Digital Solutions',
    subtitle: 'Modern technology consulting platform built for scalable digital transformation',
    category: 'Agency & Portfolios',
    type: 'image',
    src: '/assets/aistudio/screencapture-confianzatech-vercel-app-2026-11-06-12_25_26.png',
    liveUrl: 'https://confianzatech.vercel.app/',
    tags: ['React', 'Next.js', 'Tech Consulting', 'Enterprise UI'],
    featured: true,
  },
  {
    id: 'haifly-brand-hero',
    title: 'Haiflytrap — Brand Experience & UI Art Direction',
    subtitle: 'Bespoke branding and visual art direction engineered for direct-response marketing',
    category: 'E-Commerce',
    type: 'image',
    src: '/assets/aistudio/haiflywebimage.png',
    tags: ['Branding', 'Art Direction', 'UI/UX'],
  },
];

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'E-Commerce',
  'Crypto & Web Apps',
  'SaaS & Dashboards',
  'Agency & Portfolios',
];

export const SelectedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioMediaItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="section-py bg-[var(--surface)] border-t border-[var(--line)]">
      <div className="wrap">
        {/* Header and Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7">
          <ScrollReveal className="max-w-2xl">
            <span className="eyebrow">PORTFOLIO & PROVEN WORK</span>
            <h2 className="text-[var(--fs-h2)] font-bold tracking-tight text-[var(--fg)] mt-3">
              Real projects shipped to production.
            </h2>
            <p className="text-[var(--fs-body)] text-[var(--muted)] mt-2">
              Explore authentic client platforms, live crypto web apps, SaaS dashboards, and commercial motion ads built and deployed by Amos Jonathan (Joe).
            </p>
          </ScrollReveal>

          {/* Filter Pills (Pexels / Dribbble style) */}
          <ScrollReveal delay={0.1} className="flex flex-wrap gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? PORTFOLIO_ITEMS.length
                  : PORTFOLIO_ITEMS.filter((i) => i.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                    isActive
                      ? 'bg-[var(--lime)] text-[#0A0F08] font-bold shadow-md scale-[1.02]'
                      : 'bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--line)] hover:text-[var(--fg)] hover:border-[var(--line-strong)]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#0A0F08]/15 text-[#0A0F08]' : 'bg-black/5 text-[var(--muted)]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </ScrollReveal>
        </div>

        {/* Pexels / Pinterest Style Masonry 2-Column Grid on Mobile */}
        <div className="columns-2 lg:columns-3 gap-2.5 sm:gap-3.5 md:gap-4 [column-fill:_balance]">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="break-inside-avoid mb-2.5 sm:mb-3.5 md:mb-4">
              <ScrollReveal delay={(index % 4) * 0.06}>
                <MasonryCard item={item} onOpenModal={() => setActiveModalItem(item)} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#0A0F08] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111a0e]/60">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[var(--lime)] text-[#0A0F08] font-bold">
                  {activeModalItem.category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-white line-clamp-1">
                  {activeModalItem.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {activeModalItem.liveUrl && (
                  <a
                    href={activeModalItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--lime)] text-[#0A0F08] text-xs font-bold hover:brightness-105 transition-all shadow-sm"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Media Content */}
            <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-4">
              {activeModalItem.type === 'video' ? (
                <video
                  src={activeModalItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto rounded-xl shadow-lg"
                />
              ) : (
                <img
                  src={activeModalItem.src}
                  alt={activeModalItem.title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
                />
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 bg-[#111a0e] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <p className="text-xs text-white/70">{activeModalItem.subtitle}</p>
              <div className="flex flex-wrap gap-1.5">
                {activeModalItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface MasonryCardProps {
  item: PortfolioMediaItem;
  onOpenModal: () => void;
}

const MasonryCard: React.FC<MasonryCardProps> = ({ item, onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Continuously play video on mount and loop automatically
  React.useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [item.type]);

  return (
    <div
      onClick={onOpenModal}
      className="group relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-[var(--surface-2)] border border-[var(--line-strong)] hover:border-[var(--lime)] shadow-[0_2px_12px_rgba(10,15,8,0.04)] hover:shadow-[0_16px_36px_rgba(10,15,8,0.12)] transition-all duration-300 cursor-pointer"
    >
      {/* Media Wrapper */}
      <div className="relative w-full overflow-hidden bg-neutral-900">
        {item.type === 'video' ? (
          <div className="relative">
            <video
              ref={videoRef}
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Continuous Video Live Indicator (Pexels style) */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 flex items-center gap-1.5 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono font-medium border border-white/10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--lime)] animate-pulse" />
                <span>Motion Ad</span>
              </span>
            </div>
          </div>
        ) : (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="w-full h-auto block object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        )}

        {/* Pexels-Style Floating Top Overlay */}
        <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3.5 sm:left-3.5 sm:right-3.5 z-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {item.type !== 'video' && (
            <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-sm">
              {item.category}
            </span>
          )}
          <div className="flex items-center gap-1.5 ml-auto pointer-events-auto">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
              title="Expand screenshot"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md hover:bg-white hover:text-[#0A0F08] text-white flex items-center justify-center transition-colors border border-white/10 shadow-sm"
            >
              <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Open live site"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md hover:bg-[var(--lime)] hover:text-[#0A0F08] text-white flex items-center justify-center transition-colors border border-white/10 shadow-sm"
              >
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Pexels-Style Bottom Dark Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-5 pt-8 sm:pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
          <div className="flex items-end justify-between gap-2 sm:gap-3">
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug line-clamp-1 drop-shadow-sm">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-white/75 line-clamp-1 mt-0.5">
                {item.subtitle}
              </p>
            </div>
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[var(--lime)] text-[#0A0F08] text-[10px] sm:text-xs font-bold font-mono inline-flex items-center gap-1 hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                <span>Live</span>
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Clean Minimalist Mobile/Always-Visible Caption Bar (below media for 2-column mobile grid) */}
      <div className="p-2.5 sm:p-3.5 flex items-center justify-between gap-1.5 md:hidden border-t border-[var(--line)]">
        <div className="min-w-0 flex-1">
          <span className="font-mono text-[9px] text-[var(--muted)] uppercase font-semibold block leading-tight truncate">
            {item.category}
          </span>
          <h4 className="text-[11px] sm:text-xs font-bold text-[var(--fg)] truncate block leading-tight mt-0.5">
            {item.title}
          </h4>
        </div>
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 text-[10px] font-mono font-bold text-[#0A0F08] bg-[var(--lime)] px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-xs"
          >
            <span>Live</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SelectedWork;
