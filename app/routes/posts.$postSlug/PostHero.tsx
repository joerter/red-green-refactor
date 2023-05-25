import { Avatar, Box, Fade, Paper, Stack, Typography } from "@mui/material";
import { formatDateString } from "~/date";
import { Blog } from "~/models/blog.server";
import { strapiBaseUrl } from "~/strapi";

export interface PostHeroProps {
  post: Blog;
}

export default function PostHero(props: PostHeroProps) {
  return (
    <Paper
      sx={{
        mb: 2,
      }}
    >
      <Box
        sx={{
          height: 500,
          borderRadius: "8px",
          backgroundImage: `url(${strapiBaseUrl()}${
            props.post.attributes.Hero.data.attributes.formats.large.url
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
                {props.post.attributes.Title}
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
                {formatDateString(props.post.attributes.Published)}
              </Typography>
            </Stack>
          </Paper>
        </Fade>
      </Box>
    </Paper>
  );
}
