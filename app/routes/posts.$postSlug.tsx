import { Avatar, Box, Fade, Paper, Stack, Typography } from "@mui/material";
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { formatDateString } from "~/date";
import { getBlog } from "~/models/blog.server";
import { strapiBaseUrl } from "~/strapi";

export async function loader(args: LoaderArgs) {
  const postSlug = args.params["postSlug"];
  if (!postSlug) {
    throw new Response(null, { status: 404 });
  }
  const post = await getBlog(postSlug);

  return json({
    post: post[0],
  });
}
export default function Post() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return (
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
              <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: 'bold' }}>
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
  );
}
