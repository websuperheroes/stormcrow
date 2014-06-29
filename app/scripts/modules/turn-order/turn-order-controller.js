'use strict';

angular.module('stormCrowApp')
  .controller('TurnOrderCtrl', function($rootScope, $scope) {

    // sets turn order and dropdown as empty arrays
    $scope.characterOrderDropdown = [];
    $scope.orderOfPlay = [];
    $scope.roundNumber = 1;
    $scope.turnNumber = 1;



    $scope.moveTurnOn = function() {

      var idx = $scope.turnNumber;

      if ($scope.turnNumber < $scope.orderOfPlay.length) {
        $scope.turnNumber++;

        $scope.orderOfPlay[ idx -1].current = false;
        $scope.orderOfPlay[ idx ].current = true;
      } else {
        $scope.roundNumber++;
        $scope.turnNumber = 1;

        $scope.orderOfPlay[ idx -1].current = false;

        $scope.orderOfPlay[0].current = true;
      }
    };

    // sorting orders
    $scope.orderOfDropdown = 'characterName';
    $scope.orderOfPlayOrder = '-initiativeRoll';


    /**
     * Turn order drop down population function
     * @No parameters
     */
    $scope.turnOrderLauncher = function() {

      $scope.orderOfPlay = [];

      for (var i = 0; i < $rootScope.allCharacters.length; i++) {

        var character = {
          id: $rootScope.allCharacters[i].id,
          characterName: $rootScope.allCharacters[i].characterName,
          avatarSmall: $rootScope.allCharacters[i].avatarSmall,
          current: false
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




      if (!characterToAdd) {
        return;
      }

      // add character to order panel
      $scope.orderOfPlay.push(characterToAdd);

      // remove character from dropdown
      var index = $scope.characterOrderDropdown.indexOf(characterToAdd);
      $scope.characterOrderDropdown.splice(index, 1);

if($scope.orderOfPlay.length < 2) {
$scope.orderOfPlay[ 0 ].current = true;
}
    };


    /**
     * Remove from order function
     * @No parameters
     */

    $scope.removeFromOrder = function(characterToRemove) {

      // remove character from panel
      var index = $scope.orderOfPlay.indexOf(characterToRemove);
      $scope.orderOfPlay.splice(index, 1);

      // add character to dropdown
      $scope.characterOrderDropdown.push(characterToRemove);

    };


    /**
     * Remove from order function
     * @No parameters
     */

    $scope.clearOrder = function() {
      $scope.roundNumber = 1;
      $scope.turnNumber = 1;
      $scope.turnOrderLauncher();
    };

    // triggers dropdown population on page load
    $scope.turnOrderLauncher();

  });