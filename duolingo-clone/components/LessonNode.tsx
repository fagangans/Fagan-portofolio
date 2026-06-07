"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactElement } from "react";

type NodeType = "book" | "headphone" | "translate" | "dumbbell" | "video" | "speaking" | "star" | "chest";
type NodeState = "completed" | "active" | "locked";

interface LessonNodeProps {
  id: number;
  type: NodeType;
  state: NodeState;
  size?: "sm" | "md" | "lg";
}

const nodeIcons: Record<NodeType, ReactElement> = {
  book: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="4" width="14" height="18" rx="2" fill="white" opacity="0.9"/>
      <rect x="5" y="4" width="3" height="18" rx="1" fill="white" opacity="0.5"/>
      <rect x="9" y="8" width="7" height="1.5" rx="0.75" fill="#FF4FB3"/>
      <rect x="9" y="11" width="5" height="1.5" rx="0.75" fill="#FF4FB3"/>
    </svg>
  ),
  headphone: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 15V13C7 9.13 10.13 6 14 6C17.87 6 21 9.13 21 13V15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="5" y="14" width="4" height="6" rx="2" fill="white"/>
      <rect x="19" y="14" width="4" height="6" rx="2" fill="white"/>
    </svg>
  ),
  translate: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 10L14 16L20 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 18L14 12L20 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    </svg>
  ),
  dumbbell: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="12" y="12" width="4" height="4" rx="1" fill="white"/>
      <rect x="5" y="10" width="4" height="8" rx="2" fill="white" opacity="0.8"/>
      <rect x="19" y="10" width="4" height="8" rx="2" fill="white" opacity="0.8"/>
      <rect x="3" y="12" width="3" height="4" rx="1.5" fill="white" opacity="0.6"/>
      <rect x="22" y="12" width="3" height="4" rx="1.5" fill="white" opacity="0.6"/>
      <rect x="9" y="13" width="10" height="2" rx="1" fill="white" opacity="0.7"/>
    </svg>
  ),
  video: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="8" width="14" height="12" rx="2.5" fill="white" opacity="0.9"/>
      <path d="M18 12L24 9V19L18 16V12Z" fill="white" opacity="0.8"/>
    </svg>
  ),
  speaking: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="10" y="4" width="8" height="12" rx="4" fill="white" opacity="0.9"/>
      <path d="M7 14C7 17.87 10.13 21 14 21C17.87 21 21 17.87 21 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="14" y1="21" x2="14" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="10" y1="24" x2="18" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  star: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4L16.5 10.5H23.5L18 14.5L20 21L14 17.5L8 21L10 14.5L4.5 10.5H11.5L14 4Z" fill="white"/>
    </svg>
  ),
  chest: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="12" width="20" height="12" rx="2" fill="white" opacity="0.9"/>
      <rect x="4" y="8" width="20" height="6" rx="2" fill="white" opacity="0.7"/>
      <rect x="11" y="13" width="6" height="4" rx="2" fill="#FF9600"/>
    </svg>
  ),
};

const lockedIcons: Record<NodeType, ReactElement> = {
  book: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="4" width="14" height="18" rx="2" fill="#AFAFAF" opacity="0.7"/>
      <rect x="5" y="4" width="3" height="18" rx="1" fill="#AFAFAF" opacity="0.4"/>
    </svg>
  ),
  headphone: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 15V13C7 9.13 10.13 6 14 6C17.87 6 21 9.13 21 13V15" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="5" y="14" width="4" height="6" rx="2" fill="#AFAFAF"/>
      <rect x="19" y="14" width="4" height="6" rx="2" fill="#AFAFAF"/>
    </svg>
  ),
  translate: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 10L14 16L20 10" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 18L14 12L20 18" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  dumbbell: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="10" width="4" height="8" rx="2" fill="#AFAFAF"/>
      <rect x="19" y="10" width="4" height="8" rx="2" fill="#AFAFAF"/>
      <rect x="3" y="12" width="3" height="4" rx="1.5" fill="#AFAFAF" opacity="0.6"/>
      <rect x="22" y="12" width="3" height="4" rx="1.5" fill="#AFAFAF" opacity="0.6"/>
      <rect x="9" y="13" width="10" height="2" rx="1" fill="#AFAFAF"/>
    </svg>
  ),
  video: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="8" width="14" height="12" rx="2.5" fill="#AFAFAF"/>
      <path d="M18 12L24 9V19L18 16V12Z" fill="#AFAFAF" opacity="0.7"/>
    </svg>
  ),
  speaking: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="10" y="4" width="8" height="12" rx="4" fill="#AFAFAF"/>
      <path d="M7 14C7 17.87 10.13 21 14 21C17.87 21 21 17.87 21 14" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="14" y1="21" x2="14" y2="24" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  star: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4L16.5 10.5H23.5L18 14.5L20 21L14 17.5L8 21L10 14.5L4.5 10.5H11.5L14 4Z" fill="#AFAFAF"/>
    </svg>
  ),
  chest: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="12" width="20" height="12" rx="2" fill="#AFAFAF"/>
      <rect x="4" y="8" width="20" height="6" rx="2" fill="#AFAFAF" opacity="0.7"/>
    </svg>
  ),
};

const activeAnim = {
  y: [0, -8, 0] as number[],
};

export default function LessonNode({ id, type, state, size = "md" }: LessonNodeProps) {
  const sizeMap = { sm: 56, md: 66, lg: 74 };
  const dim = state === "active" ? sizeMap["lg"] : sizeMap[size];

  const getBg = () => {
    if (state === "locked") return "#E5E5E5";
    return "#FF4FB3";
  };

  const getShadow = () => {
    if (state === "active") return "0 0 0 5px white, 0 0 0 9px #FF4FB3, 0 6px 0 #CC0093";
    if (state === "locked") return "0 5px 0 #B5B5B5";
    return "0 5px 0 #CC0093";
  };

  const icon = state === "locked" ? lockedIcons[type] : nodeIcons[type];

  const inner = (
    <motion.div
      className="relative flex items-center justify-center rounded-full select-none cursor-pointer"
      style={{
        width: dim,
        height: dim,
        background: getBg(),
        boxShadow: getShadow(),
      }}
      animate={state === "active" ? activeAnim : {}}
      transition={state === "active" ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" } : {}}
      whileHover={{ scale: state !== "locked" ? 1.08 : 1 }}
      whileTap={state !== "locked" ? { scale: 0.93, y: 4 } : {}}
    >
      {icon}
    </motion.div>
  );

  if (state === "locked") return inner;
  return <Link href={`/lesson/${id}`}>{inner}</Link>;
}
