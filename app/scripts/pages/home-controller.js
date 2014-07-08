'use strict';

angular.module('stormCrowApp')
  .controller('HomeCtrl', function($rootScope, $scope, Auth, $location, $q, Games) {

    $scope.getUserGames = function() {

      var userid = ({
        uid: $rootScope.currentUser.id
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
  });