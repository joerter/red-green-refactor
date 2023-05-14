import { AppBar, Container, Link, Toolbar } from "@mui/material";
import { V2_MetaFunction, json } from "@remix-run/node";
import { Link as RemixLink } from "@remix-run/react";
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
          <Link
            component={RemixLink}
            to="/"
            sx={{
              textDecoration: "none",
              lineHeight: 0,
              display: { xs: "none", sm: "block" },
            }}
          >
            <img width="320" height="60" src="/navbar.png" />
          </Link>
          <Link
            component={RemixLink}
            to="/"
            sx={{
              textDecoration: "none",
              lineHeight: 0,
              display: { xs: "block", sm: "none" },
            }}
          >
            <img width="50" height="50" src="/navbar_logo.png" />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
