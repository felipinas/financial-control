import fastify from 'fastify';

const app = fastify();

app.get('/hello', () => {
  return 'hello world';
});

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log('Running on 3333...');
  },
);
