'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Mail, Phone, Calendar, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { SITE_METADATA } from '@/data/content';
import { LiquidMetalButton } from './ui/LiquidMetalButton';
import { SocialFlipButton } from './ui/SocialFlipButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Design & UI/UX',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Web Design & UI/UX',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please message us directly via WhatsApp.');
    }
  };

  return (
    <section id="contact" className="section-py bg-[var(--surface)] border-t border-[var(--line)]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contacts & Social Flip */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="eyebrow">START A CONVERSATION</span>
              <h2 className="text-[var(--fs-h2)] font-bold tracking-tight text-[var(--fg)] mt-3 mb-4 leading-tight">
                Tell us about what you want to build.
              </h2>
              <p className="text-[var(--fs-body)] text-[var(--muted)] leading-relaxed mb-8">
                Fill out the project inquiry form or reach out directly through any of our direct channels below. You’ll be talking directly with Amos Jonathan (Joe).
              </p>

              <div className="space-y-3.5 sm:space-y-4">
                {/* Email card */}
                <a
                  href={`mailto:${SITE_METADATA.email}`}
                  className="flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-[var(--r-md)] bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#0A0F08] transition-colors group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A0F08] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[var(--muted)] block">Email Us</span>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--fg)] truncate block">{SITE_METADATA.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[#0A0F08] transition-colors shrink-0 ml-2" />
                </a>

                {/* WhatsApp card */}
                <a
                  href={SITE_METADATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-[var(--r-md)] bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#0A0F08] transition-colors group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A0F08] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[var(--muted)] block">WhatsApp</span>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--fg)] truncate block">{SITE_METADATA.whatsappNumber}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[#0A0F08] transition-colors shrink-0 ml-2" />
                </a>

                {/* Cal.com card */}
                <a
                  href={SITE_METADATA.calComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-[var(--r-md)] bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#0A0F08] transition-colors group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A0F08] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[var(--muted)] block">Schedule a Call</span>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--fg)] truncate block">Book a 15-min discovery video call</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[#0A0F08] transition-colors shrink-0 ml-2" />
                </a>
              </div>

              {/* Interactive Social Flip Button */}
              <div className="mt-8 pt-6 border-t border-[var(--line)]">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-2 font-bold">
                  Connect & Verify Channels:
                </span>
                <SocialFlipButton className="p-0 justify-start" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form with Liquid Metal Submit Button */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[var(--r-lg)] bg-[var(--surface-2)] border border-[var(--line-strong)] shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-[var(--fg)] flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <p className="font-bold text-emerald-700">Message received!</p>
                        <p className="text-[var(--muted)] mt-0.5">
                          Thank you for reaching out. Amos Jonathan will review your project details and get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-xs text-[var(--fg)] flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <div>
                        <p className="font-bold text-red-400">Submission failed</p>
                        <p className="text-[var(--muted)] mt-0.5">
                          {errorMessage || 'Please try again or chat with us directly via WhatsApp.'}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-[var(--muted)]">
                        Your Name <span className="text-black">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tunde Adeyemi"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line-strong)] text-[var(--fg)] text-sm focus:outline-none focus:border-black transition-colors placeholder:text-[var(--muted)]/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-[var(--muted)]">
                        Email Address <span className="text-black">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line-strong)] text-[var(--fg)] text-sm focus:outline-none focus:border-black transition-colors placeholder:text-[var(--muted)]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone / WhatsApp */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-mono uppercase text-[var(--muted)]">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line-strong)] text-[var(--fg)] text-sm focus:outline-none focus:border-black transition-colors placeholder:text-[var(--muted)]/50"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-xs font-mono uppercase text-[var(--muted)]">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line-strong)] text-[var(--fg)] text-sm focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="Web Design & UI/UX">Web Design & UI/UX</option>
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="E-Commerce & Payments">E-Commerce & Payments</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Technical SEO & Speed">Technical SEO & Speed</option>
                        <option value="Maintenance & Managed Hosting">Maintenance & Managed Hosting</option>
                        <option value="Custom Project Consultation">Custom Project Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-[var(--muted)]">
                      Project Details & Goals <span className="text-black">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you are trying to build, key features, target timeline, or budget..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line-strong)] text-[var(--fg)] text-sm focus:outline-none focus:border-black transition-colors placeholder:text-[var(--muted)]/50 resize-y"
                    />
                  </div>

                  {/* Liquid Metal Submit Button */}
                  <div className="pt-2 flex justify-start">
                    <LiquidMetalButton
                      type="submit"
                      disabled={status === 'loading'}
                      size="lg"
                      icon={<Send className="w-4 h-4 text-white" />}
                      className="w-full sm:w-auto"
                    >
                      {status === 'loading' ? 'Sending inquiry...' : 'Submit Project Inquiry'}
                    </LiquidMetalButton>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
