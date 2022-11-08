import { RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces/login.interfece';
import msqlConn from './connection';

export default class LoginModel {
  private connection = msqlConn;

  public async login(user:ILogin):Promise<IUser[]> {
    const { username, password } = user;
    const [result] = await this.connection.execute<(
    IUser[] & RowDataPacket[])>(
      ' SELECT * FROM Trybesmith.Users WHERE username = ?  AND password = ?',
      [username, password],
      );
      
    return result;
  }
}