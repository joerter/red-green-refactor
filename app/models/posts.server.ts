import fs from "fs";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { posts } from "./posts";

const readFile = fs.promises.readFile;

export interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
  heroCaption: string;
}

export interface PostWithContent extends Post {
  content: string;
}

export function getPosts(): Post[] {
  return posts;
}

export async function getPost(slug: string): Promise<PostWithContent> {
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    throw new Response(null, { status: 404 });
  }

  const data = await readFile(`posts/${slug}.md`, "utf8");
  const content = sanitizeHtml(marked.parse(data));

  return {
    ...post,
    content,
  };
}
