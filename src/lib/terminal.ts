export const terminalImages = {
  foxtale: "/foxtale.jpg",
};

export const terminalNav = {
  brand: "JAY_TRAMBADIYA_SYS_v1.0",
  status: "STATUS: OPERATIONAL",
  uptime: "UPTIME: 99.9%",
  icons: ["terminal", "settings_ethernet"],
  downloadCv: "DOWNLOAD_CV",
};

export const hero = {
  id: "root",
  name: "JAY TRAMBADIYA",
  title: "FULL-STACK ENGINEER",
  badges: [
    { label: "3+ YEARS_EXPERIENCE", filled: true },
    { label: "SERVERLESS_FIRST", filled: false },
  ],
  description:
    "Engineering scalable high-performance backends and seamless frontends. Specialized in cloud optimization and low-latency architecture.",
  links: [
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/jay-trambadiya-786796206/",
    },
    { label: "EMAIL", href: "mailto:jaytrambadiya21@gmail.com" },
    { label: "GITHUB", href: "https://github.com/JayTrambadiya" },
  ],
  imageAlt:
    "A clean, minimalist 3D rendering of server racks and technical schematics in a bright, white environment. The lighting is sharp and industrial, with high-contrast shadows emphasizing a brutalist, architectural feel. The overall mood is cold, precise, and highly technical.",
};

export const stack = {
  id: "stack",
  title: "TECH_STACK.EXE",
  groups: [
    {
      index: "01_FRONTEND",
      items: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      index: "02_BACKEND",
      items: [
        "Node.js / Express.js",
        "Python / FastAPI",
        "PostgreSQL (RDS)",
        "DynamoDB",
        "Opensearch (AWS)"
      ],
    },
    {
      index: "03_INFRASTRUCTURE",
      items: [
        "AWS (Lambda, ECS, SQS, SNS )",
        "Cloudflare (Workers, R2)",
        "Docker",
        "GitHub Actions",
      ],
    },
  ],
};

export const logs = {
  id: "logs",
  title: "PROFESSIONAL_LOGS",
  entries: [
    {
      title: "ENTRY_02: VideoSDK",
      period: "Jan 2026 - PRESENT",
      description: [
        "> Worked with FFmpeg-based media processing within VideoSDK's recording pipeline for audio/video capture, format conversion, and stream packaging into HLS segments for both live and playback URLs.",
        "> Resolved issues in meeting pagination and implemented adaptive subscription using Intersection Observer, optimizing frontend performance and resource usage",
        "> Revamped and enhanced an existing dashboard built with Next.js, improving performance and usability."
      ],
      tags: ["WEBRTC", "HLS", "REACT SDK", "JAVASCRIPT SDK", "NEXTJS", "EXPRESS"],
    },
    {
      title: "ENTRY_01: DevX",
      period: "2024 - 2026",
      description: [
        "> Built Next.js & React.js apps for D2C brands - Strapi CMS + AWS Serverless via AWS SAM IaC.",
        "> Designed event-driven order processing via AWS SQS + Lambda ESM for reliable async workflows.",
        "> Migrated Buywow from Vercel -> Cloudflare, cutting Vercel costs 60% and CloudFront costs 90%",
        "> Built Pixel Conversion APIs (CAPI) and automated tracking for Meta Pixel, MoEngage, GA via GTM",
        "> Real-time DynamoDB -> OpenSearch sync via DynamoDB Streams for fast search at scale."
      ],
      tags: ["REACT", "NEXTJS", "AWS LAMBDA", "AWS ECS","OPENSEARCH","DYNAMO DB","SQS", "SNS","APPSYNC","API GATEWAY" , "S3", "AWS CLOUDFRONT", "CLOUDFLARE WORKERS/R2","VERCEL"],
    },
  ],
};

export const work = {
  id: "work",
  title: "PROOF_OF_WORK",
  featured: {
    name: "FOXTALE",
    description: [
      "High-conversion e-commerce engine with modular architecture.",
      "Optimized for peak traffic events.",
      "Migrated the storefront from Shopify to a custom Next.js frontend, integrated Strapi as a headless CMS.",
    ],
    bullets: [
      "> CUSTOM_CHECKOUT_FLOW",
      "> SCALE: 2-3 MILLIONS_MONTHLY_USERS",
      "> REACT_NATIVE_SYNC (STRAPI_CMS)",
    ],
    tech: "TECH: NEXTJS | SHOPIFY | STRAPI | MIXPANEL",
    href: "https://foxtale.in/",
  },
  projects: [
    {
      name: "BUYWOW",
      description: [
        "Full-stack D2C e-commerce, with order tracking dashboard with real-time inventory updates, memberships, loyalty cashback, spin the wheel gamification, and Cloudflare migration (via Opennextjs Adapter) for hosting storefront, with SQS event-driven order workflows on AWS Serverless."
      ],
      tech: "TECH: NEXTJS | AWS SERVERLESS | REACTJS | NODEJS",
      href: "https://www.buywow.in/",
    },
    {
      name: "NATURE DERMA",
      description: [
        "D2C beauty platform. Cupid Coins loyalty, ISR + dynamic caching, 10K+ URL redirects, SEO sitemaps, full funnel tracking - Meta Pixel, MoEngage & GA4.",
      ],
      tech: "TECH: NEXTJS | AWS SERVERLESS",
      href: "https://www.naturederma.com/",
    },
  ],
  promo: {
    title: "VideoSDK Core Infrastructure",
    description: [
      "Engineered FFmpeg-based media processing for HLS recording pipelines, Optimized meeting pagination and adaptive subscription via Intersection Observer",
    ],
    href: "https://www.videosdk.live/",
    cta: "EXPLORE_PLATFORM",
  },
};

export const debug = {
  id: "debug",
  education: {
    title: "EDUCATION.LOG",
    entries: [
      {
        degree: "BACHELOR_OF_ENGINEERING",
        detail: "Computer Science Focus",
        meta: "CGPA: 8.5 / 10.0",
      },
      {
        degree: "AWS_SOLUTION_ARCHITECT",
        detail: "Cloud Services Professional",
      },
    ],
  },
  terminal: {
    lines: [
      { text: "> LOCATION: SURAT, INDIA", className: "text-secondary mb-2" },
      {
        text: "> EMAIL: jaytrambadiya21@gmail.com",
        className: "text-primary mb-1",
      },
      {
        text: "> LINKEDIN: linkedin.com/in/jay-trambadiya-786796206/",
        className: "text-primary mb-1",
      },
      { text: "> PHONE: +91 7574013835", className: "text-primary mb-1" },
      {
        text: "> AVAILABILITY: OPEN_FOR_OPPORTUNITIES",
        className: "text-primary mb-4",
      },
    ],
    sayHello: "mailto:jaytrambadiya21@gmail.com",
    sayHelloLabel: "SAY_HELLO",
    viewGithub: "#",
    viewGithubLabel: "VIEW_GITHUB",
    note: "Currently open to freelance engineering projects or technical consulting regarding cloud migrations and edge architecture.",
  },
};
