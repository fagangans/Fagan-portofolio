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

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(readProjects());
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const projects = readProjects();
  const newProject: Project = {
    ...body,
    id: projects.length > 0 ? Math.max(...projects.map((p) => p.id)) + 1 : 1,
  };
  projects.push(newProject);
  writeProjects(projects);
  return NextResponse.json(newProject, { status: 201 });
}
