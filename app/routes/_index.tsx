import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Link,
  Paper,
  Toolbar,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { V2_MetaFunction, json } from "@remix-run/node";
import { Link as RemixLink, useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import { strapiBaseUrl } from "~/models/strapi";

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
      <AppBar position="static">
        <Container maxWidth="lg">
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
      <Container maxWidth="lg">
        <Paper
          sx={{
            my: 2,
            minHeight: 500,
            bgcolor: "primary.main",
            background: "linear-gradient(to right, #21295C, #5c69be);",
          }}
        ></Paper>
        <Grid2 container spacing={2}>
          {blogs.map((b, i) => (
            <Grid2 key={i} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={`${strapiBaseUrl}${b.attributes.Hero.data.attributes.formats.small.url}`}
                ></CardMedia>
                <CardHeader
                  title={b.attributes.Title}
                  subheader={b.attributes.Published}
                />
                <CardContent>{b.attributes.Excerpt}</CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
}
