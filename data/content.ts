export interface Project {
  id: string;
  title: string;
  year: string;
  category: 'Frontend' | 'Full-Stack' | 'Mobile';
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  deliverables: string[];
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface Differentiator {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_METADATA = {
  name: 'AJÉBUILDS.',
  domain: 'ajebuilds.site',
  url: 'https://ajebuilds.site',
  tagline: 'High-Converting Web Design & Software Engineering',
  description:
    'Global web design & development agency headquartered in Lagos, Nigeria. We build high-converting websites and scalable Next.js web applications for ambitious founders and businesses worldwide. Founded by Amos Jonathan (Joe).',
  founder: 'Amos Jonathan (Joe)',
  location: 'Lagos, Nigeria • Worldwide Clients',
  email: 'amosjonathan310@gmail.com',
  whatsappNumber: '+2348022872198',
  whatsappUrl: 'https://wa.me/2348022872198',
  calComUrl: 'https://cal.com/amos-jonathan',
  socials: {
    twitter: 'https://x.com/joenitos',
    linkedin: 'https://www.linkedin.com/in/amos-jonathan-799b82354',
    github: 'https://github.com/jonathanamos319-source',
    tiktok: 'https://www.tiktok.com/@joenitos',
  },
  bio: [
    "I'm a software engineer and web developer focused on building scalable applications at the intersection of code and developer experience, with a strong eye for design.",
    "I specialize in building modern websites, backend APIs with Spring Boot, and full-stack web applications that are fast, reliable, and easy to use.",
    "My work centers on developer experience and education - crafting tools, systems, and interfaces that simplify complexity and make developers more effective.",
    "Outside of work, I'm into music, mentoring upcoming developers, Batman, comics, retro tech, and sci-fi.",
  ],
};

export const REAL_PROJECTS: Project[] = [
  {
    id: 'eke-market',
    title: 'Eke-market',
    year: '01.2026',
    category: 'Frontend',
    description:
      'A real time crypto price website where users can view the current price of their favorite cryptocurrencies and also view the price history of each cryptocurrency and compare the price of different cryptocurrencies.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js', 'CoinGecko API', 'React Router', 'Vite'],
    liveUrl: 'https://eke-market.vercel.app/',
    featured: true,
  },
  {
    id: 'haiflytrap',
    title: 'Haiflytrap',
    year: '2026',
    category: 'Full-Stack',
    description:
      'An E-commerce website focused on Organic flies and housefly killer products, built with React and TailwindCSS, and Node.js for the backend.',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'React Router', 'Vite', 'Supabase'],
    liveUrl: 'https://haiflytrapng.com/',
    featured: true,
  },
  {
    id: 'choprush',
    title: 'Choprush',
    year: '2025',
    category: 'Full-Stack',
    description:
      'A food delivery website built with React and TailwindCSS, featuring a clean UI and seamless user experience.',
    tags: ['React', 'Material UI', 'JavaScript', 'React Router', 'Vite', 'MySQL', 'Spring Boot', 'Java', 'Docker'],
    githubUrl: 'https://github.com/jonathanamos319-source/Nectar_reactnative',
    featured: true,
  },
  {
    id: 'marketplace',
    title: 'MarketPlace',
    year: '2025',
    category: 'Frontend',
    description:
      'A Facebook Marketplace clone - used the project to learn API calling, search indexing, and client-side routing.',
    tags: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/jonathanamos319-source/Marketplace',
    featured: false,
  },
  {
    id: 'bible-random-verse',
    title: 'Bible Random Verse Generator',
    year: '2025',
    category: 'Frontend',
    description:
      'A Chrome extension built with JavaScript that generates a random Bible verse every 5 minutes.',
    tags: ['JavaScript', 'Chrome Extension'],
    githubUrl: 'https://github.com/jonathanamos319-source/Bible_RandomVerse',
    featured: false,
  },
  {
    id: 'zoomscore',
    title: 'Zoomscore',
    year: '2024',
    category: 'Frontend',
    description:
      'A live football scores website that pulls matches happening in real time from leagues all over the world.',
    tags: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/jonathanamos319-source/Zoomscore',
    featured: false,
  },
  {
    id: 'nectar',
    title: 'Nectar',
    year: '2024',
    category: 'Mobile',
    description:
      'Clone of an on-demand grocery and food delivery application built with React Native with intuitive cart and checkout flows.',
    tags: ['React Native', 'JavaScript'],
    githubUrl: 'https://github.com/jonathanamos319-source/Nectar_reactnative',
    featured: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design & UI/UX',
    tagline: 'High-conversion design systems tailored for your audience.',
    deliverables: [
      'Custom interactive Figma prototypes',
      'Design tokens & component design systems',
      'Mobile-first responsive UX layouts',
      'Conversion-centered wireframing',
    ],
    icon: 'Layout',
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Web Development',
    tagline: 'Lightning-fast Next.js apps with robust backend architectures.',
    deliverables: [
      'Next.js 15 App Router & React 19 apps',
      'TypeScript architecture for bulletproof code',
      'Spring Boot & Node.js backend APIs',
      'PostgreSQL, MySQL & Supabase databases',
    ],
    icon: 'Code2',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Payments',
    tagline: 'Frictionless checkout experiences integrated with Stripe, Paystack & Flutterwave.',
    deliverables: [
      'Custom storefronts & Shopify integrations',
      'Stripe, Paystack & Flutterwave secure payment flows',
      'Real-time inventory and order processing',
      'Optimized one-click checkout funnels',
    ],
    icon: 'ShoppingBag',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    tagline: 'Cross-platform mobile apps for iOS and Android with React Native.',
    deliverables: [
      'Cross-platform React Native codebases',
      'Smooth native animations & gestures',
      'Offline-first synchronization & push notifications',
      'Store preparation & release management',
    ],
    icon: 'Smartphone',
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO & Speed',
    tagline: 'Sub-second page loads that dominate Google Core Web Vitals.',
    deliverables: [
      'Perfect 95+ Google Lighthouse scores',
      'Automated dynamic sitemaps & Schema.org JSON-LD',
      'Edge CDN caching & image pipeline optimization',
      'Semantic HTML5 structure for high rankings',
    ],
    icon: 'Zap',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Managed Hosting',
    tagline: 'Continuous support, security updates, and performance monitoring.',
    deliverables: [
      'Direct developer WhatsApp channel',
      'Automated backups & uptime monitoring',
      'Security patching & dependency upgrades',
      'Feature updates & quarterly design reviews',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'cicd',
    title: 'CI/CD & DevOps',
    tagline: 'Automated pipelines that ship faster, break less, and deploy with confidence.',
    deliverables: [
      'Jenkins pipeline setup & configuration',
      'GitHub Actions automated workflows',
      'Docker build, test & deploy automation',
      'Environment management (dev / staging / prod)',
    ],
    icon: 'GitBranch',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: '01',
    title: 'Fast Delivery',
    subtitle: 'Disciplined sprint approach with complete transparency',
    description:
      'We work in focused 1-to-2 week development sprints with daily updates. You get immediate access to staging environments so you can see your product come alive in real time without delays.',
  },
  {
    number: '02',
    title: 'Conversion-First Design',
    subtitle: 'Engineered for international user psychology and high conversion',
    description:
      'A great website is not just eye candy—it is a sales tool. We construct clear visual hierarchies, frictionless payment pathways, and ultra-fast mobile experiences tuned to how real buyers browse and purchase across global and regional markets.',
  },
  {
    number: '03',
    title: 'Direct Engineering Support',
    subtitle: 'No middlemen or outsourced handoffs',
    description:
      'You communicate directly with the engineer building your product. Fast decision-making, zero communication overhead, and continuous WhatsApp support before, during, and after launch.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    duration: 'Week 1',
    description:
      'We analyze your business goals, target audience, competitive landscape, and technical specifications to map out the exact product roadmap.',
    deliverables: ['Discovery Brief', 'Information Architecture', 'Technical Stack Spec'],
  },
  {
    step: '02',
    title: 'Design',
    duration: 'Week 1-2',
    description:
      'We craft high-fidelity Figma designs, typography scales, interactions, and mobile wireframes with continuous feedback loops.',
    deliverables: ['Interactive Figma Prototype', 'Design System Tokens', 'Asset Preparation'],
  },
  {
    step: '03',
    title: 'Build',
    duration: 'Week 2-4',
    description:
      'We write clean, modular Next.js and TypeScript code, integrate database schemas, set up APIs, and build responsive frontend interfaces.',
    deliverables: ['Production Next.js Codebase', 'API & Database Integration', 'Staging URL Preview'],
  },
  {
    step: '04',
    title: 'Launch',
    duration: 'Week 4+',
    description:
      'End-to-end QA testing, speed audits, technical SEO verification, domain configuration, and seamless live deployment.',
    deliverables: ['Domain & SSL Setup', 'Core Web Vitals Audit', 'Handoff & WhatsApp Support'],
  },
];

export const TECH_STACK: string[] = [
  'React',
  'Next.js 15',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'React Native',
  'Java',
  'Spring Boot',
  'Docker',
  'Supabase',
  'Node.js',
  'Vite',
  'Material UI',
  'Chart.js',
  'MySQL',
  'Chrome Extensions',
];

export const PRICING_SCOPES = [
  {
    title: 'Web Design & Landing Pages',
    scope: 'High-impact design and conversion-focused landing pages.',
    timeline: '1 - 2 weeks typical',
    deliverables: [
      'Custom Figma design system',
      'Next.js / Tailwind CSS build',
      'Mobile-first responsive layout',
      'Technical SEO & Core Web Vitals optimization',
      'WhatsApp integration & contact capture',
    ],
  },
  {
    title: 'Full-Stack Web Applications',
    scope: 'Complex dynamic applications, user dashboards, and custom backend APIs.',
    timeline: '2 - 6 weeks typical',
    deliverables: [
      'Next.js 15 + TypeScript architecture',
      'Spring Boot / Node.js backend',
      'Database design (PostgreSQL/MySQL/Supabase)',
      'Authentication & role-based access',
      'Global payment gateways (Stripe / Paystack / Flutterwave)',
    ],
  },
  {
    title: 'Managed Maintenance & Retainers',
    scope: 'Ongoing engineering support, performance tuning, and updates.',
    timeline: 'Monthly retainer',
    deliverables: [
      'Direct WhatsApp developer access',
      '24/7 uptime & error monitoring',
      'Security patches & dependency upgrades',
      'Monthly feature sprints & content updates',
      'Continuous conversion rate improvements',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What services does AJÉBUILDS. offer?',
    answer:
      'AJÉBUILDS. is a specialized web design and development agency based in Lagos, Nigeria and serving clients worldwide. We build custom websites, full-stack web applications, e-commerce stores with Stripe, Paystack, and Flutterwave integrations, cross-platform mobile apps with React Native, and enterprise backend APIs with Spring Boot and Node.js.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'A high-converting landing page or marketing website typically takes 1 to 2 weeks. Comprehensive full-stack web applications and custom e-commerce platforms take between 3 to 6 weeks depending on feature scope. We define clear milestones upfront so you know exact dates.',
  },
  {
    question: 'Do you work with international clients outside Nigeria?',
    answer:
      'Yes, absolutely. While our engineering studio is headquartered in Lagos, Nigeria, we collaborate with ambitious startups, founders, and companies across the United States, United Kingdom, Canada, Europe, and Nigeria. All sprint milestones, Figma design reviews, and deployment updates happen seamlessly across global timezones (GMT, EST, PST, CET) via Cal.com, Google Meet, and WhatsApp.',
  },
  {
    question: 'Are you available for projects in Lagos and Nigeria?',
    answer:
      'Yes! Amos Jonathan and the AJÉBUILDS team are based in Lagos, Nigeria. If you are searching for top-tier developers in Lagos or a leading software engineering agency in Nigeria, we deliver Silicon Valley-grade Next.js engineering with both local (Paystack, Flutterwave) and international checkout integrations.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use modern, battle-tested industry standards: Next.js 15, React 19, TypeScript, and Tailwind CSS on the frontend. For backend services and data, we build with Spring Boot (Java), Node.js, Docker, Supabase, MySQL, and PostgreSQL.',
  },
  {
    question: 'How does the project process work?',
    answer:
      'Our process follows four disciplined stages: 1) Discover (defining architecture & scope), 2) Design (Figma wireframes & UI prototypes), 3) Build (clean Next.js & TypeScript code), and 4) Launch (QA testing, technical SEO audit, and production deployment). You get staging links to test throughout.',
  },
  {
    question: 'Can I see your previous work?',
    answer:
      'Yes, absolutely. You can explore our live projects directly in the Selected Work section above, including Eke-market (live crypto price platform) and Haiflytrap (organic e-commerce store), or inspect code on our founder Amos Jonathan’s GitHub profile (github.com/jonathanamos740-droid).',
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is simple. You can fill out the contact form below with details about your project, message us directly on WhatsApp at +2348022872198, or book a 15-minute discovery call at cal.com/amos-jonathan.',
  },
];
