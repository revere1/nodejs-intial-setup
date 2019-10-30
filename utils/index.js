const HttpUtil = require('./HttpUtil');
const db = require('./db');
const isNumber = num => /^\d+$/.test(num);

module.exports = {
  HttpUtil,
  db,
  isNumber,
};
