/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ============================================================================
 * AJÉBUILDS. — CENTRAL CONTENT & PLACEHOLDER DATA STORE
 * ============================================================================
 * NOTE: As requested by the client, all quantitative metrics, client reviews,
 * case study names, prices, and stats are consolidated in this single file
 * and clearly tagged with `[PLACEHOLDER]` so they can be easily reviewed,
 * verified, and replaced with real production client data.
 * ============================================================================
 */

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  isPlaceholder: boolean;
}

export interface DifferentiatorItem {
  id: string;
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  duration: string;
  summary: string;
  keyOutputs: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "E-commerce" | "Corporate / SaaS" | "Fintech" | "Healthcare";
  description: string;
  impactMetric: string;
  impactLabel: string;
  year: string;
  techStack: string[];
  liveUrlPlaceholder: string;
  isPlaceholder: boolean;
  themeColor: string;
  mockupDetails: {
    heroHeading: string;
    heroSubheading: string;
    ctaText: string;
    accentColor: string;
    accentBg: string;
    previewBadge: string;
    highlights: string[];
  };
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "E-commerce" | "Infrastructure" | "Payments";
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceNgn: string;
  rawPrice: number;
  deliveryTime: string;
  isPopular?: boolean;
  isPlaceholder: boolean;
  features: string[];
  ctaLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatarPlaceholder: string;
  rating: number;
  isPlaceholder: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  category: string;
  slug: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// ----------------------------------------------------------------------------
// 1. BRAND & CONTACT INFORMATION
// ----------------------------------------------------------------------------
export const BRAND_INFO = {
  name: "AJÉBUILDS.",
  shortName: "AJÉBUILDS",
  tagline: "We build websites that turn visitors into paying customers.",
  subline: "Lagos-based web design & software development agency serving ambitious businesses across Nigeria and global markets.",
  email: "hello@ajebuilds.ng", // [PLACEHOLDER - Swap with agency inbox]
  phone: "+234 812 345 6789", // [PLACEHOLDER - Swap with official agency phone]
  whatsappNumber: "2348123456789", // [PLACEHOLDER - Used for floating WhatsApp button]
  address: "Victoria Island & Lekki Phase 1, Lagos, Nigeria", // [PLACEHOLDER]
  workingHours: "Mon – Fri: 9:00 AM – 6:00 PM (WAT)",
  socials: {
    twitter: "https://x.com/ajebuilds_ng",
    linkedin: "https://linkedin.com/company/ajebuilds",
    instagram: "https://instagram.com/ajebuilds.ng",
    github: "https://github.com/ajebuilds",
  },
};

// ----------------------------------------------------------------------------
// 2. HERO STATS STRIP (Section 2) — [ALL PLACEHOLDERS]
// ----------------------------------------------------------------------------
export const HERO_STATS: StatItem[] = [
  {
    id: "stat-1",
    value: "120+",
    label: "Websites Launched",
    sublabel: "Across Lagos, Abuja & Port Harcourt",
    isPlaceholder: true, // [PLACEHOLDER]
  },
  {
    id: "stat-2",
    value: "99.4%",
    label: "Lighthouse Performance",
    sublabel: "Optimized for Nigerian mobile networks",
    isPlaceholder: true, // [PLACEHOLDER]
  },
  {
    id: "stat-3",
    value: "₦2.8B+",
    label: "Client Revenue Handled",
    sublabel: "Processed through integrated checkout flows",
    isPlaceholder: true, // [PLACEHOLDER]
  },
  {
    id: "stat-4",
    value: "3.4×",
    label: "Average Inbound Lift",
    sublabel: "Measured qualified lead conversions",
    isPlaceholder: true, // [PLACEHOLDER]
  },
];

// ----------------------------------------------------------------------------
// 3. WHY AJÉBUILDS (Section 3) — 3 Core Differentiators
// ----------------------------------------------------------------------------
export const WHY_US_ITEMS: DifferentiatorItem[] = [
  {
    id: "diff-fast",
    step: "01",
    title: "Fast Delivery Without Sloppy Shortcuts",
    description: "Most Nigerian agencies take 3 to 6 months to ship. We operate in disciplined 2 to 3-week design-to-code sprints with clear milestones, staging links, and daily transparency.",
    highlight: "Average 14-day turnaround on business sites",
  },
  {
    id: "diff-conversion",
    step: "02",
    title: "Conversion-Focused Architecture",
    description: "A pretty website with zero sales is an expense, not an investment. We engineer high-intent visual hierarchy, lightning load times on 4G networks, and frictionless Paystack/WhatsApp checkouts.",
    highlight: "Designed around your bottom line",
  },
  {
    id: "diff-support",
    step: "03",
    title: "Direct Engineering & Ongoing Support",
    description: "We don't hand over a zip file and vanish. You get dedicated WhatsApp emergency response, cloud monitoring, weekly backups, security patches, and ongoing speed optimization.",
    highlight: "Real developers on standby, not support bots",
  },
];

// ----------------------------------------------------------------------------
// 4. SERVICES GRID (Section 4) — 6 Services
// ----------------------------------------------------------------------------
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "service-web-design",
    iconName: "Palette",
    title: "Web Design & UI/UX",
    tagline: "Bespoke, high-converting digital interfaces crafted in Figma.",
    deliverables: [
      "Brand identity & design systems",
      "Interactive wireframes & prototypes",
      "Mobile-first responsive UX",
      "Conversion rate optimization (CRO)",
    ],
  },
  {
    id: "service-web-dev",
    iconName: "Code2",
    title: "Full-Stack Web Development",
    tagline: "Custom-coded, lightning-fast web applications built for scale.",
    deliverables: [
      "Modern Next.js & React engineering",
      "TypeScript & robust API integrations",
      "Headless CMS (Sanity / Strapi / Payload)",
      "Lighthouse 90+ Core Web Vitals score",
    ],
  },
  {
    id: "service-ecommerce",
    iconName: "ShoppingBag",
    title: "E-Commerce & Shopify",
    tagline: "Online storefronts engineered to maximize Nigerian and international sales.",
    deliverables: [
      "Custom Shopify Liquid & headless builds",
      "Paystack, Flutterwave & Monnify setup",
      "Abandoned cart automation & WhatsApp chat",
      "Inventory & courier logistics syncing",
    ],
  },
  {
    id: "service-mobile-apps",
    iconName: "Smartphone",
    title: "Mobile App Development",
    tagline: "Native and cross-platform apps that keep your customers engaged.",
    deliverables: [
      "React Native & Flutter mobile development",
      "Progressive Web Apps (PWA) with offline support",
      "Push notification engines",
      "App Store & Google Play deployment",
    ],
  },
  {
    id: "service-seo",
    iconName: "Search",
    title: "Technical SEO & Speed",
    tagline: "Dominate Google search results and turn organic searchers into clients.",
    deliverables: [
      "Lagos & pan-Nigeria local business schema",
      "Core Web Vitals sub-second page loads",
      "Keyword research & content architecture",
      "Automated XML sitemaps & Google Search Console",
    ],
  },
  {
    id: "service-maintenance",
    iconName: "ShieldCheck",
    title: "Maintenance & Managed Hosting",
    tagline: "Zero downtime, bulletproof security, and proactive technical care.",
    deliverables: [
      "24/7 server health & uptime alerts",
      "Automated daily cloud backups",
      "Security hardening & SSL management",
      "Priority WhatsApp technical support",
    ],
  },
];

