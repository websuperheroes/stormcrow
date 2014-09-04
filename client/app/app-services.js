'use strict';

angular.module('stormcrowApp')
    .factory('User', function($resource) {
      return $resource('/api/users/:id', { id: '@id' }, {
        update: { method: 'PUT', params: {} },
        get: { method: 'GET', params: { id:'me' }
      }
      });
  })
    .factory('Games', function($resource) {
      return $resource('/api/games/:dest', {}, {
          getUserGames: {method: 'GET', params: {dest: 'user'}, isArray: false},
          getOpenGames: {method: 'GET', params: {dest: 'open'}, isArray: false},
          createGame:   {method: 'POST', params: {dest: 'create'}, isArray: false},
          createChar:   {method: 'POST', params: {dest: 'character'}, isArray: false},
          currentGame:  {method: 'GET', params: {dest: 'current'}, isArray: false}

      });
  });

