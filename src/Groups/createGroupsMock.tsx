import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

interface CreateGroupsInput {
  readonly name: string;
  readonly description: string;
}

export interface CreateGroupsOutput {
  readonly groupId: string;
}

type CreateGroupsMock = (
  input: CreateGroupsInput
) => Promise<CreateGroupsOutput>;


export const createGroup: CreateGroupsMock = ({
  name,
  description,
 }) => {

  const date: Date = new Date();
  const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const registrationTimestamp: string = date.toLocaleString('en-US', options);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const groupId = self.crypto.randomUUID();
      const groupKey = `uc/group/${groupId}`;
      window.localStorage.setItem(groupKey, JSON.stringify({
        groupId,
        name,
        description,
        registrationTimestamp,
      }));

      resolve({ groupId });
    }, 1000);
  });
};
