import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | AJÉBUILDS.',
  description: 'The requested page could not be found on AJÉBUILDS.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0F08] text-white p-6 text-center">
      <span className="text-xs font-mono uppercase tracking-widest text-[var(--lime)] mb-3">404 Error</span>
      <h1 className="text-4xl sm:text-5xl font-black mb-4">Page Not Found</h1>
      <p className="text-zinc-400 max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-[var(--lime)] text-[#0A0F08] font-bold text-sm hover:bg-[var(--lime-dark)] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
