import { Router } from 'express';
import ControllerLogin from '../controllers/login.controller';

const router = Router();
const controllerLogin = new ControllerLogin();
router.post('/', controllerLogin.authLogin.bind(controllerLogin));

export default router;