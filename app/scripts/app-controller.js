'use strict';

angular.module('stormCrowApp')
  .controller('AppCtrl', function($rootScope, $scope) {

    $scope.logout = function() {
      Auth.logout()
        .then(function() {
          $location.path('/login');
        });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };


    $rootScope.setGame = function(game) {
      $rootScope.userCharacter = game;
    };

  });