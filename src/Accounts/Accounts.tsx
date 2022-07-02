import React, {useState, Suspense} from "react";
import {ConsoleHeader} from "../ConsoleHeader";
import Button from "@mui/material/Button";
import {PaginatedTable} from "../DataTable";
import {useNavigate} from "react-router-dom";
import {prettyPrintAccountState} from "../AccountsEndpoint/types";


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

  const accountsFn = () => {
    let values = [];
    let keys = Object.keys(window.localStorage).filter(key => key.startsWith('uc/account/'));
    let i = keys.length;

    while ( i-- ) {
      values.push(window.localStorage.getItem(keys[i]));
    }

    return values;
  }
  const items = accountsFn();

  return (
    <>
      <ConsoleHeader title="Accounts" actions={consoleActions}>
        View and manage the user accounts registered on University Console.
      </ConsoleHeader>
      <PaginatedTable
        columnDefinitions={[
          { id: 'name',
            head: 'Name',
            cell: item => JSON.parse(item!).firstName.concat(' ', JSON.parse(item || '').lastName) },
          { id: 'date',
            head: 'Registration Date',
            cell: item => JSON.parse(item || '').registrationTimestamp },
          { id: 'status',
            head: 'Status',
            cell: item => prettyPrintAccountState(JSON.parse(item || '').accountState) },
          { id: 'actions', head: '', cell: item => (
            <Button
              variant="text"
              onClick={() => setContactDetailsAccount(JSON.parse(item || '').accountId)}
            >
              Contact Details
            </Button>
          ) },
        ]}
        items={items}
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