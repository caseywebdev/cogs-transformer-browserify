var _ = require('underscore');
var browserify = require('browserify');
var path = require('path');

module.exports = function (file, options, cb) {
  options = _.extend({
    standalone: file.path.split(path.sep).join('-')
  }, options);
  browserify(file.path, options).bundle(function (er, buffer) {
    if (er) return cb(er);
    cb(null, {buffer: buffer});
  });
};
