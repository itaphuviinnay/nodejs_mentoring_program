"use strict";

var _config = _interopRequireDefault(require("./config/config"));

var _index = require("./models/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_config["default"]);
var user = new _index.User();
var product = new _index.Product();