import Joi from 'joi';

export const addParticipantSchema = Joi.object({
  fullName: Joi.string().min(3).max(30).required().messages({
    'string.base': 'fullName should be a string',
    'string.min': 'fullName should have at least {#limit} characters',
    'string.max': 'fullName should have at most {#limit} characters',
    'any.required': 'fullName is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'email should be a string',
    'email.base': 'email should a valid email',
    'any.required': 'email is required',
  }),
  dateOfBirth: Joi.string().min(6).max(10).required().messages({
    'string.base': 'dateOfBirth should be a string',
    'string.min': 'dateOfBirth should have at least {#limit} characters',
    'string.max': 'dateOfBirth should have at most {#limit} characters',
    'any.required': 'dateOfBirth is required',
  }),
  infoSource: Joi.string().valid('Social media', 'Friends', 'Found myself'),
});
