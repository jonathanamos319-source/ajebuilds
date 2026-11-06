'use client';

import React, { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0F08] text-white p-6 text-center">
      <span className="text-xs font-mono uppercase tracking-widest text-[var(--lime)] mb-3">Notice</span>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-zinc-400 max-w-md mb-8 text-sm">
        {error?.message || 'An unexpected error occurred. Please try refreshing the page.'}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-full bg-[var(--lime)] text-[#0A0F08] font-bold text-sm hover:bg-[var(--lime-dark)] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

