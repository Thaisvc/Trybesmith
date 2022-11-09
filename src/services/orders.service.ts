import OrderModel from '../models/orders.model';
import ProductsModel from '../models/products.model';
import { IOrder } from '../interfaces/orders.interfece';

export default class OrdersServeces {
  public orderModel = new OrderModel();

  public productsModel = new ProductsModel();

  public async getOrders(): Promise<IOrder[]> {
    const ordersProduct = await this.orderModel.getAll();
    return ordersProduct;
  }

  public async createOrder(productsIds: number[], userId: number) {
    console.log('aki2');
    const createOrderId = await this.orderModel.create(userId);

    const updateProducts = productsIds.map(async (productId) => {
      await this.productsModel.update(createOrderId, productId);
    });
    await Promise.all(updateProducts);

    return { userId, productsIds };
  }
}
