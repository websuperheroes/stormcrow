'use strict';

angular.module('stormCrowApp')
  .controller('HomeCtrl', function($rootScope, $scope, Auth, $location, $q, Games) {

    $scope.getUserGames = function() {

      var userid = ({
        uid: $rootScope.currentUser.id
      });

      var getAllUserGames = Games.getUserGames(userid);

      $q.all([

        getAllUserGames.$promise
      ]).then(function() {
          // on success

          $scope.userGames = getAllUserGames.data;

        },
        // on error
        function(error) {
          //   $rootScope.addAlertMessage('error', 'There was a problem loading games - try refreshing the page');
        }
      );
    };


    $scope.getUserGames();
  });