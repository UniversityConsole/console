import {Account, AccountEndpoint, AccountState, CreateAccountInput, CreateAccountOutput,} from './types';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export const LocalStorageEndpoint: AccountEndpoint = {
  createAccount({email, firstName, lastName, password}: CreateAccountInput): Promise<CreateAccountOutput> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const accountId = self.crypto.randomUUID();
        const accountKey = `uc/account/${accountId}`;

        const date: Date = new Date();
        const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const registrationTimestamp: string = date.toLocaleString('en-US', options);
        const accountState: AccountState = AccountState.PendingActivation;

        window.localStorage.setItem(
          accountKey,
          JSON.stringify({
            accountId,
            email,
            firstName,
            lastName,
            password,
            accountState,
            registrationTimestamp,
          } as Account)
        );

        resolve({ accountId });
      }, 1000);
    });
  },
  updatePreferredName({accountId, preferredName}): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const key = `uc/account/${accountId}`;
        const account: Account = JSON.parse(window.localStorage.getItem(key) || '');
        const modifiedAccount: Account = { ...account, preferredName };
        window.localStorage.setItem(key, JSON.stringify(modifiedAccount));

        resolve();
      }, 500);
    });
  },
  getAccount(accountId): Promise<Account> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const key = `uc/account/${accountId}`;
        const account: Account = JSON.parse(window.localStorage.getItem(key) || '');

        resolve(account);
      }, 500);
    });
  }
};
