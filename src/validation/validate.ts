import Joi from 'joi';
import HttpException from '../utils/http.exception';
import { mapError } from '../utils/erroMap';

export default function validation(schema: Joi.Schema, data: object) {
  const { error, value } = schema.validate(data);
  if (error) {
    throw new HttpException(mapError(error.message), error.message);
  }
  return value;
}