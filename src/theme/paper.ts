import {ThemeOptions} from "@mui/material/styles";

export const paperTheme: ThemeOptions = {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.15)',
          borderRadius: '4px',
        },
      },
    },
  },
};