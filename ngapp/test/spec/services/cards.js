'use strict';

describe('Service: cards', function () {

  // load the service's module
  beforeEach(module('ngappApp'));

  // instantiate service
  var cards;
  beforeEach(inject(function (_cards_) {
    cards = _cards_;
  }));

  it('should do something', function () {
    expect(!!cards).toBe(true);
  });

});
