import {
  Avatar,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import {Drawer as MUIDrawer} from '@mui/material';
import styles from './fonts.scss';
import * as React from "react";
import {useNavigate} from "react-router-dom";

export const Drawer = () => {
  const navigate = useNavigate();

  const itemList = [
    {
      text: "Dashboard",
      icon: <HomeIcon/>,
      onClick: () => navigate("/dashboard")
    },
    {
      text: "Your Courses",
      icon: <TaskIcon/>,
      onClick: () => navigate("/courses")
    },
    {
      text: "Accounts",
      icon: <ManageAccountsIcon/>,
      onClick: () => navigate("/accounts")
    },
    {
      text: "Groups",
      icon: <GroupsIcon/>,
      onClick: () => navigate("/groups")
    },
    {
      text: "Preferences",
      icon: <SettingsIcon/>,
      onClick: () => navigate("/preferences")
    },
  ];

  return (
    <MUIDrawer variant="permanent" anchor="left">
      <List>
        {itemList.map(({text, icon, onClick}) => (
          <ListItem button key={text} onClick={onClick} sx={{fontWeight: 500}}>
            {icon && <ListItemIcon sx={{minWidth: 24, mr: '16px'}}>{icon}</ListItemIcon>}
            <ListItemText primary={text}/>
          </ListItem>
        ))}
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
  );
}

