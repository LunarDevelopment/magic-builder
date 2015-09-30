'use strict';

/**
 * @ngdoc service
 * @name ngappApp.cards
 * @description
 * # cards
 * Service in the ngappApp.
 */
angular.module('ngappApp')
  .service('Magic', function ($http, $window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var vm = this;
    vm.sets = [];
    vm.cards = [];
    vm.decks = [];
    vm.deck = {
      name: '',
      color: '',
      favourite: false,
      cards: []
    };
    vm.busy = false;
    vm.add_to_deck = function (card) {
      var found = false;
      for(var i = 0; i < vm.deck.cards.length; i++) {
        if (vm.deck.cards[i].card_id === card.Nid) {
          found = true;
          if (vm.deck.cards[i].quantity !== 4) {
            vm.deck.cards[i].quantity = vm.deck.cards[i].quantity + 1;
          }
          break;
        }
      }
      if (found === false ) {
        vm.deck.cards.push({
          card_id: card.Nid, 
          name: card.Nname, 
          quantity: 1
        });
      }
    };
    vm.subtract_from_deck = function (card) {
      var found = false;
      for(var i = 0; i < vm.deck.cards.length; i++) {
        if (vm.deck.cards[i].card_id === card.Nid) {
          found = true;
          vm.deck.cards[i].quantity = vm.deck.cards[i].quantity - 1;
          if (vm.deck.cards[i].quantity < 1) {
            vm.deck.cards.splice(i, 1)
          }
          break;
        }
      }
    };
    vm.focus_deck = function (deck) {
      vm.deck = deck;
      vm.deck.cards = JSON.parse(deck.cards) || [];
      focus_cards(deck);
    };
    vm.using_card = function (card) {
      var found = false;
      for(var i = 0; i < vm.deck.cards.length; i++) {
        if (vm.deck.cards[i].card_id === card.Nid) {
          found = true;
          vm.deck.cards[i].quantity = vm.deck.cards[i].quantity - 1;
          if (vm.deck.cards[i].quantity === 1) {
            return 'blue-grey darken-1';
          }
          else if (vm.deck.cards[i].quantity === 2) {
            return 'blue-grey darken-2';
          }
          else if (vm.deck.cards[i].quantity === 3) {
            return 'blue-grey darken-3';
          }
          else if (vm.deck.cards[i].quantity === 4) {
            return 'blue-grey darken-4';
          }
          break;
        }
        else {
          return 'blue-grey ';
        }
      }
    };
    vm.clear_deck = function () {
      vm.deck = {
        name: '',
        color: '',
        favourite: false,
        cards: []
      };
      vm.getCards();
    };
    vm.save_deck = function () {
      if (vm.busy) {
        return;
      }
      vm.busy = true;
      var url = "/api/createDeck";
      $http({
        url: url,
        method: "POST",
        data: vm.deck
      }).then(function (response) {
        console.log(response);
        vm.busy = false;
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
        angular.forEach(response.data.errors, function (value, key) {
          $window.Materialize.toast(value.message, 3000);
        });
      });
    };
    vm.getDecks = function () {
      vm.busy = true;
      var url = "/api/decks";
      $http({
        url: url,
        method: "GET"
      }).then(function (response) {
        vm.decks = response.data;
        vm.busy = false;
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
        angular.forEach(response.data.errors, function (value, key) {
          $window.Materialize.toast(value.message, 3000);
        });
      });
    };
    vm.getSets = function () {
      vm.busy = true;
      var url = "/api/sets";
      $http({
        url: url,
        method: "GET"
      }).then(function (response) {
        vm.sets = response.data;
        vm.busy = false;
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
        angular.forEach(response.data.errors, function (value, key) {
          $window.Materialize.toast(value.message, 3000);
        });
      });
    };
    vm.getCards = function () {
      vm.busy = true;
      var url = "/api/cards";
      $http({
        url: url,
        method: "GET"
      }).then(function (response) {
        vm.cards = response.data;
        vm.busy = false;
      }, function (response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
        angular.forEach(response.data.errors, function (value, key) {
          $window.Materialize.toast(value.message, 3000);
        });
      });
    };
    function focus_cards (deck) {
    };
    vm.getCards();
    vm.getSets();
    vm.getDecks();
  });