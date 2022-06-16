import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';
import * as styles from './test.scss';
import { ThemeProvider } from "@mui/material";
import {buttonTheme} from "./themes/button";
import {Drawer} from "./drawer";

function App() {
  return (
    <div className={styles.container}>
      <Drawer />
      <ThemeProvider theme={buttonTheme}>
        <Button variant='text'>Say Hello</Button>
      </ThemeProvider>
    </div>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(<App />);

