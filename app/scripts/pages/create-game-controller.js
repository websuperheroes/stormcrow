'use strict';

angular.module('stormCrowApp')
  .controller('CreateGameCtrl', function ($scope, Game, $location) {
    $scope.game = {};
    $scope.errors = {};

    $scope.createGame = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Game.createGame({
          name: $scope.game.name,
          lookingForPlayers: $scope.game.lookingForPlayers
        })
        .then( function() {
          // game created, redirect to home
          $location.path('/home');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors.other = err.message;
        });
      }
    };
  });