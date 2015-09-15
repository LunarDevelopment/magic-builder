'use strict';

describe('Directive: hyperButton', function () {

  // load the directive's module
  beforeEach(module('ngappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hyper-button></hyper-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hyperButton directive');
  }));
});
