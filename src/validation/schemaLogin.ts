import Joi from 'joi';

const shemaLogin: Joi.Schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default { shemaLogin };
