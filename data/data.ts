import type { HeroData as Herotype } from "@/types/hero";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandFramer,
  IconLayoutGrid,
  IconDatabase,
  IconServer,
  IconBrandNodejs,
  IconBrandDjango,
  IconBrandGit,
  IconBrandGithub,
  IconBrandVercel,
  IconBrandFigma,
  IconBrandVscode,
  IconApi,
  IconCode,
  IconPalette,
  IconTool,
} from "@tabler/icons-react";

export const HeroData: Herotype = {
  name: "Fakiyat Afaq",
  role: "Frontend Developer & UI Engineer",
  description:
    "I build responsive, scalable, and high-performance web applications using React, Next.js, TypeScript, TailwindCSS, Zustand & Framer Motion.",
  resumeLink: "/Resume.pdf",
  contactLink: "#contact",
};

export const personalInfo = {
  name: "Fakiyat Afaq",
  role: "Software Engineer – Frontend",
  phone: "+91-70066-18176",
  headline:
    "Software Engineer specializing in building pixel-perfect, scalable web applications, real-time AI platforms, and high-performance user interfaces.",
  email: "fakiyatafaq14@gmail.com",
  github: "https://github.com/Fakiyat",
  linkedin: "https://www.linkedin.com/in/fakiyat-afaq-b6a936279",
  resumeUrl: "/Resume.pdf",
  intro: [
    "B.Tech in Computer Science (Artificial Intelligence)",
    "Software Engineer – Frontend @ Lytehire.ai",
    "Specialized in AI platforms, real-time WebSockets & SaaS architecture",
  ],
};

export const aboutMe = {
  background: {
    title: "Background",
    content:
      "Computer Science (Artificial Intelligence) graduate from Jamia Hamdard University with hands-on experience developing enterprise SaaS platforms, AI-driven interview workflows, and complex frontend architectures.",
  },
  interests: {
    title: "What I Enjoy",
    items: [
      "Building high-impact, pixel-perfect user interfaces",
      "Architecting real-time WebSockets & video streaming pipelines",
      "Optimizing web applications for peak Core Web Vitals",
    ],
  },
  softSkills: {
    title: "Soft Skills",
    items: [
      "Ownership & problem-solving mindset",
      "Cross-functional AI & engineering collaboration",
      "Continuous learning & fast adaptability",
    ],
  },
};

export const aboutData = {
  status: "About Me",
  greeting: "Hello, I'm a Frontend Software Engineer",
  title: "Fakiyat Afaq",
  subtitle: "Building high-performance React & Next.js web applications",
  description: `Frontend Developer skilled in building responsive, scalable, and high-performance web applications using React.js, Next.js, TypeScript, Tailwind CSS, Zustand, Redux, and React Query. Experienced in API integration, authentication, reusable component architecture, dashboards, and performance optimization.`,

  profileImage: "/code2.webp",
  profileImage2: "/Hero-logo.webp",
  stats: [
    {
      number: "3",
      suffix: "+",
      label: "Roles & Companies",
      sublabel: "Lytehire.ai, Internet Eagle, Brisk Bold",
    },
    {
      number: "2",
      suffix: "+",
      label: "Years of",
      sublabel: "Frontend & AI Development",
    },
    {
      number: "100",
      suffix: "%",
      label: "Commitment to",
      sublabel: "Performance & Pixel Perfection",
    },
  ],

  downloadCV: "/Resume.pdf",
};

export const aboutDetails = {
  philosophy:
    "Great software comes from combining clean component design, lightning-fast load times, and intuitive user experiences.",
  approach: [
    "Pixel-perfect UI design execution",
    "State management with Context API, Zustand & Redux Toolkit",
    "Real-time streaming & WebSocket architecture",
    "Performance optimization & accessibility",
  ],
  highlights: [
    "Architected full AI-powered interview platform with dual-camera feeds & WebSockets",
    "Built recorded interview video pipeline streaming chunks with post-interview analytics",
    "Implemented anti-cheating fullscreen system & real-time polling synchronization",
    "Improved page load times by 25%-35% and boosted feature delivery speed by 40%",
  ],
};

