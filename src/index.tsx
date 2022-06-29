import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {MUIDrawer} from "./drawer";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme";
import {DRAWER_WIDTH} from "./theme/drawer";
import {Suspense} from "react";

const Dashboard = React.lazy(() => import(/* webpackChunkName: "dashboard" */'./dashboard'));
const Courses = React.lazy(() => import(/* webpackChunkName: "courses" */ './Courses/Courses'));
const Accounts = React.lazy(() => import(/* webpackChunkName: "accounts" */ './Accounts/Accounts'));
const Groups = React.lazy(() => import(/* webpackChunkName: "groups" */ './Groups/Groups'));
const Preferences = React.lazy(() => import(/* webpackChunkName: "preferences" */ './preferences'));
const CreateAccount = React.lazy(() => import(/* webpackChunkName: "createAccount" */ './CreateAccount/CreateAccount'));
const CreateGroup = React.lazy(() => import(/* webpackChunkName: "createGroup" */ './CreateGroup/CreateGroup'));
const CreateCourse = React.lazy(() => import(/* webpackChunkName: "createCourse" */ './CreateCourse/CreateCourse'));

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
            <MUIDrawer/>
          </Box>
          <Box
            component="main"
            sx={{flexGrow: 1, p: 3, width: `calc(100% - ${DRAWER_WIDTH}px)`}}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard"/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/accounts" element={<Accounts/>}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="/preferences" element={<Preferences/>}/>
                <Route path="/create-account" element={<CreateAccount/>}/>
                <Route path="/create-group" element={<CreateGroup />}/>
                <Route path="/create-course" element={<CreateCourse />}/>
              </Routes>
            </Suspense>
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

