import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

interface CreateAccountInput {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
}

export interface CreateAccountOutput {
  readonly accountId: string;
}

type CreateAccountMock = (
  input: CreateAccountInput
) => Promise<CreateAccountOutput>;


export const createAccount: CreateAccountMock = ({
   email,
   firstName,
   lastName,
   password,
 }) => {

  const date: Date = new Date();
  const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const registrationTimestamp: string = date.toLocaleString('en-US', options);

  const accountStatus: string = 'Pending';

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const accountId = self.crypto.randomUUID();
      const accountKey = `uc/account/${accountId}`;
      window.localStorage.setItem(accountKey, JSON.stringify({
        accountId,
        email,
        firstName,
        lastName,
        password,
        registrationTimestamp,
        accountStatus,
      }));

      resolve({ accountId });
    }, 1000);
  });
};
