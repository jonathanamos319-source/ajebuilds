import React from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { SelectedWork } from '@/components/SelectedWork';
import { TechStack } from '@/components/TechStack';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { GsapSection } from '@/components/ui/GsapSection';

const FloatingWhatsApp = dynamic(
  () => import('@/components/FloatingWhatsApp').then((m) => m.FloatingWhatsApp),
  { ssr: false }
);

const CookieConsent = dynamic(
  () => import('@/components/CookieConsent').then((m) => m.CookieConsent),
  { ssr: false }
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--lime)] selection:text-[#0A0F08] overflow-x-clip">
      <Navbar />
      {/* Hero renders immediately without GSAP opacity:0 delay to achieve instant LCP */}
      <Hero />
      <GsapSection>
        <WhyUs />
      </GsapSection>
      <GsapSection>
        <Services />
      </GsapSection>
      <GsapSection>
        <Process />
      </GsapSection>
      <GsapSection>
        <SelectedWork />
      </GsapSection>
      <GsapSection>
        <TechStack />
      </GsapSection>
      <GsapSection>
        <Pricing />
      </GsapSection>
      <GsapSection>
        <Faq />
      </GsapSection>
      <GsapSection>
        <FinalCta />
      </GsapSection>
      <GsapSection>
        <ContactSection />
      </GsapSection>
      <GsapSection>
        <Footer />
      </GsapSection>
      <FloatingWhatsApp />
      <CookieConsent />
    </main>
  );
}
