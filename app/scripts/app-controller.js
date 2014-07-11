'use strict';

angular.module('stormCrowApp')
  .controller('AppCtrl', function($rootScope, $scope, $location, Auth) {

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

      $rootScope.currentGame = game;

      // checks if the user is set to gm
      if ($rootScope.currentGame.gm == $rootScope.currentUser.id) {
        $scope.userIsGM = true;
        $rootScope.userCharacter = '';
      } else {
        $scope.userIsGM = false;
        // if not loops through characters and finds match

        if ($rootScope.currentGame.characters.length) {
          console.log('game has chars');
          for (var i = 0; i < $rootScope.currentGame.characters.length; i++) {
            if ($rootScope.currentGame.characters[i]._userid == $rootScope.currentUser.id) {
              // sets match to be users character
              $rootScope.userCharacter = $rootScope.currentGame.characters[i];
              return;
            } else {
              // sets character blank and errors if no match found
              $rootScope.userCharacter = '';
              console.log('error, user is not a character or the GM?!?');
              return;
            }
            // end if /else statement
          }
          //end for loop

        } else {

          $rootScope.userCharacter = '';
          console.log('i am the game: ', $rootScope.currentGame);
        }
        //end of game chars if  / else statement
      }
      // end of gm if / else statement

    };
    // end set game


    /**
     * Event Logger "Send As" function
     * @Parameters type and text
     */

    $rootScope.eventLoggerSendAs = function() {

      // if the user isn't the GM they can send as player or character
      if (!$scope.userIsGM) {

        $scope.sendAsOptions = [{
          type: 'character',
          name: $rootScope.userCharacter.characterName,
        }, {
          type: 'player',
          name: $rootScope.currentUser.name,
        }];
      } // GM can send as GM or any character
      else {
        // adds GM option
        $scope.sendAsOptions = [{
          type: 'character',
          name: 'GM'
        }];
        // loops through characters and adds names to GM send as options
        for (var i = 0; i < $rootScope.allCharacters.length; i++) {

          var character = {
            type: 'playercharacter',
            name: $rootScope.allCharacters[i].characterName
          };
          $scope.sendAsOptions.push(character);
        }
        // end of for loop
      }
      // end of if/else
      $scope.sendMessageAs = $scope.sendAsOptions[0];
    };
    // end of eventLoggerSendAs

  });