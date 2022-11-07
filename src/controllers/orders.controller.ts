import { Request, Response } from 'express';
import ServiceOrders from '../services/orders.service';

export default class OrdersService {
  public serviceOrders = new ServiceOrders();

  public async allRequest(req: Request, res: Response) {
    const getAll = await this.serviceOrders.getOrders();
    res.status(200).json(getAll);
  }
}
