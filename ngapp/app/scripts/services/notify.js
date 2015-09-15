'use strict';

/**
 * @ngdoc service
 * @name ngappApp.Notify
 * @description
 * # Notify
 * Service in the ngappApp.
 */
angular.module('ngappApp')
  .service('Notify', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var vm = this; 
    vm.new = function (obj) {
      console.log(obj); 
    };
  });
