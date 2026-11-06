import type { Metadata } from 'next';
import { Sora, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ajebuilds.site'),
  title: 'AJÉBUILDS. | Global Web Design & Development Agency (Lagos & Worldwide)',
  description:
    'Global web design and software engineering agency headquartered in Lagos, Nigeria. We build high-converting websites, Next.js web applications, and global checkout solutions for ambitious startups and businesses worldwide.',
  keywords: [
    'developers in nigeria',
    'developers in lagos',
    'web design agency lagos',
    'software engineers in nigeria',
    'hire web developers in nigeria',
    'Next.js developer lagos',
    'React developer nigeria',
    'global web design agency',
    'full stack developers in lagos',
    'AJÉBUILDS',
    'Amos Jonathan',
    'custom web development worldwide',
    'ecommerce web developers nigeria',
    'Stripe Paystack integration developers',
  ],
  authors: [{ name: 'Amos Jonathan (Joe)', url: 'https://amosjonathan.vercel.app/' }],
  creator: 'Amos Jonathan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajebuilds.site',
    siteName: 'AJÉBUILDS.',
    title: 'AJÉBUILDS. | Global Web Design & Development Agency',
    description:
      'High-performance Next.js web applications and bespoke web design for founders and businesses worldwide, engineered in Lagos, Nigeria.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJÉBUILDS. | Global Web Design & Development Agency',
    description:
      'High-performance Next.js web applications and bespoke web design for founders and businesses worldwide, engineered in Lagos, Nigeria.',
    creator: '@joenitos',
  },
  alternates: {
    canonical: 'https://ajebuilds.site',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Organization'],
  name: 'AJÉBUILDS.',
  alternateName: 'AjeBuilds Agency',
  url: 'https://ajebuilds.site',
  telephone: '+2348022872198',
  email: 'amosjonathan310@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressRegion: 'Lagos State',
    addressCountry: 'NG',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Worldwide' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'City', name: 'Lagos' },
    { '@type': 'AdministrativeArea', name: 'Europe' },
    { '@type': 'Country', name: 'Canada' },
  ],
  knowsAbout: [
    'Web Design',
    'Web Development in Nigeria',
    'Developers in Lagos',
    'Next.js 15 Web Applications',
    'Full-Stack Software Engineering',
    'E-Commerce Development',
    'Stripe and Paystack Integration',
  ],
  founder: {
    '@type': 'Person',
    name: 'Amos Jonathan',
    alternateName: 'Joe',
    url: 'https://amosjonathan.vercel.app/',
  },
  sameAs: [
    'https://x.com/joenitos',
    'https://www.linkedin.com/in/amos-jonathan-799b82354',
    'https://github.com/jonathanamos319-source',
    'https://www.tiktok.com/@joenitos',
  ],
  description:
    'Global web design and software engineering agency based in Lagos, Nigeria, serving clients worldwide with high-converting websites and scalable Next.js web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
