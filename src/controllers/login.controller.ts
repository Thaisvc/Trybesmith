import { Request, Response } from 'express';
import { ILogin } from '../interfaces/login.interfece';
import ServiceLogin from '../services/login.service';

export default class LoginController {
  public serviceLogin = new ServiceLogin();

  public async authLogin(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;
    const token = await this.serviceLogin.loginBody(body);
    res.status(200).json({ token });
  }
}