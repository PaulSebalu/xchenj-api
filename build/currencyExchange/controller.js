"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.priceConversion = exports.currencyListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _requestPromise = _interopRequireDefault(require("request-promise"));

// FIXME: deprecated library
_dotenv["default"].config(); // eslint-disable-next-line consistent-return


var priceConversion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var requestOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            requestOptions = {
              method: "GET",
              uri: "".concat(process.env.API_DOMAIN, "/v1/tools/price-conversion"),
              qs: {
                amount: req.body.amount,
                id: req.body.baseCurrency,
                convert: req.body.exchangeCurrency
              },
              headers: {
                "X-CMC_PRO_API_KEY": "".concat(process.env.X_CMC_PRO_API_KEY)
              },
              json: true,
              gzip: true
            };
            (0, _requestPromise["default"])(requestOptions).then(function (response) {
              return res.status(200).json(response.data);
            })["catch"](function (error) {
              res.status(400).json(error.error);
            });
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function priceConversion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // eslint-disable-next-line consistent-return


exports.priceConversion = priceConversion;

var currencyListing = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var requestOptions;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            requestOptions = {
              method: "GET",
              uri: req.query.currency === "cryptos" ? "".concat(process.env.API_DOMAIN, "/v1/cryptocurrency/map") : "".concat(process.env.API_DOMAIN, "/v1/fiat/map"),
              headers: {
                "X-CMC_PRO_API_KEY": "".concat(process.env.X_CMC_PRO_API_KEY)
              },
              json: true,
              gzip: true
            };
            (0, _requestPromise["default"])(requestOptions).then(function (response) {
              return res.status(200).json(response.data.slice(0, 4));
            })["catch"](function (error) {
              res.status(400).json(error.error);
            });
            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));

  return function currencyListing(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.currencyListing = currencyListing;