import { RowDataPacket } from 'mysql2';
import msqlConn from './connection';
import { IOrder } from '../interfaces/orders.interfece';

export default class OrdersModel {
  private connection = msqlConn;

  public async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder[] & RowDataPacket[])>(
      ` SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId,  
      JSON_ARRAYAGG(Trybesmith.Products.id ) AS productsIds
      FROM Trybesmith.Orders 
      INNER JOIN Trybesmith.Products 
      ON Trybesmith.Orders.id = Trybesmith.Products.orderId 
      GROUP BY  Trybesmith.Orders.id`);
    return result;
  }
}