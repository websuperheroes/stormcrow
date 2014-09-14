'use strict';

angular.module('stormcrow')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/game', {
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      });
  });
