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
      var message = '';

      // roll initiative with /i
      if ($scope.messageText.substring(0, 2) === '/i') {

        var mod = $scope.messageText.split(' ')[1];

      } // whisper with /w
      else if ($scope.messageText.substring(0, 1) == '@') {

        // get character whispered tofirst name
        whisper = $scope.messageText.split(' ')[0].substr(1);

        var lcString = whisper.toLowerCase();
        var lcString1 = $rootScope.userCharacter.characterName.split(' ')[0].toLowerCase();

        if (lcString ==  lcString1){

          $rootScope.addAlertMessage('error', 'Duh, why you talking to yourself?!.');
          return;
        }

        // loop through all characters
        for (var i = 0; i < $rootScope.allCharacters.length; i++) {

        var lcString2 = $rootScope.allCharacters[i].characterName.split(' ')[0].toLowerCase();

          // if first name matches the whispereee then send the message
          if (lcString == lcString2) {

            user = user + ' whispers to ' + $rootScope.allCharacters[i].characterName.split(' ')[0];
            text = $scope.messageText.split(' ').slice(1).join(' ');

            message = {
              type: 'message',
              user: user,
              text: text,
              time: new Date(),
              whisper: whisper
            };

            $rootScope.addToEventFeed(message);
            $scope.messageText = '';
            return;
          }
          // end of if/else

        }
        // end of for loop for all characters
        $rootScope.addAlertMessage('error', 'No character called ' + whisper + '. Try again!');
        return;
      }
      // end of whisper else if

      message = {
        type: 'message',
        user: user,
        text: text,
        time: new Date(),
        whisper: whisper.charAt(0).toUpperCase()
      };

      $rootScope.addToEventFeed(message);
      $scope.messageText = '';

    };
    // end of send message function

  });