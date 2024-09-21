import { env } from '../utils/env.js';

const MONGODB_INIT = {
  MONGODB_USER: env('MONGODB_USER'),
  MONGODB_PASSWORD: env('MONGODB_PASSWORD'),
  MONGODB_URL: env('MONGODB_URL'),
  MONGODB_DB: env('MONGODB_DB'),
};

export const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } =
  MONGODB_INIT;
export const PORT = env('PORT', 3000);
