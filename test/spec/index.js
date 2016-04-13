'use strict';

var expect = require('chai').expect;


describe('to-string', function () {

  var toString = require('../../');

  it('common test', function () {
    expect(toString()).to.be.equal('');
    expect(toString(null)).to.be.equal('');
    expect(toString(0)).to.be.equal('0');
    expect(toString(-0)).to.be.equal('-0');
    expect(toString('abc')).to.be.equal('abc');

    expect(toString([1, 2, 3])).to.be.equal('1,2,3');
  });
});
