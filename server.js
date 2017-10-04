const _ = require('lodash');
const merger = require('./merger');
const parent = require('./index.js');

module.exports = _.mergeWith(parent, {
  env: {
    node: true
  }
}, merger);
