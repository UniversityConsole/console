import {ConsoleHeader} from "../ConsoleHeader";
import * as React from "react";
import {FormEventHandler, useState} from "react";
import {createGroup, CreateGroupsOutput} from "../Groups/createGroupsMock";
import {useNavigate} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styles from "../CreateAccount/styles.scss";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function CreateGroup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [groupId, setGroupId] = useState('');


  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    createGroup({name, description})
      .then((output: CreateGroupsOutput) => {
        setLoading(false);
        setGroupId(output.groupId);
        navigate('/groups');
      });
  };

  return (
    <>
      <ConsoleHeader title="Create Group">
        Register a new group in University Console.
      </ConsoleHeader>
      <Container component={Paper}>
        <Box
          component="form"
          onSubmit={onSubmit}
        >
          <FormControl>
            <TextField
              required
              label="Name"
              fullWidth
              margin="normal"
              size="small"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              label="Description"
              fullWidth
              margin="normal"
              size="small"
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </FormControl>
          <div className={styles.root}>
            <Button variant="contained" type="submit" disabled={isLoading}>
              {isLoading ? 'Creating Group...' : 'Create Group'}
            </Button>
          </div>
        </Box>
      </Container>
    </>
  )
}