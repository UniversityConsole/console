import * as React from 'react';
import {createRoot} from 'react-dom/client';
import * as styles from './fonts.scss';
import {Drawer} from "./drawer";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Dashboard from "./dashboard";
import Accounts from "./accounts";
import Groups from "./groups";
import Courses from "./courses";
import Preferences from "./preferences";
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material";
import {deepmerge} from '@mui/utils';
import {buttonTheme} from "./themes/button";
import {containerTheme} from "./themes/container";
import {drawerTheme} from "./themes/drawer";
import {iconTheme} from "./themes/icon";
import {paperTheme} from "./themes/paper";
import {tableTheme} from "./themes/table";
import {typographyTheme} from "./themes/typography";

function App() {
  const componentThemes = [
    buttonTheme,
    containerTheme,
    drawerTheme,
    iconTheme,
    paperTheme,
    tableTheme,
    typographyTheme,
  ];

  // @ts-ignore
  const themeOptions: ThemeOptions = componentThemes.reduce(deepmerge, {});
  const theme = createTheme(themeOptions);
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Drawer/>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard"/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/accounts" element={<Accounts/>}/>
            <Route path="/groups" element={<Groups/>}/>
            <Route path="/preferences" element={<Preferences/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(<App/>);

