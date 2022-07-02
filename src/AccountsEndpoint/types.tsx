export enum AccountState {
  PendingActivation,
  Active,
  Deactivated,
}

export interface Account {
  readonly accountId: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly accountState: AccountState;
  readonly preferredName?: string;
}

export interface CreateAccountInput {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
}

export interface CreateAccountOutput {
  readonly accountId: string;
}

type CreateAccountFn = (
  input: CreateAccountInput
) => Promise<CreateAccountOutput>;

export interface UpdatePreferredNameInput {
  readonly accountId: string;
  readonly preferredName: string;
}

type UpdatePreferredNameFn = (input: UpdatePreferredNameInput) => Promise<void>;

type GetAccountFn = (input: string) => Promise<Account>;

export interface AccountEndpoint {
  readonly createAccount: CreateAccountFn;
  readonly updatePreferredName: UpdatePreferredNameFn;
  readonly getAccount: GetAccountFn;
}

export const prettyPrintAccountState = (input: AccountState) => {
  switch (input) {
    case AccountState.PendingActivation:
      return 'Pending';
    case AccountState.Active:
      return 'Active';
    case AccountState.Deactivated:
      return 'Deactivated';
  }
}