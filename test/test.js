var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.js': {
      path: 'test/input.js',
      buffer: helper.getFileBuffer('test/output.js'),
      hash: helper.getFileHash('test/output.js'),
      requires: [{
        path: 'test/input.js',
        hash: helper.getFileHash('test/input.js')
      }],
      links: [],
      globs: []
    },
    'test/error.js': Error
  }
});
