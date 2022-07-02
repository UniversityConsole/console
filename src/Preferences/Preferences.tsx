import Typography from "@mui/material/Typography";
import React, {useEffect, useState} from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {LocalStorageEndpoint} from "../AccountsEndpoint/LocalStorageEndpoint";
import {TextValueEditor} from "./TextValueEditor";
import {Account} from "../AccountsEndpoint/types";

export default function Preferences() {
  const [preferredName, setPreferredName] = useState('');
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  const onSave = (value: string) => {
    const accountId = window.localStorage.getItem('uc/me');
    if (accountId === null) {
      throw new Error('No account id found');
    }

    LocalStorageEndpoint.updatePreferredName({accountId, preferredName: value})
      .then(() => {
        setIsEditing(null);
        setPreferredName(value);
      });
  };

  useEffect(() => {
    const accountId = window.localStorage.getItem('uc/me');
    if (accountId === null) {
      throw new Error('No account id found');
    }

    LocalStorageEndpoint.getAccount(accountId)
      .then((account: Account) => {
        setPreferredName(account.preferredName || '');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <ConsoleHeader title="Preferences">
        View and edit personal information and your preferences about University Console.
      </ConsoleHeader>
      <Typography variant="h2">
        Profile
      </Typography>
      <Divider/>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          Full name
        </Grid>
        <Grid item xs={4}>
          Iulia-Anita Grigore
        </Grid>
      </Grid>
      <Divider/>
      <Grid container spacing={3} >
        <Grid item xs={4}>
          Preferred Name
        </Grid>
        {isEditing === 'preferredName' ?
          <Grid item xs={8}>
            <TextValueEditor
                currentValue={preferredName}
                onSave={onSave}
                onCancel={() => setIsEditing(null)}/>
          </Grid> :
          <>
            <Grid item xs={4}>
              {isLoading ?
                <Typography variant="body1"> Loading... </Typography> :
                preferredName}
            </Grid>
            <Grid item xs={4}>
              <Button variant="text" onClick={() => setIsEditing("preferredName")}>
                Update
              </Button>
            </Grid>
          </>
        }

      </Grid>
      <Divider/>
      <Grid container spacing={3} sx={{mb: '30px'}}>
        <Grid item xs={4}>
          Email
        </Grid>
        <Grid item xs={4}>
          iulia_anita.grigore@stud.acs.upb.ro
        </Grid>
      </Grid>
      <Typography variant="h2">
        Security
      </Typography>
      <Divider />
      <Grid container spacing={3} sx={{mb: '30px'}}>
        <Grid item xs={4}>
          Password
        </Grid>
        <Grid item xs={4}>
          Changed one week ago
        </Grid>
        <Grid item xs={4}>
          <Button variant="text">
            Update
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h2">
        Account
      </Typography>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          Language
        </Grid>
        <Grid item xs={4}>
          English
        </Grid>
        <Grid item xs={4}>
          <Button variant="text">
            Update
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          Date format
        </Grid>
        <Grid item xs={4}>
          DD-MM-YYYY
        </Grid>
        <Grid item xs={4}>
          <Button variant="text">
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  )
}