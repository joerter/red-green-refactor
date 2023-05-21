import { AppBar, Container, Link, Toolbar } from "@mui/material";
import { Link as RemixLink } from "@remix-run/react";

export default function Navbar() {
  return (
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
  );
}
