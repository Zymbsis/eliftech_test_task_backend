import mongoose from 'mongoose';
import {
  MONGODB_DB,
  MONGODB_PASSWORD,
  MONGODB_URL,
  MONGODB_USER,
} from '../constants/env.js';

export const initMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
