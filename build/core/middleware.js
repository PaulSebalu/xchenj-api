"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludeMethods = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

/* eslint-disable consistent-return */
_dotenv["default"].config(); // eslint-disable-next-line import/prefer-default-export


var excludeMethods = function excludeMethods(req, res, next) {
  // NOTE: Exclude TRACE and TRACK methods to avoid XST attacks.
  var allowedMethods = ["OPTIONS", "HEAD", "CONNECT", "GET", "POST", "PUT", "DELETE", "PATCH"];

  if (!allowedMethods.includes(req.method)) {
    res.status(405).send({
      error: "The request HTTP method, ".concat(req.method, ", is not allowed.")
    });
  }

  next();
};

exports.excludeMethods = excludeMethods;