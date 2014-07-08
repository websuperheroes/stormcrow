'use strict';

angular.module('stormCrowApp')
    .factory('DiceRoller', function($resource) {
      return $resource('/api/dice-roller-api/:dest', {}, {
          getDiceSides: {method: 'GET', params: {dest: 'diceSides'}, isArray: false},
          getDiceModifiers: {method: 'GET', params: {dest: 'diceModifiers'}, isArray: false},
          getNoOfDice: {method: 'GET', params: {dest: 'noOfDice'}, isArray: false}
        });
    })
    .factory('Games', function($resource) {
      return $resource('/api/:dest', {}, {
          getCharacterGames: {method: 'GET', params: {dest: 'games'}, isArray: false},
          getGmGames: {method: 'GET', params: {dest: 'gmGames'}, isArray: false}
        });
    })
      .factory('UserCharacter', function($resource) {
        return $resource('/api/user-character-api/:dest', {}, {
            getAllCharacters: {method: 'GET', params: {dest: 'allCharacters'}, isArray: false}
          });
      });

