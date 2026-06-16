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
  // Path to a screenshot inside /public (e.g. "/images/projects/my-project.png").
  // Leave empty to fall back to the gradient placeholder.
  image?: string;
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
  { value: "1+", label: "Tahun"   },
  { value: "1",  label: "Proyek"  },
  { value: "1",  label: "Klien"   },
  { value: "1",  label: "Award"   },
];

// ─── Skills ───────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    category: "Matematika",
    icon: "Calculator",
    skills: [
      { name: "Aljabar",          level: 90 },
      { name: "Geometri",         level: 85 },
      { name: "Statistika",       level: 80 },
      { name: "Kalkulus Dasar",   level: 75 },
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
    title: "Web Belajar Bahasa Inggris Fagan",
    description:
      "Platform belajar Bahasa Inggris interaktif dengan materi yang tersusun rapi untuk meningkatkan vocabulary, grammar, dan percakapan.",
    longDescription:
      "Website edukasi yang dirancang untuk membantu siapa pun belajar Bahasa Inggris secara mandiri. Materi disusun bertahap mulai dari dasar hingga lebih lanjut, dengan tampilan yang bersih dan mudah dinavigasi agar proses belajar terasa lebih menyenangkan dan efektif.",
    category: "Web Dev",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-amber-500/30 to-orange-700/30",
    image: "/images/projects/belajar-bahasa-inggris.png",
    liveUrl: "https://faganbelajarbahasainggris-x41s.vercel.app/",
    githubUrl: "https://github.com/fagangans/faganbelajarbahasainggris.git",
  },
  {
    id: 2,
    title: "Template Restaurant Fagan",
    description:
      "Template website restoran modern yang menonjolkan menu, suasana, dan identitas brand secara elegan dan responsif.",
    longDescription:
      "Sebuah template branding untuk bisnis restoran, dirancang dengan tata letak yang elegan untuk menampilkan menu, galeri suasana tempat, dan informasi reservasi. Dibangun responsif agar tetap nyaman dilihat di perangkat apa pun, sekaligus memperkuat identitas brand restoran.",
    category: "Branding",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-rose-500/30 to-pink-700/30",
    image: "/images/projects/restaurant-template.png",
    liveUrl: "https://fagan-restaurant-template-n4ei.vercel.app/",
    githubUrl: "https://github.com/fagangans/fagan-restaurant-template.git",
  },
  {
    id: 3,
    title: "AI Chatbot Fagan",
    description:
      "Chatbot berbasis AI yang dirancang untuk merespons pertanyaan pengguna secara natural dan cerdas.",
    longDescription:
      "Sebuah chatbot pintar yang memanfaatkan kecerdasan buatan untuk memahami dan merespons percakapan secara natural. Dikembangkan sebagai eksperimen untuk mendalami integrasi AI dalam aplikasi percakapan interaktif.",
    category: "AI",
    tech: ["Python", "AI / NLP"],
    gradient: "from-emerald-500/30 to-teal-700/30",
    image: "", // TODO: tambahkan screenshot, contoh: "/images/projects/ai-chatbot.png"
    liveUrl: "", // belum ada demo live
    githubUrl: "https://github.com/fagangans/Faganlenwy.git",
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

