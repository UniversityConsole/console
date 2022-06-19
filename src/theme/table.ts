import {ThemeOptions} from "@mui/material";

export const tableTheme: ThemeOptions = {
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 500,
          fontFamily: 'Source Sans Pro',
        },
        head: {
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
  },
};