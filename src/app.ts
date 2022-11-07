import express from 'express';
import 'express-async-errors';

import poroductRoutes from './routers/products.routers';
import usersRouters from './routers/users.routes';
import ordersRouters from './routers/orders.routers';

const app = express();

app.use(express.json());

app.use('/products', poroductRoutes);
app.use('/users', usersRouters);
app.use('/orders', ordersRouters);

export default app;