import Joi from 'joi';

const shemaProducts: Joi.Schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const shemaLogin: Joi.Schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const schemaUser: Joi.Schema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).integer().required(),
  password: Joi.string().min(8).required(),
});
export { shemaLogin, shemaProducts, schemaUser };
