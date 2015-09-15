'use strict';

/**
 * @ngdoc directive
 * @name ngappApp.directive:navLinks
 * @description
 * # navLinks
 */
angular.module('ngappApp')
  .directive('navLinks', function () {
    return {
      restrict: 'E',
      template: '<li class=""><a href="#/">Home</a></li>' +
      '<li class="" ng-show="!authenticated"><a href="#/signup">Sign Up</a></li>' +
      '<li class="" ng-show="authenticated"><a ng-click="logout();">Log Out</a></li>' +
      '<li class="" ng-show="authenticated"><a href="#/profile">Profile</a></li>' +
      '<li class="" ng-show="authenticated"><a href="#/dashboard">Dashboard</a></li>' +
      '<li class="" ng-show="!authenticated"><a href="#/login">Log In</a></li>'
    };
  });
