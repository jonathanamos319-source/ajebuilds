'use client';

import React from 'react';
import Link from 'next/link';
import { AjeBuildsLogo } from './AjeBuildsLogo';
import { SITE_METADATA } from '@/data/content';
import { Github, Linkedin, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 sm:py-12 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="wrap">
        <div className="p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-[var(--r-lg)] bg-[var(--surface)] border border-[var(--line-strong)] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-12">
            {/* Left Brand Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Link href="#" className="inline-block mb-4">
                  <AjeBuildsLogo size="lg" variant="full" />
                </Link>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-sm mb-6">
                  Global web design and software engineering agency headquartered in Lagos, Nigeria. Partnering with ambitious startups and businesses worldwide.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={SITE_METADATA.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:text-[#0A0F08] hover:bg-[var(--lime)] hover:border-[var(--lime)] transition-colors"
                    aria-label="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_METADATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:text-[#0A0F08] hover:bg-[var(--lime)] hover:border-[var(--lime)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_METADATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:text-[#0A0F08] hover:bg-[var(--lime)] hover:border-[var(--lime)] transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_METADATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:text-[#0A0F08] hover:bg-[var(--lime)] hover:border-[var(--lime)] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Nav Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Column 1: Services */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#244603] font-bold block mb-4">
                  Capabilities
                </span>
                <ul className="space-y-2.5 text-xs text-[var(--muted)]">
                  <li>
                    <Link href="#services" className="hover:text-[var(--fg)] transition-colors">
                      Web Design & UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-[var(--fg)] transition-colors">
                      Next.js Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-[var(--fg)] transition-colors">
                      E-Commerce Stores
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-[var(--fg)] transition-colors">
                      React Native Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-[var(--fg)] transition-colors">
                      Spring Boot APIs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Work */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#244603] font-bold block mb-4">
                  Selected Work
                </span>
                <ul className="space-y-2.5 text-xs text-[var(--muted)]">
                  <li>
                    <a
                      href="https://eke-market.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
                    >
                      <span>Eke-market</span>
                      <ArrowUpRight className="w-3 h-3 text-[#244603]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://haiflytrapng.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
                    >
                      <span>Haiflytrap</span>
                      <ArrowUpRight className="w-3 h-3 text-[#244603]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/jonathanamos319-source/Nectar_reactnative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
                    >
                      <span>Choprush</span>
                      <ArrowUpRight className="w-3 h-3 text-[#244603]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/jonathanamos319-source/Marketplace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
                    >
                      <span>MarketPlace</span>
                      <ArrowUpRight className="w-3 h-3 text-[#244603]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/jonathanamos319-source"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
                    >
                      <span>All GitHub Repos</span>
                      <ArrowUpRight className="w-3 h-3 text-[#244603]" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Connect */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#244603] font-bold block mb-4">
                  Connect
                </span>
                <ul className="space-y-2.5 text-xs text-[var(--muted)]">
                  <li>
                    <a
                      href="https://cal.com/amos-jonathan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--fg)] transition-colors"
                    >
                      Book 15-Min Call
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE_METADATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--fg)] transition-colors"
                    >
                      WhatsApp Chat
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE_METADATA.email}`}
                      className="hover:text-[var(--fg)] transition-colors"
                    >
                      {SITE_METADATA.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-[var(--muted)]/70">
                      Lagos, Nigeria • Worldwide Service
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--muted)]">
            <p>© {new Date().getFullYear()} AJÉBUILDS. All rights reserved. Engineering by Amos Jonathan.</p>
            <p>Built with Next.js 15 & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
