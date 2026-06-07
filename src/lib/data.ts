import type {
  Project,
  SkillCategory,
  Testimonial,
  Achievement,
  Service,
  Stat,
} from "@/types";

export const stats: Stat[] = [
  { value: "1+", label: "Tahun" },
  { value: "1", label: "Proyek" },
  { value: "1", label: "Klien" },
  { value: "1", label: "Award" },
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
    category: "Matematika",
    icon: "Calculator",
    skills: [
      { name: "Aljabar",        level: 90 },
      { name: "Geometri",       level: 85 },
      { name: "Statistika",     level: 80 },
      { name: "Kalkulus Dasar", level: 75 },
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

export const achievements: Achievement[] = [
  {
    id: 1,
    year: "2017 – 2023",
    title: "SD Nurul Ilmi",
    description:
      "Membangun fondasi akademik, disiplin belajar, dan ketertarikan awal terhadap teknologi serta kreativitas.",
    type: "Milestone",
  },
  {
    id: 2,
    year: "2023 – 2026",
    title: "SMP Nurul Ilmi",
    description:
      "Mengembangkan kemampuan berpikir kritis, eksplorasi teknologi digital, serta aktif dalam berbagai proyek pembelajaran.",
    type: "Milestone",
  },
  {
    id: 3,
    year: "2026 – 2029",
    title: "SMA Unggul Garuda Baru Belitung Timur",
    description:
      "Fokus pada pengembangan diri di bidang teknologi, desain, inovasi, dan kepemimpinan untuk mempersiapkan karier masa depan.",
    type: "Milestone",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
];