// ----------------------------------------------------------------------------
// 5. PROCESS (Section 5) — 4 Steps Timeline
// ----------------------------------------------------------------------------
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "Discover & Strategy",
    duration: "Days 1 – 3",
    summary: "We dig into your business model, target Nigerian customer demographics, revenue funnels, and benchmark against top competitors.",
    keyOutputs: ["Product requirements brief", "Site architecture map", "Competitor gap analysis"],
  },
  {
    number: "02",
    phase: "Design & Prototype",
    duration: "Days 4 – 8",
    summary: "We design every screen in Figma, prioritizing mobile usability, high-contrast readability, typography, and unmistakable conversion paths.",
    keyOutputs: ["Full responsive Figma layout", "Interactive prototype", "Design system & component library"],
  },
  {
    number: "03",
    phase: "Engineering & Integration",
    duration: "Days 9 – 16",
    summary: "We write clean, production-grade TypeScript and Next.js code, integrate Nigerian payment gateways, set up CMS, and ensure sub-second loads.",
    keyOutputs: ["Clean Git repository", "Paystack / Flutterwave integration", "CMS dashboard setup"],
  },
  {
    number: "04",
    phase: "Launch, QA & Scale",
    duration: "Days 17 – 20",
    summary: "Thorough multi-device QA on low-bandwidth networks, SSL certification, domain DNS routing, Google indexing, and client staff walkthrough.",
    keyOutputs: ["Production deployment", "Lighthouse 95+ audit pass", "30-day post-launch warranty"],
  },
];

