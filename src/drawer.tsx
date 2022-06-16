import {drawerTheme} from "./themes/drawer";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider} from "@mui/material";
import {iconTheme} from "./themes/icon";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import {Drawer as MUIDrawer} from '@mui/material'
import * as React from "react";

export const Drawer = () => {
  return (
    <ThemeProvider theme={drawerTheme}>
      <MUIDrawer variant="permanent" anchor="left">
        <List>
          <ThemeProvider theme={iconTheme}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TaskIcon/>
                </ListItemIcon>
                <ListItemText primary="Your Courses"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsIcon/>
                </ListItemIcon>
                <ListItemText primary="Accounts"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon/>
                </ListItemIcon>
                <ListItemText primary="Groups"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Preferences"/>
              </ListItemButton>
            </ListItem>
          </ThemeProvider>
        </List>
      </MUIDrawer>
    </ThemeProvider>
  );
}
