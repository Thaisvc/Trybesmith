import express from 'express';
import 'express-async-errors';

import poroductRoutes from './routers/products.routers';
import usersRouters from './routers/users.routes';
import ordersRouters from './routers/orders.routers';
import loginRouters from './routers/login.routers';

const app = express();

app.use(express.json());

app.use('/products', poroductRoutes);
app.use('/users', usersRouters);
app.use('/orders', ordersRouters);
app.use('/login', loginRouters);

export default app;