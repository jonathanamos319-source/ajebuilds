'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AjeBuildsLogo } from './AjeBuildsLogo';
import { LiquidMetalButton } from './ui/LiquidMetalButton';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on hash click or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 820) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-[var(--line)] shadow-sm'
          : 'bg-white/60 backdrop-blur-sm border-b border-transparent'
      }`}
      style={{ height: 'var(--nav-h)' }}
    >
      <div className="wrap h-full flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#" className="flex items-center gap-2 group outline-none">
          <AjeBuildsLogo size="md" variant="full" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[var(--fs-sm)] font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-[var(--muted)] hover:text-[var(--fg)] transition-colors py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--lime)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LiquidMetalButton
            href="#contact"
            size="sm"
            borderWidth={3}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            metalConfig={{
              colorBack: '#0A0F08',
              colorTint: '#86F00A',
              speed: 0.6,
            }}
          >
            Get a Quote
          </LiquidMetalButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[var(--fg)] hover:text-[var(--lime)] focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[var(--nav-h)] left-0 right-0 bg-white/98 border-b border-[var(--line)] backdrop-blur-xl px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[var(--fg)] hover:text-[var(--lime)] py-2 border-b border-[var(--line)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <LiquidMetalButton
              href="#contact"
              size="md"
              borderWidth={3}
              icon={<ArrowUpRight className="w-4 h-4" />}
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
              metalConfig={{
                colorBack: '#0A0F08',
                colorTint: '#86F00A',
                speed: 0.6,
              }}
            >
              Get a Quote
            </LiquidMetalButton>
          </div>
        </div>
      )}
    </header>
  );
};
