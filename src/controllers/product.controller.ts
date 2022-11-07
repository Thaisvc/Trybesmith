import { Request, Response } from 'express';
import ServiceProduct from '../services/products.service';

export default class ProductController {
  public serviceProduct = new ServiceProduct();

  async createNewProduct(req: Request, res: Response) {
    const product = req.body;
    const created = await this.serviceProduct.createProduct(product);
    res.status(201).json(created);
  }

  async getAllProduct(req:Request, res: Response) {
    const getProduct = await this.serviceProduct.allProduct();
    res.status(200).json(getProduct);
  }
}
