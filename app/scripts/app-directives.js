'use strict';

angular.module('stormCrowApp')
.directive('diceroller', function () {
    return {
      restrict: 'E',
      templateUrl: '/views/modules/dice-roller/dice-roller.html'
    };
  });

