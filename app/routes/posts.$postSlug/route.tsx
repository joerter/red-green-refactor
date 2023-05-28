import { Stack } from "@mui/material";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostContent from "./PostContent";
import PostHero from "./PostHero";
import { getPost } from "~/models/posts.server";
import { Post } from "@prisma/client";

export async function loader(args: LoaderArgs) {
  const postSlug = args.params["postSlug"];
  if (!postSlug) {
    throw new Response(null, { status: 404 });
  }
  const post = await getPost(postSlug);

  return json(
    {
      post,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    }
  );
}

export default function PostPage() {
  const data = useLoaderData() as unknown as { post: Post };

  return (
    <Stack spacing={1}>
      <PostHero post={data.post} />
      <PostContent content={data.post.markdown} />
    </Stack>
  );
}
