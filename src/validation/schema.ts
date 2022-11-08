import Joi from 'joi';

const shemaProducts: Joi.Schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const shemaLogin: Joi.Schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export { shemaLogin, shemaProducts };
