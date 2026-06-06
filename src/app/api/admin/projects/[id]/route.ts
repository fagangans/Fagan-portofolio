import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import type { Project } from "@/types";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin123";

function readProjects(): Project[] {
  try {
    return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function writeProjects(projects: Project[]) {
  writeFileSync(DATA_PATH, JSON.stringify(projects, null, 2));
}

function isAuthorized(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  return token === ADMIN_PASSWORD;
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const body = await req.json();
  const projects = readProjects();
  const idx = projects.findIndex((p) => p.id === Number(id));
  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  projects[idx] = { ...projects[idx], ...body, id: Number(id) };
  writeProjects(projects);
  return NextResponse.json(projects[idx]);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const projects = readProjects();
  const filtered = projects.filter((p) => p.id !== Number(id));
  if (filtered.length === projects.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  writeProjects(filtered);
  return NextResponse.json({ success: true });
}
