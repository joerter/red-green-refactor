import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#21295C",
      //main: "#488EE3",
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
    },
  },
};
