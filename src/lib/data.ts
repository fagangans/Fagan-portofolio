import type {
  Project,
  SkillCategory,
  Testimonial,
  Achievement,
  BlogPost,
  Service,
  Stat,
} from "@/types";

export const stats: Stat[] = [
  { value: "5+", label: "Years" },
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "10+", label: "Awards" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Nebula Commerce",
    description: "A headless e-commerce platform with immersive 3D product views.",
    longDescription:
      "Nebula Commerce reimagines online shopping with WebGL-powered 3D product previews, a blazing-fast headless architecture, and a checkout flow optimized for conversion. Built to scale to millions of SKUs.",
    category: "Web Dev",
    tech: ["Next.js", "TypeScript", "Three.js", "Stripe"],
    gradient: "from-amber-500/30 to-orange-700/30",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Aurora Design System",
    description: "An enterprise-grade design system used across 40+ products.",
    longDescription:
      "Aurora is a comprehensive design system delivering accessible, themeable components with full documentation, design tokens, and Figma parity. Adopted by multiple product teams to ship faster.",
    category: "Design",
    tech: ["Figma", "Storybook", "React", "Tailwind"],
    gradient: "from-purple-500/30 to-indigo-700/30",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Lumen Identity",
    description: "A complete brand identity for a luxury hospitality group.",
    longDescription:
      "Lumen is a full brand identity system spanning logo, typography, motion language, and brand guidelines for a five-star hospitality group operating across three continents.",
    category: "Branding",
    tech: ["Illustrator", "After Effects", "Brand Strategy"],
    gradient: "from-rose-500/30 to-pink-700/30",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Sentient Studio",
    description: "An AI content studio generating on-brand creative at scale.",
    longDescription:
      "Sentient Studio orchestrates multiple generative models to produce on-brand copy, imagery, and video. A custom prompt pipeline keeps every output consistent with brand guardrails.",
    category: "AI",
    tech: ["Python", "OpenAI", "Next.js", "LangChain"],
    gradient: "from-emerald-500/30 to-teal-700/30",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Helix Analytics",
    description: "A real-time analytics dashboard for high-frequency data.",
    longDescription:
      "Helix renders millions of data points in real time with GPU-accelerated charts, customizable widgets, and sub-second query latency powered by an edge data layer.",
    category: "Web Dev",
    tech: ["React", "WebGL", "Rust", "ClickHouse"],
    gradient: "from-blue-500/30 to-cyan-700/30",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Mirage AR",
    description: "An augmented-reality try-on experience for fashion retail.",
    longDescription:
      "Mirage brings garments to life in AR, letting shoppers visualize fit and drape on their own bodies in real time, directly from the browser with no app install.",
    category: "AI",
    tech: ["WebXR", "TensorFlow.js", "Three.js"],
    gradient: "from-yellow-500/30 to-amber-700/30",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Code2",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Three.js / WebGL", level: 85 },
      { name: "Tailwind CSS", level: 96 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 84 },
      { name: "GraphQL", level: 80 },
      { name: "Cloud / DevOps", level: 78 },
    ],
  },
  {
    category: "UI/UX",
    icon: "Palette",
    skills: [
      { name: "Figma", level: 93 },
      { name: "Design Systems", level: 90 },
      { name: "Prototyping", level: 88 },
      { name: "Motion Design", level: 82 },
    ],
  },
  {
    category: "AI Tools",
    icon: "Sparkles",
    skills: [
      { name: "LLM Integration", level: 89 },
      { name: "Prompt Engineering", level: 91 },
      { name: "LangChain", level: 80 },
      { name: "Vector Databases", level: 76 },
    ],
  },
  {
    category: "Content Creation",
    icon: "Video",
    skills: [
      { name: "Video Editing", level: 84 },
      { name: "Copywriting", level: 87 },
      { name: "Photography", level: 79 },
      { name: "Storytelling", level: 90 },
    ],
  },
  {
    category: "Business",
    icon: "Briefcase",
    skills: [
      { name: "Product Strategy", level: 86 },
      { name: "Client Relations", level: 92 },
      { name: "Team Leadership", level: 85 },
      { name: "Growth Marketing", level: 81 },
    ],
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "High-performance, scalable web applications built with modern frameworks and obsessive attention to detail.",
    icon: "Code2",
    features: ["Next.js & React", "Performance First", "SEO Optimized"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Intuitive, beautiful interfaces grounded in user research and refined through rigorous iteration.",
    icon: "Palette",
    features: ["User Research", "Design Systems", "Prototyping"],
  },
  {
    id: 3,
    title: "Branding",
    description:
      "Distinctive brand identities that tell your story and resonate with the audiences that matter.",
    icon: "Gem",
    features: ["Logo & Identity", "Brand Strategy", "Guidelines"],
  },
  {
    id: 4,
    title: "AI Solutions",
    description:
      "Custom AI-powered products and automations that put cutting-edge models to work for your business.",
    icon: "Sparkles",
    features: ["LLM Apps", "Automation", "Custom Pipelines"],
  },
  {
    id: 5,
    title: "Content Strategy",
    description:
      "Compelling content systems that grow audiences and convert attention into lasting relationships.",
    icon: "PenTool",
    features: ["Editorial Planning", "Copywriting", "Distribution"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Laurent",
    role: "CEO",
    company: "Atelier Noir",
    content:
      "Fagan transformed our vision into a digital experience that feels nothing short of luxurious. Every pixel was intentional.",
    rating: 5,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder",
    company: "Helix Labs",
    content:
      "Rare combination of technical mastery and design taste. He shipped faster than our entire previous team and the quality was impeccable.",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    name: "Isabella Rossi",
    role: "Creative Director",
    company: "Studio Lumen",
    content:
      "Working with Fagan elevated our brand to a level we didn't think was possible. A true craftsman and a delight to collaborate with.",
    rating: 5,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Product Lead",
    company: "Nebula",
    content:
      "The 3D commerce experience he built doubled our engagement. Visionary work delivered with total professionalism.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    name: "Amara Singh",
    role: "CMO",
    company: "Aurora Group",
    content:
      "Strategic, meticulous, and endlessly creative. Fagan doesn't just execute briefs, he improves them.",
    rating: 5,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: 6,
    name: "Liam Foster",
    role: "Investor",
    company: "Vertex Capital",
    content:
      "One of the most talented creatives I've backed. His work consistently outperforms expectations.",
    rating: 5,
    gradient: "from-yellow-500 to-amber-600",
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    year: "2024",
    title: "Awwwards Site of the Day",
    description:
      "Recognized for an immersive 3D portfolio experience pushing the boundaries of the web.",
    type: "Award",
  },
  {
    id: 2,
    year: "2023",
    title: "Google UX Design Certificate",
    description:
      "Completed advanced certification in user experience research and interface design.",
    type: "Certification",
  },
  {
    id: 3,
    year: "2023",
    title: "Global Hackathon Winner",
    description:
      "First place among 1,200 teams for an AI-driven accessibility tool.",
    type: "Competition",
  },
  {
    id: 4,
    year: "2022",
    title: "50,000 Users Milestone",
    description:
      "Scaled a self-built SaaS product to fifty thousand active users worldwide.",
    type: "Milestone",
  },
  {
    id: 5,
    year: "2021",
    title: "CSS Design Awards Winner",
    description:
      "Awarded for excellence in innovation, UI design, and creative use of code.",
    type: "Award",
  },
  {
    id: 6,
    year: "2020",
    title: "Founded Altair Studio",
    description:
      "Launched an independent creative studio serving clients across three continents.",
    type: "Milestone",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Cinematic Web Experiences",
    excerpt:
      "How to blend 3D, motion, and narrative to craft websites that feel like films.",
    category: "Design",
    readTime: "8 min read",
    date: "May 2026",
    gradient: "from-amber-500/40 to-orange-700/40",
  },
  {
    id: 2,
    title: "Building Production AI Products",
    excerpt:
      "Lessons from shipping LLM-powered apps that real users trust every day.",
    category: "AI",
    readTime: "12 min read",
    date: "Apr 2026",
    gradient: "from-emerald-500/40 to-teal-700/40",
  },
  {
    id: 3,
    title: "Designing for Luxury Brands",
    excerpt:
      "The principles of restraint, materiality, and craft that define premium digital design.",
    category: "Branding",
    readTime: "6 min read",
    date: "Mar 2026",
    gradient: "from-rose-500/40 to-pink-700/40",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
];
