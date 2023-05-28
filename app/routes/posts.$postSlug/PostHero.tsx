import { Avatar, Box, Fade, Paper, Stack, Typography } from "@mui/material";
import { Post } from "@prisma/client";
import { formatDateString } from "~/date";

export interface PostHeroProps {
  post: Post;
}

export default function PostHero(props: PostHeroProps) {
  return (
    <Stack
      sx={{
        mb: 2,
      }}
    >
      <Paper>
        <Box
          sx={{
            height: 500,
            borderRadius: "8px",
            backgroundImage: `url(/posts/full/${props.post.slug}.jpeg)`,
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
                  {props.post.title}
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
                  {formatDateString(props.post.published)}
                </Typography>
              </Stack>
            </Paper>
          </Fade>
        </Box>
      </Paper>
      <Typography variant="body2" textAlign="center">
        {props.post.caption}
      </Typography>
    </Stack>
  );
}
