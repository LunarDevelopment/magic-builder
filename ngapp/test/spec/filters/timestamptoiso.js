'use strict';

describe('Filter: timestampToISO', function () {

  // load the filter's module
  beforeEach(module('ngappApp'));

  // initialize a new instance of the filter before each test
  var timestampToISO;
  beforeEach(inject(function ($filter) {
    timestampToISO = $filter('timestampToISO');
  }));

  it('should return the input prefixed with "timestampToISO filter:"', function () {
    var text = 'angularjs';
    expect(timestampToISO(text)).toBe('timestampToISO filter: ' + text);
  });

});
