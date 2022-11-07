import { ResultSetHeader } from 'mysql2';
import msqlConn from './connection';

import { IUsers, IUsersID } from '../interfaces/users.interfeces';

export default class UserModel {
  private connection = msqlConn;

  public async create(newUser: IUsers): Promise<IUsersID> {
    const { username, classe, level, password } = newUser;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?) ',
      [username, classe, level, password],
    );

    const { insertId } = result;
    return { id: insertId, ...newUser };
  }
}