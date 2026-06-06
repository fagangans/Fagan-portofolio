"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { stats, name, tagline, shortBio, profilePhoto } from "@/data/portfolio";
import PortraitCard from "@/components/ui/PortraitCard";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

class HeroSceneBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-black to-black" />
      );
    }
    return this.props.children;
  }
}

const NAME = name;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
};

const letter = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 md:px-12"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroSceneBoundary>
          <HeroScene />
        </HeroSceneBoundary>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-radial-glow" />

      {/* Two-column layout */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 pt-24 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:pt-0 lg:pb-0 lg:min-h-screen">

        {/* ── Left column: text content ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-xs md:text-sm uppercase tracking-[0.4em] text-gold"
          >
            {tagline}
          </motion.span>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
            style={{ perspective: 1000 }}
          >
            {NAME.split(" ").map((word, wi) => (
              <span key={wi} className="mx-1 inline-block whitespace-nowrap">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    variants={letter}
                    className={
                      wi === 1
                        ? "inline-block text-gold-gradient"
                        : "inline-block text-gradient"
                    }
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 max-w-md text-base md:text-lg text-silver"
          >
            {shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#services"
              className="group relative overflow-hidden rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-3xl md:text-4xl text-gold-gradient">
                  {s.value}
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-silver">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column: portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] lg:flex-shrink-0"
        >
          <PortraitCard
            src={profilePhoto}
            alt={NAME}
            subtitle={tagline}
            priority
            variant="hero"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.4 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-silver"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 text-gold" />
      </motion.a>
    </section>
  );
}
