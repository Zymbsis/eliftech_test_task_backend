import { getAllEvents } from '../services/events.js';
import { parsePaginationParams } from '../utils/pagination.js';

export const getEventsController = async (req, res, next) => {
  const { query } = req;
  const { page, perPage } = parsePaginationParams(query);

  try {
    const events = await getAllEvents({ page, perPage });

    res.json({
      status: 200,
      message: 'Successfully found events!',
      data: events,
    });
  } catch (error) {
    next(error);
  }
};
