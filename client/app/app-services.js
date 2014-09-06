'use strict';

angular.module('stormcrowApp')

    .factory('User', function($resource) {
        return $resource('/api/users/:id', { id: '@id' }, {
            update: { method: 'PUT', params: {} },
            get: { method: 'GET', params: { id:'me' } }
        });
    })

    .factory('Games', function($resource) {
        return $resource('/api/games/:dest', {}, {
            getUserGames:   {method: 'GET', params: {dest: 'user'}, isArray: false},
            getOpenGames:   {method: 'GET', params: {dest: 'open'}, isArray: false},
            createGame:     {method: 'POST', params: {dest: 'create'}, isArray: false},
            createChar:     {method: 'POST', params: {dest: 'character'}, isArray: false},
            activeGame:     {method: 'GET', params: {dest: 'active'}, isArray: false}
        });
    })

    .service('State', function () {

        // State service for quck access to commonly used objects

        var self = this;

        self.state = {
            activeUserId: '',
            activeGameId: ''
        }

        this.setActiveUser = function(user) {
            self.state.activeUserId = user;
        }
        this.setActiveGame = function(game) {
            self.state.activeGameId = game;
        }
        this.getActiveUser = function() {
            return self.state.activeUserId;
        }
        this.getActiveGame = function() {
            return self.state.activeGameId;
        }
    })

    .service('NotificationService', function () {

        // Service for app-wide user notifications

        var self = this;

        this.setSomething = function(message) {
            self.state.message = message;
        }
        this.getSomething = function() {
            return self.state.message;
        }

    });

