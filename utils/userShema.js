const Joi = require("joi");
const userSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	password: Joi.string().min(6).required(),
	subscription: Joi.string()

 });

 module.exports = userSchema;