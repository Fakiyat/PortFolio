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
  role: "Frontend Developer & Designer",
  description:
    "I build beautiful, animated, high-performance websites using React, Next.js, TypeScript, TailwindCSS & GSAP.",
  resumeLink: "/resume.pdf",
  contactLink: "#contact",
};
export const personalInfo = {
  name: "Fakiyat Afaq",
  role: "Frontend Developer",
  headline:
    "I build beautiful, animated, high-performance websites using React, Next.js, TypeScript, TailwindCSS & GSAP.",
  email: "fakiyatafaq@gmail.com",
  github: "https://github.com/fakiyatafaq",
  linkedin: "https://linkedin.com/in/fakiyatafaq",
  resumeUrl: "/Resume.pdf",
  intro: [
    "Bachelor's in Computer Science (AI specialization)",
    "Frontend-focused React / Next.js developer",
    "Experience building SaaS dashboards and role-based systems",
  ],
};

export const aboutMe = {
  background: {
    title: "Background",
    content:
      "CS graduate with AI specialization who transitioned into frontend development driven by a passion for UI/UX and building scalable web applications.",
  },
  interests: {
    title: "What I Enjoy",
    items: [
      "Building clean, intuitive user interfaces",
      "Writing maintainable, well-documented code",
      "Optimizing performance and user experience",
    ],
  },
  softSkills: {
    title: "Soft Skills",
    items: [
      "Team collaboration & communication",
      "Strong ownership mindset",
      "Continuous learning & adaptability",
    ],
  },
};
// ============ ABOUT SECTION DATA ============
export const aboutData = {
  status: "About Me",
  greeting: "Hello, I'm a Frontend Developer",
  title: "Fakiyat Afaq",
  subtitle: "Crafting modern web interfaces with React & Next.js",
  description: `I develop intuitive and visually consistent web applications by combining thoughtful UI design with efficient frontend development. My goal is to build products that feel smooth, reliable, and easy to navigate.`,

  profileImage: "/Hero-logo.png",
  stats: [
    {
      number: "Multiple",
      label: "Live Projects",
      sublabel: "Successfully Delivered",
    },
    {
      number: "1",
      suffix: "+",
      label: "Year of",
      sublabel: "Frontend Experience",
    },
    {
      number: "X",
      suffix: "+",
      label: "Web Applications",
      sublabel: "Built & Deployed",
    },
  ],

  downloadCV: "/resume.pdf",
};

export const aboutDetails = {
  philosophy:
    "I believe great web experiences come from the perfect balance of aesthetic appeal and functional excellence.",
  approach: [
    "User-first thinking in every design decision",
    "Writing clean, maintainable, and scalable code",
    "Staying current with modern web technologies",
    "Collaborating effectively with teams and stakeholders",
  ],
  highlights: [
    "Built enterprise-level SaaS applications serving thousands of users",
    "Specialized in creating complex, role-based dashboard systems",
    "Strong focus on performance optimization and accessibility",
    "Experienced in full project lifecycle from concept to deployment",
  ],
};
export const skills = {
  frontend: {
    title: "Frontend",
    icon: IconCode,
    items: [
      { name: "React", level: 90, icon: IconBrandReact },
      { name: "Next.js", level: 85, icon: IconBrandNextjs },
      { name: "TypeScript", level: 80, icon: IconBrandTypescript },
      { name: "JavaScript", level: 85, icon: IconBrandJavascript },
      { name: "HTML5", level: 90, icon: IconBrandHtml5 },
      { name: "CSS3", level: 85, icon: IconBrandCss3 },
    ],
  },

  styling: {
    title: "UI & Styling",
    icon: IconPalette,
    items: [
      { name: "Tailwind CSS", level: 90, icon: IconBrandTailwind },
      { name: "Ant Design", level: 80, icon: IconLayoutGrid },
      { name: "Framer Motion", level: 75, icon: IconBrandFramer },
      { name: "Responsive Design", level: 90, icon: IconLayoutGrid },
    ],
  },

  stateData: {
    title: "State & Data",
    icon: IconDatabase,
    items: [
      { name: "Zustand", level: 75, icon: IconDatabase },
      { name: "React Query", level: 80, icon: IconDatabase },
      { name: "Fetch API", level: 85, icon: IconApi },
      { name: "REST APIs", level: 80, icon: IconApi },
    ],
  },

  backend: {
    title: "Backend Basics",
    icon: IconServer,
    items: [
      { name: "Django", level: 65, icon: IconBrandDjango },
      { name: "Node.js", level: 60, icon: IconBrandNodejs },
      { name: "PostgreSQL", level: 60, icon: IconDatabase },
      { name: "REST APIs", level: 75, icon: IconServer },
    ],
  },

  tools: {
    title: "Tools",
    icon: IconTool,
    items: [
      { name: "Git", level: 85, icon: IconBrandGit },
      { name: "GitHub", level: 85, icon: IconBrandGithub },
      { name: "Vercel", level: 80, icon: IconBrandVercel },
      { name: "Figma", level: 70, icon: IconBrandFigma },
      { name: "VS Code", level: 90, icon: IconBrandVscode },
      { name: "Postman", level: 75, icon: IconApi },
    ],
  },
};
export const Ski = {
  status: "Skills",
};

