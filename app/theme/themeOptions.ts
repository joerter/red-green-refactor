import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#488EE3",
    },
    secondary: {
      main: "#8db905",
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
      styleOverrides: {
        root: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
        },
      },
    },
  },
};
