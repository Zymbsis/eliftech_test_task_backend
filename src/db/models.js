import { model, Schema } from 'mongoose';

const participantsSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    infoSource: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const eventsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    participants: [participantsSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const EventsCollection = model('events', eventsSchema);
