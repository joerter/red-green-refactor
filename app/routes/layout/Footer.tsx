import { AppBar, Container, Toolbar } from "@mui/material";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <AppBar position="static" component="footer">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          © {year} John Oerter
        </Toolbar>
      </Container>
    </AppBar>
  );
}
