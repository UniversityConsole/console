import {createTheme} from "@mui/material";

export const drawerTheme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paperAnchorDockedLeft: {
                    background: "#333333",
                    color: "#DDDDDD",
                    fontFamily: "Source Sans Pro",
                }
            }
        }
    }
});
