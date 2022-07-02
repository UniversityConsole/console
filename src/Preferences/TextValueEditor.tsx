import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";

interface Props {
  readonly currentValue: string;
  readonly onSave: (value: string) => void;
  readonly onCancel: () => void;
}

export const TextValueEditor = (props: Props) => {
  const [value, setValue] = useState(props.currentValue);

  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={4}>
        <TextField
            fullWidth
            margin="normal"
            size="small"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}/>
      </Grid>
      <Grid item xs={4}>
        <div style={{display: "flex"}}>
            <Button variant="text" onClick={() => props.onCancel()}>
                Cancel
            </Button>
            <Button variant="text" onClick={() => props.onSave(value)}>
                Save
            </Button>
        </div>
      </Grid>
    </Grid>

  )
}