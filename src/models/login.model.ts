import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/login.interfece';
import msqlConn from './connection';

export default class LoginModel {
  private connection = msqlConn;

  public async login(user:ILogin):Promise<any> {
    const { username, password } = user;
    const [result] = await this.connection.execute<(
    ILogin[] & RowDataPacket[])>(
      ' SELECT * FROM Trybesmith.Users WHERE username = ?  AND password = ?',
      [username, password],
      );
    return result;
  }
}