import {
  Avatar,
  Box,
  Container,
  Fade,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { formatDateString } from "~/date";
import { getBlog } from "~/models/blog.server";
import { strapiBaseUrl } from "~/strapi";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export async function loader(args: LoaderArgs) {
  const postSlug = args.params["postSlug"];
  if (!postSlug) {
    throw new Response(null, { status: 404 });
  }
  const posts = await getBlog(postSlug);
  if (!posts.length) {
    throw new Response(null, { status: 404 });
  }

  const post = posts[0];
  const content = sanitizeHtml(marked.parse(post.attributes.Content));

  return json({
    post,
    content,
  });
}

const PostContent = styled("div")(({ theme }) => ({
  h1: {
    ...theme.typography.h1,
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  h2: {
    ...theme.typography.h2,
    fontSize: "1.875rem",
    marginBottom: "1.5rem",
  },
  h3: {
    ...theme.typography.h3,
    fontSize: "1.25rem",
    marginBottom: "1rem",
  },
  h4: {
    ...theme.typography.h4,
    fontSize: "1.25rem",
  },
  h5: {
    ...theme.typography.h5,
    fontSize: "1.125rem",
  },
  h6: {
    ...theme.typography.h6,
    fontSize: "1.125rem",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "#333",
    fontWeight: "bold",
  },
  p: {
    ...theme.typography.body1,
    fontSize: "1.125rem",
  },
  blockquote: {
    ...theme.components?.MuiPaper,
    background: theme.palette.gradient.default,
    color: theme.palette.common.white,
    borderLeft: `10px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2),
    margin: 0,
    position: "relative",
    borderRadius: "4px",
  },
  "blockquote cite": {
    display: "block",
    textAlign: "right",
    fontSize: "14px",
    color: "#fff",
    marginTop: "5px",
  },
  "blockquote p": {
    color: theme.palette.common.white,
  },
  "a, a:visited": {
    background: `linear-gradient(to bottom, ${theme.palette.info.main} 0%, ${theme.palette.info.main} 100%)`,
    backgroundPosition: "0 100%",
    backgroundRepeat: "repeat-x",
    backgroundSize: "4px 4px",
    textDecoration: "none",
    transition: "all 0.2s",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    padding: "0 2px",
    margin: "0 2.5px",
  },
  "a:hover, a:active, a:focus": {
    backgroundSize: "4px 50px",
    color: theme.palette.common.white,
  },
  code: {
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    fontSize: "14px",
    backgroundColor: "#f5f5f5",
    padding: "2px 4px",
    border: "1px solid #ccc",
    color: "#333",
  },
  "pre code": {
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    fontSize: "14px",
    color: "#333",
    border: "none",
    whiteSpace: "pre",
    overflowX: "auto",
  },
  pre: {
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    overflow: "auto",
  },
}));

export default function Post() {
  const data = useLoaderData<typeof loader>();

  console.log(data);
  return (
    <Stack spacing={1}>
      <Paper
        sx={{
          my: 2,
        }}
      >
        <Box
          sx={{
            height: 500,
            borderRadius: "8px",
            backgroundImage: `url(${strapiBaseUrl()}${
              data.post.attributes.Hero.data.attributes.formats.large.url
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Fade in timeout={1000}>
            <Paper
              elevation={2}
              sx={{
                maxWidth: "900px",
                bgcolor: "primary.main",
                opacity: "80%",
                color: "common.white",
                textAlign: "center",
                p: 2,
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: "3rem", fontWeight: "bold" }}
                >
                  {data.post.attributes.Title}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Avatar alt="John Oerter Headshot" src="/circleblue.png" />
                  <Typography variant="h3" sx={{ fontSize: "2rem" }}>
                    John Oerter
                  </Typography>
                </Stack>
                <Typography variant="h5" sx={{ color: "grey.500" }}>
                  {formatDateString(data.post.attributes.Published)}
                </Typography>
              </Stack>
            </Paper>
          </Fade>
        </Box>
      </Paper>
      <Paper>
        <Container maxWidth="sm" sx={{ p: 2 }}>
          <PostContent
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></PostContent>
        </Container>
      </Paper>
    </Stack>
  );
}
