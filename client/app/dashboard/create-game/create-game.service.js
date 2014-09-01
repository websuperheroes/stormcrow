'use strict';

angular.module('stormcrowApp')
    .factory('CreateGame', function($resource) {
      return $resource('/api/games-api/:dest', {}, {
          createGame: {method: 'POST', params: {dest: 'createGame'}, isArray: false},
        });
  })