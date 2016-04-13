'use strict';

/* global Symbol */

var isNil    = require('is-nil');
var isSymbol = require('is-symbol');


module.exports = function (value) {

  if (typeof value === 'string') {
    return value;
  }

  if (isNil(value)) {
    return '';
  }

  if (isSymbol(value)) {

    var symbolProto    = Symbol ? Symbol.prototype : null;
    var symbolToString = symbolProto ? symbolProto.toString : null;

    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = '' + value;

  return (result === '0' && (1 / value) === -1 / 0) ? '-0' : result;
};
