'use strict';

angular.module('stormCrowApp')
  .controller('CreateGameCtrl', function($scope, Games, $location) {
    $scope.game = {};
    $scope.errors = {};

    $scope.createGame = function(form) {
      $scope.submitted = true;

      var gameInfo = ({
        name: $scope.game.name,
        lookingForPlayers: $scope.game.lookingForPlayers
      });

      console.log( gameInfo );
      if (form) { //.$valid
        Games.createGame( gameInfo )
          .then(function() {
            //   game created, redirect to home
            $location.path('/home');
          })
          .catch(function(err) {
            err = err.data;
            $scope.errors.other = err.message;
          });
      }
    };
  });