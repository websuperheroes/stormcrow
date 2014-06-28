'use strict';

angular.module('stormCrowApp')
  .controller('TurnOrderCtrl', function($rootScope, $scope) {

      // sets turn order as empty array

      $scope.orderOfPlay = [];

      $scope.turnOrderLauncher = function() {

        for (var i = 0; i < $rootScope.allCharacters.length; i++) {

          var character = {
            id: $rootScope.allCharacters[i].id,
            characterName: $rootScope.allCharacters[i].characterName,
            avatarSmall: $rootScope.allCharacters[i].avatarSmall,
            order: false,
            initiativeRoll: ''
          };
          $scope.orderOfPlay.push(character);
        }
        // end of for loop
        
        $scope.charToAdd = $scope.orderOfPlay[0];

      };

      /**
       * Add to Turn Order function
       * @No parameters
       */
      $scope.addToOrder = function(characterToAdd, roll, mod) {

        $scope.charactersShown = true;

        var charToAdd = characterToAdd;
        for (var i = 0; i < $scope.orderOfPlay.length; i++) {
          if ($scope.orderOfPlay[i].id == charToAdd.id) {
            $scope.orderOfPlay[i].order = 1;
            $scope.orderOfPlay[i].initiativeRoll = roll + mod;
            $scope.charToAdd = $scope.orderOfPlay[1];
            return;
          }
          // end of for loop
        }
    };

        /**
         * Remove from order function
         * @No parameters
         */
        $scope.removeFromOrder = function(characterToRemoveId) {


          var charToRemoveId = characterToRemoveId;
          var numberInOrder = $scope.orderOfPlay.length;

          for (var i = 0; i < $scope.orderOfPlay.length; i++) {

            if (!$scope.orderOfPlay[i].order) {
              numberInOrder--;
            }

            if ($scope.orderOfPlay[i].id == charToRemoveId) {
              $scope.orderOfPlay[i].order = false;
              $scope.orderOfPlay[i].initiativeRoll = '';
            }

          }
          // end of for loop


          if (numberInOrder) {
            $scope.charactersShown = false;
          }

        };

        $scope.turnOrderLauncher();

      });