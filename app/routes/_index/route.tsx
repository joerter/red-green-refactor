import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Hero from "./Hero";
import BlogCards from "./BlogCards";
import { getPosts } from "~/models/posts.server";
import { Post } from "@prisma/client";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Red Green Refactor Blog" },
    { name: "description", content: "Red Green Refactor by John Oerter" },
    {
      property: "og:description",
      content: "Red Green Refactor Blog by John Oerter",
    },
    {
      property: "og:image",
      content:
        "https://redgreenrefactor.nyc3.cdn.digitaloceanspaces.com/opengraph/redgreenrefactor.dev",
    },
    { property: "og:type", content: "image/png" },
  ];
};

export const loader = async () => {
  const posts = await getPosts();
  return json({
    posts,
  });
};

export default function Index() {
  const data = useLoaderData() as unknown as { posts: Post[] };
  const posts = data.posts;

  return (
    <>
      <Hero />
      <BlogCards posts={posts} />
    </>
  );
}
