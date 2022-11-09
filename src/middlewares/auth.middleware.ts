import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../utils/http.exception';

export default function AuthenticMiddle(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;
    if (!token) {
      throw new HttpException(401, 'Token not found');
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = decode;
    next();
  } catch (error) {
    console.log(error);
    throw new HttpException(401, 'Invalid token');
  }
}