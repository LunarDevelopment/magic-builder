'use strict';

/**
 * @ngdoc directive
 * @name ngappApp.directive:helloUser
 * @description
 * # helloUser
 */
angular.module('ngappApp')
  .directive('helloUser', function () {
    return {
      restrict: "E",
      template: '<ul ng-show="$storage.application_local_user.displayName" class="left hide-on-med-and-down">' +
        '<li class="">' +
        '<a href="#/profile" >Hello {{$storage.application_local_user.displayName}}</a>' +
        '</li>' +
        '</ul>'
    };
  });
