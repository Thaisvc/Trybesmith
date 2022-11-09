import { Router } from 'express';
import ControllerOrders from '../controllers/orders.controller';
import AuthenticMiddle from '../middlewares/auth.middleware';

const controllerOrders = new ControllerOrders();
const router = Router();

router.get('/', controllerOrders.allRequest.bind(controllerOrders));
router.post('/', AuthenticMiddle, controllerOrders.createNew.bind(controllerOrders));

export default router;
