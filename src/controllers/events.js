import {
  addParticipant,
  getAllEvents,
  getEventById,
} from '../services/events.js';
import { parsePaginationParams } from '../utils/pagination.js';
import { parseSortParams } from '../utils/sort.js';

export const getEventsController = async (req, res) => {
  const { query } = req;
  const { page, perPage } = parsePaginationParams(query);
  const { sortOrder, sortBy } = parseSortParams(query);
  const events = await getAllEvents({ page, perPage, sortOrder, sortBy });

  res.json({
    status: 200,
    message: 'Successfully found events!',
    data: events,
  });
};

export const getEventByIdController = async (req, res) => {
  const { eventId } = req.params;
  const event = await getEventById(eventId);

  res.json({
    status: 200,
    message: 'Successfully found event!',
    data: event,
  });
};

export const addParticipantController = async (req, res) => {
  const { eventId } = req.params;
  const payload = req.body;
  const participant = await addParticipant(eventId, payload);

  res.json({
    status: 200,
    message: `Successfully added a participant!`,
    data: participant,
  });
};
