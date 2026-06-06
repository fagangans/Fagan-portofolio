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

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(readPosts());
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const posts = readPosts();
  const newPost: BlogPost = {
    ...body,
    id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
  };
  posts.push(newPost);
  writePosts(posts);
  return NextResponse.json(newPost, { status: 201 });
}
