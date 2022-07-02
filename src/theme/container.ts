import {ThemeOptions} from "@mui/material/styles";

export const containerTheme: ThemeOptions = {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          marginLeft: 10,
          marginRight: 10,
        },
      },
    },
  },
};
