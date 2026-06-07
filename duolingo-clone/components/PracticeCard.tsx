"use client";
import { motion } from "framer-motion";

interface PracticeCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  onClick?: () => void;
}

export default function PracticeCard({ icon, title, subtitle, badge, badgeColor = "#1CB0F6", onClick }: PracticeCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-3 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <div className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm text-gray-800">{title}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {badge && (
        <div
          className="rounded-full px-2 py-0.5 text-white text-xs font-bold"
          style={{ background: badgeColor }}
        >
          {badge}
        </div>
      )}
    </motion.div>
  );
}
