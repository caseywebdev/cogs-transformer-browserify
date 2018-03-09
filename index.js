const {promisify} = require('util');
var _ = require('underscore');
var browserify = require('browserify');
var Duplex = require('stream').Duplex;
var path = require('path');

function bufferToStream(buffer) {
  let stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

module.exports = async ({file: {buffer, path: filePath}, options}) => {
  options = _.extend(
    {standalone: filePath.split(path.sep).join('-'), debug: true},
    options
  );

  const package = browserify(bufferToStream(buffer), options);
  return {buffer: await promisify(package.bundle.bind(package))()};
};
