import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { PORT } from './constants/env.js';
import { getEventsController } from './controllers/events.js';

const app = express();

export const startServer = () => {
  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });
  app.get('/events', getEventsController);

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${Number(PORT)}`);
  });
};
