"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { User } from "lucide-react";

interface PortraitCardProps {
  src: string;
  alt: string;
  subtitle?: string;
  priority?: boolean;
  /** "hero" = taller aspect with parallax; "about" = 4/5 aspect with tilt hover */
  variant?: "hero" | "about";
}

export default function PortraitCard({
  src,
  alt,
  subtitle,
  priority = false,
  variant = "hero",
}: PortraitCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 30,
  });
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, 70]), {
    stiffness: 150,
    damping: 25,
  });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, 70]), {
    stiffness: 150,
    damping: 25,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  const aspectClass = variant === "hero" ? "aspect-[3/4]" : "aspect-[4/5]";
  const hasPhoto = Boolean(src);

  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient orbs behind the card */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-gold/10 blur-[80px]" />
        <div className="absolute -left-8 top-1/4 h-48 w-48 rounded-full bg-gold/8 blur-[60px]" />
        <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-white/4 blur-[50px]" />
      </div>

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-6 -right-6 z-10 h-16 w-16 rounded-2xl border border-gold/20 bg-gold/5 backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -bottom-4 -left-6 z-10 h-12 w-12 rounded-xl border border-white/10 bg-white/3 backdrop-blur-sm"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute top-1/3 -right-3 z-10 h-3 w-3 rounded-full bg-gold"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute bottom-1/3 -left-2 z-10 h-2 w-2 rounded-full bg-gold/70"
      />

      {/* Main card */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative ${aspectClass} w-full max-w-sm cursor-default`}
      >
        {/* Outer glow ring */}
        <motion.div
          className="pointer-events-none absolute -inset-[1px] rounded-3xl"
          animate={
            hovered
              ? { boxShadow: "0 0 60px 2px rgba(201,168,76,0.35), 0 0 120px 20px rgba(201,168,76,0.12)" }
              : { boxShadow: "0 0 30px 1px rgba(201,168,76,0.15), 0 0 60px 8px rgba(201,168,76,0.06)" }
          }
          transition={{ duration: 0.4 }}
        />

        {/* Glass frame */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
          {/* Photo / placeholder */}
          {hasPhoto ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/10 via-charcoal to-black">
              <User className="h-28 w-28 text-gold/30" />
            </div>
          )}

          {/* Dynamic light shimmer following mouse */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,0.18) 0%, transparent 60%)`
              ),
            }}
          />

          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Name badge */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-xl"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <div>
                  <p className="font-serif text-sm font-semibold text-white">{alt}</p>
                  <p className="text-[11px] text-silver/80">{subtitle}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