export const projects = [
  {
    id: 1,
    title: "Sports Management SaaS",
    description:
      "A comprehensive sports facility management platform with authentication, booking workflows, and role-based dashboards optimized for performance and scalability.",
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "Ant Design"],
    features: [
      "Authentication & protected routes",
      "Real-time booking workflows",
      "Role-based access control",
      "Admin & user dashboards",
      "Scalable frontend architecture",
    ],
    image: "/sports.png",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Vehicle Inventory Management System",
    description:
      "Full-stack inventory management system built with React and Django, supporting CRUD operations, file uploads, and secure multi-user access.",
    tech: ["React", "Django", "PostgreSQL", "REST API", "Tailwind CSS"],
    features: [
      "Complete CRUD operations",
      "Vehicle file uploads",
      "Multi-user inventory tracking",
      "Search & filtering",
      "Secure authentication",
    ],
    image: "/vehicel.png",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "School Management System",
    description:
      "Enterprise-grade school management platform with distinct dashboards for teachers, students, and administrators, built for scalability.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "Zustand"],
    features: [
      "Teacher / Student / Admin roles",
      "Dynamic role-based dashboards",
      "Advanced forms & tables",
      "API-driven architecture",
      "Clean scalable codebase",
    ],
    image: "/school.png",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "RankoLink (Full-Stack Website)",
    description:
      "A production-ready SEO and backlink management platform focused on performance, analytics, and clean UI for marketing teams.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST API"],
    features: [
      "SEO-focused UI architecture",
      "Performance-optimized pages",
      "Clean marketing dashboards",
      "Responsive layouts",
      "Scalable component system",
    ],
    image: "/Ranko.png",
    liveUrl: "https://ranko-link-7su3.vercel.app/",
    codeUrl: "https://github.com/Fakiyat/Ranko-Link",
    featured: true,
  },
  {
    id: 5,
    title: "WaslaOne Platform",
    description:
      "A modern MVP creation web platform featuring advanced hero animations, globe interaction, and performance-focused UI using motion libraries.",
    tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    features: [
      "Advanced hero animations",
      "Interactive globe component",
      "Motion-driven UX",
      "Performance-optimized rendering",
      "Modern UI system",
    ],
    image: "/wasla.png",
    liveUrl: "https://walsa-one.vercel.app/",
    codeUrl: "https://github.com/Fakiyat/WalsaOne",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "The Internet Eagle (Startup)",
    period: "Jan 2025 – Present",
    description:
      "Working as a frontend developer on scalable SaaS applications with a strong focus on performance, user experience, and maintainable architecture.",
    responsibilities: [
      "Built and optimized responsive web applications using React.js, improving page load performance by ~25%",
      "Developed real-time dashboards for facility booking, team management, and role-based access",
      "Implemented lazy loading, sortable tables, and dynamic imports to reduce initial load time by ~35%",
      "Used Zustand for global state management to improve state reliability and user flow",
      "Integrated REST APIs and collaborated closely with backend teams to ensure data consistency",
      "Implemented JWT-based authentication, protected routes, and session handling",
      "Built reusable UI components, improving design consistency and reducing feature development time",
    ],
  },
  {
    id: 2,
    role: "AI & Automation Engineer",
    company: "Brisk Bold AI Services",
    period: "Feb 2024 – Dec 2024",
    description:
      "Worked on automation and AI-driven workflows to reduce manual effort and improve operational efficiency for business processes.",
    responsibilities: [
      "Automated business workflows using Power Automate and AI Builder, reducing manual work by ~70%",
      "Built an OCR-based invoice processing pipeline with improved accuracy and faster processing",
      "Designed automated routing, approval, and cloud-based workflows to reduce processing delays",
      "Worked on AI-assisted document extraction and validation pipelines",
      "Collaborated with cross-functional teams to deploy and monitor automation solutions",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Red Stag Labs",
    period: "Jun 2023 – Jan 2024",
    description:
      "Gained hands-on experience building frontend features and collaborating on full-stack web applications.",
    responsibilities: [
      "Developed and maintained web applications using React.js, Next.js, HTML, CSS, and Bootstrap",
      "Worked with Node.js and Express APIs for authentication, data fetching, and role-based access",
      "Collaborated with designers to convert UI/UX designs into pixel-perfect interfaces",
      "Used AI tools like ChatGPT and Claude for debugging, refactoring, and test-case generation",
      "Improved development speed and code quality through reusable components and better structure",
    ],
  },
];
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const personaldetails = {
  // ... your existing fields

  // Contact Section - Add these new fields:
  profileImage: "/profile.jpg", // Your profile image path
  role: "Frontend Developer",
  contactDescription:
    "I help startups grow with smart design and modern web development, based in Karnataka, India.",
  phone: "+91 XXX XXX XXXX", // Optional
  location: "Karnataka, India",
  twitter: "https://twitter.com/yourhandle", // Optional

  // ... rest of your existing fields
};
