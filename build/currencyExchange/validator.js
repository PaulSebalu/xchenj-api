"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conversionSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

// eslint-disable-next-line import/prefer-default-export
var conversionSchema = _joi["default"].object({
  amount: _joi["default"].number().positive().label("amount"),
  baseCurrency: _joi["default"].number().integer().positive().label("baseCurrency"),
  exchangeCurrency: _joi["default"].string().required().trim().label("exchangeCurrency")
});

exports.conversionSchema = conversionSchema;