"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Save, Loader2 } from "lucide-react";
import type { BlogPost } from "@/types";

const CATEGORIES = ["Design", "AI", "Branding", "Development", "Business"];
const GRADIENTS = [
  "from-amber-500/40 to-orange-700/40",
  "from-emerald-500/40 to-teal-700/40",
  "from-rose-500/40 to-pink-700/40",
  "from-purple-500/40 to-indigo-700/40",
  "from-blue-500/40 to-cyan-700/40",
];

const EMPTY: Omit<BlogPost, "id"> = {
  title: "",
  excerpt: "",
  category: "Design",
  readTime: "5 min read",
  date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
  gradient: GRADIENTS[0],
};

function getToken() {
  return typeof window !== "undefined" ? sessionStorage.getItem("admin_token") ?? "" : "";
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [editTarget, setEditTarget] = useState<BlogPost | null>(null);
  const [form, setForm] = useState<Omit<BlogPost, "id">>(EMPTY);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blog", {
        headers: { "x-admin-token": getToken() },
      });
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  function openAdd() {
    setForm(EMPTY);
    setEditTarget(null);
    setModal("add");
  }

  function openEdit(p: BlogPost) {
    const { id, ...rest } = p;
    void id;
    setForm(rest);
    setEditTarget(p);
    setModal("edit");
  }

  function closeModal() {
    setModal(null);
    setEditTarget(null);
  }

  async function handleSave() {
    if (!form.title.trim() || !form.excerpt.trim()) return;
    setSaving(true);
    try {
      let res: Response;
      if (modal === "edit" && editTarget) {
        res = await fetch(`/api/admin/blog/${editTarget.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "x-admin-token": getToken() },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch("/api/admin/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-admin-token": getToken() },
          body: JSON.stringify(form),
        });
      }
      if (!res.ok) throw new Error("Gagal menyimpan");
      await fetchPosts();
      closeModal();
      showToast(modal === "edit" ? "Post berhasil diperbarui" : "Post berhasil ditambahkan");
    } catch {
      showToast("Terjadi kesalahan", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
        headers: { "x-admin-token": getToken() },
      });
      if (!res.ok) throw new Error();
      await fetchPosts();
      showToast("Post berhasil dihapus");
    } catch {
      showToast("Gagal menghapus", "error");
    } finally {
      setDeleteId(null);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-xl
          ${toast.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
          {toast.msg}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-playfair text-3xl text-white mb-1">Blog Posts</h2>
          <p className="text-white/40 text-sm">{posts.length} artikel terdaftar</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C9A84C] text-black text-sm font-semibold hover:bg-[#d4b05a] transition-colors"
        >
          <Plus size={16} /> Tulis Post
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 size={28} className="animate-spin text-white/30" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 text-white/30">Belum ada post</div>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <div
              key={p.id}
              className="flex items-start justify-between gap-4 bg-[#111] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#C9A84C]/15 text-[#C9A84C] text-xs">{p.category}</span>
                  <span className="text-white/30 text-xs">{p.date}</span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/30 text-xs">{p.readTime}</span>
                </div>
                <p className="text-white font-medium truncate">{p.title}</p>
                <p className="text-white/40 text-sm mt-0.5 line-clamp-2">{p.excerpt}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={() => openEdit(p)} className="p-2 text-white/30 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5">
                  <Pencil size={15} />
                </button>
                <button onClick={() => setDeleteId(p.id)} className="p-2 text-white/30 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Add/Edit */}
      {modal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] border border-white/15 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111] z-10">
              <h3 className="font-playfair text-xl text-white">
                {modal === "edit" ? "Edit Post" : "Post Baru"}
              </h3>
              <button onClick={closeModal} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <Field label="Judul *">
                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  className="input-admin"
                  placeholder="Judul artikel"
                />
              </Field>
              <Field label="Excerpt *">
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                  className="input-admin min-h-[80px] resize-none"
                  placeholder="Ringkasan singkat artikel..."
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Kategori">
                  <select
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                    className="input-admin"
                  >
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Estimasi Baca">
                  <input
                    value={form.readTime}
                    onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
                    className="input-admin"
                    placeholder="mis. 5 min read"
                  />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Tanggal">
                  <input
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="input-admin"
                    placeholder="mis. Jun 2026"
                  />
                </Field>
                <Field label="Gradient">
                  <select
                    value={form.gradient}
                    onChange={(e) => setForm((f) => ({ ...f, gradient: e.target.value }))}
                    className="input-admin"
                  >
                    {GRADIENTS.map((g) => <option key={g} value={g}>{g.split(" ")[0]}</option>)}
                  </select>
                </Field>
              </div>
            </div>
            <div className="p-6 border-t border-white/10 flex gap-3 justify-end sticky bottom-0 bg-[#111]">
              <button onClick={closeModal} className="px-4 py-2.5 rounded-xl border border-white/15 text-white/60 hover:text-white text-sm transition-colors">
                Batal
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.title.trim() || !form.excerpt.trim()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C9A84C] text-black text-sm font-semibold hover:bg-[#d4b05a] disabled:opacity-50 transition-colors"
              >
                {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete */}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] border border-white/15 rounded-2xl p-6 w-full max-w-sm text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
              <Trash2 size={20} className="text-red-400" />
            </div>
            <h3 className="text-white font-medium mb-1">Hapus Post?</h3>
            <p className="text-white/40 text-sm mb-6">Tindakan ini tidak dapat dibatalkan.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl border border-white/15 text-white/60 hover:text-white text-sm transition-colors">
                Batal
              </button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .input-admin {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.625rem 1rem;
          color: white;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-admin::placeholder { color: rgba(255,255,255,0.25); }
        .input-admin:focus { border-color: rgba(201,168,76,0.6); }
        .input-admin option { background: #111; }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-white/50 text-xs uppercase tracking-wider">{label}</label>
      {children}
    </div>
  );
}
