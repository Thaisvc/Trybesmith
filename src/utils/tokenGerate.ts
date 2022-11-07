import jsonwebtoken from 'jsonwebtoken';

import { IUsersID } from '../interfaces/users.interfeces';

export default class Token {
  public jwt = jsonwebtoken;

  public generateToken(user: IUsersID) {
    const payload = { id: user.id, username: user.username }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}
