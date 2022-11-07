import { Router } from 'express';
import ControllerOrders from '../controllers/orders.controller';

const controllerOrders = new ControllerOrders();
const router = Router();

router.get('/', controllerOrders.allRequest.bind(controllerOrders));

export default router;
