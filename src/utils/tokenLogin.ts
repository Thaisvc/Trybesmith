import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../interfaces/login.interfece';

export default class TokenLogin {
  public jwt = jsonwebtoken;

  public tokenCreate(data:ILogin) {
    console.log(data);
    
    const payload = { username: data.username, password: data.password }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}