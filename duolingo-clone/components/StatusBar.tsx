"use client";
import { useGameStore } from "@/store/gameStore";

export default function StatusBar() {
  const { xp, streak, gems, hearts } = useGameStore();

  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-white" style={{ borderBottom: "1.5px solid #f0f0f0" }}>
      {/* Flag + XP */}
      <div className="flex items-center gap-1.5">
        <span className="text-[22px] leading-none">🇺🇸</span>
        <span className="text-sm font-extrabold text-[#1CB0F6]">{xp}</span>
      </div>
      {/* Streak */}
      <div className="flex items-center gap-1">
        <span className="text-[22px] leading-none">🔥</span>
        <span className="text-sm font-extrabold text-[#FF9600]">{streak}</span>
      </div>
      {/* Gems */}
      <div className="flex items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="4" y="7" width="14" height="12" rx="2" fill="#1CB0F6"/>
          <polygon points="11,2 18,7 4,7" fill="#0A95DB"/>
          <rect x="7" y="10" width="8" height="5" rx="1" fill="#5DD4F8" opacity="0.5"/>
        </svg>
        <span className="text-sm font-extrabold text-[#1CB0F6]">{gems}</span>
      </div>
      {/* Hearts/Energy */}
      <div className="flex items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 8.5C4 6.5 5.5 5 7.5 5C9 5 10.2 5.8 11 7C11.8 5.8 13 5 14.5 5C16.5 5 18 6.5 18 8.5C18 11.5 11 17 11 17C11 17 4 11.5 4 8.5Z" fill="#FF4FB3"/>
        </svg>
        <span className="text-sm font-extrabold text-[#FF4FB3]">{hearts}</span>
      </div>
    </div>
  );
}
