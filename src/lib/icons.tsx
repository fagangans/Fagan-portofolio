import {
  Code2,
  Server,
  Palette,
  Sparkles,
  Video,
  Briefcase,
  Gem,
  PenTool,
  Monitor,
  Layout,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Palette,
  Sparkles,
  Video,
  Briefcase,
  Gem,
  PenTool,
  Monitor,
  Layout,
  Github,
  Linkedin,
  Twitter,
  Instagram,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
