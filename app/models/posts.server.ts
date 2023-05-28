import { Post } from "@prisma/client";
import sanitizeHtml from "sanitize-html";
import { prisma } from "~/db.server";

export function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(
  slug: string
): Promise<{ post: Post; content: string }> {
  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) {
    throw new Response(null, { status: 404 });
  }
  const content = sanitizeHtml(post.markdown);

  return {
    post,
    content,
  };
}
