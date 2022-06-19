import {ThemeOptions} from "@mui/material";

export const dialogTheme: ThemeOptions = {
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.15)',
          borderRadius: '8px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '8px 24px',
          background: 'rgb(249, 250, 251)'
        },
      },
    },
  },
};