import {Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {ConsoleHeader} from "../ConsoleHeader";

export function CreateAccount() {
  const [permission, setPermission] = useState(null);

  return (
    <>
      <ConsoleHeader title="Create Account">
        Register a new account in University Console.
      </ConsoleHeader>
      <Container component={Paper}>
        <Grid container>
          <Grid item md={6}>
            <FormControl>
              <TextField
                required
                label="First Name"
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl>
              <TextField
                required
                label="Last Name"
              />
            </FormControl>
          </Grid>
          <Grid item md={8}>
            <FormControl>
              <TextField
                required
                label="Email"
              />
            </FormControl>
          </Grid>
          <Grid item md={8}>
            <FormControl>
              <InputLabel>Permissions</InputLabel>
              <TextField select required>
                <MenuItem>Professor</MenuItem>
                <MenuItem>Teachers' Assistant</MenuItem>
                <MenuItem>Student</MenuItem>
                <MenuItem>Administrator</MenuItem>
                <MenuItem>Custom</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}