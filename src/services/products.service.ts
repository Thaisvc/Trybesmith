import { IProducts, IProductsID } from '../interfaces/products.interfece';

import ModelProducts from '../models/products.model';
import { shemaProducts } from '../validation/schema';
import validation from '../validation/validate';
// import HttpException from '../utils/http.exception';

export default class ProductService {
  public modelProducts = new ModelProducts();

  public async createProduct(newProduct:IProducts): Promise<IProductsID> {
    console.log(newProduct, 'service');
    
    await validation(shemaProducts, newProduct);
    return this.modelProducts.create(newProduct);
  }

  public async allProduct():Promise<IProductsID[]> {
    const getAll = await this.modelProducts.getproductAll();
    return getAll;
  }
}
