import { Request, Response } from 'express';
import ServiceUsers from '../services/users.services';

export default class UserServices {
  public serviceUsers = new ServiceUsers();

  public async createNewUser(req: Request, res:Response) {
    const newUser = req.body;
    const token = await this.serviceUsers.createUser(newUser);
    res.status(201).json({ token });
  }
}