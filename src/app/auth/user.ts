export  class User {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  roles?: string[];
  userDetails?: UserDetails;
}

export class UserDetails {
  id: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  gsmNo?: string;
}

export const Roles: string[] = ['ADMIN', 'CLIENT'];
