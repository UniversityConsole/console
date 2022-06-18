import React from "react";
import CustomPaginationActionsTable from "./paginatedTable";
import {ConsoleHeader} from "./ConsoleHeader";
import {Button} from "@mui/material";

export default function Accounts() {
  const consoleActions = (
    <>
      <Button variant="contained">Create Account</Button>
    </>
  );

  return (
    <>
      <ConsoleHeader title="Accounts" actions={consoleActions}>
        View and manage the user accounts registered on University Console.
      </ConsoleHeader>
      <CustomPaginationActionsTable/>
    </>
  );
}