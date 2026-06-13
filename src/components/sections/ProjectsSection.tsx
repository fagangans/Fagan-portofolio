"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Project, ProjectCategory } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const allCategories = Array.from(new Set(projects.map((p) => p.category)));
const filters: Array<"All" | ProjectCategory> = ["All", ...allCategories];

export default function ProjectsSection() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-pad relative">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured"
        highlight="Projects"
        className="mb-12"
      />

      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-5 py-2 text-sm transition-all ${
              active === f
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/10 text-silver hover:border-white/30 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-charcoal/40"
            >
              <div
                className={`relative aspect-video bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-radial-glow" />
                <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-gold backdrop-blur">
                  {project.category}
                </span>
                <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-silver"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal"
            >
              <div
                className={`relative aspect-video bg-gradient-to-br ${selected.gradient}`}
              >
                <div className="absolute inset-0 bg-radial-glow" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  {selected.category}
                </span>
                <h3 className="mt-2 font-serif text-3xl text-white">
                  {selected.title}
                </h3>
                <p className="mt-4 leading-relaxed text-silver">
                  {selected.longDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  {selected.liveUrl && selected.liveUrl !== "#" && (
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-black"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {selected.githubUrl && selected.githubUrl !== "#" && (
                    <a
                      href={selected.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white hover:border-gold hover:text-gold"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
