"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import type { ProjectCategory } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const filters = ["All", "Web Dev", "Design", "Branding", "AI"] as const;
type Filter = (typeof filters)[number];

const categoryColors: Record<ProjectCategory, string> = {
  "Web Dev": "from-blue-500/20 to-cyan-700/20 border-blue-500/20",
  Design: "from-purple-500/20 to-indigo-700/20 border-purple-500/20",
  Branding: "from-rose-500/20 to-pink-700/20 border-rose-500/20",
  AI: "from-emerald-500/20 to-teal-700/20 border-emerald-500/20",
};

const categoryDot: Record<ProjectCategory, string> = {
  "Web Dev": "bg-blue-400",
  Design: "bg-purple-400",
  Branding: "bg-rose-400",
  AI: "bg-emerald-400",
};

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const featured = projects[0];

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-black pt-28 pb-24">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/3 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-silver transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Heading */}
          <SectionHeading
            eyebrow="Case Studies"
            title="All"
            highlight="Projects"
            className="mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-16 max-w-2xl text-center text-silver"
          >
            A deep dive into selected work — from concept and strategy through
            to the final shipped product.
          </motion.p>

          {/* Featured project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-20"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
              Featured
            </p>
            <GlassCard glow className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Banner */}
                <div
                  className={`relative aspect-video w-full lg:aspect-auto lg:w-2/5 bg-gradient-to-br ${featured.gradient} flex-shrink-0`}
                >
                  <div className="absolute inset-0 bg-radial-glow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-5xl font-bold text-white/10 select-none">
                      {featured.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs text-gold backdrop-blur">
                    {featured.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-silver">
                      {featured.longDescription}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featured.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={featured.liveUrl}
                      className="flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={featured.githubUrl}
                      className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
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
                <span
                  className={`ml-2 text-xs ${
                    active === f ? "text-gold/60" : "text-white/20"
                  }`}
                >
                  {f === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === f).length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Project list */}
          <motion.div layout className="flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard
                    glow
                    className={`border ${categoryColors[project.category]}`}
                  >
                    <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
                      {/* Number + category */}
                      <div className="flex flex-shrink-0 items-start gap-4 sm:flex-col sm:items-center sm:gap-2">
                        <span className="font-serif text-4xl font-bold leading-none text-white/10">
                          {project.id.toString().padStart(2, "0")}
                        </span>
                        <div className="flex items-center gap-1.5 sm:flex-col sm:items-center">
                          <span
                            className={`h-2 w-2 rounded-full ${categoryDot[project.category]}`}
                          />
                          <span className="text-xs text-silver">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Main content */}
                      <div className="flex flex-1 flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serif text-2xl font-bold text-white">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-silver/40" />
                        </div>

                        <p className="leading-relaxed text-silver">
                          {project.longDescription}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-silver"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          <a
                            href={project.liveUrl}
                            className="flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                          >
                            <Github className="h-3.5 w-3.5" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA back */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="mb-4 text-sm text-silver">
              Interested in working together?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
