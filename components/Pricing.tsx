"use client";

import * as React from "react";
import { MotionConfig, motion, type Transition } from "framer-motion";
import { BerylCap } from "./ui/BerylCap";
import { LiquidMetalButton } from "./ui/LiquidMetalButton";
import { MessageSquare, ArrowUpRight, ShieldCheck, Clock, UserCheck } from "lucide-react";
import { Tag } from "@phosphor-icons/react";
import { WhatsAppIcon } from "./FloatingWhatsApp";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function PricingSection({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  const handleAction = React.useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const textarea = contactSection.querySelector("textarea");
      if (textarea) {
        setTimeout(() => textarea.focus(), 600);
      }
    } else {
      window.location.hash = "contact";
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="quote"
        className={cx(
          "[--ps-lit:#ffffff] [--ps-edge-top:rgba(255,255,255,0.08)] [--ps-edge-bottom:rgba(255,255,255,0.03)] [--ps-glow:48%] [--ps-glow-soft:17%] [--ps-dot:rgba(255,255,255,0.04)] [--ps-orb:rgba(255,255,255,0.03)]",
          "@container relative isolate w-full overflow-hidden bg-[#0A0F08] px-4 py-16 sm:px-6 sm:py-24 border-t border-[#1e2b1c]",
          className,
        )}
        {...props}
      >
        {/* Anchor for backward compatibility with #pricing */}
        <div id="pricing" className="absolute -top-20" aria-hidden="true" />

        {/* Subtle Atmospheric Top Lime Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(50%_70%_at_50%_0%,rgba(134,240,10,0.12),transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] mix-blend-screen"
          style={{ backgroundImage: NOISE }}
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="flex flex-col items-center text-center"
          >
            <span className="inline-flex h-6 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-zinc-300 shadow-sm backdrop-blur-sm">
              <Tag weight="fill" className="size-3 text-[var(--lime)]" aria-hidden />
              CUSTOM QUOTE & ESTIMATES
            </span>

            <h2 className="mt-4 bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-3xl font-extrabold leading-[1.12] tracking-tight text-transparent sm:text-4xl md:text-5xl">
              Every project is bespoke. Let&apos;s get you an exact quote.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              No rigid template packages or hidden surprises. Share your project goals with Amos Jonathan (Joe) and receive a transparent, fixed-scope proposal tailored to your exact budget and timeline.
            </p>
          </motion.header>

          {/* 3 Value Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl"
          >
            <div className="p-4 rounded-2xl bg-[#111a0e] border border-[#1e2b1c] flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--lime)] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Fixed Project Scope</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">0% surprise hourly overages</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#111a0e] border border-[#1e2b1c] flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--lime)] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">24-Hour Turnaround</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">Rapid custom estimate & plan</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#111a0e] border border-[#1e2b1c] flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--lime)] shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Direct Engineer Access</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">Talk directly with the builder</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive 3D Glass Keycap & Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            className="mt-12 w-full flex flex-col items-center text-center"
          >
            {/* 3D Glass Raymarched Keycap */}
            <div className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] max-w-full flex items-center justify-center cursor-pointer group">
              <BerylCap
                legend="send"
                background="#0A0F08"
                legendColor="#FFFFFF"
                size={300}
                dispersion={60}
                speed={50}
                advanced={{
                  light2Color: "#86F00A",
                  light1Color: "#FF5A2A",
                  light3Color: "#3A5BFF",
                  keyColor: "#FFFFFF",
                  glow: 14,
                }}
                onClick={handleAction}
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-5 flex flex-col items-center gap-3">
              <LiquidMetalButton
                size="lg"
                onClick={handleAction}
                icon={<ArrowUpRight className="w-4 h-4 text-white" />}
              >
                Get a Free Quote
              </LiquidMetalButton>

              <a
                href="https://wa.me/2348022872198"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--lime)] hover:text-white transition-colors underline underline-offset-4"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Or chat instantly on WhatsApp for a fast quote →</span>
              </a>

              <p className="text-[11px] font-mono text-zinc-500 tracking-tight mt-1">
                Tap the glass keycap or click above to discuss your project directly
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

export const Pricing = PricingSection;
export default PricingSection;
