export interface IUser {
  type: 'administrator' | 'user';
  email: string;
  id: string;
  name: string;
}
