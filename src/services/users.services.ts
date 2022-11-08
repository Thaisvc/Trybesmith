import UserModel from '../models/users.model';
import { IUsers } from '../interfaces/users.interfeces';
import HttpException from '../utils/http.exception';
import GenerateToken from '../utils/tokenGerateNewUser';
import validation from '../validation/validate';
import { schemaUser } from '../validation/schema'; 

export default class UserService {
  public userModel = new UserModel();

  public Token = new GenerateToken();

  public async createUser(user:IUsers) {
    await validation(schemaUser, user);
    const newUser = await this.userModel.create(user);
    if (newUser === null) {
      throw new HttpException(400, 'Invalid');
    }
    const token = this.Token.generateToken(newUser);
    return token;
  }
}