'use strict';

angular.module('stormCrowApp')
  .controller('EventLogCtrl', function($rootScope, $scope) {


    /**
     * Send message function
     * @No parameters
     */

    $scope.messageText = '';

    $scope.sendMessage = function() {

      var text = $scope.messageText;
      var user = 'Dave';

      var message = {
        type: 'message',
        user: user,
        text:  text,
        time: new Date()
      };

      $rootScope.addToEventFeed(message);
      $scope.messageText = '';
    };

  });