"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FolderKanban, BookOpen, ArrowRight, TrendingUp } from "lucide-react";

function useAdminFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    const token = sessionStorage.getItem("admin_token");
    if (!token) return;
    fetch(url, { headers: { "x-admin-token": token } })
      .then((r) => r.json())
      .then(setData)
      .catch(() => null);
  }, [url]);
  return data;
}

export default function AdminDashboard() {
  const projects = useAdminFetch<unknown[]>("/api/admin/projects");
  const posts = useAdminFetch<unknown[]>("/api/admin/blog");

  const cards = [
    {
      label: "Total Projects",
      value: projects?.length ?? "—",
      icon: FolderKanban,
      href: "/admin/projects",
      color: "from-amber-500/20 to-orange-600/20",
      border: "border-amber-500/30",
      text: "text-amber-400",
    },
    {
      label: "Blog Posts",
      value: posts?.length ?? "—",
      icon: BookOpen,
      href: "/admin/blog",
      color: "from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="font-playfair text-3xl text-white mb-1">Dashboard</h2>
        <p className="text-white/40 text-sm">Kelola konten portofolio Anda dari sini.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map(({ label, value, icon: Icon, href, color, border, text }) => (
          <Link
            key={href}
            href={href}
            className={`group relative bg-gradient-to-br ${color} border ${border} rounded-2xl p-6 hover:scale-[1.02] transition-transform`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-white/5 border ${border}`}>
                <Icon size={22} className={text} />
              </div>
              <ArrowRight size={18} className="text-white/20 group-hover:text-white/60 transition-colors mt-1" />
            </div>
            <p className={`text-4xl font-bold ${text} mb-1`}>{value}</p>
            <p className="text-white/50 text-sm">{label}</p>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} className="text-[#C9A84C]" />
          <h3 className="text-white font-medium">Aksi Cepat</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/admin/projects"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
          >
            <FolderKanban size={18} className="text-amber-400" />
            <div>
              <p className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors">Tambah Project Baru</p>
              <p className="text-white/30 text-xs">Kelola portfolio projects</p>
            </div>
          </Link>
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
          >
            <BookOpen size={18} className="text-emerald-400" />
            <div>
              <p className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">Tulis Post Baru</p>
              <p className="text-white/30 text-xs">Kelola artikel blog</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
