"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PracticeCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  iconBg?: string;
  onClick?: () => void;
}

export default function PracticeCard({ icon, title, subtitle, badge, badgeColor = "#1CB0F6", iconBg = "#F0F0F0", onClick }: PracticeCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl px-4 py-4 flex items-center justify-between cursor-pointer relative min-h-[64px]"
      style={{ boxShadow: "0 2px 0 #E0E0E0", border: "1.5px solid #F0F0F0" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <div className="flex-1 pr-3">
        <p className="font-extrabold text-[15px] text-gray-800">{title}</p>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>
      <div className="relative">
        {badge && (
          <div
            className="absolute -top-2.5 -left-2 rounded-full px-2 py-0.5 text-white text-[10px] font-black z-10"
            style={{ background: badgeColor }}
          >
            {badge}
          </div>
        )}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: iconBg }}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
