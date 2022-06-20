import {Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";
import * as React from "react";
import {ChangeEvent, FormEvent, useState} from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import styles from './styles.scss';

export function CreateAccount() {
  const [permission, setPermission] = useState('');
  const permissions = [
    'Professor', 'TA', 'Student', 'Administrator'
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(permission);
  };

  const handleOnChange= (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPermission(event.target.value);
  };

  return (
    <>
      <ConsoleHeader title="Create Account">
        Register a new account in University Console.
      </ConsoleHeader>
      <Container component={Paper}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <FormControl>
            <TextField
              required
              label="First Name"
              fullWidth
              margin="normal"
              size="small"
              type="text"
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              label="Last Name"
              fullWidth
              margin="normal"
              size="small"
              type="text"
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              label="Email"
              fullWidth
              margin="normal"
              size="small"
              type="email"
            />
          </FormControl>
          <FormControl>
            <TextField
              select
              required
              label="Permission"
              value={permission}
              onChange={handleOnChange}
              size="small"
              helperText="Please select the permission for the account."
            >
              {permissions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
          </FormControl>
          <div className={styles.root}>
            <Button variant="contained" type="submit">Create</Button>
          </div>
        </Box>
      </Container>
    </>
  );
}