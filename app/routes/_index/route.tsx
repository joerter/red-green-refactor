import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import Hero from "./Hero";
import Navbar from "./NavBar";
import BlogCards from "./BlogCards";
import { Container } from "@mui/material";

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
  console.log(blogs);

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Hero />

        <BlogCards blogs={blogs} />
      </Container>
    </div>
  );
}
