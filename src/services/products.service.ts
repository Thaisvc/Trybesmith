import { IProducts, IProductsID } from '../interfaces/products.interfece';

import ModelProducts from '../models/products.model';
// import HttpException from '../utils/http.exception';

export default class ProductService {
  public modelProducts = new ModelProducts();

  public createProduct(newProduct:IProducts): Promise<IProductsID> {
    return this.modelProducts.create(newProduct);
  }

  public async allProduct():Promise<IProductsID> {
    const getAll = await this.modelProducts.getproductAll();
    return getAll;
  }
}
