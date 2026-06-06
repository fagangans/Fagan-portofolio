export type ProjectCategory = "Web Dev" | "Design" | "Branding" | "AI";

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
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  gradient: string;
}

export interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  type: "Award" | "Certification" | "Competition" | "Milestone";
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}
