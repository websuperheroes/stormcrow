'use strict';

angular.module('stormcrow')
    .service('NotificationsManager', function($timeout) {

        // Service for app-wide user notifications

        var self = this;
        self.messages = [];

        /**
         * Alert Messages function
         * @Parameters type and text
         */

        this.addMessage = function(type, text) {

            // if alert text is not defined
            if (typeof(text) === 'undefined') {
                if (typeof(text) !== 'undefined') {
                    text = type;
                } else {
                    text = 'No alert message specified.';
                    type = 'alert';
                }
            }
            self.messages.push({
                type: type,
                text: text
            });
            $timeout(function() {
                self.removeMessage(-1);
            }, 5000);
        };

        // function remove an exisiting alert message
        this.removeMessage = function(index) {
            if (index < 0 || index >= self.messages.length) {
                index = 0;
            }
            self.messages.splice(index, 1);
        };

    });