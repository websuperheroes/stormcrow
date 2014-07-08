'use strict';

angular.module('stormCrowApp')
  .controller('HomeCtrl', function($rootScope, $scope, Auth, $location, $q, Games) {

    $scope.getCharacterGames = function() {

      var userid = ({
        uid: $rootScope.currentUser.id
      });

      var getAllCharacterGames = Games.getCharacterGames(userid);

      $q.all([

        getAllCharacterGames.$promise
      ]).then(function() {
          // on success

          $scope.games = getAllCharacterGames.data;

        },
        // on error
        function(error) {
          //   $rootScope.addAlertMessage('error', 'There was a problem loading games - try refreshing the page');
        }
      );
    };


    $scope.getCharacterGames();
  });