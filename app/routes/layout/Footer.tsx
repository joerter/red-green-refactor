import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <AppBar position="static" component="footer">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">© {year} John Oerter</Typography>
          <Button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            color="secondary"
            variant="outlined"
            endIcon={<ArrowUpwardIcon />}
          >
            Scroll to Top
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
