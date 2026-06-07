"use client";
import { motion } from "framer-motion";
import PlanCard from "@/components/PlanCard";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

// Mascot peeking SVG — simplified Duo owl shape
function DuoMascot() {
  return (
    <svg width="120" height="110" viewBox="0 0 120 110" fill="none">
      {/* Body */}
      <ellipse cx="60" cy="75" rx="38" ry="35" fill="#58CC02"/>
      {/* Head */}
      <ellipse cx="60" cy="45" rx="32" ry="30" fill="#58CC02"/>
      {/* Belly */}
      <ellipse cx="60" cy="72" rx="22" ry="20" fill="#A0E070"/>
      {/* Eyes - white circles */}
      <ellipse cx="46" cy="38" rx="11" ry="12" fill="white"/>
      <ellipse cx="74" cy="38" rx="11" ry="12" fill="white"/>
      {/* Pupils */}
      <ellipse cx="47" cy="39" rx="7" ry="8" fill="#1A1A2E"/>
      <ellipse cx="75" cy="39" rx="7" ry="8" fill="#1A1A2E"/>
      {/* Eye shine */}
      <ellipse cx="50" cy="36" rx="2.5" ry="3" fill="white"/>
      <ellipse cx="78" cy="36" rx="2.5" ry="3" fill="white"/>
      {/* Brow lines */}
      <path d="M37 28 Q46 22 54 27" stroke="#45A800" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M66 27 Q74 22 83 28" stroke="#45A800" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Beak */}
      <path d="M54 50 L60 57 L66 50" fill="#FF9600" stroke="#E07800" strokeWidth="1"/>
      {/* Chest spots / sparkles */}
      <path d="M36 58 L38 54 L40 58 L44 58 L41 61 L42 65 L38 62 L34 65 L35 61 L32 58Z" fill="white" opacity="0.6"/>
      {/* Wings hinted */}
      <ellipse cx="24" cy="70" rx="12" ry="8" fill="#45A800" transform="rotate(-20 24 70)"/>
      <ellipse cx="96" cy="70" rx="12" ry="8" fill="#45A800" transform="rotate(20 96 70)"/>
      {/* Feet peeking */}
      <ellipse cx="48" cy="108" rx="10" ry="5" fill="#FF9600"/>
      <ellipse cx="72" cy="108" rx="10" ry="5" fill="#FF9600"/>
    </svg>
  );
}

// Battery/infinity illustration for Super plan
function BatteryInfinity() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
      <rect x="8" y="18" width="50" height="30" rx="8" fill="#1CB0F6"/>
      <rect x="58" y="26" width="6" height="14" rx="3" fill="#0A95DB"/>
      <rect x="12" y="22" width="42" height="22" rx="5" fill="#0A95DB"/>
      {/* Lightning bolt */}
      <path d="M38 28 L32 37 L36 37 L30 46 L42 35 L37 35Z" fill="white"/>
      {/* Infinity symbol hint */}
      <text x="35" y="39" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">∞</text>
      {/* Sparkles */}
      <path d="M4 8 L5 4 L6 8 L10 9 L6 10 L5 14 L4 10 L0 9Z" fill="#FFD700"/>
      <path d="M62 12 L63 9 L64 12 L67 13 L64 14 L63 17 L62 14 L59 13Z" fill="#58CC02"/>
    </svg>
  );
}

// Family illustration for Keluarga Super
function FamilyIllustration() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
      {/* Parent figure */}
      <ellipse cx="28" cy="20" rx="10" ry="11" fill="#1CB0F6"/>
      <rect x="18" y="30" width="20" height="22" rx="5" fill="#1CB0F6"/>
      {/* Child figure */}
      <ellipse cx="50" cy="26" rx="8" ry="9" fill="#FF9600"/>
      <rect x="42" y="34" width="16" height="18" rx="4" fill="#FF9600"/>
      {/* Parent eye */}
      <ellipse cx="24" cy="18" rx="2.5" ry="3" fill="white"/>
      <ellipse cx="32" cy="18" rx="2.5" ry="3" fill="white"/>
      {/* Child eye */}
      <ellipse cx="46" cy="25" rx="2" ry="2.5" fill="white"/>
      <ellipse cx="54" cy="25" rx="2" ry="2.5" fill="white"/>
      {/* Stars */}
      <path d="M8 10 L9 7 L10 10 L13 11 L10 12 L9 15 L8 12 L5 11Z" fill="#FFD700"/>
      <path d="M56 8 L57 5 L58 8 L61 9 L58 10 L57 13 L56 10 L53 9Z" fill="#FF4FB3"/>
    </svg>
  );
}

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#FFFFFF" }}>
      {/* iOS-style nav bar */}
      <div className="flex items-center px-4 pt-12 pb-3 bg-white">
        <Link href="/">
          <motion.div
            className="flex items-center gap-1 text-[#1CB0F6]"
            whileTap={{ scale: 0.9 }}
          >
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
              <path d="M9 1L1 8.5L9 16" stroke="#1CB0F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-semibold text-[#1CB0F6]">App Store</span>
          </motion.div>
        </Link>
      </div>

      {/* Page title + mascot */}
      <div className="px-4 pb-2 bg-white">
        <h1 className="font-black text-2xl text-gray-900">Langganan</h1>
      </div>

      {/* Mascot peeking from top */}
      <div className="flex justify-center -mb-6 relative z-10">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <DuoMascot />
        </motion.div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 pt-2">
        <PlanCard
          name="Super"
          tagline="Fokus tanpa gangguan"
          features={[
            "Energi tak terbatas",
            "Bebas iklan",
          ]}
          ctaText="COBA SEHARGA RP0"
          popular={true}
          illustration={<BatteryInfinity />}
        />

        <PlanCard
          name="Keluarga Super"
          tagline="Bagi-bagi lebih hemat"
          features={[
            "Untukmu dan 5 lainnya",
            "Hanya tambah Rp9.917 per bulan",
          ]}
          ctaText="COBA SEHARGA RP0"
          illustration={<FamilyIllustration />}
        />
      </div>

      <BottomNav />
    </div>
  );
}
