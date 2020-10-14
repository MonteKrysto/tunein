import Joi from "@hapi/joi";

/**
 * Validation for a stat record
 */
export const createStatSchema = Joi.object().keys({
	station: Joi.string().required(),
	duration: Joi.number().required(),
	tagUsed: Joi.string(),
	user: Joi.string().required(),
});
