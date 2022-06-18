import {ThemeOptions} from "@mui/material";

export const DRAWER_WIDTH = 200;

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
