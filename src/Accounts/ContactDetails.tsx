import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {BasicTable} from "../DataTable";

interface Props<T> {
  readonly accountId: string;
  readonly onClose: () => void;
}

export default function ContactDetails<T>(props: Props<T>) {
  const { accountId, onClose } = props;
  const [data, setData] = useState({email: 'paulsson@example.com', name: 'Torsten Paulsson'},);

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