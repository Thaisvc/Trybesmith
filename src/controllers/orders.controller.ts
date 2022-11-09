import { Request, Response } from 'express';
import ServiceOrders from '../services/orders.service';

export default class OrdersService {
  public serviceOrders = new ServiceOrders();

  public async allRequest(req: Request, res: Response) {
    const getAll = await this.serviceOrders.getOrders();
    res.status(200).json(getAll);
  }

  public async createNew(req:Request, res: Response) {
    const { productsIds, user } = req.body;
    console.log('aki');

    const userId = user.id;
    const create = await this.serviceOrders.createOrder(productsIds, userId);

    res.status(201).json(create);
  }
}
