'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0F08] text-white flex min-h-screen items-center justify-center p-6 text-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
          <p className="text-zinc-400 max-w-md mb-6 text-sm">
            {error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-[#86F00A] text-[#0A0F08] font-bold text-sm"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

