import {ThemeOptions} from "@mui/material/styles";

export const DRAWER_WIDTH = 250;

export const drawerTheme: ThemeOptions = {
  components: {
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          boxSizing: 'border-box',
          width: DRAWER_WIDTH,
          background: "#333333",
          color: "#DDDDDD",
          fontFamily: "Source Sans Pro",
        },
      },
    },
  },
};
