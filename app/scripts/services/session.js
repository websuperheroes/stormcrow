'use strict';

angular.module('stormCrowApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
