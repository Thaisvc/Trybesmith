import { Router } from 'express';
import ControllerProduct from '../controllers/product.controller';

const router = Router();
const controllerProduct = new ControllerProduct();

router.post('/products', controllerProduct.createNewProduct.bind(controllerProduct));

export default router;