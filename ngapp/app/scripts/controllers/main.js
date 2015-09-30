'use strict';

/**
 * @ngdoc function
 * @name ngappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngappApp
 */
angular.module('ngappApp')
  .controller('MainCtrl', function ($window, Magic) {
    var vm = this;
    vm.magic = Magic;
    vm.imgString = function (card) {
      return 'images/' + encodeURI(card.Nset) + '/' + encodeURI(card.Nname) + '.full.jpg';
    };    
  });
