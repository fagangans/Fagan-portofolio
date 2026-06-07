"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const tabs = [
  {
    href: "/",
    label: "Beranda",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z"
          fill={active ? "#1CB0F6" : "#AFAFAF"}
        />
      </svg>
    ),
  },
  {
    href: "/missions",
    label: "Misi",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.4 8.5H21L15.7 12.5L17.8 19L12 15.3L6.2 19L8.3 12.5L3 8.5H9.6L12 2Z" fill={active ? "#1CB0F6" : "#AFAFAF"} />
      </svg>
    ),
  },
  {
    href: "/subscription",
    label: "Super",
    icon: (active: boolean) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="14" fill={active ? "#FF9600" : "#AFAFAF"} />
        <text x="14" y="19" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">S</text>
      </svg>
    ),
  },
  {
    href: "/practice",
    label: "Latihan",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill={active ? "#FF4B4B" : "#AFAFAF"} />
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "Profil",
    icon: (active: boolean) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <ellipse cx="13" cy="9" rx="5" ry="5" fill={active ? "#1CB0F6" : "#AFAFAF"} />
        <path d="M3 22C3 17.58 7.48 14 13 14C18.52 14 23 17.58 23 22" stroke={active ? "#1CB0F6" : "#AFAFAF"} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t border-gray-200 z-50" style={{ maxWidth: 390 }}>
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link key={tab.href} href={tab.href} className="flex flex-col items-center gap-0.5 flex-1">
              <motion.div
                className={`flex flex-col items-center gap-0.5 p-2 rounded-xl w-full ${isActive ? "bg-[#E8F8FF]" : ""}`}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: isActive ? 1.05 : 1 }}
                transition={{ duration: 0.15 }}
              >
                {tab.icon(isActive)}
                <span className={`text-[10px] font-semibold ${isActive ? "text-[#1CB0F6]" : "text-[#AFAFAF]"}`}>
                  {tab.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
