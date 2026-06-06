"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  className,
}: Props) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-xs uppercase tracking-[0.4em] text-gold"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
      >
        <span className="text-gradient">{title} </span>
        {highlight && <span className="text-gold-gradient">{highlight}</span>}
      </motion.h2>
    </div>
  );
}
