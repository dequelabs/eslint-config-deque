const _ = require('lodash');

module.exports = (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return _.uniq(objValue.concat(srcValue));
  }
};
