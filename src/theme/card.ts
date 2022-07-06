import {ThemeOptions} from "@mui/material/styles";

export const cardTheme: ThemeOptions = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 0,
          marginTop: '15px',
          marginBottom: '15px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.15)'
        },
      },
    },
  },
};