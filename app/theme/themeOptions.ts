import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: Palette["background"];
  }

  interface PaletteOptions {
    gradient: Palette["background"];
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#21295C",
    },
    secondary: {
      main: "#8db905",
    },
    info: {
      main: "#488EE3",
    },
    background: {
      default: '#eee',
      paper: "#fff",
    },
    gradient: {
      paper: "linear-gradient(to right, #21295C, #5c69be)",
      default: "linear-gradient(to right, #21295C, #5c69be)",
    },
  },
  typography: {
    fontFamily: 'Lato, "Helvtica", "Arial", sans-serif',
    h1: {
      fontFamily: "Raleway",
    },
    h2: {
      fontFamily: "Raleway",
    },
    h3: {
      fontFamily: "Raleway",
    },
    h4: {
      fontFamily: "Raleway",
    },
    h5: {
      fontFamily: "Raleway",
    },
    h6: {
      fontFamily: "Raleway",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};