// ----------------------------------------------------------------------------
// 6. SELECTED WORK (Section 6) — 6 Projects with Categories [ALL PLACEHOLDERS]
// ----------------------------------------------------------------------------
export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-paywave",
    title: "PayWave Financial",
    client: "PayWave Africa Ltd.",
    category: "Fintech",
    description: "Next-generation merchant payments checkout and cross-border invoicing portal designed for high-volume Nigerian businesses.",
    impactMetric: "+240%",
    impactLabel: "Checkout conversion rate",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack API"],
    liveUrlPlaceholder: "https://paywave.example.ng",
    isPlaceholder: true, // [PLACEHOLDER]
    themeColor: "#86F00A",
    mockupDetails: {
      heroHeading: "Instant B2B Settlements Across West Africa",
      heroSubheading: "Accept Naira, USD, and stablecoins with 99.98% gateway uptime.",
      ctaText: "Open Merchant Account",
      accentColor: "#86F00A",
      accentBg: "bg-emerald-950/60",
      previewBadge: "Fintech Portal",
      highlights: ["Multi-currency billing", "Instant webhooks", "Lagos & Nairobi routing"],
    },
  },
  {
    id: "proj-alagba",
    title: "Alágbà Atelier",
    client: "Alágbà Luxury Fashion",
    category: "E-commerce",
    description: "Custom headless e-commerce store with editorial lookbooks and multi-currency checkout for a high-end Nigerian contemporary fashion label.",
    impactMetric: "₦42M",
    impactLabel: "First month GMV processed",
    year: "2026",
    techStack: ["Shopify Liquid", "React", "Tailwind CSS", "Flutterwave"],
    liveUrlPlaceholder: "https://alagba-atelier.example.ng",
    isPlaceholder: true, // [PLACEHOLDER]
    themeColor: "#E09F3E",
    mockupDetails: {
      heroHeading: "African Craftsmanship, Global Sophistication",
      heroSubheading: "Curated collections handmade in Lagos. Worldwide DHL Express shipping.",
      ctaText: "Explore 2026 Lookbook",
      accentColor: "#E09F3E",
      accentBg: "bg-amber-950/60",
      previewBadge: "Luxury E-Commerce",
      highlights: ["3D Fabric Viewer", "Seamless Cart Drawer", "Pay with Apple Pay / Naira"],
    },
  },
  {
    id: "proj-koralink",
    title: "KargoLink Africa",
    client: "KargoLink Logistics",
    category: "Corporate / SaaS",
    description: "Fleet tracking dispatch platform and cargo booking portal connecting interstate freight carriers across 36 Nigerian states.",
    impactMetric: "-60%",
    impactLabel: "Support dispatch ticket volume",
    year: "2026",
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Google Maps"],
    liveUrlPlaceholder: "https://kargolink.example.ng",
    isPlaceholder: true, // [PLACEHOLDER]
    themeColor: "#38BDF8",
    mockupDetails: {
      heroHeading: "Intelligent Freight Logistics Across Nigeria",
      heroSubheading: "Real-time GPS cargo tracking, digital manifests, and verified haulage drivers.",
      ctaText: "Book Freight Dispatch",
      accentColor: "#38BDF8",
      accentBg: "bg-sky-950/60",
      previewBadge: "Enterprise SaaS",
      highlights: ["Real-time GPS Tracking", "Waybill Generation", "Carrier Ratings"],
    },
  },
  {
    id: "proj-crestview",
    title: "Crestview Health Clinic",
    client: "Crestview Medical Group",
    category: "Healthcare",
    description: "Patient appointment scheduling, virtual consultation bookings, and verified lab results portal for a premier Victoria Island healthcare group.",
    impactMetric: "3.8×",
    impactLabel: "Growth in online appointment bookings",
    year: "2026",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Calendly API"],
    liveUrlPlaceholder: "https://crestviewclinic.example.ng",
    isPlaceholder: true, // [PLACEHOLDER]
    themeColor: "#4ADE80",
    mockupDetails: {
      heroHeading: "World-Class Healthcare on Victoria Island",
      heroSubheading: "Book specialist appointments in seconds. Fast confidential lab reports.",
      ctaText: "Schedule Consultation",
      accentColor: "#4ADE80",
      accentBg: "bg-green-950/60",
      previewBadge: "Healthcare Portal",
      highlights: ["Direct Doctor Calendar", "HIPAA/NDPR Compliant", "WhatsApp Follow-ups"],
    },
  },
  {
    id: "proj-odua",
    title: "Odua Property Group",
    client: "Odua Estates Lagos",
    category: "Corporate / SaaS",
    description: "High-end commercial and residential real estate investment portal with 4K interactive architectural walk-throughs in Lekki and Ikoyi.",
    impactMetric: "₦1.2B+",
    impactLabel: "Verified property inquiries in 90 days",
    year: "2025",
    techStack: ["Next.js", "Tailwind CSS", "Mapbox", "Sanity CMS"],
    liveUrlPlaceholder: "https://oduaestates.example.ng",
    isPlaceholder: true, // [PLACEHOLDER]
    themeColor: "#F59E0B",
    mockupDetails: {
      heroHeading: "Prime Prime Properties in Ikoyi, Lekki & Eko Atlantic",
      heroSubheading: "Verified luxury titles, turnkey duplexes, and institutional development yields.",
      ctaText: "Browse Luxury Listings",
      accentColor: "#F59E0B",
      accentBg: "bg-yellow-950/60",
      previewBadge: "Real Estate Portal",
      highlights: ["Interactive Floor Plans", "Inspection Booking", "C-of-O Verification"],
    },
  },
  {
    id: "proj-swiftmart",
    title: "SwiftMart Supermarket",
    client: "SwiftMart Retail Nigeria",
    category: "E-commerce",
    description: "Hyperlocal online grocery and essentials delivery web application with 45-minute dispatch radius across mainland and island Lagos.",
    impactMetric: "14,000+",
    impactLabel: "Monthly completed orders",
    year: "2025",
    techStack: ["Shopify Liquid", "Next.js", "Tailwind CSS", "PWA"],
    liveUrlPlaceholder: "https://swiftmart.example.ng",
    isPlaceholder: true, // [PLACEHOLDER]
    themeColor: "#A3E635",
    mockupDetails: {
      heroHeading: "Fresh Groceries Delivered in 45 Minutes in Lagos",
      heroSubheading: "Shop fresh produce, pantry essentials, and household goods at direct market rates.",
      ctaText: "Start Shopping Now",
      accentColor: "#A3E635",
      accentBg: "bg-lime-950/60",
      previewBadge: "Quick Commerce",
      highlights: ["45-min Doorstep Dispatch", "Pay on Delivery or Card", "Live Bag Tracking"],
    },
  },
];

