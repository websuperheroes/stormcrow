'use strict';

angular.module('stormCrowApp')
  .controller('AppCtrl', function($rootScope, $scope, $location, Auth) {

      /**
     * Logout function
     * @Parameters none
     */

    $scope.logout = function() {
      Auth.logout()
        .then(function() {
          $location.path('/login');
        });
    };


      /**
     * Active nav link function
     * @Parameters none
     */
    $scope.isActive = function(route) {
      return route === $location.path();
    };

      /**
     * set Game board function
     * @Parameters game
     */
    $rootScope.setGame = function(game) {

      // passes in game from home page
      $rootScope.currentGame = game;

      // checks if the user is set to gm
      if ($rootScope.currentGame.gm == $rootScope.currentUser.id) {

        // sets user as GM
        $scope.userIsGM = true;
        $rootScope.userCharacter = '';
      } else {

        // makes player not GM
        $scope.userIsGM = false;

        // checks if any characters exist in game
        if ($rootScope.currentGame.characters.length) {
        // if they do loops through characters and finds match
          for (var i = 0; i < $rootScope.currentGame.characters.length; i++) {
            if ($rootScope.currentGame.characters[i]._userid == $rootScope.currentUser.id) {
              // sets match to be users character
              $rootScope.userCharacter = $rootScope.currentGame.characters[i];
              return;
            } else {
              // sets character blank if they don't exist
              $rootScope.userCharacter = '';
              return;
            }
            // end if /else statement
          }
          //end for loop
        } else {
          // if no chars exist sets user char to blank
          $rootScope.userCharacter = '';
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