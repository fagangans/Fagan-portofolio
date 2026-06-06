"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Save, Loader2, ExternalLink, Github } from "lucide-react";
import type { Project, ProjectCategory } from "@/types";

const CATEGORIES: ProjectCategory[] = ["Web Dev", "Design", "Branding", "AI"];
const GRADIENTS = [
  "from-amber-500/30 to-orange-700/30",
  "from-purple-500/30 to-indigo-700/30",
  "from-rose-500/30 to-pink-700/30",
  "from-emerald-500/30 to-teal-700/30",
  "from-blue-500/30 to-cyan-700/30",
  "from-yellow-500/30 to-amber-700/30",
];

const EMPTY: Omit<Project, "id"> = {
  title: "",
  description: "",
  longDescription: "",
  category: "Web Dev",
  tech: [],
  gradient: GRADIENTS[0],
  liveUrl: "#",
  githubUrl: "#",
};

function getToken() {
  return typeof window !== "undefined" ? sessionStorage.getItem("admin_token") ?? "" : "";
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [editTarget, setEditTarget] = useState<Project | null>(null);
  const [form, setForm] = useState<Omit<Project, "id">>(EMPTY);
  const [techInput, setTechInput] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/projects", {
        headers: { "x-admin-token": getToken() },
      });
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  function openAdd() {
    setForm(EMPTY);
    setTechInput("");
    setEditTarget(null);
    setModal("add");
  }

  function openEdit(p: Project) {
    const { id, ...rest } = p;
    void id;
    setForm(rest);
    setTechInput("");
    setEditTarget(p);
    setModal("edit");
  }

  function closeModal() {
    setModal(null);
    setEditTarget(null);
  }

  function addTech() {
    const t = techInput.trim();
    if (t && !form.tech.includes(t)) {
      setForm((f) => ({ ...f, tech: [...f.tech, t] }));
    }
    setTechInput("");
  }

  function removeTech(t: string) {
    setForm((f) => ({ ...f, tech: f.tech.filter((x) => x !== t) }));
  }

  async function handleSave() {
    if (!form.title.trim() || !form.description.trim()) return;
    setSaving(true);
    try {
      let res: Response;
      if (modal === "edit" && editTarget) {
        res = await fetch(`/api/admin/projects/${editTarget.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "x-admin-token": getToken() },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch("/api/admin/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-admin-token": getToken() },
          body: JSON.stringify(form),
        });
      }
      if (!res.ok) throw new Error("Gagal menyimpan");
      await fetchProjects();
      closeModal();
      showToast(modal === "edit" ? "Project berhasil diperbarui" : "Project berhasil ditambahkan");
    } catch {
      showToast("Terjadi kesalahan", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "DELETE",
        headers: { "x-admin-token": getToken() },
      });
      if (!res.ok) throw new Error();
      await fetchProjects();
      showToast("Project berhasil dihapus");
    } catch {
      showToast("Gagal menghapus", "error");
    } finally {
      setDeleteId(null);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-xl
          ${toast.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
          {toast.msg}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-playfair text-3xl text-white mb-1">Projects</h2>
          <p className="text-white/40 text-sm">{projects.length} project terdaftar</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C9A84C] text-black text-sm font-semibold hover:bg-[#d4b05a] transition-colors"
        >
          <Plus size={16} /> Tambah Project
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 size={28} className="animate-spin text-white/30" />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 text-white/30">Belum ada project</div>
      ) : (
        <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white/40 uppercase text-xs tracking-wider">
                <th className="px-6 py-4 text-left">Project</th>
                <th className="px-6 py-4 text-left hidden md:table-cell">Kategori</th>
                <th className="px-6 py-4 text-left hidden lg:table-cell">Tech Stack</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p.id} className={`border-b border-white/5 hover:bg-white/3 transition-colors ${i === projects.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-6 py-4">
                    <p className="text-white font-medium">{p.title}</p>
                    <p className="text-white/40 text-xs mt-0.5 line-clamp-1">{p.description}</p>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white/70 text-xs">{p.category}</span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {p.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#C9A84C]/10 text-[#C9A84C] text-xs">{t}</span>
                      ))}
                      {p.tech.length > 3 && <span className="text-white/30 text-xs">+{p.tech.length - 3}</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="p-1.5 text-white/30 hover:text-white/70 transition-colors" title="Live">
                        <ExternalLink size={15} />
                      </a>
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 text-white/30 hover:text-white/70 transition-colors" title="GitHub">
                        <Github size={15} />
                      </a>
                      <button onClick={() => openEdit(p)} className="p-1.5 text-white/30 hover:text-amber-400 transition-colors">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => setDeleteId(p.id)} className="p-1.5 text-white/30 hover:text-red-400 transition-colors">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Add/Edit */}
      {modal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] border border-white/15 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111] z-10">
              <h3 className="font-playfair text-xl text-white">
                {modal === "edit" ? "Edit Project" : "Tambah Project"}
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
                  placeholder="Nama project"
                />
              </Field>
              <Field label="Deskripsi Singkat *">
                <input
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  className="input-admin"
                  placeholder="1-2 kalimat"
                />
              </Field>
              <Field label="Deskripsi Lengkap">
                <textarea
                  value={form.longDescription}
                  onChange={(e) => setForm((f) => ({ ...f, longDescription: e.target.value }))}
                  className="input-admin min-h-[80px] resize-none"
                  placeholder="Penjelasan lebih detail..."
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Kategori">
                  <select
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as ProjectCategory }))}
                    className="input-admin"
                  >
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
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
              <Field label="Tech Stack">
                <div className="flex gap-2">
                  <input
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTech())}
                    className="input-admin flex-1"
                    placeholder="Tambah teknologi, tekan Enter"
                  />
                  <button type="button" onClick={addTech} className="px-3 py-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 text-sm">
                    <Plus size={16} />
                  </button>
                </div>
                {form.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {form.tech.map((t) => (
                      <span key={t} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#C9A84C]/15 text-[#C9A84C] text-xs">
                        {t}
                        <button onClick={() => removeTech(t)} className="hover:text-red-400 transition-colors ml-1">×</button>
                      </span>
                    ))}
                  </div>
                )}
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Live URL">
                  <input
                    value={form.liveUrl}
                    onChange={(e) => setForm((f) => ({ ...f, liveUrl: e.target.value }))}
                    className="input-admin"
                    placeholder="https://..."
                  />
                </Field>
                <Field label="GitHub URL">
                  <input
                    value={form.githubUrl}
                    onChange={(e) => setForm((f) => ({ ...f, githubUrl: e.target.value }))}
                    className="input-admin"
                    placeholder="https://github.com/..."
                  />
                </Field>
              </div>
            </div>
            <div className="p-6 border-t border-white/10 flex gap-3 justify-end sticky bottom-0 bg-[#111]">
              <button onClick={closeModal} className="px-4 py-2.5 rounded-xl border border-white/15 text-white/60 hover:text-white text-sm transition-colors">
                Batal
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.title.trim() || !form.description.trim()}
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
            <h3 className="text-white font-medium mb-1">Hapus Project?</h3>
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