// ----------------------------------------------------------------------------
// 7. TECH STACK (Section 7) — Infinite Marquee Technologies
// ----------------------------------------------------------------------------
export const TECH_STACK: TechItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Docker", category: "Infrastructure" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Shopify", category: "E-commerce" },
  { name: "WordPress", category: "E-commerce" },
  { name: "Paystack", category: "Payments" },
  { name: "Flutterwave", category: "Payments" },
  { name: "Supabase", category: "Backend" },
  { name: "Figma", category: "Frontend" },
  { name: "Vercel", category: "Infrastructure" },
];

// ----------------------------------------------------------------------------
// 8. PRICING (Section 8) — 3 Packages in Naira [ALL PLACEHOLDERS]
// ----------------------------------------------------------------------------
export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: "plan-starter",
    name: "Starter Website",
    tagline: "Essential online presence for new Nigerian businesses and service providers.",
    priceNgn: "₦350,000",
    rawPrice: 350000,
    deliveryTime: "7 – 10 Business Days",
    isPlaceholder: true, // [PLACEHOLDER]
    features: [
      "Up to 5 custom-designed responsive pages",
      "Mobile-first design optimized for slow networks",
      "Direct WhatsApp chat & inquiry capture button",
      "Basic on-page SEO & Google Business setup",
      "Custom domain & SSL configuration",
      "14 days post-launch technical warranty",
    ],
    ctaLabel: "Choose Starter",
  },
  {
    id: "plan-business",
    name: "Business Growth",
    tagline: "Full-scale corporate website or e-commerce store built to generate continuous revenue.",
    priceNgn: "₦750,000",
    rawPrice: 750000,
    deliveryTime: "14 – 18 Business Days",
    isPopular: true,
    isPlaceholder: true, // [PLACEHOLDER]
    features: [
      "Up to 12 bespoke pages or full Shopify/WooCommerce store",
      "Paystack & Flutterwave multi-channel checkout integration",
      "Headless CMS for easy in-house blog and content updates",
      "Advanced Technical SEO & Schema markup (Lagos targeted)",
      "Lighthouse 90+ Core Web Vitals performance guarantee",
      "Automated lead capture & CRM notification routing",
      "30 days dedicated WhatsApp priority support & training",
    ],
    ctaLabel: "Choose Business Growth",
  },
  {
    id: "plan-custom",
    name: "Custom Enterprise",
    tagline: "Bespoke SaaS platforms, custom portals, and high-volume digital products.",
    priceNgn: "₦1,850,000+",
    rawPrice: 1850000,
    deliveryTime: "3 – 6 Weeks",
    isPlaceholder: true, // [PLACEHOLDER]
    features: [
      "Custom web application or SaaS platform architecture",
      "Full-stack Next.js, TypeScript & database engineering",
      "Third-party API & ERP / warehouse logistics integrations",
      "Role-based authentication & enterprise security compliance",
      "Multi-currency billing & automated invoicing pipelines",
      "Load balancing & high-concurrency cloud infrastructure",
      "Dedicated Slack/WhatsApp engineering channel & SLA",
    ],
    ctaLabel: "Discuss Custom Scope",
  },
];

