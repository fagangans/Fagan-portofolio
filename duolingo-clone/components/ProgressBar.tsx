"use client";
import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  color?: string;
  height?: number;
  className?: string;
}

export default function ProgressBar({ value, max = 100, color = "#58CC02", height = 12, className = "" }: ProgressBarProps) {
  const pct = Math.min(100, (value / max) * 100);

  return (
    <div
      className={`rounded-full bg-gray-200 overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
