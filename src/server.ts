import app from './app';
import { env } from './env';

app.listen(
  {
    port: env.PORT,
  },
  () => console.log(`Running on ${env.PORT}`),
);
