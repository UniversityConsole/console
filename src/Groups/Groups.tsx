import React, {Suspense, useState} from "react";
import Button from "@mui/material/Button";
import {ConsoleHeader} from "../ConsoleHeader";
import {PaginatedTable} from "../DataTable";
import {useNavigate} from "react-router-dom";

export default function Groups() {
  const navigate = useNavigate();

  const consoleActions = (
    <>
      <Button
        variant="contained"
        onClick={() => navigate('/create-group')}
      >Create Group</Button>
    </>
  );

  const accounts = [
    { id: '1', name: "1st Year CTI", role: "Owner"},
    { id: '2', name: "2nd Year CTI", role: "Member"},
    { id: '3', name: "3rd Year CTI", role: "Member"},
  ];

  return (
    <>
      <ConsoleHeader title="Groups" actions={consoleActions}>
        View and manage your groups.
      </ConsoleHeader>
      <PaginatedTable
        columnDefinitions={[
          { id: 'name', head: 'Name', cell: item => item.name },
          { id: 'date', head: 'Role', cell: item => item.role },
        ]}
        items={accounts}
        isLoading={false}
      />
    </>
  );
}