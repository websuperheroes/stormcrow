'use strict';

angular.module('stormCrowApp')
  .controller('CreateGameCtrl', function($scope, Games, $location, $q, $rootScope) {
    $scope.game = {};
    $scope.errors = {};

    $scope.createGame = function() {
      $scope.submitted = true;

      var gameInfo = ({
        name: $scope.game.name,
        gm: $rootScope.currentUser.id,
        lookingForPlayers: $scope.game.lookingForPlayers,
        characters: []
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