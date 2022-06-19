import * as React from 'react';
import {createRoot} from 'react-dom/client';
import * as styles from './fonts.scss';
import {Drawer} from "./drawer";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Dashboard from "./dashboard";
import {Accounts} from "./Accounts";
import Groups from "./groups";
import Courses from "./courses";
import Preferences from "./preferences";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {DRAWER_WIDTH} from "./theme/drawer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={{display: 'flex'}}>
          <Box
            component="nav"
            sx={{width: DRAWER_WIDTH, flexShrink: 0}}
          >
            <Drawer/>
          </Box>
          <Box
            component="main"
            sx={{flexGrow: 1, p: 3, width: `calc(100% - ${DRAWER_WIDTH}px)`}}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard"/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/courses" element={<Courses/>}/>
              <Route path="/accounts" element={<Accounts/>}/>
              <Route path="/groups" element={<Groups/>}/>
              <Route path="/preferences" element={<Preferences/>}/>
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(<App/>);

