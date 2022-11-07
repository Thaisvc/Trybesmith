import { Router } from 'express';

import ControllerUser from '../controllers/users.controller';

const router = Router();

const controllerUser = new ControllerUser();

router.post('/', controllerUser.createNewUser.bind(controllerUser));

export default router;