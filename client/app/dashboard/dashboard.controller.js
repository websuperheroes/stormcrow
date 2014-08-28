'use strict';

angular.module('stormcrowApp')
  .controller('DashboardCtrl', function($rootScope, $scope, Auth, $location, $q, Games) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();

    $scope.getUserGames = function() {

      var userid = ({
        uid: $scope.currentUser._id
      });

      var getAllUserGames = Games.getUserGames(userid);
      var getAllOpenGames = Games.getOpenGames(userid);

      $q.all([
        getAllOpenGames.$promise,
        getAllUserGames.$promise
      ]).then(function() {
          // on success

          $scope.userGames = getAllUserGames.data;
          $scope.openGames = getAllOpenGames.data;
        },
        // on error
        function(error) {
          //   $rootScope.addAlertMessage('error', 'There was a problem loading games - try refreshing the page');
        }
      );
    };

    $scope.getUserGames();


    /**
     * set Game board function
     * @Parameters game
     */
    $rootScope.setGame = function(game) {

      // passes in game from home page
      $rootScope.currentGame = game;

      // checks if the user is set to gm
      if ($rootScope.currentGame.gm == $scope.currentUser._id) {

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
            if ($rootScope.currentGame.characters[i]._userid == $scope.currentUser._id) {
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



  });
