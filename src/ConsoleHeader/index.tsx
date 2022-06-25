import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from './styles.scss';

export interface Props {
  readonly title: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly actions?: React.ReactNode;
}

export function ConsoleHeader(props: Props) {
  return (
    <div className={styles.root}>
      <div>
        <Typography variant="h1">{props.title}</Typography>
        {props.children && <Typography variant="body1">{props.children}</Typography>}
      </div>
      {props.actions && <div className={styles.actions}>
        {props.actions}
      </div>}
    </div>
  );
}