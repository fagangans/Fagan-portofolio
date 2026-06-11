"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { portfolioProjects, type PortfolioProject } from "@/lib/projectsData";
import { staggerContainer, fadeUp } from "@/hooks/useScrollAnimation";

/* ─── Browser Mockup ─────────────────────────────────────── */
function BrowserMockup({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <motion.div
      style={{ perspective: 1200 }}
      className="w-full"
    >
      <motion.div
        initial={{ rotateX: 5, rotateY: -4, scale: 0.97 }}
        whileHover={{ rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformStyle: "preserve-3d",
          boxShadow:
            "0 30px 80px -10px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)",
        }}
        className="rounded-xl overflow-hidden"
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 bg-[#1c1c1e] px-4 py-2.5 border-b border-white/[0.07]">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="mx-3 flex h-6 flex-1 items-center truncate rounded bg-white/[0.06] px-3 text-[11px] text-white/30">
            {project.demoUrl !== "#"
              ? project.demoUrl.replace("https://", "")
              : "localhost:3000"}
          </div>
        </div>

        {/* Screenshot area */}
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover object-top transition-opacity duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Project Card ───────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="flex flex-col"
    >
      <GlassCard glow className="flex h-full flex-col overflow-hidden">
        {/* Mockup */}
        <div className="p-5 pb-0">
          <BrowserMockup project={project} />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Category badge */}
          <span className="w-fit rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold">
            {project.category}
          </span>

          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silver">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex items-center gap-3 pt-2">
            {project.demoUrl !== "#" ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-dark px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            ) : (
              <span className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/40 cursor-not-allowed select-none">
                <ExternalLink className="h-3.5 w-3.5" />
                Coming Soon
              </span>
            )}

            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-silver transition-colors hover:border-gold/40 hover:text-gold"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ─── Full Page ──────────────────────────────────────────── */
export default function ProjectsShowcase() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(portfolioProjects.map((p) => p.category))),
  ];

  const filtered =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <main className="relative min-h-screen">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[100px]" />
      </div>

      <div className="section-pad relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="mb-16"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-silver transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </motion.div>

        {/* Heading */}
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          className="mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-xl text-center text-sm leading-relaxed text-silver"
        >
          A curated selection of work — from interactive platforms to polished
          landing pages — each built with care for performance and detail.
        </motion.p>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-14 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                filter === cat
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-white/10 bg-white/5 text-silver hover:border-gold/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={filter}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 text-center text-silver"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </main>
  );
}
