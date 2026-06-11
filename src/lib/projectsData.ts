export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  /** Place screenshots in public/images/projects/<filename> */
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  gradient: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "GrammarQuest",
    category: "Education Platform",
    description:
      "Interactive English learning platform with gamified exercises, XP progression, and streak tracking.",
    longDescription:
      "GrammarQuest turns English grammar practice into an engaging game-like experience. Learners earn XP, maintain streaks, and progress through structured lesson paths — making consistent practice feel rewarding rather than tedious.",
    image: "/images/projects/grammarquest.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://faganbelajarbahasainggris-x41s.vercel.app/",
    githubUrl: "#",
    gradient: "from-purple-500/20 via-blue-600/20 to-indigo-700/20",
  },
  {
    id: 2,
    title: "Nusantara Dining",
    category: "Landing Page",
    description:
      "Luxury restaurant website blending Indonesian cultural heritage with modern elegance to drive reservations.",
    longDescription:
      "Nusantara Dining is a premium landing page for an authentic Indonesian restaurant. Designed to elevate the brand's digital presence through rich visuals, refined typography, and a seamless reservation flow that converts visitors into guests.",
    image: "/images/projects/nusantara.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://fagan-restaurant-template.vercel.app/",
    githubUrl: "#",
    gradient: "from-amber-500/20 via-orange-600/20 to-yellow-700/20",
  },
];
