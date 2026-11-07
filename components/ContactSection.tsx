'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Mail, Phone, Calendar, Send, CheckCircle2, AlertCircle, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE_METADATA } from '@/data/content';
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

  // Pre-formatted WhatsApp inquiry message
  const whatsappUrl = `https://wa.me/2348022872198?text=${encodeURIComponent(
    `*New Project Inquiry — AJÉBUILDS*\n\n` +
    `*Name:* ${formData.name.trim() || 'Not provided'}\n` +
    `*Email:* ${formData.email.trim() || 'Not provided'}\n` +
    `*Phone / WhatsApp:* ${formData.phone.trim() || 'Not provided'}\n` +
    `*Service Needed:* ${formData.service}\n\n` +
    `*Project Details:*\n${formData.message.trim() || 'I would like to discuss building a project with AJÉBUILDS.'}`
  )}`;

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
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please message us directly via WhatsApp.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Web Design & UI/UX',
      message: '',
    });
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[var(--r-lg)] bg-[var(--surface-2)] border border-[var(--line-strong)] shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {status === 'success' && (
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0F08] border border-[var(--lime)]/30 text-white shadow-2xl space-y-4">
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[var(--lime)]/15 border border-[var(--lime)]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5 text-[var(--lime)]" />
                        </div>
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--lime)] font-semibold block">
                            Inquiry Received & Dispatched
                          </span>
                          <p className="text-sm sm:text-base font-semibold text-white">
                            Thank you, {formData.name || 'there'}. Your project details have been received.
                          </p>
                          <p className="text-xs text-[#8A9E85] leading-relaxed">
                            Amos Jonathan (Joe) is reviewing your submission and technical scope.
                          </p>
                        </div>
                      </div>

                      {/* 30-Minute Priority SLA Box - Pure Brand Colors, Zero Emojis */}
                      <div className="p-4 rounded-xl bg-[#141C12] border border-[#23351F] text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--lime)] font-bold">
                            30-Minute Response Commitment
                          </span>
                          <span className="font-mono text-[10px] text-zinc-400">Direct Channel</span>
                        </div>
                        <p className="text-[#C2D4BF] leading-relaxed text-xs">
                          If you do not receive an email response within 30 minutes, please connect directly via our priority WhatsApp channel for immediate consultation.
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--lime)] text-[#0A0F08] text-xs sm:text-sm font-bold hover:bg-[#78db09] transition-all shadow-[0_8px_25px_-5px_rgba(134,240,10,0.5)] cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 text-[#0A0F08]" />
                          <span>Open Priority WhatsApp Chat</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0F08]" />
                        </a>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-5 py-3.5 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer text-center"
                        >
                          Send another inquiry
                        </button>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-xs text-[var(--fg)] flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-red-600">Submission notice</p>
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

                  {/* Action Buttons: Native Submit & WhatsApp */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#86F00A] text-[#0A0F08] font-bold text-sm tracking-tight transition-all duration-200 hover:bg-[#78db09] hover:shadow-[0_8px_25px_-5px_rgba(134,240,10,0.5)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#0A0F08] border-t-transparent rounded-full animate-spin" />
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#0A0F08]" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0A0F08] text-white border border-[var(--line-strong)] hover:border-[#86F00A] font-semibold text-sm transition-all duration-200 hover:bg-[#162012] hover:text-[var(--lime)] cursor-pointer text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-[var(--lime)]" />
                      <span>Chat via WhatsApp</span>
                    </a>
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
