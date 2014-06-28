'use strict';

angular.module('stormCrowApp')
  .controller('TurnOrderCtrl', function($rootScope, $scope) {

    // sets turn order as empty array
    $scope.turnOrder = [];

    /**
     * Add to Turn Order function
     * @No parameters
     */

    $scope.addToOrder = function() {

      // writes out this dice roll result if not a d100


      var turnOrderItem = '';

      turnOrderItem = {
        characterName: 'Troglor',
        avatarSmall: 'troglor.png',
        initiativeRoll: Math.floor(Math.random() * 20 + 1)
      };
      // add roll to currentRoll object
      $scope.turnOrder.push(turnOrderItem);

    };

  });