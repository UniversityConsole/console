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

  const getGroups = () => {
    let values = [];
    let keys = Object.keys(window.localStorage).filter(key => key.startsWith('uc/group/'));
    let i = keys.length;

    while ( i-- ) {
      values.push(window.localStorage.getItem(keys[i]));
    }

    return values;
  }
  const items = getGroups();

  return (
    <>
      <ConsoleHeader title="Groups" actions={consoleActions}>
        View and manage your groups.
      </ConsoleHeader>
      <PaginatedTable
        columnDefinitions={[
          { id: 'name', head: 'Name', cell: item => JSON.parse(item || '').name },
          { id: 'description', head: 'Description', cell: item => JSON.parse(item || '').description },
          { id: 'role', head: 'Role', cell: () => 'Owner' }
        ]}
        items={items}
        isLoading={false}
      />
    </>
  );
}