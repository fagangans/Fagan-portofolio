// ============================================================
//  PORTFOLIO CONFIGURATION
//  Edit this single file to update all website content.
// ============================================================

// ─── Types ──────────────────────────────────────────────────

export type ProjectCategory = "Web Dev" | "Design" | "Branding" | "AI";
export type AchievementType = "Award" | "Certification" | "Competition" | "Milestone";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tech: string[];
  gradient: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  category: string;
  icon: string; // Lucide icon name — see src/lib/icons.tsx
  skills: Skill[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number; // 1–5
  gradient: string; // Tailwind gradient classes for avatar
}

export interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  type: AchievementType;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string; // Tailwind gradient classes for card thumbnail
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Lucide icon name — see src/lib/icons.tsx
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Lucide icon name — see src/lib/icons.tsx
}

export interface NavLink {
  label: string;
  href: string;
}

// ─── Personal Info ───────────────────────────────────────────

export const name = "FAGAN FABIAN ALTAIR";

export const tagline =
  "Siswa SMA Unggul Garuda | Penggemar Teknologi, Desain, dan Inovasi";

export const shortBio =
  "Siswa yang gemar belajar, mengeksplorasi teknologi, dan mengikuti berbagai kompetisi untuk mengembangkan kemampuan serta pengalaman.";

export const biography = `
Saya adalah siswa SMA Unggul Garuda yang memiliki ketertarikan pada teknologi, desain, pengembangan digital, dan berbagai bidang pembelajaran lainnya.

Saya senang mencari tahu hal-hal baru, mempelajari keterampilan yang belum saya kuasai, serta mencoba berbagai kompetisi untuk menguji kemampuan dan memperluas wawasan. Bagi saya, setiap proyek, pengalaman, dan lomba merupakan kesempatan untuk belajar, berkembang, dan menjadi versi yang lebih baik dari diri saya sendiri.

Saat ini saya terus mengembangkan kemampuan di bidang teknologi, desain, komunikasi, dan pemecahan masalah sambil membangun portofolio yang mencerminkan proses belajar dan perkembangan saya.
`;

// Path to your profile photo inside the /public directory.
// Example: "/images/profile.jpg"
// Leave as "" to show a styled placeholder.
export const profilePhoto = "/images/fagan-profile.jpg";

export const email = "faganfabian4@gmail.com";

// Display label shown in the Contact section.
// Update with your real number — digits are extracted automatically for the WhatsApp link.
export const phone = "089695368844";

// Optional: set an explicit WhatsApp number (digits only, with country code, e.g. "5491112345678").
// If empty, the phone field above is used.
export const whatsappNumber = "6289695368844";

export const location = "Palembang, Sumatera Selatan, Indonesia";

// ─── Navigation ──────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Services", href: "#services" },
  { label: "Blog",     href: "#blog"     },
  { label: "Contact",  href: "#contact"  },
];

// ─── Social Links ─────────────────────────────────────────────

export const socials: SocialLink[] = [
  { label: "GitHub",    href: "https://github.com",    icon: "Github"    },
  { label: "LinkedIn",  href: "https://linkedin.com",  icon: "Linkedin"  },
  { label: "Twitter",   href: "https://twitter.com",   icon: "Twitter"   },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
];

// ─── Hero Stats ───────────────────────────────────────────────

export const stats: Stat[] = [
  { value: "5+",  label: "Tahun"        },
  { value: "50+", label: "Proyek"       },
  { value: "30+", label: "Klien"        },
  { value: "10+", label: "Penghargaan"  },
];

// ─── Skills ───────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Code2",
    skills: [
      { name: "React / Next.js",  level: 95 },
      { name: "TypeScript",       level: 92 },
      { name: "Three.js / WebGL", level: 85 },
      { name: "Tailwind CSS",     level: 96 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js",       level: 88 },
      { name: "PostgreSQL",    level: 84 },
      { name: "GraphQL",       level: 80 },
      { name: "Cloud / DevOps",level: 78 },
    ],
  },
  {
    category: "UI/UX",
    icon: "Palette",
    skills: [
      { name: "Figma",          level: 93 },
      { name: "Design Systems", level: 90 },
      { name: "Prototyping",    level: 88 },
      { name: "Motion Design",  level: 82 },
    ],
  },
  {
    category: "AI Tools",
    icon: "Sparkles",
    skills: [
      { name: "LLM Integration",    level: 89 },
      { name: "Prompt Engineering", level: 91 },
      { name: "LangChain",          level: 80 },
      { name: "Vector Databases",   level: 76 },
    ],
  },
  {
    category: "Content Creation",
    icon: "Video",
    skills: [
      { name: "Video Editing", level: 84 },
      { name: "Copywriting",   level: 87 },
      { name: "Photography",   level: 79 },
      { name: "Storytelling",  level: 90 },
    ],
  },
  {
    category: "Business",
    icon: "Briefcase",
    skills: [
      { name: "Product Strategy", level: 86 },
      { name: "Client Relations", level: 92 },
      { name: "Team Leadership",  level: 85 },
      { name: "Growth Marketing", level: 81 },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────
// Replace liveUrl / githubUrl "#" placeholders with real URLs.
// Set githubUrl to "" to hide the GitHub button for private/client work.

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
    liveUrl: "#",    // TODO: replace with live URL
    githubUrl: "#",  // TODO: replace with repo URL (or "" to hide)
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
    liveUrl: "#",    // TODO: replace with live URL
    githubUrl: "#",  // TODO: replace with repo URL (or "" to hide)
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
    liveUrl: "#",    // TODO: replace with live URL
    githubUrl: "",   // design work — no repo
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
    liveUrl: "#",    // TODO: replace with live URL
    githubUrl: "#",  // TODO: replace with repo URL (or "" to hide)
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
    liveUrl: "#",    // TODO: replace with live URL
    githubUrl: "#",  // TODO: replace with repo URL (or "" to hide)
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
    liveUrl: "#",    // TODO: replace with live URL
    githubUrl: "#",  // TODO: replace with repo URL (or "" to hide)
  },
];

