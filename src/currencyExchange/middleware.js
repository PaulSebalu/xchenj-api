/* eslint-disable consistent-return */
import { conversionSchema } from "./validator";
import schemaValidator from "../core/validator";

// eslint-disable-next-line import/prefer-default-export
export const validateConversion = (req, res, next) =>
  schemaValidator(req, res, next, conversionSchema);
