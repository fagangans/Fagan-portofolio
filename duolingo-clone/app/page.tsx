"use client";
import StatusBar from "@/components/StatusBar";
import XPBanner from "@/components/XPBanner";
import LessonPath from "@/components/LessonPath";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#FFFFFF" }}>
      <StatusBar />
      <div className="flex-1 overflow-y-auto pb-20">
        <XPBanner section={2} unit={2} title="Memberikan tur rumah" />
        <LessonPath />
      </div>
      <BottomNav />
    </div>
  );
}
