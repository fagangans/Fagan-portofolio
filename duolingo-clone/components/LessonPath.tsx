"use client";
import { useGameStore } from "@/store/gameStore";
import LessonNode from "./LessonNode";

type NodeType = "book" | "headphone" | "translate" | "dumbbell" | "video" | "speaking";

const PATH_NODES: Array<{ type: NodeType; position: "left" | "center" | "right" }> = [
  { type: "book", position: "center" },
  { type: "headphone", position: "right" },
  { type: "translate", position: "right" },
  { type: "book", position: "center" },
  { type: "speaking", position: "left" },
  { type: "headphone", position: "left" },
  { type: "dumbbell", position: "center" },
  { type: "video", position: "right" },
  { type: "book", position: "right" },
  { type: "translate", position: "center" },
  { type: "speaking", position: "left" },
  { type: "headphone", position: "left" },
  { type: "book", position: "center" },
  { type: "dumbbell", position: "right" },
  { type: "video", position: "right" },
  { type: "translate", position: "center" },
  { type: "speaking", position: "left" },
  { type: "book", position: "left" },
  { type: "headphone", position: "center" },
  { type: "dumbbell", position: "right" },
];

const positionStyles: Record<string, React.CSSProperties> = {
  left: { marginLeft: "20px", marginRight: "auto" },
  center: { margin: "0 auto" },
  right: { marginLeft: "auto", marginRight: "20px" },
};

export default function LessonPath() {
  const { completedLessons, activeLessonIndex } = useGameStore();

  return (
    <div className="px-4 pb-8 pt-4" style={{ width: "100%" }}>
      <div className="flex flex-col gap-3">
        {PATH_NODES.map((node, i) => {
          const state = completedLessons.includes(i)
            ? "completed"
            : i === activeLessonIndex
            ? "active"
            : "locked";

          // Insert star bonus every 4 nodes
          const showStars = i > 0 && i % 4 === 0;

          return (
            <div key={i}>
              {showStars && (
                <div className="flex justify-center gap-1 my-1">
                  <span className="text-yellow-400 text-lg">☆</span>
                  <span className="text-yellow-400 text-lg">☆</span>
                  <span className="text-yellow-400 text-lg">☆</span>
                </div>
              )}
              {/* Insert chest every 7 nodes */}
              {i > 0 && i % 7 === 0 && (
                <div className="flex justify-center my-3">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full text-3xl"
                      style={{ background: "#FFF3CC", boxShadow: "0 4px 0 #CC9900" }}
                    >
                      🪙
                    </div>
                    <span className="text-xs font-bold text-[#CC9900]">HADIAH</span>
                  </div>
                </div>
              )}
              <div style={{ display: "flex", width: "100%" }}>
                <div style={{ ...positionStyles[node.position] }}>
                  <LessonNode id={i} type={node.type} state={state} />
                </div>
              </div>
            </div>
          );
        })}

        {/* NPC Character at bottom */}
        <div className="flex flex-col items-center mt-6 gap-2">
          <div className="text-5xl">🦅</div>
          <div className="bg-white rounded-2xl px-4 py-2 shadow-md">
            <p className="text-xs font-bold text-gray-500">CATUR</p>
            <p className="text-sm font-semibold text-gray-700">Selamat belajar!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