// ─── Services ─────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Membangun aplikasi web modern yang cepat, aman, dan mudah dikembangkan. Setiap baris kode ditulis dengan penuh perhatian untuk memastikan performa dan pengalaman terbaik bagi pengguna.",
    icon: "Code2",
    features: ["Next.js & React", "Performa Tinggi", "SEO Friendly"],
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Mengubah desain menjadi antarmuka yang hidup dan responsif di semua perangkat. Fokus pada detail visual, animasi halus, dan interaksi yang terasa alami.",
    icon: "Monitor",
    features: ["Responsive Design", "Animasi & Interaksi", "Cross-browser"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Merancang tampilan yang intuitif dan menarik berdasarkan kebutuhan pengguna nyata. Setiap elemen dirancang untuk memudahkan pengguna mencapai tujuan mereka.",
    icon: "Palette",
    features: ["Riset Pengguna", "Prototyping", "Design System"],
  },
  {
    id: 4,
    title: "Landing Page",
    description:
      "Membuat halaman landing yang dirancang khusus untuk mengkonversi pengunjung menjadi pelanggan. Tampilan profesional yang membangun kepercayaan dan mendorong aksi.",
    icon: "Layout",
    features: ["Konversi Tinggi", "Copywriting", "A/B Testing Ready"],
  },
];

// ─── Testimonials ─────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andi Saputra",
    role: "Pemilik",
    company: "Toko Furniture Jati Makmur",
    content:
      "Website yang dibuat sangat membantu bisnis kami terlihat lebih profesional. Pelanggan sekarang bisa melihat katalog produk dengan mudah dan langsung menghubungi kami.",
    rating: 5,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    name: "Rizky Pratama",
    role: "Ketua",
    company: "Himpunan Mahasiswa Teknik Informatika",
    content:
      "Komunikasi lancar, revisi cepat, dan hasil akhirnya sesuai dengan kebutuhan organisasi kami. Website acara tahunan kami jadi jauh lebih menarik dari sebelumnya.",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    name: "Siti Rahayu",
    role: "Pemilik",
    company: "Butik Online Rahmayla",
    content:
      "Landing page toko online saya sekarang terlihat jauh lebih rapi dan elegan. Banyak pelanggan yang bilang website-nya enak dilihat dan mudah digunakan.",
    rating: 5,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: 4,
    name: "Dimas Kurniawan",
    role: "Pemilik",
    company: "Kedai Kopi Nusantara",
    content:
      "Proses pembuatannya cepat dan hasilnya melebihi ekspektasi. Sekarang usaha kopi saya punya website yang bisa saya banggakan kepada pelanggan.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    name: "Nadia Fitriani",
    role: "Pengelola",
    company: "Komunitas Desainer Kreatif Bandung",
    content:
      "Sangat memahami kebutuhan kami sebagai komunitas kreatif. Tampilan websitenya bersih, modern, dan mencerminkan identitas komunitas kami dengan baik.",
    rating: 5,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: 6,
    name: "Bagas Wicaksono",
    role: "Pemilik",
    company: "Studio Foto Personal Brand",
    content:
      "Portfolio online saya sekarang punya tampilan yang benar-benar profesional. Beberapa klien baru mengaku menemukan saya lewat website dan langsung tertarik.",
    rating: 5,
    gradient: "from-yellow-500 to-amber-600",
  },
];

// ─── Achievements ─────────────────────────────────────────────

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
    description: "First place among 1,200 teams for an AI-driven accessibility tool.",
    type: "Competition",
  },
  {
    id: 4,
    year: "2022",
    title: "50,000 Users Milestone",
    description: "Scaled a self-built SaaS product to fifty thousand active users worldwide.",
    type: "Milestone",
  },
  {
    id: 5,
    year: "2021",
    title: "CSS Design Awards Winner",
    description: "Awarded for excellence in innovation, UI design, and creative use of code.",
    type: "Award",
  },
  {
    id: 6,
    year: "2020",
    title: "Founded Altair Studio",
    description: "Launched an independent creative studio serving clients across three continents.",
    type: "Milestone",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────

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
