import * as React from "react";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, List} from "@mui/material";
import {BasicTable} from "../DataTable/BasicTable";

interface Props<T> {
  readonly accountId: string;
  readonly onClose: () => void;
}

export function ContactDetails<T>(props: Props<T>) {
  const { accountId, onClose } = props;
  const [data, setData] = useState({email: 'johndoe@example.com', name: 'John Doe'});

  const tableItems = [
    { label: 'Name', value: data.name },
    { label: 'Email', value: data.email },
  ];

  return (
    <Dialog open={true}>
      <DialogTitle>Contact Details</DialogTitle>
      <DialogContent>
        <BasicTable
          columnDefinitions={[
            {
              id: 'key',
              head: null,
              cell: i => <strong>{i.label}</strong>,
            },
            {
              id: 'value',
              head: null,
              cell: i => i.value,
            }
          ]}
          isLoading={false}
          showHeading={false}
          items={tableItems}/>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={onClose}>
          Dismiss
        </Button>
      </DialogActions>
    </Dialog>
  );
}