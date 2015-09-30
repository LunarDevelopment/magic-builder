'use strict';

describe('Directive: cardImage', function () {

  // load the directive's module
  beforeEach(module('ngappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<card-image></card-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cardImage directive');
  }));
});
