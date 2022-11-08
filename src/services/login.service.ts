import ModelLogin from '../models/login.model';
import { ILogin } from '../interfaces/login.interfece';
import HttpException from '../utils/http.exception';
import GenerateToken from '../utils/tokenLogin';

export default class LoginService {
  public modelLogin = new ModelLogin();

  public Token = new GenerateToken();

  public async loginBody(user:ILogin) {
    const login = await this.modelLogin.login(user);
    if (login.length === 0) {
      throw new HttpException(401, 'Invalid username or password');
    }
    return this.Token.tokenCreate(login);
  }
}