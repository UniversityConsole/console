import {ThemeOptions} from "@mui/material";

export const drawerTheme: ThemeOptions = {
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: '200px',
        },
        paperAnchorDockedLeft: {
          background: "#333333",
          color: "#DDDDDD",
          fontFamily: "Source Sans Pro",
        },
      },
    },
  },
};
