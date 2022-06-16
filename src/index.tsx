import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';

import * as styles from './test.scss';
import {Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider} from "@mui/material";
import {drawerTheme} from "./themes/drawer";
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import {buttonTheme} from "./themes/button";

function Counter() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <ThemeProvider theme={drawerTheme}>
            <Drawer variant="permanent" anchor="left">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon sx={{color: '#DDDDDD'}} />
                    </ListItemIcon>
                    <ListItemText primary = "Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TaskIcon sx={{color: '#DDDDDD'}} />
                    </ListItemIcon>
                    <ListItemText primary = "Your Courses" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ManageAccountsIcon sx={{color: '#DDDDDD'}} />
                    </ListItemIcon>
                    <ListItemText primary = "Accounts" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GroupsIcon sx={{color: '#DDDDDD'}} />
                    </ListItemIcon>
                    <ListItemText primary = "Groups" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon sx={{color: '#DDDDDD'}} />
                    </ListItemIcon>
                    <ListItemText primary = "Preferences" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </ThemeProvider>
        </Grid>
        <Grid item xs={10}>
          <ThemeProvider theme={buttonTheme}>
            <Button variant='text'>Say Hello</Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(<Counter />);

