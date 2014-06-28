'use strict';

angular.module('stormCrowApp')
    .factory('DiceRoller', function($resource) {
      return $resource('/api/dice-roller-api/:dest', {}, {
          getDiceSides: {method: 'GET', params: {dest: 'diceSides'}, isArray: false},
          getDiceModifiers: {method: 'GET', params: {dest: 'diceModifiers'}, isArray: false},
          getNoOfDice: {method: 'GET', params: {dest: 'noOfDice'}, isArray: false}
        });
    })
      .factory('UserCharacter', function($resource) {
        return $resource('/api/user-character-api/:dest', {}, {
            getUserCharacter: {method: 'GET', params: {dest: 'userCharacter'}, isArray: false},
            getAllCharacters: {method: 'GET', params: {dest: 'allCharacters'}, isArray: false}
          });
      });

