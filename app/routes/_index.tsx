import { Typography } from "@mui/material";
import { V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";

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

  return <Typography variant="h1">Welcome to the blog</Typography>;
}
