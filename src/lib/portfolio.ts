export type Stat = {
  label: string;
  count: number;
  suffix?: string;
};

export type SkillChip = {
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  invertOnDark?: boolean;
};

export type SkillCategory = {
  category: string;
  chips: SkillChip[];
};

export type Experience = {
  period: string;
  company: string;
  companyIconSrc?: string;
  companyIconAlt?: string;
  companyMeta: string;
  role: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  name: string;
  href: string;
  hrefLabel: string;
  iconSrc?: string;
  iconAlt?: string;
  description: string;
  stack: SkillChip[];
};

export type Education = {
  name: string;
  school: string;
  period: string;
  score: string;
};

export type Contact = {
  label: string;
  value: string;
  href: string;
  iconSrc?: string;
  iconAlt?: string;
  invertOnDark?: boolean;
  external?: boolean;
};

// Icon sources are vendored into `/public/icons` to avoid runtime dependencies on third-party CDNs.
// - Brands: /public/icons/simpleicons
// - AWS: /public/icons/aws
// - Favicons: /public/icons/favicons
// SimpleIcons default is the brand's native color.
const SI = (slug: string) => `/icons/simpleicons/${slug}.svg`;
const SI_MONO = (slug: string, hex = "000") => `/icons/simpleicons/${slug}-${hex}.svg`;
const AWS = (category: string, name: string) => `/icons/aws/${category}/${name}.svg`;
const FAV = (domain: string) => `/icons/favicons/${domain}.ico`;
const FAV_GOOGLE = (domain: string, size = 64) => `/icons/favicons/${domain}-${size}.png`;

