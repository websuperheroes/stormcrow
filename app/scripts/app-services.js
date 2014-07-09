'use strict';

angular.module('stormCrowApp')
    .factory('DiceRoller', function($resource) {
      return $resource('/api/dice-roller-api/:dest', {}, {
          getDiceSides: {method: 'GET', params: {dest: 'diceSides'}, isArray: false},
          getDiceModifiers: {method: 'GET', params: {dest: 'diceModifiers'}, isArray: false},
          getNoOfDice: {method: 'GET', params: {dest: 'noOfDice'}, isArray: false}
        });
    })
    .factory('User', function($resource) {
    return $resource('/api/users/:id', { id: '@id' }, {
        update: { method: 'PUT', params: {} },
        get: { method: 'GET', params: { id:'me' }
      }
      });
  })
    .factory('Games', function($resource) {
      return $resource('/api/games-api/:dest', {}, {
          getUserGames: {method: 'GET', params: {dest: 'userGames'}, isArray: false},
          getOpenGames: {method: 'GET', params: {dest: 'openGames'}, isArray: false},
          createGame: {method: 'POST', params: {dest: 'createGame'}, isArray: false}

        });
    });

