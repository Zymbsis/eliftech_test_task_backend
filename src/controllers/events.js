import { getAllEvents } from '../services/events.js';

export const getEventsController = async (req, res) => {
  const events = await getAllEvents();

  res.json({
    status: 200,
    message: 'Successfully found events!',
    data: events,
  });
};
