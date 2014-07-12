'use strict';

angular.module('stormCrowApp')
  .controller('GameCtrl', function($rootScope, $scope, $timeout, Games, $q) {

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
      $scope.turnOrderShow = $scope.turnOrderShow === false ? true : false;
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
    }, {
      icon: '',
      name: ''
    }, {
      icon: '',
      name: ''
    }, {
      icon: '',
      name: ''
    }];


    /**
     * Get users character function
     * @No parameters
     */

    $scope.getCharacters = function() {


      if ($rootScope.currentGame.characters) {

        $rootScope.allCharacters = $rootScope.currentGame.characters;

        // triggers send as function for event log
        $rootScope.eventLoggerSendAs();
      }
      // end of if game characters statement
    };


    /**
     * Select Character
     * @No parameters
     */

    $scope.selectCharacter = function() {

console.log($scope.chosenCharacter);

      // sets current char to newly created
      $rootScope.userCharacter = $scope.chosenCharacter;


      $rootScope.addAlertMessage('success', 'Welcome to the game, ' + $scope.character.characterName);
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



    /**
     * Trigger for create char modal
     * @No parameters
     */
    $scope.createCharacter = function() {
      $scope.characterCreationActive = true;
    };


    /**
     * Save char function inside 'modal'
     * @No parameters
     */
    $scope.saveCharacter = function(form) {

      $scope.submitted = true;
      var uid = '';
      if ($scope.userIsGM) {
        console.log('user is gM');
        uid = '';
      } else {
        uid = $rootScope.currentUser.id;
      }

      // sets up info from form about char
      var charInfo = ([{
        gameID: $rootScope.currentGame._id
      }, {
        _userid: uid,
        characterName: $scope.character.characterName,
        avatar: 'troglor.png',
        attributeOne: $scope.character.attributeOne,
        attributeOneMax: $scope.character.attributeOneMax,
        attributeTwo: $scope.character.attributeTwo,
        attributeTwoMax: $scope.character.attributeTwoMax,
        attributeThree: $scope.character.attributeThree
      }]);

      // sends data to endpoint
      var createCharPromise = Games.createChar(charInfo);

      $q.all([
        createCharPromise.$promise
      ])
        .then(function(response) {
          // when successful, launches alert box, closes modal

          if ($scope.userIsGM) {
            $rootScope.addAlertMessage('success', 'Created character: ' + $scope.character.characterName);
          } else {
            // if user isn't GM, makes them the new character
            $rootScope.addAlertMessage('success', 'Welcome to the game, ' + $scope.character.characterName);
            // sets current char to newly created
            $rootScope.userCharacter = charInfo[1];
          }
          // closes modal
          $scope.characterCreationActive = false;

        })
        .catch(function(err) {
          err = err.data;
          $scope.errors.other = err.message;
        });
    };

    // cancels character creation
    $scope.cancelCreation = function() {
      $scope.characterCreationActive = false;
    };

    // launches get characters function
    $scope.getCharacters();

  });