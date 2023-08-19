import { createTheme, Theme } from "@mui/material/styles";

export const dataVizTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#f0f0f0",
      dark: "#3b3a30",
    },
    secondary: {
      main: "#c5d5c5",
      dark: "#222222",
    },
    background: {
      default: "#3b3a30",
      paper: "#b2c2bf",
    },
    text: {
      primary: "#222222",
      secondary: "#d7d7d7",
    },
    error: {
      main: "#d32e2e",
    },
    warning: {
      main: "#f7b500",
    },
    success: {
      main: "#2fa035",
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        bgcolor: "#245859",
      },
    },
  },
  typography: {
    fontWeightRegular: 500,
    fontFamily: ["Futura-Medium", "Futura Medium", "Futura", "sans-serif"].join(
      ","
    ),
  },
});
