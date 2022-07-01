import {ThemeOptions} from "@mui/material/styles";

export const tableTheme: ThemeOptions = {
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        head: {
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
  },
};