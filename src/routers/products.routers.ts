import { Router } from 'express';
import ControllerProduct from '../controllers/product.controller';

const router = Router();
const controllerProduct = new ControllerProduct();

router.post('/', controllerProduct.createNewProduct.bind(controllerProduct));
router.get('/', controllerProduct.getAllProduct.bind(controllerProduct));

export default router;