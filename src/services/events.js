import { EventsCollection } from '../db/models.js';

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await EventsCollection.find();
    return events;
  } catch (error) {
    next(error);
  }
};
