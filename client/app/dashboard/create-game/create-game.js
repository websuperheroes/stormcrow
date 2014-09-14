'use strict';

angular.module('stormcrow')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create-game', {
        templateUrl: 'app/dashboard/create-game/create-game.html',
        controller: 'CreateGameCtrl'
      });
  });
