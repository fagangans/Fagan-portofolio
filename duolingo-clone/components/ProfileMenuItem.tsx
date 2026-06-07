"use client";
import { motion } from "framer-motion";

interface ProfileMenuItemProps {
  icon: string;
  label: string;
  description?: string;
  onClick?: () => void;
}

export default function ProfileMenuItem({ icon, label, description, onClick }: ProfileMenuItemProps) {
  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-3 bg-white cursor-pointer border-b border-gray-100"
      whileTap={{ backgroundColor: "#f5f5f5" }}
      onClick={onClick}
    >
      <span className="text-2xl w-8 text-center">{icon}</span>
      <div className="flex-1">
        <p className="font-semibold text-sm text-gray-800">{label}</p>
        {description && <p className="text-xs text-gray-400 mt-0.5">{description}</p>}
      </div>
      <span className="text-gray-300 text-lg">›</span>
    </motion.div>
  );
}
