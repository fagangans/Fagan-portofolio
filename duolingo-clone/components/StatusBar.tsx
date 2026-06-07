"use client";
import { useGameStore } from "@/store/gameStore";

export default function StatusBar() {
  const { xp, streak, gems, hearts } = useGameStore();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      {/* Flag + XP */}
      <div className="flex items-center gap-1">
        <span className="text-xl">🇺🇸</span>
        <span className="text-sm font-bold text-[#1CB0F6]">{xp}</span>
      </div>
      {/* Streak */}
      <div className="flex items-center gap-1">
        <span className="text-xl">🔥</span>
        <span className="text-sm font-bold text-[#FF9600]">{streak}</span>
      </div>
      {/* Gems */}
      <div className="flex items-center gap-1">
        <span className="text-xl">💎</span>
        <span className="text-sm font-bold text-[#1CB0F6]">{gems}</span>
      </div>
      {/* Hearts */}
      <div className="flex items-center gap-1">
        <span className="text-xl">❤️</span>
        <span className="text-sm font-bold text-[#FF4B4B]">{hearts}</span>
      </div>
    </div>
  );
}
