"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateConversion = void 0;

var _validator = require("./validator");

var _validator2 = _interopRequireDefault(require("../core/validator"));

/* eslint-disable consistent-return */
// eslint-disable-next-line import/prefer-default-export
var validateConversion = function validateConversion(req, res, next) {
  return (0, _validator2["default"])(req, res, next, _validator.conversionSchema);
};

exports.validateConversion = validateConversion;