"use client";
import BottomNav from "@/components/BottomNav";
export default function LeaderboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      <div className="px-4 pt-12 pb-6" style={{ background: "#1CB0F6" }}>
        <h1 className="text-white font-black text-2xl">Liga</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-400 font-bold">Segera hadir!</p>
      </div>
      <BottomNav />
    </div>
  );
}
