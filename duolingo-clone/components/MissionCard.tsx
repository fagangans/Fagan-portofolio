"use client";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

interface MissionCardProps {
  title: string;
  description: string;
  timer: string;
  current: number;
  total: number;
  reward: string;
  color?: string;
}

export default function MissionCard({ title, description, timer, current, total, reward, color = "#58CC02" }: MissionCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-4 shadow-md mx-4 mb-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{reward}</span>
            <div>
              <p className="font-bold text-sm text-gray-800">{title}</p>
              <p className="text-xs text-gray-500">{description}</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 rounded-full px-2 py-0.5 flex items-center gap-1 ml-2 flex-shrink-0">
          <span className="text-orange-500 text-xs">⏱</span>
          <span className="text-orange-600 text-xs font-bold">{timer}</span>
        </div>
      </div>
      <ProgressBar value={current} max={total} color={color} height={10} />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-400">{current}/{total} selesai</span>
      </div>
    </motion.div>
  );
}
