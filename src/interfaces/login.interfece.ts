export interface ILogin {
  username: string;
  password: string;
}

export interface IUserLogin {
  username: string;
  classe: string;
  level: number;
  password?: string;
}

export interface IUser extends IUserLogin {
  id: number;
}