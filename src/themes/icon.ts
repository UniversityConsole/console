import {createTheme} from "@mui/material";

export const iconTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#DDDDDD',
        }
      }
    }
  }
});