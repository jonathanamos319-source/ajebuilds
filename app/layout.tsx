import type { Metadata, Viewport } from 'next';
import { Sora, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { FAQ_ITEMS, SERVICES, SITE_METADATA } from '@/data/content';

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

export const viewport: Viewport = {
  themeColor: '#0A0F08',
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ajebuilds.site'),
  title: {
    default: 'AJÉBUILDS. — Global Web Design & Development Agency (Lagos & Worldwide)',
    template: '%s | AJÉBUILDS.',
  },
  description:
    'Global web design and software engineering agency based in Lagos, Nigeria, partnering with founders worldwide. We build high-converting websites, scalable Next.js 15 web applications, and seamless global checkout solutions with Stripe, Paystack & Flutterwave.',
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
    'Spring Boot developer lagos',
    'React Native mobile developer nigeria',
  ],
  authors: [{ name: 'Amos Jonathan (Joe)', url: 'https://amosjonathan.vercel.app/' }],
  creator: 'Amos Jonathan',
  publisher: 'AJÉBUILDS.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://ajebuilds.site',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajebuilds.site',
    siteName: 'AJÉBUILDS.',
    title: 'AJÉBUILDS. — Global Web Design & Development Agency',
    description:
      'High-performance Next.js web applications, e-commerce stores, and bespoke web design for founders worldwide, engineered in Lagos, Nigeria.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AJÉBUILDS. — Global Web Design & Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJÉBUILDS. — Global Web Design & Development Agency',
    description:
      'High-performance Next.js web applications, e-commerce stores, and bespoke web design for founders worldwide, engineered in Lagos, Nigeria.',
    creator: '@joenitos',
    site: '@joenitos',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Organization & ProfessionalService Schema
    {
      '@type': ['ProfessionalService', 'Organization'],
      '@id': 'https://ajebuilds.site/#organization',
      name: 'AJÉBUILDS.',
      alternateName: 'AjeBuilds Agency',
      url: 'https://ajebuilds.site',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ajebuilds.site/android-chrome-512x512.png',
        caption: 'AJÉBUILDS. Logo',
      },
      image: 'https://ajebuilds.site/og-image.png',
      telephone: '+2348022872198',
      email: 'amosjonathan310@gmail.com',
      priceRange: '$$',
      currenciesAccepted: 'USD, EUR, GBP, NGN',
      paymentAccepted: 'Stripe, Paystack, Flutterwave, Bank Transfer, Crypto',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressRegion: 'Lagos State',
        addressCountry: 'NG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 6.5244,
        longitude: 3.3792,
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
      founder: {
        '@type': 'Person',
        name: 'Amos Jonathan',
        alternateName: 'Joe',
        jobTitle: 'Founder & Lead Software Engineer',
        url: 'https://amosjonathan.vercel.app/',
        sameAs: [
          'https://x.com/joenitos',
          'https://www.linkedin.com/in/amos-jonathan-799b82354',
          'https://github.com/jonathanamos740-droid',
          'https://www.tiktok.com/@joenitos',
        ],
      },
      sameAs: [
        'https://x.com/joenitos',
        'https://www.linkedin.com/in/amos-jonathan-799b82354',
        'https://github.com/jonathanamos740-droid',
        'https://www.tiktok.com/@joenitos',
      ],
      knowsAbout: [
        'Web Design',
        'Web Development in Nigeria',
        'Developers in Lagos',
        'Next.js 15 Web Applications',
        'React 19 Frontend Engineering',
        'Full-Stack Software Engineering',
        'Spring Boot REST APIs',
        'E-Commerce Development',
        'Stripe and Paystack Payment Integration',
      ],
      description:
        'Global web design and software engineering agency based in Lagos, Nigeria, serving clients worldwide with high-converting websites and scalable Next.js web applications.',
    },

    // 2. WebSite Schema
    {
      '@type': 'WebSite',
      '@id': 'https://ajebuilds.site/#website',
      url: 'https://ajebuilds.site',
      name: 'AJÉBUILDS.',
      description:
        'Global web design and software engineering agency based in Lagos, Nigeria, serving clients worldwide.',
      publisher: {
        '@id': 'https://ajebuilds.site/#organization',
      },
      inLanguage: 'en-US',
    },

    // 3. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://ajebuilds.site/#webpage',
      url: 'https://ajebuilds.site',
      name: 'AJÉBUILDS. — Global Web Design & Development Agency',
      description:
        'High-performance Next.js web applications, e-commerce stores, and bespoke web design for founders worldwide, engineered in Lagos, Nigeria.',
      isPartOf: {
        '@id': 'https://ajebuilds.site/#website',
      },
      about: {
        '@id': 'https://ajebuilds.site/#organization',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://ajebuilds.site/og-image.png',
      },
      inLanguage: 'en-US',
    },

    // 4. BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://ajebuilds.site/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ajebuilds.site',
        },
      ],
    },

    // 5. Service Schemas (matching visible agency services)
    ...SERVICES.map((service) => ({
      '@type': 'Service',
      '@id': `https://ajebuilds.site/#service-${service.id}`,
      name: service.title,
      description: service.tagline,
      provider: {
        '@id': 'https://ajebuilds.site/#organization',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Worldwide',
      },
      serviceType: service.title,
    })),

    // 6. FAQPage Schema (matching visible FAQ questions and answers)
    {
      '@type': 'FAQPage',
      '@id': 'https://ajebuilds.site/#faq',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero-developer.webp"
          imageSrcSet="/images/hero/hero-developer-mobile.webp 640w, /images/hero/hero-developer.webp 1280w"
          imageSizes="(max-width: 640px) 100vw, 640px"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
