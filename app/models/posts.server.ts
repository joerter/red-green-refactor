import fs from "fs";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { posts } from "./posts";

const readFile = fs.promises.readFile;

export function getPosts() {
  return posts;
}

export async function getPost(slug: string) {
  const data = await readFile(`posts/${slug}.md`, "utf8");
  const content = sanitizeHtml(marked.parse(data));
  return content;
}
