'use strict';

/**
 * @ngdoc directive
 * @name ngappApp.directive:cardImage
 * @description
 * # cardImage
 */
angular.module('ngappApp')
  .directive('cardImage', function () {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      scope: {name: "=",
             set: "="},
      template: '<img class="center-align" ng-src="images/{{set}}/{{name}}.full.jpg" alt="{{name}} from {{set}}" />'
    };
  });