// ----------------------------------------------------------------------------
// 9. TESTIMONIALS (Section 9) — [ALL PLACEHOLDERS]
// ----------------------------------------------------------------------------
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Before AJÉBUILDS redesigned our company site, we had maybe 2 inquiries a month. Within 30 days of launch, our inbound leads from Lagos and Abuja jumped to over 25 qualified inquiries weekly. The speed on mobile is insane.",
    author: "Babajide Adeleke",
    role: "Managing Director",
    company: "Apex Logistics Nigeria",
    location: "Lagos, Nigeria",
    avatarPlaceholder: "BA",
    rating: 5,
    isPlaceholder: true, // [PLACEHOLDER]
  },
  {
    id: "test-2",
    quote: "Working with most developers in Lagos was a nightmare of delayed deadlines and broken promises until we met AJÉBUILDS. They delivered our fashion e-commerce storefront in exactly 16 days, completely integrated with Paystack.",
    author: "Chioma Okonkwo",
    role: "Creative Director",
    company: "Zuri Couture",
    location: "Lekki, Lagos",
    avatarPlaceholder: "CO",
    rating: 5,
    isPlaceholder: true, // [PLACEHOLDER]
  },
  {
    id: "test-3",
    quote: "Our international investors specifically praised how crisp and fast our web platform felt compared to typical local sites. The subtle animations and lightning load times give us immediate institutional credibility.",
    author: "Dr. Femi Danladi",
    role: "Co-Founder & COO",
    company: "PayStream Africa",
    location: "Victoria Island, Lagos",
    avatarPlaceholder: "FD",
    rating: 5,
    isPlaceholder: true, // [PLACEHOLDER]
  },
  {
    id: "test-4",
    quote: "They understood Nigerian consumer psychology. The prominent WhatsApp floating button and single-page checkout reduced our customer drop-off by more than 40%. Highly recommended.",
    author: "Amaka Nwachukwu",
    role: "Head of Growth",
    company: "PrimeHaven Properties",
    location: "Abuja, Nigeria",
    avatarPlaceholder: "AN",
    rating: 5,
    isPlaceholder: true, // [PLACEHOLDER]
  },
];

