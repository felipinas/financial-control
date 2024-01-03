import fastify from 'fastify';
import fastifyCookie from '@fastify/cookie';

import { env } from './env';

import { transactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(fastifyCookie);

app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url}`);
});

app.register(transactionsRoutes, {
  prefix: '/transactions',
});

app.listen(
  {
    port: env.PORT,
  },
  () => {
    console.log('Running...');
  },
);
