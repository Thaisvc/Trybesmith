import OrderModel from '../models/orders.model';
import { IOrder } from '../interfaces/orders.interfece';

export default class OrdersServeces {
  public orderModel = new OrderModel();

  public async getOrders():Promise<IOrder[]> {
    const ordersProduct = await this.orderModel.getAll();
    return ordersProduct;
  }
}
