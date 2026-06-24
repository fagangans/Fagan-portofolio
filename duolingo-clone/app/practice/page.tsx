"use client";
import { motion } from "framer-motion";
import PracticeCard from "@/components/PracticeCard";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

// Duo bird character for header — simplified
function DuoOnTarget() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
      {/* Target/dartboard rings */}
      <circle cx="44" cy="52" r="30" fill="#FF4B4B" opacity="0.15"/>
      <circle cx="44" cy="52" r="22" fill="#FF4B4B" opacity="0.2"/>
      <circle cx="44" cy="52" r="14" fill="#FF4B4B" opacity="0.3"/>
      <circle cx="44" cy="52" r="6" fill="#FF4B4B" opacity="0.5"/>
      {/* Duo bird body */}
      <ellipse cx="44" cy="34" rx="16" ry="15" fill="#58CC02"/>
      <ellipse cx="44" cy="32" rx="10" ry="9" fill="#A0E070"/>
      {/* Eyes */}
      <ellipse cx="38" cy="28" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="50" cy="28" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="39" cy="29" rx="3" ry="3.5" fill="#1A1A2E"/>
      <ellipse cx="51" cy="29" rx="3" ry="3.5" fill="#1A1A2E"/>
      <ellipse cx="40" cy="27.5" rx="1.2" ry="1.5" fill="white"/>
      <ellipse cx="52" cy="27.5" rx="1.2" ry="1.5" fill="white"/>
      {/* Beak */}
      <path d="M41 35 L44 39 L47 35" fill="#FF9600"/>
      {/* Wings */}
      <ellipse cx="30" cy="36" rx="7" ry="5" fill="#45A800" transform="rotate(-20 30 36)"/>
      <ellipse cx="58" cy="36" rx="7" ry="5" fill="#45A800" transform="rotate(20 58 36)"/>
    </svg>
  );
}

// Video camera icon
function VideoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="2" y="7" width="15" height="12" rx="3" fill="#9B59B6"/>
      <path d="M17 11L24 8V18L17 15V11Z" fill="#7B3FE4"/>
    </svg>
  );
}

// Circular arrows (mistakes/review)
function RefreshIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M4 13C4 8.03 8.03 4 13 4C16.2 4 19 5.6 20.7 8" stroke="#FF9600" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M22 13C22 17.97 17.97 22 13 22C9.8 22 7 20.4 5.3 18" stroke="#FF9600" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 6L21 8L18 10" stroke="#FF9600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 16L5 18L8 20" stroke="#FF9600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Word/card icon
function WordIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="3" y="5" width="14" height="17" rx="2.5" fill="#1CB0F6" opacity="0.9"/>
      <rect x="7" y="9" width="8" height="2" rx="1" fill="white"/>
      <rect x="7" y="13" width="6" height="2" rx="1" fill="white"/>
      <rect x="9" y="3" width="14" height="17" rx="2.5" fill="#1CB0F6" opacity="0.5"/>
    </svg>
  );
}

// Speaker / listening icon
function SpeakerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M6 10H10L15 6V20L10 16H6V10Z" fill="#1CB0F6"/>
      <path d="M18 9C19.5 10.5 19.5 15.5 18 17" stroke="#1CB0F6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20.5 7C23 9.5 23 16.5 20.5 19" stroke="#1CB0F6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

// Microphone icon
function MicIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="9" y="3" width="8" height="12" rx="4" fill="#58CC02"/>
      <path d="M6 13C6 17.42 9.13 21 13 21C16.87 21 20 17.42 20 13" stroke="#58CC02" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="13" y1="21" x2="13" y2="24" stroke="#58CC02" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="9" y1="24" x2="17" y2="24" stroke="#58CC02" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

export default function PracticePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <div
        className="px-4 pt-10 pb-16 relative overflow-hidden"
        style={{ background: "#1CB0F6" }}
      >
        <h1 className="text-white font-black text-2xl">Latihan</h1>
        <div className="absolute right-0 bottom-0">
          <DuoOnTarget />
        </div>
      </div>

      {/* Floating CTA card over header */}
      <div className="px-4 -mt-10 mb-4 relative z-10">
        <div className="bg-white rounded-3xl p-4 shadow-lg">
          <p className="font-extrabold text-base text-gray-800 mb-3">Perkuat bagian-bagian lemahmu</p>
          <Link href="/lesson/practice">
            <motion.button
              className="w-full py-3 rounded-full text-white font-black text-sm uppercase"
              style={{ background: "#1CB0F6", boxShadow: "0 4px 0 #0A95DB" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97, y: 3 }}
            >
              MULAI +20 XP
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Percakapan Section */}
        <div className="px-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-black text-[#AFAFAF] text-[11px] uppercase tracking-widest">PERCAKAPAN</h2>
            <div className="bg-black rounded px-2 py-0.5">
              <span className="text-white font-black text-[11px]">MAX</span>
            </div>
          </div>
          <PracticeCard
            icon={<VideoIcon />}
            title="Panggilan Video"
            badge="BARU"
            badgeColor="#FF4B4B"
            iconBg="#E8D5FF"
          />
        </div>

        {/* Latihan Keahlian Section */}
        <div className="px-4 mb-3">
          <h2 className="font-black text-[#AFAFAF] text-[11px] uppercase tracking-widest mb-3">LATIHAN KEAHLIAN</h2>
          <div className="space-y-3">
            <PracticeCard
              icon={<RefreshIcon />}
              title="Kesalahan"
              badge="30+"
              badgeColor="#FF4B4B"
              iconBg="#FFF0E0"
            />
            <PracticeCard
              icon={<WordIcon />}
              title="Kata"
              badge="30+"
              badgeColor="#FF9600"
              iconBg="#E0F0FF"
            />
            <PracticeCard
              icon={<SpeakerIcon />}
              title="Mendengar"
              iconBg="#E0F4FF"
            />
            <PracticeCard
              icon={<MicIcon />}
              title="Berbicara"
              iconBg="#E8FFE8"
            />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
