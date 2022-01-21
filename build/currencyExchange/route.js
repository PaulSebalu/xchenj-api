"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("./controller");

var _middleware = require("./middleware");

var currencyExchangeRoute = (0, _express.Router)();
currencyExchangeRoute.get("/listing", _controller.currencyListing);
currencyExchangeRoute.post("/convert", _middleware.validateConversion, _controller.priceConversion);
var _default = currencyExchangeRoute;
exports["default"] = _default;