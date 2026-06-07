"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type NodeType = "book" | "headphone" | "translate" | "dumbbell" | "video" | "speaking" | "star" | "chest";
type NodeState = "completed" | "active" | "locked";

interface LessonNodeProps {
  id: number;
  type: NodeType;
  state: NodeState;
  size?: "sm" | "md" | "lg";
}

const nodeIcons: Record<NodeType, string> = {
  book: "📖",
  headphone: "🎧",
  translate: "🔄",
  dumbbell: "🏋️",
  video: "🎬",
  speaking: "🎤",
  star: "⭐",
  chest: "🪙",
};

const colors: Record<NodeState, { bg: string; shadow: string; border: string }> = {
  completed: { bg: "#FF4FB3", shadow: "#CC0093", border: "#FF4FB3" },
  active: { bg: "#FF4FB3", shadow: "#CC0093", border: "#FFFFFF" },
  locked: { bg: "#E5E5E5", shadow: "#C0C0C0", border: "#E5E5E5" },
};

export default function LessonNode({ id, type, state, size = "md" }: LessonNodeProps) {
  const sizeMap = { sm: 56, md: 64, lg: 72 };
  const dim = sizeMap[size];
  const color = colors[state];
  const icon = nodeIcons[type];

  const node = (
    <motion.div
      className={`relative flex items-center justify-center rounded-full select-none cursor-pointer ${state === "active" ? "pulse-ring bounce-node" : ""}`}
      style={{
        width: dim,
        height: dim,
        background: color.bg,
        boxShadow: `0 6px 0 ${color.shadow}`,
        border: `3px solid ${state === "active" ? "#FFFFFF" : "transparent"}`,
        fontSize: dim * 0.4,
      }}
      whileHover={{ scale: state !== "locked" ? 1.1 : 1 }}
      whileTap={{ scale: state !== "locked" ? 0.95 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span style={{ filter: state === "locked" ? "grayscale(1) opacity(0.5)" : "none" }}>
        {icon}
      </span>
    </motion.div>
  );

  if (state === "locked") return node;

  return <Link href={`/lesson/${id}`}>{node}</Link>;
}
