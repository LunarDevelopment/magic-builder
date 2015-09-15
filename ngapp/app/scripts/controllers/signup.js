'use strict';

/**
 * @ngdoc function
 * @name ngappApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the ngappApp
 */
angular.module('ngappApp')
  .controller('SignupCtrl', function ($scope, $auth, $rootScope, Notify) {
    var vm = this;
    vm.signup = function () {
      $auth.signup({
        displayName: vm.displayName,
        email: vm.email,
        department: vm.department,
        password: vm.password
      }).then(function () {
        $rootScope.authenticated = true;
        Notify.simpleNew('Welcome! ');
      }).catch(function (response) {
        if (typeof response.data.message === 'object') {
          angular.forEach(response.data.message, function (message) {
            Notify.simpleNew(message);
          });
        } else {
          Notify.simpleNew(response.data.message);
        }
      });
    };
  });
