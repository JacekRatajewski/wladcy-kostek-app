import { User } from '@wka/ui';

export interface IUser extends User {
  email?: string;
  fromGoogle?: boolean;
  accountCreationDate?: Date;
}
