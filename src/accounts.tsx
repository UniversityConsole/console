import {Container, Typography} from "@mui/material";
import React from "react";
import CustomPaginationActionsTable from "./paginatedTable";

export default function Accounts() {
  return (
    <>
      <Container>
        <Typography variant='h1'>
          Accounts
        </Typography>
        <Typography variant='body1'>
          View and manage the user accounts registered on University Console.
        </Typography>
        <CustomPaginationActionsTable/>
      </Container>
    </>
  )
}