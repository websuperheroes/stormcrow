'use strict';

angular.module('stormCrowApp')
  .controller('EventLogCtrl', function($rootScope, $scope) {


    $scope.macroChecker = function() {

      if ($scope.messageText == '/i') {
        console.log('fury');
      }
    };

    /**
     * Send message function
     * @No parameters
     */

    $scope.messageText = '';

    $scope.sendMessage = function() {

      var whisper = false;
      var text = $scope.messageText;
      var user = 'Dave';

      // roll initiative with /i
      if ($scope.messageText.substring(0, 2) === '/i') {
        $scope.messageText = 'fuckoff';
      } // whisper with /w
        else if ($scope.messageText.substring(0, 1) == '@') {
        whisper = $scope.messageText.split(' ')[0];
        user = user + ' whispers to ' + whisper.substr(1);
        text = $scope.messageText.split(' ').slice(1).join(' ');
      }

      var message = {
        type: 'message',
        user: user,
        text: text,
        time: new Date(),
        whisper: whisper
      };

      $rootScope.addToEventFeed(message);
      $scope.messageText = '';
    };

  });