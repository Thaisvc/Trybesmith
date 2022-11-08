import ModelLogin from '../models/login.model';
import { ILogin, IUser } from '../interfaces/login.interfece';
import HttpException from '../utils/http.exception';
import GenerateToken from '../utils/tokenLogin';
import validation from '../validation/validate';
import shema from '../validation/schemaLogin';

export default class LoginService {
  public modelLogin = new ModelLogin();

  public Token = new GenerateToken();

  async validateLogin(login: ILogin): Promise<IUser> {
    const { password } = login;
    const user: IUser | undefined = await this.modelLogin.login(login);
    if (!user || user.password !== password) {
      throw new HttpException(401, 'Username or password invalid');
    }
    return user;
  }

  public async loginBody(loginData: ILogin) {
    await validation(shema.shemaLogin, loginData);
    const user = await this.validateLogin(loginData);
    const token = this.Token.tokenCreate(user);
    return token;
  }
}