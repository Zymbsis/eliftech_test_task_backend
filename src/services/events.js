import createHttpError from 'http-errors';
import { EventsCollection } from '../db/models.js';
import { calculatePaginationData } from '../utils/pagination.js';

export const getAllEvents = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;
  const [events, countEvents] = await Promise.all([
    EventsCollection.find().skip(skip).limit(perPage).exec(),
    EventsCollection.countDocuments(),
  ]);
  const paginationData = calculatePaginationData(countEvents, page, perPage);
  return { data: events, ...paginationData };
};

export const getEventById = async (_id) => {
  const event = await EventsCollection.findById(_id);
  if (!event) {
    throw createHttpError(404, 'Event not found');
  }
  return event;
};

export const addParticipant = async (_id, payload, options = {}) => {
  const isExisting = await EventsCollection.find({
    _id,
    'participants.email': payload.email,
  });

  if (isExisting.length) {
    throw createHttpError(409, 'Participant already has a registration');
  }

  const rawResult = await EventsCollection.findByIdAndUpdate(
    { _id },
    { $push: { participants: payload } },
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) {
    throw createHttpError(404, 'Event not found');
  }

  const participant =
    rawResult.value.participants[rawResult.value.participants.length - 1];

  return participant;
};
