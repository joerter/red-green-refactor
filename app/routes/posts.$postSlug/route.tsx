import { Stack } from "@mui/material";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostContent from "./PostContent";
import PostHero from "./PostHero";
import { getPost } from "~/models/posts.server";

export async function loader(args: LoaderArgs) {
  const postSlug = args.params["postSlug"];
  if (!postSlug) {
    throw new Response(null, { status: 404 });
  }
  const postWithContent = await getPost(postSlug);

  return json(
    {
      post: postWithContent,
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
      <PostContent content={data.post.content} />
    </Stack>
  );
}
