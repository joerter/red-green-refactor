import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Hero from "./Hero";
import BlogCards from "./BlogCards";
import { getPosts } from "~/models/posts.server";

export const meta: V2_MetaFunction = () => [
  { title: "Red Green Refactor Blog" },
];

export const loader = async () => {
  const posts = getPosts();
  return json({
    posts,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const posts = data.posts;

  return (
    <>
      <Hero />
      <BlogCards posts={posts} />
    </>
  );
}
