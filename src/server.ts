import app from './app';
import { env } from './env';

app.listen(
  {
    port: env.PORT,
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
  },
  () => console.log(`Running on ${env.PORT}`),
);
