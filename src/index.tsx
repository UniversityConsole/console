import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';

import * as styles from './test.scss';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className={styles.counter}>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(<Counter />);

