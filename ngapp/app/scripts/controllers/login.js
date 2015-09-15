'use strict';

/**
 * @ngdoc function
 * @name ngappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngappApp
 */
angular.module('ngappApp')
  .controller('LoginCtrl', function ($scope, $auth, $window, $rootScope, Notify) {
    var vm = this;
    vm.login = function () {
      $auth.login({
          email: vm.email,
          password: vm.password
        })
        .then(function () {
          $rootScope.authenticated = true;
          Notify.simpleNew('You have successfully logged in');
        })
        .catch(function (response) {
          $window.Materialize.toast(response.data.message, 3000);
        });
    };
    vm.authenticate = function (provider) {
      $auth.authenticate(provider)
        .then(function () {
          Notify.simpleNew('You have successfully connected');
        })
        .catch(function (response) {
          Notify.new(response);
        });
    };
  });
