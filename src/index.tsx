import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as styles from './test.scss';
import {Drawer} from "./drawer";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Dashboard from "./dashboard";
import Accounts from "./accounts";
import Groups from "./groups";
import Courses from "./courses";
import Preferences from "./preferences";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Drawer />
        <Routes>
          <Route path="/" element={ <Navigate to="/dashboard"/> } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(<App />);

