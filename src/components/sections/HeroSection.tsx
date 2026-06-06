"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { stats, name, tagline, shortBio } from "@/data/portfolio";

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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 z-0">
        <HeroSceneBoundary>
          <HeroScene />
        </HeroSceneBoundary>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-radial-glow" />

      <div className="relative z-10 flex flex-col items-center text-center">
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
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95]"
          style={{ perspective: 1000 }}
        >
          {NAME.split(" ").map((word, wi) => (
            <span key={wi} className="mx-2 inline-block whitespace-nowrap">
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
          className="mt-8 max-w-2xl text-base md:text-lg text-silver"
        >
          {shortBio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 md:gap-14"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-5xl text-gold-gradient">
                {s.value}
              </span>
              <span className="mt-1 text-xs uppercase tracking-[0.2em] text-silver">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.2 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-silver"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 text-gold" />
      </motion.a>
    </section>
  );
}
