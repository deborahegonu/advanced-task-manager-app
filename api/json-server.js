import jsonServer from 'json-server';

const startJsonServer = () => {
  const server = jsonServer.create();
  const router = jsonServer.router('../db.json');
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server.listen(4000, () => {
    console.log('JSON Server is running');
  });
};

export default startJsonServer;
