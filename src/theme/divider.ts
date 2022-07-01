import {ThemeOptions} from "@mui/material/styles";

export const dividerTheme: ThemeOptions = {
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '15px 0 15px 0',
        },
      },
    },
  },
};