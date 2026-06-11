"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr:false must live inside a Client Component in Next.js 15
const ProjectsShowcase = dynamic(() => import("./ProjectsShowcase"), {
  ssr: false,
});

export default function ProjectsShowcaseLoader() {
  return <ProjectsShowcase />;
}
