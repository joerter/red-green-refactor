import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
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
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography variant="h1" component={Link} to="/" sx={{
            fontSize: '1rem',
            color: 'common.white',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}>Red Green Refactor</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
