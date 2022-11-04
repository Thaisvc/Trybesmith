import { ResultSetHeader } from 'mysql2';
import msqlConn from './connection';

import { IProducts, IProductsID } from '../interfaces/products.interfece';

export default class ProductsModel {
  private connection = msqlConn;

  public async create(product: IProducts): Promise<IProductsID> {
    const { name, amount } = product;
    console.log(name, amount);
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
   
    const { insertId } = result;
    return { id: insertId, ...product };
  }
}