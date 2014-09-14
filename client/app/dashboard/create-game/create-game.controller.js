'use strict';

angular.module('stormcrow')
  .controller('CreateGameCtrl', function($scope, Games, Auth, $location, $q, $rootScope) {
    $scope.game = {};
    $scope.errors = {};

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();

    $scope.createGame = function() {
      $scope.submitted = true;

      var gameInfo = ({
        name: $scope.game.name,
        gm: $scope.currentUser._id,
        lookingForPlayers: $scope.game.lookingForPlayers,
        characters: []
      });

      var createGamePromise = Games.createGame(gameInfo);

      $q.all([
        createGamePromise.$promise
      ])
        .then(function() {
      //    console.log('game made');
          $location.path('/dashboard');
        })
        .catch(function(err) {
          err = err.data;
          $scope.errors.other = err.message;
        });
    };
  });