import { Stack } from "@mui/material";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlog } from "~/models/blog.server";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import PostContent from "./PostContent";
import PostHero from "./PostHero";

export async function loader(args: LoaderArgs) {
  const postSlug = args.params["postSlug"];
  if (!postSlug) {
    throw new Response(null, { status: 404 });
  }
  const posts = await getBlog(postSlug);
  if (!posts.length) {
    throw new Response(null, { status: 404 });
  }

  const post = posts[0];
  const content = sanitizeHtml(marked.parse(post.attributes.Content));

  return json(
    {
      post,
      content,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    }
  );
}

export default function Post() {
  const data = useLoaderData<typeof loader>();

  return (
    <Stack spacing={1}>
      <PostHero post={data.post} />
      <PostContent content={data.content} />
    </Stack>
  );
}
