'use strict';

angular.module('stormCrowApp')
    .factory('DiceRoller', function($resource) {
      return $resource('/api/dice-roller-api/:dest', {}, {
          getDiceSides: {method: 'GET', params: {dest: 'diceSides'}, isArray: false},
          getDiceModifiers: {method: 'GET', params: {dest: 'diceModifiers'}, isArray: false},
          getNoOfDice: {method: 'GET', params: {dest: 'noOfDice'}, isArray: false}
        });
    });

