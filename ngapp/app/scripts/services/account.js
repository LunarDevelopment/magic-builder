'use strict';

/**
 * @ngdoc service
 * @name ngappApp.Account
 * @description
 * # Account
 * Factory in the ngappApp.
 */
angular.module('ngappApp')
  .factory('Account', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getProfile: function () {
        return $http.get('/api/me');
      },
      updateProfile: function (profileData) {
        return $http.put('/api/me', profileData);
      }
    };
  });
