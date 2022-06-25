import {ThemeOptions} from "@mui/material/styles";

export const iconTheme: ThemeOptions = {
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#DDDDDD',
        },
      },
    },
  },
};