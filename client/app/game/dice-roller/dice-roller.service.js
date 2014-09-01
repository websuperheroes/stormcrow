'use strict';

angular.module('stormcrowApp')
  .factory('DiceRoller', function($resource) {
    return $resource('/api/dice-rolls/:dest', {}, {
        getDiceSides: {method: 'GET', params: {dest: 'sides'}, isArray: false},
        getDiceModifiers: {method: 'GET', params: {dest: 'modifiers'}, isArray: false},
        getNoOfDice: {method: 'GET', params: {dest: 'amount'}, isArray: false}
      });
  })