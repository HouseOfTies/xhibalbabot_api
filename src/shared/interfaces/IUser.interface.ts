export interface IUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  language_code?: string;
  permission?: number;
  //token?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: boolean;
  coins?: number;
}
