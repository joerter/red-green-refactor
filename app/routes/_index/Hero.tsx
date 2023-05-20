import { Box, Paper, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Paper
      sx={{
        my: 2,
        pb: 1,
        px: 1,
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
      <Paper
        sx={{
          my: 4,
          p: 2,
          maxWidth: 750,
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
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
    </Paper>
  );
}