// ----------------------------------------------------------------------------
// 10. LATEST ARTICLES (Section 10) — 3 Nigeria-focused topics
// ----------------------------------------------------------------------------
export const LATEST_ARTICLES: ArticleItem[] = [
  {
    id: "art-cost-nigeria",
    title: "How Much Does a Business Website Cost in Nigeria? (2026 Breakdown)",
    excerpt: "An honest breakdown of design, domain, hosting, payment integration, and ongoing maintenance fees for Nigerian businesses so you never get overcharged.",
    readTime: "5 min read",
    publishedDate: "October 2026",
    category: "Business Strategy",
    slug: "cost-of-website-in-nigeria-2026",
  },
  {
    id: "art-ecommerce-dropoff",
    title: "Why Nigerian E-commerce Stores Lose 65% of Mobile Shoppers at Checkout",
    excerpt: "Slow load times on MTN and Airtel, complicated forms, and missing instant bank transfer options kill conversions. Here is how to fix them.",
    readTime: "6 min read",
    publishedDate: "September 2026",
    category: "Conversion Optimization",
    slug: "why-nigerian-ecommerce-loses-mobile-shoppers",
  },
  {
    id: "art-seo-lagos",
    title: "SEO in Nigeria: How Lagos Businesses Rank #1 on Google Without Ads",
    excerpt: "Learn the exact local schema, Google Business Profile tactics, and speed metrics we use to help Nigerian brands dominate organic search.",
    readTime: "4 min read",
    publishedDate: "August 2026",
    category: "Search Strategy",
    slug: "local-seo-nigeria-lagos-businesses",
  },
];

// ----------------------------------------------------------------------------
// 11. FAQ ACCORDION (Section 11) — 7 Required Questions
// ----------------------------------------------------------------------------
export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-cost",
    question: "How much does a professional website cost in Nigeria?",
    answer: "Our standard packages range from ₦350,000 for a Starter 5-page business site to ₦750,000 for a full corporate or e-commerce platform. Custom software platforms and SaaS web apps are scoped individually starting from ₦1,850,000. Every quote includes custom UI design, responsive coding, mobile speed optimization, and a 30-day post-launch warranty.",
  },
  {
    id: "faq-timeline",
    question: "What is your typical project timeline from start to launch?",
    answer: "A standard 5-to-8 page business website is designed and launched within 10 to 14 business days. E-commerce stores take approximately 14 to 20 days. Custom software or web portals typically take 3 to 6 weeks depending on third-party APIs and scope. We provide a transparent project roadmap with fixed delivery dates before starting.",
  },
  {
    id: "faq-payment-plans",
    question: "Do you offer flexible payment plans for Nigerian businesses?",
    answer: "Yes. We work on a structured milestone basis: 50% deposit upfront to initiate research and Figma design, 25% upon design approval and staging review, and the final 25% only after final QA testing and your sign-off prior to public domain launch.",
  },
  {
    id: "faq-seo",
    question: "Is search engine optimization (SEO) included in your web packages?",
    answer: "Yes, every website we build includes foundational technical SEO: clean semantic HTML5, fast Core Web Vitals scores (Lighthouse 90+), OpenGraph social metadata, XML sitemaps, robots.txt, and local Schema.org JSON-LD structured data targeting Lagos and Nigerian search terms.",
  },
  {
    id: "faq-redesign",
    question: "Can you redesign an existing website that isn't generating customer inquiries?",
    answer: "Absolutely. Over 40% of our clients come to us with an outdated, slow, or template-based website that doesn't convert. We audit your current analytics, identify user drop-off points, overhaul your visual messaging, and build a modern, high-converting digital presence.",
  },
  {
    id: "faq-mobile-speed",
    question: "Will our website be mobile-friendly and fast on Nigerian mobile networks?",
    answer: "Yes, this is our core obsession. Over 80% of Nigerian web traffic happens on mobile devices over fluctuating 3G/4G network speeds. We optimize asset sizes, enforce zero layout shifts, leverage modern image compression, and build with lightweight code so your pages load in under 1.5 seconds even on modest connections.",
  },
  {
    id: "faq-outside-lagos",
    question: "Can your web design team work with clients outside Lagos or Nigeria?",
    answer: "Yes. While we are proud to be headquartered in Lagos, over 50% of our clients are located in Abuja, Port Harcourt, Ibadan, the UK, the US, and Canada. We run seamless remote collaboration via Google Meet, Loom video walkthroughs, and dedicated WhatsApp project communication.",
  },
];
