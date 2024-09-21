import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

(async () => {
  await initMongoDB();
  startServer();
})();
