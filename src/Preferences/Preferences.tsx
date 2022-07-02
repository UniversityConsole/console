import Typography from "@mui/material/Typography";
import React from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function Preferences() {
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
          Preferred name
        </Grid>
        <Grid item xs={4}>
          Anita Grigore
        </Grid>
        <Grid item xs={4}>
          <Button variant="text">
            Update
          </Button>
        </Grid>
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