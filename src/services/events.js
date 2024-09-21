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
