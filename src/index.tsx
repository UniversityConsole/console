import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

import * as styles from './test.scss';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className={styles.counter}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(<Counter />);

