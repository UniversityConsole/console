import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import Drawer from '@mui/material/Drawer';
import styles from './fonts.scss';
import * as React from "react";
import {useNavigate} from "react-router-dom";
import School from "@mui/icons-material/School";
import {deepPurple} from "@mui/material/colors";

export const MUIDrawer = () => {
  const navigate = useNavigate();

  const accountId = window.localStorage.getItem('uc/me');
  if (accountId === null) {
    throw new Error('No account id found');
  }

  const account = JSON.parse(window.localStorage.getItem(`uc/account/${accountId}`) || '');

  const initials = account.preferredName.split(" ").map((n: string)=>n[0]).join("");

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
    <Drawer variant="permanent" anchor="left">
      <Toolbar disableGutters>
        <School sx={{minWidth: 24, m: '16px'}}/>
        <Typography
          variant='h6'
          noWrap
          sx={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 300
          }}
        >
          University
        </Typography>
        <Typography
          variant='h6'
          noWrap
          sx={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 700
          }}
        >
          Console
        </Typography>
      </Toolbar>
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
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{initials}</Avatar>
            }
            title={account.preferredName}
          />
        </div>
      </List>
    </Drawer>
  );
}

