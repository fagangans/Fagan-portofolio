"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ProfileMenuItemProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export default function ProfileMenuItem({ icon, label, onClick }: ProfileMenuItemProps) {
  return (
    <motion.div
      className="flex items-center gap-4 px-4 py-3.5 bg-white cursor-pointer border-b border-gray-100"
      whileTap={{ backgroundColor: "#f9f9f9" }}
      onClick={onClick}
    >
      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <p className="font-bold text-[16px] text-gray-800 flex-1">{label}</p>
    </motion.div>
  );
}
