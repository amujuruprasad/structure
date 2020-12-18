const Joi = require("joi");

module.exports = {
  login: (login) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    return schema.validate(login);
  },
};
