'use strict';

angular.module('stormcrowApp')
    .directive('notifications', function(NotificationsManager) {
        return {
            templateUrl: 'app/notifications/notifications.html',
            restrict: 'EA',
            link: function(scope) {

                scope.messages = NotificationsManager.messages;

                scope.removeMessage = function(index) {
                    NotificationsManager.removeMessage(index);
                };
            }
        };
    });