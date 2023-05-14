import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Link,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid2 from "@mui/material/Unstable_Grid2";
import { V2_MetaFunction, json } from "@remix-run/node";
import { Link as RemixLink, useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import { strapiBaseUrl } from "~/strapi";

export const meta: V2_MetaFunction = () => [
  { title: "Red Green Refactor Blog" },
];

export const loader = async () => {
  const blogs = await getBlogs();
  return json({
    blogs,
  });
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

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
          {blogs.map((b, i) => {
            const published = dateFormatter.format(
              new Date(b.attributes.Published)
            );
            const excerpt = `${b.attributes.Excerpt.substring(0, 150)}...`;

            return (
              <Grid2 key={i} xs={12} sm={6} md={4}>
                <Card raised>
                  <CardMedia
                    component="img"
                    height="250"
                    image={`${strapiBaseUrl}${b.attributes.Hero.data.attributes.formats.small.url}`}
                  ></CardMedia>
                  <CardHeader
                    sx={{ minHeight: 125, alignItems: "flex-start" }}
                    title={b.attributes.Title}
                    subheader={published}
                    titleTypographyProps={{ sx: { fontWeight: "bold" } }}
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        minHeight: 50,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {excerpt}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="text"
                      color="secondary"
                      sx={{ fontWeight: "bold" }}
                    >
                      Read more <ArrowForwardIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </div>
  );
}
