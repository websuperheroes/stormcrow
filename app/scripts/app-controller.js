'use strict';

angular.module('stormCrowApp')
  .controller('AppCtrl', function($rootScope, $scope) {

    $scope.logout = function() {
      Auth.logout()
        .then(function() {
          $location.path('/login');
        });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };


    $rootScope.setGame = function(game) {

      // checks if the user is set to gm
      if (game.gm == $rootScope.currentUser.id) {
        $scope.userIsGM = true;
        $rootScope.userCharacter = '';
      } else {
        $scope.userIsGM = false;
        // if not loops through characters and finds match
        for (var i = 0; i < game.characters.length; i++) {
          if (game.characters[i]._userid == $rootScope.currentUser.id) {
            // sets match to be users character
            $rootScope.userCharacter = game.characters[i];
            return;
          } else if (i == game.characters.length - 1) {
            // sets character blank and errors if no match found
            $rootScope.userCharacter = '';

            console.log('error, user is not a character or the GM?!?');

            return;
          }
          // end if /else statement
        }
        //end for loop
      }
      // end original if / else statement

    };
    // end set game


  });