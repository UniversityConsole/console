import {drawerTheme} from "./themes/drawer";
import {
  Avatar,
  CardHeader,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider
} from "@mui/material";
import {iconTheme} from "./themes/icon";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import {Drawer as MUIDrawer} from '@mui/material';
import * as styles from './test.scss';
import * as React from "react";
import {useNavigate} from "react-router-dom";

export const Drawer = () => {
  const navigate = useNavigate();

  const itemList = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      onClick: () => navigate("/dashboard")
    },
    {
      text: "Your Courses",
      icon: <TaskIcon />,
      onClick: () => navigate("/courses")
    },
    {
      text: "Accounts",
      icon: <ManageAccountsIcon/>,
      onClick: () => navigate("/accounts")
    },
    {
      text: "Groups",
      icon: <GroupsIcon />,
      onClick: () => navigate("/groups")
    },
    {
      text: "Preferences",
      icon: <SettingsIcon />,
      onClick: () => navigate("/preferences")
    },
  ];

  return (
    <ThemeProvider theme={drawerTheme}>
      <MUIDrawer variant="permanent" anchor="left">
        <List>
          <ThemeProvider theme={iconTheme}>
            {itemList.map((item, index) => {
              const {text, icon, onClick} = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </ThemeProvider>
        </List>
        <List className={styles.footer}>
          <div>
            <CardHeader
              avatar={
                <Avatar>JD</Avatar>
              }
              title="John Doe"
            />
          </div>
        </List>
      </MUIDrawer>
    </ThemeProvider>
  );
}

