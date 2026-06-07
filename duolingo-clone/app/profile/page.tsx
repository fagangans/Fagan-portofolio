"use client";
import { motion } from "framer-motion";
import ProfileMenuItem from "@/components/ProfileMenuItem";
import BottomNav from "@/components/BottomNav";
import { useGameStore } from "@/store/gameStore";

export default function ProfilePage() {
  const { username } = useGameStore();

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-12 pb-4 bg-white">
        <span className="text-xl font-black text-gray-800">{username}</span>
        <motion.button
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="3" stroke="#3C3C3C" strokeWidth="1.5"/>
            <path d="M9 1V3M9 15V17M1 9H3M15 9H17M3.22 3.22L4.64 4.64M13.36 13.36L14.78 14.78M14.78 3.22L13.36 4.64M4.64 13.36L3.22 14.78" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.button>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Avatar + stats section */}
        <div className="bg-white pb-5">
          {/* Blue-gray gradient background for avatar */}
          <div
            className="flex justify-center pt-4 pb-6"
            style={{ background: "linear-gradient(180deg, #C5D8E8 0%, #B0C8DC 100%)" }}
          >
            <div
              className="w-[110px] h-[110px] rounded-full flex items-center justify-center relative"
              style={{
                border: "3px dashed #5BAFD6",
                background: "rgba(255,255,255,0.2)",
              }}
            >
              {/* Head silhouette SVG */}
              <svg width="65" height="72" viewBox="0 0 65 72" fill="none">
                <ellipse cx="32.5" cy="24" rx="16" ry="18" fill="#5BAFD6" opacity="0.7"/>
                <path d="M6 72C6 54 16 46 32.5 46C49 46 59 54 59 72" fill="#5BAFD6" opacity="0.7"/>
              </svg>
              {/* Plus icon */}
              <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#1CB0F6] flex items-center justify-center border-2 border-white">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2V10M2 6H10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Username + handle */}
          <div className="text-center px-4 pt-3">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
              @{username.toUpperCase()}972053 · BERGABUNG SEJAK 2025
            </p>
          </div>

          {/* Stats row */}
          <div className="flex mt-3 mx-4 border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex-1 flex flex-col items-center py-3 border-r border-gray-200">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Kursus</p>
            </div>
            <div className="flex-1 flex flex-col items-center py-3 border-r border-gray-200">
              <p className="font-black text-lg text-gray-800">0</p>
              <p className="text-xs text-gray-500 mt-0.5">Mengikuti</p>
            </div>
            <div className="flex-1 flex flex-col items-center py-3">
              <p className="font-black text-lg text-gray-800">2</p>
              <p className="text-xs text-gray-500 mt-0.5">Pengikut</p>
            </div>
          </div>

          {/* Add friend + QR */}
          <div className="flex gap-2 mt-3 mx-4">
            <motion.button
              className="flex-1 py-3 rounded-full font-black text-sm uppercase border-2"
              style={{ borderColor: "#E5E5E5", color: "#555555" }}
              whileTap={{ scale: 0.97 }}
            >
              + TAMBAHKAN TEMAN
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="#3C3C3C" strokeWidth="1.5"/>
                <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="#3C3C3C" strokeWidth="1.5"/>
                <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="#3C3C3C" strokeWidth="1.5"/>
                <rect x="4" y="4" width="4" height="4" rx="0.5" fill="#3C3C3C"/>
                <rect x="14" y="4" width="4" height="4" rx="0.5" fill="#3C3C3C"/>
                <rect x="4" y="14" width="4" height="4" rx="0.5" fill="#3C3C3C"/>
                <rect x="12" y="12" width="3" height="3" fill="#3C3C3C"/>
                <rect x="17" y="12" width="3" height="3" fill="#3C3C3C"/>
                <rect x="12" y="17" width="3" height="3" fill="#3C3C3C"/>
                <rect x="17" y="17" width="3" height="3" fill="#3C3C3C"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Menu items */}
        <div className="mt-2">
          <ProfileMenuItem
            icon={
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#E8F9FF" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <ellipse cx="11" cy="8" rx="5" ry="5.5" fill="#1CB0F6"/>
                  <path d="M3 20C3 16 6.5 13 11 13C15.5 13 19 16 19 20" stroke="#1CB0F6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            }
            label="Profil"
          />
          <ProfileMenuItem
            icon={
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#FFF0E8" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <ellipse cx="11" cy="13" rx="8" ry="6" fill="#FF6B35"/>
                  <ellipse cx="11" cy="11" rx="6" ry="5" fill="#FF8C55"/>
                  {/* Teeth */}
                  <rect x="7" y="13" width="3" height="3" rx="0.5" fill="white"/>
                  <rect x="11" y="13" width="3" height="3" rx="0.5" fill="white"/>
                  {/* Tongue */}
                  <ellipse cx="11" cy="16" rx="3" ry="2" fill="#FF4444"/>
                </svg>
              </div>
            }
            label="Bunyi"
          />
          <ProfileMenuItem
            icon={
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#F0E8FF" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="5" width="13" height="11" rx="2.5" fill="#9B59B6"/>
                  <path d="M15 9L20 6V16L15 13V9Z" fill="#7B3FE4"/>
                </svg>
              </div>
            }
            label="Panggilan Video"
          />
          <ProfileMenuItem
            icon={
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#E8F5FF" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="9" width="4" height="8" rx="2" fill="#1CB0F6"/>
                  <rect x="16" y="9" width="4" height="8" rx="2" fill="#1CB0F6"/>
                  <rect x="1" y="11" width="3" height="4" rx="1.5" fill="#0A95DB" opacity="0.6"/>
                  <rect x="18" y="11" width="3" height="4" rx="1.5" fill="#0A95DB" opacity="0.6"/>
                  <rect x="6" y="12" width="10" height="2" rx="1" fill="#1CB0F6"/>
                </svg>
              </div>
            }
            label="Latihan"
          />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
