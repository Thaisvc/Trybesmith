import { ResultSetHeader, RowDataPacket } from 'mysql2';
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
    console.log(result);
   
    const { insertId } = result;
    return { id: insertId, ...product };
  }

  public async getproductAll(): Promise<IProductsID[]> { // COMO E ASSICRONA VAI ME RETORNA UMA PROMISSE  Promise<IProductsID[] COM IProductsID Q É UM ARRAY
    const [result] = await this.connection.execute<IProductsID[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return result; // POSSO TIRAR execute<IProductsID[] & RowDataPacket[]> E DIZER Q O RETORNO VAI SER RESULT AS IProductsID DIZENDO Q ELE VAI RETORNA DADOS COM A ESTRUTURA DE IProductsID  NAO E A MELHOR OPÇ USAMOS O GENERIC
  }
}