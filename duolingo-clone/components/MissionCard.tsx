"use client";
import { motion } from "framer-motion";

interface MissionCardProps {
  title: string;
  current: number;
  total: number;
  color?: string;
}

export default function MissionCard({ title, current, total, color = "#9B59B6" }: MissionCardProps) {
  const pct = Math.min(100, (current / total) * 100);

  return (
    <motion.div
      className="bg-white rounded-2xl px-4 py-4 mx-4 mb-3"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="font-black text-[16px] text-gray-800 mb-2.5">{title}</p>
          {/* Progress bar with fraction label inside */}
          <div className="relative h-[22px] bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: color }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
              {current} / {total}
            </span>
          </div>
        </div>
        {/* Reward chest on right */}
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <rect x="4" y="20" width="36" height="20" rx="4" fill="#B8860B"/>
            <rect x="4" y="14" width="36" height="10" rx="4" fill="#DAA520"/>
            <rect x="4" y="20" width="36" height="4" fill="#8B6914"/>
            <rect x="17" y="22" width="10" height="8" rx="3" fill="#8B6914"/>
            <rect x="19" y="24" width="6" height="4" rx="2" fill="#6B4F10"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
