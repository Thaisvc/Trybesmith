import express from 'express';
import 'express-async-errors';

import poroductRoutes from './routers/products.routers';
import usersRouters from './routers/users.routes';

const app = express();

app.use(express.json());

app.use('/products', poroductRoutes);
app.use('/users', usersRouters);

export default app;