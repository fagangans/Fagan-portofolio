"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const tabs = [
  {
    href: "/",
    label: "Beranda",
    activeColor: "#FF4B4B",
    icon: (active: boolean) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L3 11V22H10V16H16V22H23V11L13 3Z" fill={active ? "#FF4B4B" : "#AFAFAF"}/>
        <rect x="10" y="16" width="6" height="6" rx="0" fill={active ? "#CC3333" : "#999"} opacity="0.6"/>
      </svg>
    ),
  },
  {
    href: "/missions",
    label: "Misi",
    activeColor: "#FF9600",
    icon: (active: boolean) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="13" width="18" height="11" rx="2.5" fill={active ? "#FF9600" : "#AFAFAF"}/>
        <rect x="4" y="10" width="18" height="5" rx="1" fill={active ? "#CC7800" : "#999"}/>
        <rect x="7" y="8" width="4" height="5" rx="1" fill={active ? "#FF9600" : "#AFAFAF"}/>
        <rect x="15" y="8" width="4" height="5" rx="1" fill={active ? "#FF9600" : "#AFAFAF"}/>
        <rect x="10" y="16" width="6" height="4" rx="1.5" fill={active ? "#FFB840" : "#CCC"}/>
      </svg>
    ),
  },
  {
    href: "/leaderboard",
    label: "Liga",
    activeColor: "#1CB0F6",
    icon: (active: boolean) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3C10 3 7 5 7 8C7 10 8 11.5 9.5 12.5C8 13.5 7 15.5 7 18H19C19 15.5 18 13.5 16.5 12.5C18 11.5 19 10 19 8C19 5 16 3 13 3Z" fill={active ? "#1CB0F6" : "#AFAFAF"}/>
        <rect x="10" y="18" width="6" height="4" rx="1" fill={active ? "#0A95DB" : "#999"}/>
        <rect x="7" y="22" width="12" height="2" rx="1" fill={active ? "#1CB0F6" : "#AFAFAF"}/>
      </svg>
    ),
  },
  {
    href: "/social",
    label: "Sosial",
    activeColor: "#FF4FB3",
    icon: (active: boolean) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 22.5L11.4 21.1C6.3 16.6 3 13.6 3 9.8C3 6.8 5.4 4.5 8.5 4.5C10.2 4.5 11.8 5.3 13 6.5C14.2 5.3 15.8 4.5 17.5 4.5C20.6 4.5 23 6.8 23 9.8C23 13.6 19.7 16.6 14.6 21.1L13 22.5Z" fill={active ? "#FF4FB3" : "#AFAFAF"}/>
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "Profil",
    activeColor: "#58CC02",
    icon: (active: boolean) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="10" rx="5" ry="5.5" fill={active ? "#58CC02" : "#AFAFAF"}/>
        <path d="M14 17C9 17 5 19.5 5 22.5H23C23 19.5 19 17 14 17Z" fill={active ? "#45A800" : "#999"}/>
        <ellipse cx="20" cy="7" rx="2" ry="2" fill={active ? "#FF4FB3" : "#CCC"}/>
        <ellipse cx="8" cy="7" rx="2" ry="2" fill={active ? "#FF9600" : "#CCC"}/>
      </svg>
    ),
  },
  {
    href: "/subscription",
    label: "Mais",
    activeColor: "#A56BFF",
    icon: (active: boolean) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="5" cy="13" r="2.5" fill={active ? "#A56BFF" : "#AFAFAF"}/>
        <circle cx="13" cy="13" r="2.5" fill={active ? "#A56BFF" : "#AFAFAF"}/>
        <circle cx="21" cy="13" r="2.5" fill={active ? "#A56BFF" : "#AFAFAF"}/>
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white z-50"
      style={{ maxWidth: 390, boxShadow: "0 -2px 12px rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center justify-around h-[58px] px-1">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link key={tab.href} href={tab.href} className="flex flex-col items-center flex-1">
              <motion.div
                className="flex flex-col items-center gap-0.5 py-1.5 px-2 rounded-xl w-full"
                style={{ background: isActive ? "#E8F9FF" : "transparent" }}
                whileTap={{ scale: 0.88 }}
                transition={{ duration: 0.12 }}
              >
                {tab.icon(isActive)}
                <span
                  className="text-[9px] font-bold"
                  style={{ color: isActive ? tab.activeColor : "#AFAFAF" }}
                >
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
