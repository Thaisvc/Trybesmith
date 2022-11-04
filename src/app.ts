import express from 'express';
import 'express-async-errors';

import poroductRoutes from './routers/products.routers';

const app = express();

app.use(express.json());

app.use('/', poroductRoutes);

export default app;