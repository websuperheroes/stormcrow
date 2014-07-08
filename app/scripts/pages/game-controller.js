'use strict';

angular.module('stormCrowApp')
  .controller('GameCtrl', function($rootScope, $scope, $timeout, $q, UserCharacter) {

    /**
     * Toggle GM / DM function
     * @No Parameters
     */


    $scope.toggleUserIsGM = function() {

      $scope.userIsGM = $scope.userIsGM === false ? true : false;

      $rootScope.eventLoggerSendAs();
    };

      /**
     * Toggle Turn Order function
     * @No Parameters
     */

    $scope.turnOrderShow = false;

    $scope.toggleTurnOrder = function() {
      $scope.turnOrderShow= $scope.turnOrderShow === false ? true : false;
    };

    /**
     * Toggle Dice Roll Widget function
     * @No Parameters
     */

    $scope.diceRollShow = false;

    $scope.toggleDiceRoller = function() {
      $scope.diceRollShow = $scope.diceRollShow === false ? true : false;
    };

  /**
     * Toggle Grid Lines function
     * @No Parameters
     */

    $scope.showGridLines = false;

    $scope.toggleGridLines = function() {
      $scope.showGridLines = $scope.showGridLines === false ? true : false;
    };


  // Empty slots for user toolbar
    $scope.toolBar = [{
      icon: '',
      name: ''
    },{
      icon: '',
      name: ''
    },{
      icon: '',
      name: ''
    },{
      icon: '',
      name: ''
    }];

    /**
     * Get users character function
     * @No parameters
     */

    $scope.getCharacters = function() {

  //    var getUserCharacterPromise = UserCharacter.getUserCharacter();
      var getAllCharactersPromise = UserCharacter.getAllCharacters();

      $q.all([
  //      getUserCharacterPromise.$promise,
        getAllCharactersPromise.$promise
      ]).then(function() {
          // on success
   //       $rootScope.userCharacter = getUserCharacterPromise.data;
          $rootScope.allCharacters = getAllCharactersPromise.data;

          // triggers send as function for event log
          $rootScope.eventLoggerSendAs();

        },
        // on error
        function(error) {
          $rootScope.addAlertMessage('error', 'There was a problem loading characters - try refreshing the page');
        }
      );
    };


    /**
     * Alert Messages function
     * @Parameters type and text
     */

    $rootScope.alertMessages = [];

    // function to add a new alert message
    $rootScope.addAlertMessage = function(type, text) {
      // if alert text is not defined
      if (typeof(text) === 'undefined') {
        if (typeof(text) !== 'undefined') {
          text = type;
        } else {
          text = 'No alert message specified.';
          type = 'alert';
        }
      }
      $rootScope.alertMessages.push({
        type: type,
        text: text
      });
      $timeout(function() {
        $rootScope.removeAlertMessage(-1);
      }, 5000);
    };
    // function remove an exisiting alert message
    $rootScope.removeAlertMessage = function(index) {
      if (index < 0 || index >= $rootScope.alertMessages.length) {
        index = 0;
      }
      $rootScope.alertMessages.splice(index, 1);
    };


    /**
     * Loading Widgets function
     * @No parameters
     */

    $rootScope.widgetLoading = {};
    // function to show and hide widget loaders
    $rootScope.showLoading = function(elementId) {
      $rootScope.widgetLoading[elementId] = true;
    };
    $rootScope.hideLoading = function(elementId) {
      if (elementId === '' || typeof elementId === 'undefined') {
        $rootScope.widgetLoading = {};
      } else {
        delete($rootScope.widgetLoading[elementId]);
      }
    };


    /**
     * Add Event function
     * @Event parameter
     */

    // makes sure event log is clear on load
    $rootScope.eventFeed = [];
    // function to add a new alert message
    $rootScope.addToEventFeed = function(event) {
      $rootScope.eventFeed.push(event);
    };


    /**
     * Dice Roll function
     * @No parameters
     */

    // makes sure dice roll is clear on load
    $rootScope.diceRoll = [];

    // function to add a new dice roll to table top
    $rootScope.showDiceRoll = function(roll) {
      // clears last dice roll
      $rootScope.diceRoll = [];
      $rootScope.diceRoll.push(roll);
      $timeout(function() {
        $rootScope.removeDiceRoll(-1);
      }, 6000);
    };
    // function remove an exisiting dice roll when new set of dice are rolled
    $rootScope.removeDiceRoll = function(index) {
      if (index < 0 || index >= $rootScope.diceRoll.length) {
        index = 0;
      }
      $rootScope.diceRoll.splice(index, 1);
    };

    $scope.getCharacters();

  });