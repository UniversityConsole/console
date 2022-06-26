import React, {useState, Suspense} from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import Button from "@mui/material/Button";
import {PaginatedTable} from "../DataTable";
import {useNavigate} from "react-router-dom";

export default function Accounts() {
  const navigate = useNavigate();
  const [contactDetailsAccount, setContactDetailsAccount] = useState<string | null>(null);

  const ContactDetails = React.lazy(() => import(/* webpackChunkName: "contactDetails" */'./ContactDetails'))
  const consoleActions = (
    <>
      <Button
        variant="contained"
        onClick={() => navigate('/create-account')}
      >Create Account</Button>
    </>
  );

  const accounts = [
    { id: '1', name: "Torsten Paulsson", date: "Sep 5, 2021", status: "Active"},
    { id: '2', name: "Anita Grigore", date: "June 10, 2022", status: "Active"},
    { id: '3', name: "Victor Barbu", date: "June 10, 2022", status: "Pending"},
    { id: '4', name: "John Doe", date: "Jan 12, 2020", status: "Deactivated"},
  ];

  return (
    <>
      <ConsoleHeader title="Accounts" actions={consoleActions}>
        View and manage the user accounts registered on University Console.
      </ConsoleHeader>
      <PaginatedTable
        columnDefinitions={[
          { id: 'name', head: 'Name', cell: item => item.name },
          { id: 'date', head: 'Registration Date', cell: item => item.date },
          { id: 'status', head: 'Status', cell: item => item.status },
          { id: 'actions', head: '', cell: item => (
            <Button
              variant="text"
              onClick={() => setContactDetailsAccount(item.id)}
            >
              Contact Details
            </Button>
          ) },
        ]}
        items={accounts}
        isLoading={false}
      />

      {contactDetailsAccount !== null &&
        <Suspense fallback={<div>Loading...</div>}>
          <ContactDetails
            accountId={contactDetailsAccount}
            onClose={() => setContactDetailsAccount(null)}
          />
        </Suspense>
      }
    </>
  );
}