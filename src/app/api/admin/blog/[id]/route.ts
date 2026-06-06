import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import type { BlogPost } from "@/types";

const DATA_PATH = path.join(process.cwd(), "data", "blog.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin123";

function readPosts(): BlogPost[] {
  try {
    return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function writePosts(posts: BlogPost[]) {
  writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2));
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
  const posts = readPosts();
  const idx = posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  posts[idx] = { ...posts[idx], ...body, id: Number(id) };
  writePosts(posts);
  return NextResponse.json(posts[idx]);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const posts = readPosts();
  const filtered = posts.filter((p) => p.id !== Number(id));
  if (filtered.length === posts.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  writePosts(filtered);
  return NextResponse.json({ success: true });
}
