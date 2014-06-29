'use strict';

angular.module('stormCrowApp')
  .controller('TurnOrderCtrl', function($rootScope, $scope) {

    // sets turn order and dropdown as empty arrays

    $scope.characterOrderDropdown = [];
    $scope.orderOfPlay = [];

    $scope.orderOfDropdown = 'characterName';

     $scope.orderOfPlayOrder = '-initiativeRoll';

    $scope.turnOrderLauncher = function() {

      $scope.orderOfPlay = [];

      for (var i = 0; i < $rootScope.allCharacters.length; i++) {

        var character = {
          id: $rootScope.allCharacters[i].id,
          characterName: $rootScope.allCharacters[i].characterName,
          avatarSmall: $rootScope.allCharacters[i].avatarSmall
        };
        $scope.characterOrderDropdown.push(character);
      }
      // end of for loop

    };

    /**
     * Add to Turn Order function
     * @No parameters
     */
    $rootScope.addToOrder = function(characterToAdd) {
      if(!characterToAdd) {
        return;
      }

      // add character to order panel      
      $scope.orderOfPlay.push(characterToAdd);

      // remove character from dropdown
      var index = $scope.characterOrderDropdown.indexOf(characterToAdd)
      $scope.characterOrderDropdown.splice(index, 1);

    };

    /**
     * Remove from order function
     * @No parameters
     */
    $scope.removeFromOrder = function(characterToRemove) {

      // remove character from panel
      var index = $scope.orderOfPlay.indexOf(characterToRemove)
      $scope.orderOfPlay.splice(index, 1);

      // add character to dropdown   
      $scope.characterOrderDropdown.push(characterToRemove);

    };

    $scope.turnOrderLauncher();

  });