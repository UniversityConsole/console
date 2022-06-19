import {ThemeOptions} from "@mui/material";

export const formTheme: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '38px',
          margin: '0',
        },
      },
    },
  },
};