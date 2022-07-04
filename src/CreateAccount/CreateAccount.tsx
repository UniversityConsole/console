import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {ChangeEvent, FormEventHandler, useState} from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import styles from './styles.scss';
import { CreateAccountOutput } from "../AccountsEndpoint/types";
import {useNavigate} from "react-router-dom";
import {LocalStorageEndpoint} from "../AccountsEndpoint/LocalStorageEndpoint";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [permission, setPermission] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [accountId, setAccountId] = useState('');

  const permissions = [
    'Professor', 'TA', 'Student', 'Administrator'
  ]

  const handleOnChange= (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPermission(event.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    LocalStorageEndpoint.createAccount({email, firstName, lastName, password})
      .then((output: CreateAccountOutput) => {
        setLoading(false);
        setAccountId(output.accountId);
        navigate('/accounts');
      });
  };

  return (
    <>
      <ConsoleHeader title="Create Account">
        Register a new account in University Console.
      </ConsoleHeader>
      <Container component={Paper}>
        <Box
          component="form"
          onSubmit={onSubmit}
        >
          <FormControl>
            <TextField
              required
              label="First Name"
              fullWidth
              margin="normal"
              size="small"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={e => setLastName(e.target.value)}
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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              label="Password"
              fullWidth
              margin="normal"
              size="small"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
            <Button variant="contained" type="submit" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
}