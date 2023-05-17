import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Link,
  Paper,
  Stack,
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
            height: 500,
            bgcolor: "primary.main",
            background: "linear-gradient(to right, #21295C, #5c69be);",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent={{ xs: "center", md: "center" }}
            sx={{ height: "100%", p: 2 }}
          >
            <Stack sx={{ color: "common.white" }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                John Oerter
              </Typography>
              <Typography
                variant="h4"
                color="gray[300]"
                sx={{
                  fontWeight: "500",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Lead Software Engineer
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <img width="428" height="375" src="/no_background.png" />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex", md: "none" } }}>
                <img width="300" height="263" src="/no_background_medium.png" />
              </Box>
              <Box sx={{ mt: 2, display: { xs: "flex", sm: "none" } }}>
                <img width="200" height="175" src="/no_background_small.png" />
              </Box>
            </Stack>
          </Stack>
        </Paper>
        <Paper
          sx={{
            my: 4,
            p: 2,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#8db905",
            }}
          >
            Welcome to my blog!
          </Typography>

          <Box sx={{ mt: 2, mx: "auto", maxWidth: 750 }}>
            <Typography variant="body1">
              Browse my articles below where I've written on topics such as
              software craftsmanship, web development, and Vim. If you'd like to
              get in contact with me, you can send me an email at{" "}
              <a href="mailto:john@redgreenrefactor.dev">
                john@redgreenrefactor.dev
              </a>
            </Typography>
          </Box>
        </Paper>

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