export const skills = {
  frontend: {
    title: "Frontend Core",
    icon: IconCode,
    items: [
      { name: "React.js", level: 95, icon: IconBrandReact },
      { name: "Next.js", level: 90, icon: IconBrandNextjs },
      { name: "TypeScript", level: 90, icon: IconBrandTypescript },
      { name: "JavaScript (ES6+)", level: 95, icon: IconBrandJavascript },
      { name: "HTML5", level: 95, icon: IconBrandHtml5 },
      { name: "CSS3", level: 90, icon: IconBrandCss3 },
    ],
  },

  styling: {
    title: "UI & Styling",
    icon: IconPalette,
    items: [
      { name: "Tailwind CSS", level: 95, icon: IconBrandTailwind },
      { name: "Shadcn UI", level: 90, icon: IconLayoutGrid },
      { name: "Ant Design", level: 85, icon: IconLayoutGrid },
      { name: "Framer Motion", level: 85, icon: IconBrandFramer },
      { name: "Material UI", level: 80, icon: IconLayoutGrid },
      { name: "Bootstrap", level: 85, icon: IconLayoutGrid },
    ],
  },

  stateData: {
    title: "State Management & Data",
    icon: IconDatabase,
    items: [
      { name: "Zustand", level: 90, icon: IconDatabase },
      { name: "React Query", level: 90, icon: IconDatabase },
      { name: "Redux Toolkit", level: 85, icon: IconDatabase },
      { name: "WebSockets", level: 85, icon: IconApi },
      { name: "Context API", level: 95, icon: IconDatabase },
      { name: "REST APIs", level: 95, icon: IconApi },
    ],
  },

  aiTools: {
    title: "AI & Automation",
    icon: IconServer,
    items: [
      { name: "AI Builder", level: 85, icon: IconServer },
      { name: "Power Automate", level: 85, icon: IconTool },
      { name: "Prompt Engineering", level: 90, icon: IconCode },
      { name: "OCR Pipelines", level: 85, icon: IconServer },
      { name: "Python", level: 75, icon: IconCode },
      { name: "OpenCV", level: 70, icon: IconServer },
    ],
  },

  tools: {
    title: "Dev Tools & DevOps",
    icon: IconTool,
    items: [
      { name: "Git & GitHub", level: 90, icon: IconBrandGithub },
      { name: "VS Code", level: 95, icon: IconBrandVscode },
      { name: "Vercel", level: 90, icon: IconBrandVercel },
      { name: "Figma", level: 85, icon: IconBrandFigma },
      { name: "Postman", level: 90, icon: IconApi },
      { name: "AWS & Docker", level: 75, icon: IconServer },
    ],
  },
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Interview Platform (Lytehire.ai)",
    description:
      "End-to-end AI candidate screening platform with candidate + AI agent dual-camera feeds, WebSockets real-time sync, recorded interview chunk streaming, and post-interview video analytics.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets",
      "Context API",
      "Node.js",
    ],
    features: [
      "Dual-camera system (candidate + AI agent feeds)",
      "Real-time WebSocket AI agent connection",
      "Recorded video interview pipeline streaming chunks",
      "Post-interview analytics & compatibility scoring",
      "Anti-cheating mandatory fullscreen enforcement",
      "Automated email notification workflow for invites",
    ],
    image: "/Wasla.webp",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Sports Management SaaS Application",
    description:
      "Comprehensive sports facility management SaaS platform with authentication, transaction-like booking workflows, team creation, and role-based access control.",
    tech: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Ant Design",
      "Tailwind CSS",
      "REST API",
    ],
    features: [
      "Modern SaaS platform for facility & team bookings",
      "Architected secure route handling with middleware",
      "Transaction-like checkout booking flows",
      "Real-time schedule management & dynamic routing",
      "Role-based access control (Admin, Host, User)",
    ],
    image: "/sports.webp",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Custom Ecommerce Web Application",
    description:
      "Full-featured ecommerce web application with product listings, search filtering, cart management, JWT authentication, and automated lead capture CRM tools.",
    tech: ["React.js", "Node.js", "REST APIs", "HTML5", "CSS3", "Tailwind CSS"],
    features: [
      "Product search, category filtering & cart updates",
      "Order summary & WooCommerce-like checkout flow",
      "JWT-based authentication & protected routes",
      "Lazy loading, state management & API caching",
      "Integrated forms & CRM lead capture automation",
    ],
    image: "/vehicel.webp",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "RankoLink (SEO & Backlink Platform)",
    description:
      "A production-ready SEO and backlink management web platform focused on performance, analytics dashboards, and clean UI for marketing teams.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST API"],
    features: [
      "SEO-focused UI architecture",
      "Performance-optimized pages",
      "Clean marketing dashboards",
      "Responsive layouts & component library",
    ],
    image: "/Ranko.webp",
    liveUrl: "https://ranko-link-7su3.vercel.app/",
    codeUrl: "https://github.com/Fakiyat/Ranko-Link",
    featured: true,
  },
  {
    id: 5,
    title: "AI-Powered Job Finder Product",
    description:
      "AI job matching platform where users submit resumes or natural language prompts, AI agents scrape & surface matched listings, and candidates track & apply directly.",
    tech: ["React.js", "TypeScript", "AI Agents", "Tailwind CSS", "REST API"],
    features: [
      "Natural language prompt & resume job matching",
      "AI agent web scraping & listing aggregation",
      "Save, track & direct application dashboard",
      "Responsive motion-driven UX",
    ],
    image: "/Wasla.webp",
    liveUrl: "https://walsa-one.vercel.app/",
    codeUrl: "https://github.com/Fakiyat/WalsaOne",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Engineer – Frontend",
    company: "Lytehire.ai",
    location: "Full-time",
    period: "Feb 2026 – Present",
    description:
      "Architecting AI-powered candidate screening products, real-time video streaming pipelines, anti-cheating security systems, and high-converting marketing applications.",
    metrics: [
      "AI Interview Platform",
      "Dual-Camera Feeds",
      "Real-Time WebSockets",
      "Anti-Cheating Engine",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets",
      "Context API",
      "Google Sheets API",
    ],
    responsibilities: [
      "Built the company's marketing website from scratch using React.js, TypeScript, and Tailwind CSS, featuring animated multi-page layouts, Context API state management, backend API integration, legal/compliance section, and lead capture forms connected to Google Sheets via API.",
      "Architected and implemented a full AI-powered interview platform end-to-end – designed all candidate-facing interview screens and flows, integrated a dual-camera system (candidate + AI agent feeds), and used WebSockets to connect the AI agent to the frontend in real time.",
      "Built a recorded interview pipeline that streamed session footage to the frontend in progressive chunks, and delivered post-interview analytics including per-question video reviews, overall compatibility scores, and assessments such as cultural fit and technical proficiency.",
      "Implemented an anti-cheating system enforcing mandatory fullscreen mode throughout the interview session, and managed complex application state using Context API with real-time polling for live session synchronization.",
      "Engineered an automated email notification workflow that dispatches personalized interview session invites to shortlisted candidates upon selection.",
      "Currently building an AI-powered Job Finder product – users submit a resume or natural language prompt, AI agents scrape matched job listings, and users can save, track, and apply to positions directly within the platform.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer (Full-Stack Web Development)",
    company: "The Internet Eagle",
    location: "Full-time",
    period: "Jan 2025 – Dec 2025",
    description:
      "Developed production-grade web applications, WooCommerce-style booking workflows, dynamic role-based dashboards, and performance-optimized architectures.",
    metrics: [
      "25% Faster Page Load",
      "35% Reduced Initial Load",
      "40% Faster Feature Delivery",
      "Role-Based SaaS",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Zustand",
      "REST APIs",
      "JWT Auth",
    ],
    responsibilities: [
      "Designed and developed responsive, production-grade web applications using HTML, CSS, JavaScript, and React.js, improving page load performance by 25% through component optimization and code-splitting.",
      "Built ecommerce-style booking and checkout workflows (cart-like flows, order handling, role-based access) similar to WooCommerce-based systems.",
      "Implemented dynamic dashboards for facility booking, user management, and role-based access control, handling both frontend logic and backend API integration.",
      "Added lazy loading, sortable tables, filters, and dynamic imports, reducing initial load time by 35% and improving Core Web Vitals.",
      "Integrated REST APIs, authentication, and backend services using JWT-based authentication, protected routes, and session handling.",
      "Worked with CMS-style architectures, contributing to feature customization, data-driven UI modules, and extensible website functionality.",
      "Optimized application performance, security, and UX through reusable components, state management using Zustand, reducing feature delivery time by 40%.",
      "Participated in deployment, testing, and production debugging, ensuring stable releases and smooth user experiences.",
    ],
  },
  {
    id: 3,
    role: "AI & Automation Engineer",
    company: "Brisk Bold AI Services",
    location: "Remote",
    period: "Feb 2024 – Dec 2024",
    description:
      "Automated business workflows and engineered high-accuracy OCR document processing pipelines to eliminate manual operational bottlenecks.",
    metrics: [
      "70% Manual Work Reduced",
      "40% Better OCR Accuracy",
      "50% Faster Processing",
      "60% Reduced Delay",
    ],
    tech: [
      "Power Automate",
      "AI Builder",
      "OCR Pipeline",
      "OpenCV",
      "Python",
      "Cloud Automation",
    ],
    responsibilities: [
      "Automated business workflows with Power Automate + AI Builder, reducing manual work by 70%.",
      "Built an OCR invoice pipeline with 40% better accuracy and 50% faster processing speed.",
      "Designed automated routing, approval, and cloud processes reducing operational delays by 60%.",
      "Worked on AI-assisted document extraction, validation pipelines, and cross-functional automation deployments.",
    ],
  },
];

export const education = {
  institution: "Jamia Hamdard University",
  degree:
    "Bachelor of Technology in Computer Science (Artificial Intelligence)",
  period: "2020 – 2024",
  highlights: [
    "Specialized in Artificial Intelligence, Neural Networks, and Web Engineering",
    "Gained strong foundations in Data Structures, Algorithms, Systems Architecture, and Database Systems",
    "Participated in frontend hackathons and AI application development projects",
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const personaldetails = {
  profileImage: "/code2.webp",
  role: "Software Engineer – Frontend",
  contactDescription:
    "Available for Frontend Engineer / SDE-1 roles. Open to remote opportunities worldwide.",
  phone: "+91-70066-18176",
  location: "India",
  twitter: "https://twitter.com/fakiyatafaq",
};
