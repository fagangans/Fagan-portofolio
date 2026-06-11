import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsShowcaseLoader from "@/components/sections/ProjectsShowcaseLoader";

export const metadata: Metadata = {
  title: "Projects — Fagan Fabian Altair | Creative Developer & Designer",
  description:
    "Explore the portfolio of Fagan Fabian Altair — a curated collection of web applications, landing pages, and digital experiences built with modern technology.",
  openGraph: {
    title: "Projects — Fagan Fabian Altair",
    description:
      "Web apps, platforms, and landing pages crafted with precision and care.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsShowcaseLoader />
      <Footer />
    </>
  );
}
