'use strict';

angular.module('stormcrowApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/game', {
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      });
  });
