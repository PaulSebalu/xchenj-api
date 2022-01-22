import Joi from "joi";

// eslint-disable-next-line import/prefer-default-export
export const conversionSchema = Joi.object({
  amount: Joi.number().positive().required().label("amount"),
  baseCurrency: Joi.number()
    .integer()
    .required()
    .positive()
    .label("baseCurrency"),
  exchangeCurrency: Joi.string().required().trim().label("exchangeCurrency"),
});
