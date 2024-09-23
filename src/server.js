import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { PORT } from './constants/env.js';
import {
  addParticipantController,
  getEventByIdController,
  getEventsController,
} from './controllers/events.js';
import { ctrlWrapper } from './middlewares/ctrlWrapper.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { isValidId } from './middlewares/isValid.js';
import { validateBody } from './middlewares/validateBody.js';
import { addParticipantSchema } from './validation/events.js';

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

  app.get('/events', ctrlWrapper(getEventsController));
  app.get('/events/:eventId', isValidId, ctrlWrapper(getEventByIdController));
  app.patch(
    '/events/:eventId',
    isValidId,
    validateBody(addParticipantSchema),
    ctrlWrapper(addParticipantController),
  );

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${Number(PORT)}`);
  });
};
