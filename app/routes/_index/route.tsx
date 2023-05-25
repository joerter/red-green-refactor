import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import Hero from "./Hero";
import BlogCards from "./BlogCards";

export const meta: V2_MetaFunction = () => [
  { title: "Red Green Refactor Blog" },
];

export const loader = async () => {
  const blogs = await getBlogs();
  return json({
    blogs,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const blogs = data.blogs;

  return (
    <>
      <Hero />
      <BlogCards blogs={blogs} />
    </>
  );
}
