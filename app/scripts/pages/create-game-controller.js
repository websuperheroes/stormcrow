'use strict';

angular.module('stormCrowApp')
  .controller('CreateGameCtrl', function($scope, Games, $location, $q) {
    $scope.game = {};
    $scope.errors = {};

    $scope.createGame = function() {
      $scope.submitted = true;

      var gameInfo = ({
        name: $scope.game.name,
        lookingForPlayers: $scope.game.lookingForPlayers
      });

      var createGamePromise = Games.createGame(gameInfo);

      $q.all([
        createGamePromise.$promise
      ])
        .then(function() {
      //    console.log('game made');
          $location.path('/home');
        })
        .catch(function(err) {
          err = err.data;
          $scope.errors.other = err.message;
        });
    };
  });