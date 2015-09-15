'use strict';

/**
 * @ngdoc service
 * @name ngappApp.Notify
 * @description
 * # Notify
 * Service in the ngappApp.
 */
angular.module('ngappApp')
  .service('Notify', function ($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var vm = this; 
    vm.new = function (obj) {
      $window.Materialize.toast(obj.message, 3000);
      console.log(obj); 
    };
    vm.simpleNew = function (string) {
      $window.Materialize.toast(string, 3000);
      console.log(obj); 
    };
  });
