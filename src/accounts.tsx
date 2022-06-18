import React from "react";
import {ConsoleHeader} from "./ConsoleHeader";
import {Button} from "@mui/material";
import PaginatedTable from "./DataTable/table";

export default function Accounts() {
  const consoleActions = (
    <>
      <Button variant="contained">Create Account</Button>
    </>
  );

  const accounts = [
    { id: '123', firstName: 'Victor', lastName: 'Barbu', email: 'vicbarbu@pm.me' },
    { id: '234', firstName: 'Anita', lastName: 'Grigore', email: 'anita.grigore1@gmail.com' },
    { id: '345', firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: '2345', firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
  ];

  return (
    <>
      <ConsoleHeader title="Accounts" actions={consoleActions}>
        View and manage the user accounts registered on University Console.
      </ConsoleHeader>
      <PaginatedTable
        columnDefinitions={[
          { id: 'id', head: 'ID', cell: item => item.id },
          { id: 'firstName', head: 'First Name', cell: item => item.firstName },
          { id: 'lastName', head: 'Last Name', cell: item => item.lastName },
          { id: 'actions', head: '', cell: () => (
            <Button variant="text">Contact Details</Button>
            ) },
        ]}
        items={accounts}
        isLoading={false}
      />
    </>
  );
}