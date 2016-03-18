//mongo
var db = require('monk')(process.env.IP+ '/test');

exports.get = function() {
  return db;
}
