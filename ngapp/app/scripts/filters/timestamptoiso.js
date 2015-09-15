'use strict';

/**
 * @ngdoc filter
 * @name ngappApp.filter:timestampToISO
 * @function
 * @description
 * # timestampToISO
 * Filter in the ngappApp.
 */
angular.module('ngappApp')
  .filter('timestampToISO', function() {
    return function(input) {
      input = new Date(input).toISOString();
      return input;
    };
  });
