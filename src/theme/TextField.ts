import {ThemeOptions} from "@mui/material/styles";

export const formTheme: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          margin: '0',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '50%',
          margin: '12px 10px 12px 0',
        }
      }
    }
  },
};