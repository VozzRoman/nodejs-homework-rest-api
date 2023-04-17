
const Joi = require("joi");

const favoreSchema = Joi.object({
	favorite: Joi.boolean().required(),

 });

 module.exports = favoreSchema;