export const portfolio = {
  person: {
    firstName: "Jay",
    lastName: "Trambadiya",
    location: "",
    status: "Open to opportunities",
    title: "Full-Stack Engineer",
    tagline:
      "Full-Stack Engineer - Next.js, AWS Serverless & Cloudflare edge. Built scalable systems for India's leading D2C brands.",
    email: "jaytrambadiya21@gmail.com",
    phone: "+91 7574013835",
    linkedin: "https://www.linkedin.com/in/jay-trambadiya-786796206/",
    github: "https://github.com/JayTrambadiya/portfolio?tab=readme-ov-file#-hey-im-jay-trambadiya",
  },

  nav: [
    { href: "#skills", label: "Stack" },
    { href: "#experience", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],

  stats: [
    { count: 3, suffix: "+", label: "Years experience" },
    { count: 60, suffix: "%", label: "Hosting cost cut" },
    { count: 3, suffix: "+", label: "Production apps" },
    { count: 8.9, suffix: "", label: "B.Tech CGPA" },
  ] satisfies Stat[],

  skills: [
    {
      category: "Frontend",
      chips: [
        { label: "React.js", iconSrc: SI("react"), iconAlt: "React" },
        { label: "Next.js", iconSrc: SI_MONO("nextdotjs"), iconAlt: "Next.js", invertOnDark: true },
        { label: "TypeScript", iconSrc: SI("typescript"), iconAlt: "TypeScript" },
        { label: "Redux", iconSrc: SI("redux"), iconAlt: "Redux" },
        { label: "Tailwind CSS", iconSrc: SI("tailwindcss"), iconAlt: "Tailwind CSS" },
        { label: "Strapi CMS", iconSrc: SI("strapi"), iconAlt: "Strapi" },
      ],
    },
    {
      category: "Backend",
      chips: [
        { label: "Node.js", iconSrc: SI("nodedotjs"), iconAlt: "Node.js" },
        { label: "Python", iconSrc: SI("python"), iconAlt: "Python" },
        { label: "Express.js", iconSrc: SI_MONO("express"), iconAlt: "Express", invertOnDark: true },
        { label: "FastAPI", iconSrc: SI("fastAPI"), iconAlt: "FastAPI" },
        { label: "GraphQL", iconSrc: SI("graphql"), iconAlt: "GraphQL" },
        { label: "PostgreSQL", iconSrc: SI("postgresql"), iconAlt: "PostgreSQL" },
        { label: "DynamoDB", iconSrc: AWS("Database", "DynamoDB"), iconAlt: "DynamoDB" },
        { label: "OpenSearch", iconSrc: AWS("Analytics", "OpenSearch-Service"), iconAlt: "OpenSearch Service" },
      ],
    },
    {
      category: "AWS",
      chips: [
        { label: "Lambda", iconSrc: AWS("Compute", "Lambda"), iconAlt: "AWS Lambda" },
        { label: "S3", iconSrc: AWS("Storage", "Simple-Storage-Service"), iconAlt: "Amazon S3" },
        { label: "SQS / SNS", iconSrc: AWS("App-Integration", "Simple-Queue-Service"), iconAlt: "Amazon SQS" },
        { label: "ECS Fargate", iconSrc: AWS("Containers", "Elastic-Container-Service"), iconAlt: "Amazon ECS" },
        { label: "CloudWatch", iconSrc: AWS("Management-Governance", "CloudWatch"), iconAlt: "Amazon CloudWatch" },
        { label: "Route 53", iconSrc: AWS("Networking-Content-Delivery", "Route-53"), iconAlt: "Amazon Route 53" },
        { label: "IAM", iconSrc: AWS("Security-Identity-Compliance", "Identity-and-Access-Management"), iconAlt: "AWS IAM" },
        { label: "CloudFront", iconSrc: AWS("Networking-Content-Delivery", "CloudFront"), iconAlt: "Amazon CloudFront" },
        { label: "API Gateway", iconSrc: AWS("App-Integration", "API-Gateway"), iconAlt: "Amazon API Gateway" },
        { label: "AWS SAM", iconSrc: AWS("Management-Governance", "CloudFormation"), iconAlt: "AWS CloudFormation" },
      ],
    },
    {
      category: "Edge / CDN",
      chips: [
        { label: "CF Workers", iconSrc: SI("cloudflareworkers"), iconAlt: "Cloudflare Workers" },
        { label: "CF Pages / R2", iconSrc: SI("cloudflare"), iconAlt: "Cloudflare" },
      ],
    },
    {
      category: "DevOps",
      chips: [
        { label: "GitHub Actions", iconSrc: SI("githubactions"), iconAlt: "GitHub Actions" },
        { label: "Docker", iconSrc: SI("docker"), iconAlt: "Docker" },
        { label: "Git", iconSrc: SI("git"), iconAlt: "Git" },
      ],
    },
    {
      category: "Analytics",
      chips: [
        { label: "Google Analytics", iconSrc: SI("googleanalytics"), iconAlt: "Google Analytics" },
        { label: "GTM", iconSrc: SI("googletagmanager"), iconAlt: "Google Tag Manager" },
        { label: "Mixpanel", iconSrc: SI("mixpanel"), iconAlt: "Mixpanel" },
        { label: "Meta Pixel CAPI", iconSrc: SI("meta"), iconAlt: "Meta" },
        { label: "MoEngage" },
        {
          label: "SES - Pinpoint",
          iconSrc: AWS("Business-Applications", "Simple-Email-Service"),
          iconAlt: "Amazon SES",
        },
      ],
    },
  ] satisfies SkillCategory[],

  experience: [
    {
      period: "Jan 2026 - Present",
      company: "VideoSDK",
      // Use the real site favicon (sharper than generic proxies).
      companyIconSrc: "/icons/favicons/videosdk.live-32x32.png",
      companyIconAlt: "VideoSDK favicon",
      companyMeta: "SDE-2 - Full-time",
      role: "Software Development Engineer II",
      bullets: [
        "Revamped the developer dashboard in Next.js for improved performance and UX.",
        "Built and integrated REST APIs via Node.js + Express.js for new backend dashboard features.",
        "Fixed meeting pagination and implemented adaptive Intersection Observer subscriptions.",
      ],
      tags: ["Next.js", "Node.js", "Express.js", "REST APIs"],
    },
    {
      period: "June 2023 - Dec 2025",
      company: "DevX Technology",
      companyIconSrc: FAV("devxlabs.ai"),
      companyIconAlt: "DevX favicon",
      companyMeta: "Full-Stack Engineer - devxlabs",
      role: "Full-Stack Engineer",
      bullets: [
        "Built Next.js & React.js apps for D2C brands - Strapi CMS + AWS Serverless via AWS SAM IaC.",
        "Migrated Buywow from Vercel -> Cloudflare, cutting Vercel costs 60% and CloudFront costs 90%.",
        "Designed event-driven order processing via AWS SQS + Lambda ESM for reliable async workflows.",
        "Integrated Gokwik & Razorpay with DLQ-based refund pipelines for fault-tolerant payments.",
        "Real-time DynamoDB -> OpenSearch sync via DynamoDB Streams for fast search at scale.",
        "Built ECS Fargate tasks for bulk admin ops - exports, coupon generation, review uploads.",
        "Built Pixel Conversion APIs (CAPI) and automated tracking for Meta Pixel, MoEngage, GA via GTM.",
      ],
      tags: ["Next.js", "AWS SAM", "Cloudflare", "DynamoDB", "SQS", "ECS Fargate", "Strapi", "OpenSearch"],
    },
  ] satisfies Experience[],

  projects: [
    {
      name: "Foxtale",
      href: "https://foxtale.in/",
      hrefLabel: "foxtale.in",
      iconSrc: FAV("foxtale.in"),
      iconAlt: "Foxtale favicon",
      description:
        "Shopify-based backend with Mixpanel event tracking for granular analytics. Migrated the storefront from Shopify to a custom Next.js frontend, integrated Strapi as a headless CMS, and implemented end-to-end funnel tracking (PDP, ATC, Checkout, Purchase) to support CRO.",
      stack: [
        { label: "Next.js", iconSrc: SI_MONO("nextdotjs"), iconAlt: "Next.js", invertOnDark: true },
        { label: "Shopify", iconSrc: SI("shopify"), iconAlt: "Shopify" },
        { label: "Mixpanel", iconSrc: SI("mixpanel"), iconAlt: "Mixpanel" },
        { label: "Strapi CMS", iconSrc: SI("strapi"), iconAlt: "Strapi" },
      ],
    },
    {
      name: "Buywow",
      href: "https://www.buywow.in",
      hrefLabel: "buywow.in",
      iconSrc: FAV("buywow.in"),
      iconAlt: "Buywow favicon",
      description:
        "Full-stack D2C e-commerce. Custom admin panel, memberships, loyalty cashback, Spin the Wheel gamification, and Cloudflare migration with SQS event-driven order workflows.",
      stack: [
        { label: "Next.js", iconSrc: SI_MONO("nextdotjs"), iconAlt: "Next.js", invertOnDark: true },
        { label: "TypeScript", iconSrc: SI("typescript"), iconAlt: "TypeScript"},
        { label: "Redux", iconSrc: SI("redux"), iconAlt: "Redux"},
        { label: "Cloudflare", iconSrc: SI("cloudflare"), iconAlt: "Cloudflare"},
        { label: "DynamoDB", iconSrc: AWS("Database", "DynamoDB"), iconAlt: "DynamoDB"},
        { label: "SQS", iconSrc: AWS("App-Integration", "Simple-Queue-Service"), iconAlt: "Amazon SQS"},
      ],
    },
    {
      name: "Bodycupid",
      href: "https://www.bodycupid.com",
      hrefLabel: "bodycupid.com",
      // Site doesn't expose an obvious favicon; use a sharp 64px resolver.
      iconSrc: FAV_GOOGLE("bodycupid.com", 64),
      iconAlt: "Bodycupid favicon",
      description:
        "D2C beauty platform. Cupid Coins loyalty, ISR + dynamic caching, 10K+ URL redirects, SEO sitemaps, full funnel tracking - Meta Pixel, MoEngage & GA4.",
      stack: [
        { label: "Next.js", iconSrc: SI_MONO("nextdotjs"), iconAlt: "Next.js", invertOnDark: true },
        { label: "GTM", iconSrc: SI("googletagmanager"), iconAlt: "Google Tag Manager"},
        { label: "Meta Pixel", iconSrc: SI("meta"), iconAlt: "Meta"},
        { label: "GA4", iconSrc: SI("googleanalytics"), iconAlt: "Google Analytics"},
        { label: "Unicommerce" },
      ],
    },
    {
      name: "VideoSDK Dashboard",
      href: "https://app.videosdk.live",
      hrefLabel: "app.videosdk.live",
      iconSrc: "/icons/favicons/app.videosdk.live.ico",
      iconAlt: "VideoSDK dashboard favicon",
      description:
        "Developer dashboard for VideoSDK's real-time video infra. Rebuilt core Next.js UI with REST APIs, adaptive pagination, Intersection Observer subscriptions.",
      stack: [
        { label: "Next.js", iconSrc: SI_MONO("nextdotjs"), iconAlt: "Next.js", invertOnDark: true },
        { label: "Node.js", iconSrc: SI("nodedotjs"), iconAlt: "Node.js"},
        { label: "Express.js", iconSrc: SI_MONO("express"), iconAlt: "Express", invertOnDark: true },
        { label: "REST APIs" },
      ],
    },
  ] satisfies Project[],

  education: [
    {
      name: "B.Tech - Computer Engineering",
      school: "BVM Engineering College, Anand, Gujarat",
      period: "2020 - 2024",
      score: "CGPA 8.90 / 10",
    },
    {
      name: "HSC - Physics, Chemistry, Maths",
      school: "P.P.Savani Vidyalaya, Surat, Gujarat",
      period: "2018 - 2020",
      score: "82.1%",
    },
  ] satisfies Education[],

  contact: [
    {
      label: "Email",
      value: "jaytrambadiya21@gmail.com",
      href: "mailto:jaytrambadiya21@gmail.com",
      iconSrc: SI("gmail"),
      iconAlt: "Email",
      external: false,
    },
    {
      label: "Phone",
      value: "+91 7574013835",
      href: "tel:+917574013835",
      iconSrc: SI("googlemessages"),
      iconAlt: "Phone",
      external: false,
    },
    {
      label: "LinkedIn",
      value: "jay-trambadiya ↗",
      href: "https://www.linkedin.com/in/jay-trambadiya-786796206/",
      iconSrc: FAV_GOOGLE("linkedin.com", 64),
      iconAlt: "LinkedIn",
      external: true,
    },
    {
      label: "GitHub",
      value: "View Profile ↗",
      href: "https://github.com/JayTrambadiya/portfolio?tab=readme-ov-file#-hey-im-jay-trambadiya",
      iconSrc: SI_MONO("github"),
      iconAlt: "GitHub",
      invertOnDark: true,
      external: true,
    },
  ] satisfies Contact[],

  footer: {
    left: `(c) 2025 Jay Trambadiya - Surat, India`,
    right: "Full-Stack Engineer",
  },
} as const;


