'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CONSENT_KEY = 'ajebuilds_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay so it doesn't flash in immediately on load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 z-[9999] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div
            className="rounded-2xl border border-white/10 px-4 py-4 sm:px-6 sm:py-5 shadow-2xl"
            style={{
              background: 'rgba(10, 15, 8, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Close / dismiss */}
            <button
              onClick={decline}
              aria-label="Close cookie banner"
              className="absolute right-4 top-4 rounded-full p-1 text-white/40 transition hover:text-white/80"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-4">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                  We value your privacy 🍪
                </h3>
                <p className="text-xs text-white/55 leading-relaxed">
                  We use cookies to improve your browsing experience, analyse site traffic, and
                  personalise content. By clicking&nbsp;
                  <span className="text-white/80 font-medium">Accept All</span>, you consent to our
                  use of cookies. You can manage your preferences at any time.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={accept}
                className="rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: '#86F00A', color: '#0A0F08' }}
              >
                Accept All
              </button>
              <button
                onClick={decline}
                className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white active:scale-95"
              >
                Decline
              </button>
              <a
                href="#"
                className="text-xs underline underline-offset-2 transition"
                style={{ color: '#86F00A' }}
                onClick={(e) => e.preventDefault()}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

